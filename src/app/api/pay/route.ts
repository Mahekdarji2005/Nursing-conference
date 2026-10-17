import { NextResponse } from 'next/server';
import { REGISTRATION_CATEGORIES } from '@/data/registration-pricing';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { categoryId, packageType } = body;

    // 1. Authoritative lookup on server
    const category = REGISTRATION_CATEGORIES.find((c) => c.id === categoryId);
    if (!category) {
      return NextResponse.json({ error: 'Invalid participant category.' }, { status: 400 });
    }

    let amount = 0;
    let packageName = '';
    let dates: string[] = [];

    if (packageType === 'workshop') {
      amount = category.workshopFee;
      packageName = 'Pre-Conference Workshop';
      dates = ['18 February 2027'];
    } else if (packageType === 'conference') {
      amount = category.conferenceFee;
      packageName = 'Main Scientific Conference';
      dates = ['19 February 2027'];
    } else if (packageType === 'combo') {
      amount = category.comboFee;
      packageName = 'Combo (Both Days: Workshop + Conference)';
      dates = ['18 February 2027', '19 February 2027'];
    } else {
      return NextResponse.json({ error: 'Invalid package option.' }, { status: 400 });
    }

    // 2. Inspect for configured payment gateway credentials
    const razorpayKey = process.env.RAZORPAY_KEY_ID;
    const razorpaySecret = process.env.RAZORPAY_KEY_SECRET;
    const stripeKey = process.env.STRIPE_SECRET_KEY;

    if (razorpayKey && razorpaySecret) {
      // Future Razorpay server-side order generation
      return NextResponse.json({
        configured: true,
        gateway: 'razorpay',
        keyId: razorpayKey,
        amount,
        currency: 'INR',
        categoryName: category.category,
        packageName,
        dates,
      });
    }

    if (stripeKey) {
      // Future Stripe server-side checkout session
      return NextResponse.json({
        configured: true,
        gateway: 'stripe',
        amount,
        currency: 'INR',
        categoryName: category.category,
        packageName,
        dates,
      });
    }

    // 3. Gateway is not configured in environment
    return NextResponse.json({
      configured: false,
      amount,
      currency: 'INR',
      amountFormatted: `₹ ${amount.toLocaleString('en-IN')}`,
      categoryName: category.category,
      categoryId: category.id,
      packageType,
      packageName,
      dates,
      message: 'Online payment gateway is pending university merchant API configuration.',
      secretariatEmail: 'criticonn@paruluniversity.ac.in',
      secretariatPhone: '+91 95378 85638',
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Server error processing payment initiation.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
