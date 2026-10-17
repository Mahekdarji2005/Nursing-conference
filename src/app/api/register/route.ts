import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { calculateRegistrationFee, REGISTRATION_CATEGORIES } from '@/data/registration-pricing';

interface RegistrationRecord {
  id: string;
  createdAt: string;
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  designation: string;
  categoryId: string;
  categoryName: string;
  duration: 'single' | 'two-day';
  dates: string[];
  singleDateChoice?: string;
  fee: number;
  feeFormatted: string;
  status: 'confirmed' | 'pending_verification';
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      institution,
      designation = '',
      categoryId,
      duration,
      singleDate,
    } = body;

    // 1. Basic validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return NextResponse.json({ error: 'Please enter a valid full name.' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    if (!phone || typeof phone !== 'string' || phone.trim().length < 8) {
      return NextResponse.json({ error: 'Please enter a valid phone number.' }, { status: 400 });
    }
    if (!institution || typeof institution !== 'string' || institution.trim().length < 2) {
      return NextResponse.json({ error: 'Please specify your institution or organization.' }, { status: 400 });
    }

    // 2. Validate category
    const validCategory = REGISTRATION_CATEGORIES.some((c) => c.id === categoryId);
    if (!validCategory) {
      return NextResponse.json({ error: 'Invalid participant category selected.' }, { status: 400 });
    }

    // 3. Validate duration
    if (duration !== 'single' && duration !== 'two-day') {
      return NextResponse.json({ error: 'Please select either Single-Day or Two-Day registration duration.' }, { status: 400 });
    }

    // 4. Validate single-day vs two-day dates
    if (duration === 'single') {
      if (singleDate !== '2027-02-18' && singleDate !== '2027-02-19') {
        return NextResponse.json(
          { error: 'Please choose which single date you wish to attend (18 February or 19 February 2027).' },
          { status: 400 }
        );
      }
    }

    // 5. Calculate authoritative fee on the server (do not trust client fee)
    const calculation = calculateRegistrationFee(categoryId, duration, singleDate);

    // 6. Create record with unique ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const regId = `CRITICONN-2027-${randomSuffix}`;

    const record: RegistrationRecord = {
      id: regId,
      createdAt: new Date().toISOString(),
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      institution: institution.trim(),
      designation: designation.trim(),
      categoryId: calculation.categoryId,
      categoryName: calculation.categoryName,
      duration: calculation.duration,
      dates: calculation.dates,
      singleDateChoice: calculation.singleDateChoice,
      fee: calculation.fee,
      feeFormatted: calculation.feeFormatted,
      status: 'confirmed',
    };

    // 7. Persist record to data/registrations.json safely
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'registrations.json');

    try {
      await fs.mkdir(dataDir, { recursive: true });
      let existingRecords: RegistrationRecord[] = [];
      try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        existingRecords = JSON.parse(fileContent);
        if (!Array.isArray(existingRecords)) existingRecords = [];
      } catch {
        existingRecords = [];
      }
      existingRecords.push(record);
      await fs.writeFile(filePath, JSON.stringify(existingRecords, null, 2), 'utf-8');
    } catch (fsErr) {
      console.warn('Persistence fallback:', fsErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Registration completed successfully.',
      registrationId: regId,
      record,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Server error processing registration.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'registrations.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const records = JSON.parse(fileContent);
    return NextResponse.json({ success: true, count: records.length, records });
  } catch {
    return NextResponse.json({ success: true, count: 0, records: [] });
  }
}
