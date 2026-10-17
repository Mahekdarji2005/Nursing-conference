'use client';

import React, { useState } from 'react';
import {
  REGISTRATION_CATEGORIES,
  calculateRegistrationFee,
  FeeCalculation,
} from '@/data/registration-pricing';

interface RegistrationFormProps {
  initialCategoryId?: string;
}

export default function RegistrationForm({ initialCategoryId = 'faculty' }: RegistrationFormProps) {
  const [duration, setDuration] = useState<'single' | 'two-day'>('two-day');
  const [singleDate, setSingleDate] = useState<'2027-02-18' | '2027-02-19'>('2027-02-19');
  const [categoryId, setCategoryId] = useState<string>(initialCategoryId);

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [designation, setDesignation] = useState('');

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedReceipt, setSubmittedReceipt] = useState<{
    registrationId: string;
    fullName: string;
    categoryName: string;
    duration: string;
    dates: string[];
    feeFormatted: string;
    createdAt: string;
  } | null>(null);

  // Authoritative real-time calculation
  const calculation: FeeCalculation = calculateRegistrationFee(categoryId, duration, singleDate);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side validation
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMessage('Please enter a valid contact phone number.');
      return;
    }
    if (!institution.trim()) {
      setErrorMessage('Please enter your institution or organization name.');
      return;
    }
    if (duration === 'single' && !singleDate) {
      setErrorMessage('Please choose which single date you will attend (18 or 19 February 2027).');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          institution,
          designation,
          categoryId,
          duration,
          singleDate: duration === 'single' ? singleDate : undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Registration failed. Please try again.');
      }

      setSubmittedReceipt({
        registrationId: data.registrationId,
        fullName: data.record.fullName,
        categoryName: data.record.categoryName,
        duration: data.record.duration === 'two-day' ? 'Two-Day Registration (Both Days)' : 'Single-Day Registration',
        dates: data.record.dates,
        feeFormatted: data.record.feeFormatted,
        createdAt: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      });
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'An error occurred during submission.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedReceipt(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setInstitution('');
    setDesignation('');
  };

  if (submittedReceipt) {
    return (
      <div
        id="registration-receipt"
        className="theme-card"
        style={{
          background: '#FFFFFF',
          border: '2.5px solid var(--teal-900)',
          borderRadius: '24px',
          padding: '2.8rem 2.2rem',
          maxWidth: '820px',
          margin: '0 auto',
          boxShadow: '0 16px 40px rgba(10, 37, 38, 0.12)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'var(--teal-100)',
              color: 'var(--teal-900)',
              fontSize: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
            }}
          >
            ✓
          </div>
          <span className="badge-tag dark" style={{ marginBottom: '0.6rem' }}>
            REGISTRATION SUBMITTED
          </span>
          <h2 style={{ fontSize: '1.9rem', color: 'var(--teal-900)', marginBottom: '0.4rem' }}>
            Delegate Registration Receipt
          </h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
            PU’s Criticonn &bull; Parul University, Vadodara
          </p>
        </div>

        {/* Receipt Voucher Box */}
        <div
          style={{
            background: 'var(--canvas-cream)',
            border: '1.5px dashed var(--teal-700)',
            borderRadius: '18px',
            padding: '1.8rem',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '1rem',
              marginBottom: '1.2rem',
              flexWrap: 'wrap',
              gap: '0.8rem',
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: '700' }}>
                Registration ID
              </span>
              <strong style={{ display: 'block', fontSize: '1.4rem', color: 'var(--orange-500)', letterSpacing: '1px' }}>
                {submittedReceipt.registrationId}
              </strong>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Issued On</span>
              <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--teal-900)' }}>
                {submittedReceipt.createdAt}
              </strong>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', fontSize: '0.88rem' }}>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block' }}>Delegate Name:</span>
              <strong style={{ color: 'var(--teal-900)' }}>{submittedReceipt.fullName}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block' }}>Category:</span>
              <strong style={{ color: 'var(--teal-900)' }}>{submittedReceipt.categoryName}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block' }}>Duration:</span>
              <strong style={{ color: 'var(--teal-900)' }}>{submittedReceipt.duration}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block' }}>Attendance Date(s):</span>
              <strong style={{ color: 'var(--teal-900)' }}>{submittedReceipt.dates.join(' & ')}</strong>
            </div>
          </div>

          <div
            style={{
              marginTop: '1.4rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--teal-900)' }}>
              Total Applicable Registration Fee:
            </span>
            <span style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--orange-500)' }}>
              {submittedReceipt.feeFormatted} INR
            </span>
          </div>
        </div>

        {/* Verification Instructions */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid var(--border-subtle)',
            borderRadius: '14px',
            padding: '1.2rem',
            fontSize: '0.84rem',
            color: 'var(--text-body)',
            lineHeight: '1.6',
            marginBottom: '2rem',
          }}
        >
          <strong style={{ color: 'var(--teal-900)', display: 'block', marginBottom: '0.4rem' }}>
            Next Steps for Payment Verification:
          </strong>
          <p style={{ margin: 0 }}>
            Please note down your Registration ID <strong>{submittedReceipt.registrationId}</strong>. Registration fee verification is handled through the Faculty of Nursing Secretariat desk. Send your payment remittance confirmation to{' '}
            <a href="mailto:criticonn@paruluniversity.ac.in" style={{ color: 'var(--orange-500)', fontWeight: '700' }}>
              criticonn@paruluniversity.ac.in
            </a>{' '}
            or contact the registration coordinators: <strong>Ms. Sandhya Kumari Rajbhar</strong> (+91 79904 56089) or <strong>Ms. Heena Baria</strong> (+91 95378 85638).
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            onClick={handleReset}
            className="btn-pill-primary"
            style={{ padding: '0.75rem 2rem' }}
          >
            Register Another Participant &rarr;
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      id="register-form"
      className="theme-card"
      style={{
        background: '#FFFFFF',
        border: '2px solid var(--border-subtle)',
        borderRadius: '28px',
        padding: '3rem 2.4rem',
        maxWidth: '920px',
        margin: '0 auto 4.5rem',
        boxShadow: '0 16px 40px rgba(15, 61, 62, 0.08)',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span className="badge-tag orange" style={{ marginBottom: '0.6rem' }}>
          Interactive Registration Portal
        </span>
        <h2 style={{ fontSize: '2.1rem', color: 'var(--teal-900)', marginBottom: '0.6rem' }}>
          Delegate Registration &amp; Fee Calculator
        </h2>
        <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto' }}>
          Select your registration duration (Single-Day or Both Days), choose your conference date(s), and calculate your exact official fee.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
        {/* Step 1: Duration Selector (Single-Day vs Two-Day) */}
        <div>
          <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: '800', color: 'var(--teal-900)', marginBottom: '0.8rem' }}>
            1. Select Registration Duration <span style={{ color: 'var(--orange-500)' }}>*</span>
          </label>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.2rem',
            }}
          >
            {/* Single-Day Option */}
            <div
              onClick={() => setDuration('single')}
              style={{
                background: duration === 'single' ? 'var(--canvas-cream)' : '#FFFFFF',
                border: duration === 'single' ? '2.5px solid var(--orange-500)' : '1.5px solid var(--border-subtle)',
                borderRadius: '18px',
                padding: '1.4rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.4rem' }}>
                <input
                  type="radio"
                  id="duration-single"
                  name="registration-duration"
                  checked={duration === 'single'}
                  onChange={() => setDuration('single')}
                  style={{ accentColor: 'var(--orange-500)', width: '18px', height: '18px' }}
                />
                <label
                  htmlFor="duration-single"
                  style={{ fontWeight: '800', fontSize: '1.05rem', color: 'var(--teal-900)', cursor: 'pointer' }}
                >
                  Single-Day Registration
                </label>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, paddingLeft: '1.8rem' }}>
                Attend either the Pre-Conference Workshop (18 Feb) OR the Main Conference (19 Feb).
              </p>
            </div>

            {/* Two-Day Option */}
            <div
              onClick={() => setDuration('two-day')}
              style={{
                background: duration === 'two-day' ? 'var(--canvas-cream)' : '#FFFFFF',
                border: duration === 'two-day' ? '2.5px solid var(--teal-900)' : '1.5px solid var(--border-subtle)',
                borderRadius: '18px',
                padding: '1.4rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative',
              }}
            >
              {duration === 'two-day' && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '16px',
                    background: 'var(--teal-900)',
                    color: '#FFFFFF',
                    fontSize: '0.68rem',
                    fontWeight: '800',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                  }}
                >
                  BEST VALUE COMBO
                </span>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.4rem' }}>
                <input
                  type="radio"
                  id="duration-twoday"
                  name="registration-duration"
                  checked={duration === 'two-day'}
                  onChange={() => setDuration('two-day')}
                  style={{ accentColor: 'var(--teal-900)', width: '18px', height: '18px' }}
                />
                <label
                  htmlFor="duration-twoday"
                  style={{ fontWeight: '800', fontSize: '1.05rem', color: 'var(--teal-900)', cursor: 'pointer' }}
                >
                  Two-Day Registration (Both Days)
                </label>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, paddingLeft: '1.8rem' }}>
                Complete 2-day combo access covering both 18 &amp; 19 February 2027.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2: Date Selector (Conditional for Single-Day vs Automatic for Two-Day) */}
        <div>
          <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: '800', color: 'var(--teal-900)', marginBottom: '0.8rem' }}>
            2. Conference Attendance Date(s) <span style={{ color: 'var(--orange-500)' }}>*</span>
          </label>

          {duration === 'single' ? (
            <div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                Please select the single conference day you wish to attend:
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '1rem',
                }}
              >
                {/* 18 Feb Day Option */}
                <div
                  onClick={() => setSingleDate('2027-02-18')}
                  style={{
                    background: singleDate === '2027-02-18' ? '#FFFFFF' : 'var(--canvas-strip)',
                    border: singleDate === '2027-02-18' ? '2px solid var(--orange-500)' : '1px solid var(--border-subtle)',
                    borderRadius: '14px',
                    padding: '1.1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.8rem',
                    boxShadow: singleDate === '2027-02-18' ? '0 6px 18px rgba(232, 97, 15, 0.15)' : 'none',
                  }}
                >
                  <input
                    type="radio"
                    id="date-18"
                    name="single-conference-date"
                    checked={singleDate === '2027-02-18'}
                    onChange={() => setSingleDate('2027-02-18')}
                    style={{ accentColor: 'var(--orange-500)', marginTop: '3px' }}
                  />
                  <div>
                    <label htmlFor="date-18" style={{ fontWeight: '800', color: 'var(--teal-900)', display: 'block', cursor: 'pointer' }}>
                      📅 18 February 2027
                    </label>
                    <span style={{ fontSize: '0.8rem', color: 'var(--orange-600)', fontWeight: '700' }}>
                      Day 1: Pre-Conference Workshop
                    </span>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '0.3rem 0 0' }}>
                      5 hands-on clinical and digital workshops (EHR, AI Imaging, Smart Monitoring, Surveillance).
                    </p>
                  </div>
                </div>

                {/* 19 Feb Day Option */}
                <div
                  onClick={() => setSingleDate('2027-02-19')}
                  style={{
                    background: singleDate === '2027-02-19' ? '#FFFFFF' : 'var(--canvas-strip)',
                    border: singleDate === '2027-02-19' ? '2px solid var(--orange-500)' : '1px solid var(--border-subtle)',
                    borderRadius: '14px',
                    padding: '1.1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.8rem',
                    boxShadow: singleDate === '2027-02-19' ? '0 6px 18px rgba(232, 97, 15, 0.15)' : 'none',
                  }}
                >
                  <input
                    type="radio"
                    id="date-19"
                    name="single-conference-date"
                    checked={singleDate === '2027-02-19'}
                    onChange={() => setSingleDate('2027-02-19')}
                    style={{ accentColor: 'var(--orange-500)', marginTop: '3px' }}
                  />
                  <div>
                    <label htmlFor="date-19" style={{ fontWeight: '800', color: 'var(--teal-900)', display: 'block', cursor: 'pointer' }}>
                      📅 19 February 2027
                    </label>
                    <span style={{ fontSize: '0.8rem', color: 'var(--teal-700)', fontWeight: '700' }}>
                      Day 2: Main Scientific Conference
                    </span>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '0.3rem 0 0' }}>
                      8 plenary keynote sessions, oral papers, scientific posters, and valedictory awards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                background: 'var(--canvas-cream)',
                borderRadius: '16px',
                padding: '1.2rem 1.4rem',
                border: '1.5px solid var(--teal-900)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                <span style={{ fontSize: '1.2rem' }}>✅</span>
                <strong style={{ color: 'var(--teal-900)', fontSize: '0.98rem' }}>
                  Both Conference Days Automatically Included:
                </strong>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.85rem' }}>
                <span style={{ background: '#FFFFFF', padding: '0.4rem 0.8rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                  🗓️ <strong>Day 1:</strong> 18 February 2027 (Pre-Conference Workshop)
                </span>
                <span style={{ background: '#FFFFFF', padding: '0.4rem 0.8rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                  🗓️ <strong>Day 2:</strong> 19 February 2027 (Main Scientific Conference)
                </span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0.8rem 0 0' }}>
                Your two-day pass provides full access to all workshop tracks, keynote sessions, oral/poster presentations, and networking lunches on both days.
              </p>
            </div>
          )}
        </div>

        {/* Step 3: Participant Category */}
        <div>
          <label
            htmlFor="participant-category"
            style={{ display: 'block', fontSize: '0.95rem', fontWeight: '800', color: 'var(--teal-900)', marginBottom: '0.8rem' }}
          >
            3. Participant Category <span style={{ color: 'var(--orange-500)' }}>*</span>
          </label>
          <select
            id="participant-category"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            style={{
              width: '100%',
              padding: '0.85rem 1.2rem',
              borderRadius: '12px',
              border: '1.5px solid var(--border-subtle)',
              fontSize: '0.95rem',
              color: 'var(--teal-900)',
              fontWeight: '600',
              background: '#FFFFFF',
              cursor: 'pointer',
            }}
          >
            {REGISTRATION_CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.category}
              </option>
            ))}
          </select>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            {REGISTRATION_CATEGORIES.find((c) => c.id === categoryId)?.desc}
          </p>
        </div>

        {/* Step 4: Delegate Information */}
        <div>
          <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: '800', color: 'var(--teal-900)', marginBottom: '0.8rem' }}>
            4. Delegate Details <span style={{ color: 'var(--orange-500)' }}>*</span>
          </label>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.2rem',
            }}
          >
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-body)', marginBottom: '0.3rem' }}>
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Dr. Priya Sharma"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1.5px solid var(--border-subtle)',
                  fontSize: '0.9rem',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-body)', marginBottom: '0.3rem' }}>
                Official Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="e.g. priya.sharma@institution.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1.5px solid var(--border-subtle)',
                  fontSize: '0.9rem',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-body)', marginBottom: '0.3rem' }}>
                Contact Mobile Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. +91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1.5px solid var(--border-subtle)',
                  fontSize: '0.9rem',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-body)', marginBottom: '0.3rem' }}>
                Institution / Organization *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. AIIMS / CMC / Parul University"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1.5px solid var(--border-subtle)',
                  fontSize: '0.9rem',
                }}
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-body)', marginBottom: '0.3rem' }}>
                Academic / Clinical Designation (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Associate Professor / Staff Nurse / Research Scholar"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1.5px solid var(--border-subtle)',
                  fontSize: '0.9rem',
                }}
              />
            </div>
          </div>
        </div>

        {/* Live Calculation & Pre-Submission Summary */}
        <div
          style={{
            background: 'var(--canvas-cream)',
            borderRadius: '20px',
            padding: '1.8rem',
            border: '2px solid var(--teal-900)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--teal-700)', letterSpacing: '0.5px' }}>
              Registration Summary &amp; Fee Breakdown
            </span>
            <span className="badge-tag dark">Verified Brochure Rates</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', fontSize: '0.88rem', marginBottom: '1.2rem' }}>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block' }}>Selected Duration:</span>
              <strong style={{ color: 'var(--teal-900)' }}>
                {duration === 'two-day' ? 'Two-Day Registration (Both Days)' : 'Single-Day Registration'}
              </strong>
            </div>

            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block' }}>Attendance Date(s):</span>
              <strong style={{ color: 'var(--teal-900)' }}>
                {calculation.dates.join(' & ')}
              </strong>
            </div>

            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block' }}>Category:</span>
              <strong style={{ color: 'var(--teal-900)' }}>{calculation.categoryName}</strong>
            </div>

            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block' }}>Applicable Rate:</span>
              <strong style={{ color: 'var(--orange-500)', fontSize: '1.1rem' }}>
                {calculation.feeFormatted} INR
              </strong>
            </div>
          </div>

          <div
            style={{
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-body)', fontWeight: '600' }}>
                Plan: {calculation.planLabel}
              </span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'block' }}>Total Fee Payable</span>
              <span style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--teal-900)', lineHeight: '1' }}>
                {calculation.feeFormatted} <span style={{ fontSize: '1rem', fontWeight: '600' }}>INR</span>
              </span>
            </div>
          </div>
        </div>

        {errorMessage && (
          <div
            style={{
              background: '#FEE2E2',
              border: '1.5px solid #EF4444',
              borderRadius: '12px',
              padding: '0.9rem 1.2rem',
              color: '#991B1B',
              fontSize: '0.88rem',
              fontWeight: '600',
            }}
          >
            ⚠️ {errorMessage}
          </div>
        )}

        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-pill-orange"
            style={{
              padding: '0.9rem 2.8rem',
              fontSize: '1rem',
              fontWeight: '800',
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
            }}
          >
            {isSubmitting ? 'Processing Registration...' : 'Submit Registration & Generate Receipt →'}
          </button>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.8rem' }}>
            Includes official delegate kit, scientific proceedings, certificate, and networking meals for selected day(s).
          </p>
        </div>
      </form>
    </div>
  );
}
