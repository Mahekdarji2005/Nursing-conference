export interface PricingRule {
  id: string;
  category: string;
  workshopFee: number; // 18 Feb 2027
  conferenceFee: number; // 19 Feb 2027
  comboFee: number; // Both Days (18-19 Feb 2027)
  desc: string;
}

export const REGISTRATION_CATEGORIES: PricingRule[] = [
  {
    id: 'student',
    category: 'Undergraduate / Postgraduate Student',
    workshopFee: 1500,
    conferenceFee: 1500,
    comboFee: 3000,
    desc: 'Valid student ID required upon badge collection. Ideal for nursing students and interns.',
  },
  {
    id: 'faculty',
    category: 'Faculty / Clinician / Research Scholar / PhD',
    workshopFee: 2000,
    conferenceFee: 3500,
    comboFee: 5500,
    desc: 'Academic faculty, clinical nursing specialists, research scholars, and hospital staff.',
  },
  {
    id: 'industry',
    category: 'Industry Professional',
    workshopFee: 2000,
    conferenceFee: 3500,
    comboFee: 5500,
    desc: 'Medical device developers, digital health software providers, and pharmaceutical representatives.',
  },
  {
    id: 'attendee',
    category: 'Paper Co-Author / Attendee Only',
    workshopFee: 2000,
    conferenceFee: 3500,
    comboFee: 5500,
    desc: 'Co-investigators and conference attendees wishing to participate without presenting.',
  },
];

export interface FeeCalculation {
  categoryId: string;
  categoryName: string;
  duration: 'single' | 'two-day';
  dates: string[];
  singleDateChoice?: '2027-02-18' | '2027-02-19';
  fee: number;
  feeFormatted: string;
  planLabel: string;
}

export function calculateRegistrationFee(
  categoryId: string,
  duration: 'single' | 'two-day',
  singleDate?: '2027-02-18' | '2027-02-19'
): FeeCalculation {
  const cat = REGISTRATION_CATEGORIES.find((c) => c.id === categoryId) || REGISTRATION_CATEGORIES[0];

  if (duration === 'two-day') {
    return {
      categoryId: cat.id,
      categoryName: cat.category,
      duration: 'two-day',
      dates: ['18 February 2027', '19 February 2027'],
      fee: cat.comboFee,
      feeFormatted: `₹ ${cat.comboFee.toLocaleString('en-IN')}`,
      planLabel: 'Two-Day Registration (18 & 19 Feb 2027 — Workshop + Conference Combo)',
    };
  }

  // Single-day
  if (singleDate === '2027-02-18') {
    return {
      categoryId: cat.id,
      categoryName: cat.category,
      duration: 'single',
      singleDateChoice: '2027-02-18',
      dates: ['18 February 2027'],
      fee: cat.workshopFee,
      feeFormatted: `₹ ${cat.workshopFee.toLocaleString('en-IN')}`,
      planLabel: 'Single-Day: 18 February 2027 (Pre-Conference Workshop)',
    };
  }

  // Default to 19 Feb if not explicitly 18 Feb
  return {
    categoryId: cat.id,
    categoryName: cat.category,
    duration: 'single',
    singleDateChoice: '2027-02-19',
    dates: ['19 February 2027'],
    fee: cat.conferenceFee,
    feeFormatted: `₹ ${cat.conferenceFee.toLocaleString('en-IN')}`,
    planLabel: 'Single-Day: 19 February 2027 (Main Scientific Conference)',
  };
}
