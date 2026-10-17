'use client';

import React, { useState } from 'react';

interface PricingCategory {
  id: string;
  category: string;
  workshop: string;
  workshopAmount: number;
  conference: string;
  conferenceAmount: number;
  combo: string;
  comboAmount: number;
}

const CATEGORIES: PricingCategory[] = [
  {
    id: 'student',
    category: 'Undergraduate / Postgraduate Student',
    workshop: '₹ 1,500',
    workshopAmount: 1500,
    conference: '₹ 1,500',
    conferenceAmount: 1500,
    combo: '₹ 3,000',
    comboAmount: 3000,
  },
  {
    id: 'faculty',
    category: 'Faculty / Clinician / Research Scholar / PhD',
    workshop: '₹ 2,000',
    workshopAmount: 2000,
    conference: '₹ 3,500',
    conferenceAmount: 3500,
    combo: '₹ 5,500',
    comboAmount: 5500,
  },
  {
    id: 'industry',
    category: 'Industry Professional',
    workshop: '₹ 2,000',
    workshopAmount: 2000,
    conference: '₹ 3,500',
    conferenceAmount: 3500,
    combo: '₹ 5,500',
    comboAmount: 5500,
  },
  {
    id: 'attendee',
    category: 'Paper Co-Author / Attendee Only',
    workshop: '₹ 2,000',
    workshopAmount: 2000,
    conference: '₹ 3,500',
    conferenceAmount: 3500,
    combo: '₹ 5,500',
    comboAmount: 5500,
  },
];

interface FlipCardProps {
  priceText: string;
  amount: number;
  categoryId: string;
  categoryName: string;
  packageType: 'workshop' | 'conference' | 'combo';
  packageName: string;
  onPayNow: (params: {
    categoryId: string;
    categoryName: string;
    packageType: string;
    packageName: string;
    amount: number;
    priceFormatted: string;
  }) => void;
}

function PriceFlipCard({
  priceText,
  amount,
  categoryId,
  categoryName,
  packageType,
  packageName,
  onPayNow,
}: FlipCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Flipped if hovered on desktop or clicked/toggled on touch/click
  const isFlipped = isClicked || isHovered;

  const handleToggleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsClicked((prev) => !prev);
    }
  };

  const handlePayClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents flipping card back
    onPayNow({
      categoryId,
      categoryName,
      packageType,
      packageName,
      amount,
      priceFormatted: priceText,
    });
  };

  return (
    <div
      className="flip-card-container"
      style={{
        width: '136px',
        height: '42px',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleToggleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${categoryName} ${packageName}: ${priceText}. Press Enter to flip and pay.`}
      title="Click or hover to reveal Pay Now"
    >
      <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        {/* FRONT SIDE: Exact rust-orange price button */}
        <div
          className="flip-card-face flip-card-front"
          style={{
            background: 'var(--orange-500)',
            color: '#FFFFFF',
            border: '1.5px solid var(--orange-500)',
            boxShadow: '0 3px 10px rgba(232, 97, 15, 0.28)',
            fontWeight: '700',
            fontSize: '0.92rem',
            letterSpacing: '0.3px',
            fontFamily: 'var(--font-sans)',
            transition: 'background 0.2s ease, transform 0.2s ease',
          }}
        >
          <span>{priceText}</span>
        </div>

        {/* BACK SIDE: Pay Now interactive button */}
        <div
          className="flip-card-face flip-card-back"
          style={{
            background: 'var(--teal-900)',
            color: '#FFFFFF',
            border: '1.5px solid var(--teal-700)',
            boxShadow: '0 4px 14px rgba(10, 37, 38, 0.35)',
            fontFamily: 'var(--font-sans)',
            padding: '2px',
          }}
        >
          <button
            type="button"
            onClick={handlePayClick}
            tabIndex={isFlipped ? 0 : -1}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.35rem',
              fontWeight: '800',
              fontSize: '0.84rem',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              borderRadius: '9999px',
            }}
            aria-label={`Pay Now for ${categoryName} ${packageName}`}
          >
            <span>Pay Now</span>
            <span style={{ color: 'var(--orange-400)', fontSize: '0.95rem' }}>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PriceFlipTable() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    loading: boolean;
    data: {
      categoryName: string;
      packageName: string;
      amountFormatted: string;
      configured: boolean;
      message: string;
      secretariatEmail: string;
      secretariatPhone: string;
    } | null;
  }>({
    isOpen: false,
    loading: false,
    data: null,
  });

  const handlePayNow = async (params: {
    categoryId: string;
    categoryName: string;
    packageType: string;
    packageName: string;
    amount: number;
    priceFormatted: string;
  }) => {
    setModalState({
      isOpen: true,
      loading: true,
      data: null,
    });

    try {
      const res = await fetch('/api/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          categoryId: params.categoryId,
          packageType: params.packageType,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || 'Unable to initiate payment.');
      }

      setModalState({
        isOpen: true,
        loading: false,
        data: {
          categoryName: json.categoryName || params.categoryName,
          packageName: json.packageName || params.packageName,
          amountFormatted: json.amountFormatted || params.priceFormatted,
          configured: json.configured,
          message: json.message,
          secretariatEmail: json.secretariatEmail || 'criticonn@paruluniversity.ac.in',
          secretariatPhone: json.secretariatPhone || '+91 95378 85638',
        },
      });
    } catch {
      setModalState({
        isOpen: true,
        loading: false,
        data: {
          categoryName: params.categoryName,
          packageName: params.packageName,
          amountFormatted: params.priceFormatted,
          configured: false,
          message: 'Unable to connect to payment services at this time.',
          secretariatEmail: 'criticonn@paruluniversity.ac.in',
          secretariatPhone: '+91 95378 85638',
        },
      });
    }
  };

  const closeModal = () => {
    setModalState({ isOpen: false, loading: false, data: null });
  };

  return (
    <>
      <section
        style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '2.5rem',
          border: '1.5px solid var(--border-subtle)',
          marginBottom: '4rem',
          overflowX: 'auto',
          boxShadow: '0 10px 30px rgba(11, 37, 38, 0.04)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--teal-900)', margin: 0 }}>
            Official Fee Summary Matrix (INR ₹)
          </h2>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>💡</span>
            <span>Hover or tap any price button to reveal <strong>Pay Now</strong></span>
          </span>
        </div>

        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, textAlign: 'left', minWidth: '680px' }}>
          <thead>
            <tr style={{ background: 'var(--teal-900)', color: '#FFFFFF' }}>
              <th
                style={{
                  padding: '1.1rem 1.2rem',
                  color: '#FFFFFF',
                  fontSize: '0.88rem',
                  fontWeight: '700',
                  borderTopLeftRadius: '14px',
                  borderBottomLeftRadius: '14px',
                }}
              >
                Delegate Category
              </th>
              <th
                style={{
                  padding: '1.1rem 1.2rem',
                  color: '#FFFFFF',
                  fontSize: '0.88rem',
                  fontWeight: '700',
                  textAlign: 'center',
                }}
              >
                Pre-Conf Workshop (18 Feb)
              </th>
              <th
                style={{
                  padding: '1.1rem 1.2rem',
                  color: '#FFFFFF',
                  fontSize: '0.88rem',
                  fontWeight: '700',
                  textAlign: 'center',
                }}
              >
                Main Conference (19 Feb)
              </th>
              <th
                style={{
                  padding: '1.1rem 1.2rem',
                  color: '#FFFFFF',
                  fontSize: '0.88rem',
                  fontWeight: '700',
                  textAlign: 'center',
                  borderTopRightRadius: '14px',
                  borderBottomRightRadius: '14px',
                }}
              >
                Combo (Both Days)
              </th>
            </tr>
          </thead>
          <tbody>
            {CATEGORIES.map((c, i) => (
              <tr
                key={c.id}
                style={{
                  borderBottom: '1px solid var(--border-subtle)',
                  background: i % 2 === 1 ? 'rgba(239, 235, 227, 0.25)' : '#FFFFFF',
                  transition: 'background 0.15s ease',
                }}
              >
                <td style={{ padding: '1.2rem 1.2rem', fontWeight: '600', color: 'var(--teal-900)', fontSize: '0.9rem' }}>
                  {c.category}
                </td>
                <td style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>
                  <PriceFlipCard
                    priceText={c.workshop}
                    amount={c.workshopAmount}
                    categoryId={c.id}
                    categoryName={c.category}
                    packageType="workshop"
                    packageName="Pre-Conf Workshop (18 Feb)"
                    onPayNow={handlePayNow}
                  />
                </td>
                <td style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>
                  <PriceFlipCard
                    priceText={c.conference}
                    amount={c.conferenceAmount}
                    categoryId={c.id}
                    categoryName={c.category}
                    packageType="conference"
                    packageName="Main Conference (19 Feb)"
                    onPayNow={handlePayNow}
                  />
                </td>
                <td style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>
                  <PriceFlipCard
                    priceText={c.combo}
                    amount={c.comboAmount}
                    categoryId={c.id}
                    categoryName={c.category}
                    packageType="combo"
                    packageName="Combo (Both Days)"
                    onPayNow={handlePayNow}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Payment Gateway Status & Checkout Modal */}
      {modalState.isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(7, 29, 30, 0.75)',
            backdropFilter: 'blur(5px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={closeModal}
        >
          <div
            className="theme-card"
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '560px',
              width: '100%',
              padding: '2.5rem',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
              border: '2px solid var(--teal-900)',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <span className="badge-tag dark" style={{ marginBottom: '0.4rem' }}>
                  Checkout Summary
                </span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--teal-900)', margin: 0 }}>
                  Delegate Registration Fee
                </h3>
              </div>
              <button
                type="button"
                onClick={closeModal}
                style={{
                  background: 'var(--canvas-cream)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  fontSize: '1.2rem',
                  color: 'var(--teal-900)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                }}
                aria-label="Close payment modal"
              >
                &times;
              </button>
            </div>

            {modalState.loading ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '1.1rem', color: 'var(--teal-900)', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Connecting to Registration Verification Desk...
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Validating category rates and gateway availability
                </p>
              </div>
            ) : modalState.data ? (
              <div>
                {/* Selected Details Card */}
                <div
                  style={{
                    background: 'var(--canvas-cream)',
                    borderRadius: '16px',
                    padding: '1.4rem',
                    marginBottom: '1.5rem',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '0.88rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Category:</span>
                    <strong style={{ color: 'var(--teal-900)', textAlign: 'right', maxWidth: '65%' }}>
                      {modalState.data.categoryName}
                    </strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', fontSize: '0.88rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Package:</span>
                    <strong style={{ color: 'var(--teal-900)', textAlign: 'right' }}>
                      {modalState.data.packageName}
                    </strong>
                  </div>
                  <div
                    style={{
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '0.8rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ fontWeight: '700', color: 'var(--teal-900)', fontSize: '1rem' }}>
                      Payable Amount:
                    </span>
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--orange-500)' }}>
                      {modalState.data.amountFormatted}
                    </span>
                  </div>
                </div>

                {/* Gateway Integration Notice */}
                <div
                  style={{
                    background: '#FFF9F3',
                    border: '1.5px solid var(--orange-400)',
                    borderRadius: '16px',
                    padding: '1.2rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '1.1rem' }}>ℹ️</span>
                    <strong style={{ color: 'var(--orange-600)', fontSize: '0.88rem' }}>
                      Online Payment Gateway Status
                    </strong>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', lineHeight: '1.5', margin: 0 }}>
                    Third-party payment gateway credentials (Razorpay/Stripe API keys) are currently pending university merchant configuration. Per official Parul University protocol, registration payments are fulfilled directly by the Faculty of Nursing Secretariat.
                  </p>
                </div>

                {/* Direct Secretariat Contacts */}
                <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '1.2rem', marginBottom: '1.5rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--teal-900)', marginBottom: '0.5rem' }}>
                    Registration Secretariat Contacts:
                  </strong>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <div>📞 Ms. Heena Baria: +91 95378 85638</div>
                    <div>📞 Ms. Sandhya Kumari Rajbhar: +91 79904 56089</div>
                    <div>📞 Dr. Jeba Khatun: +91 76239 03287</div>
                    <div style={{ paddingTop: '0.3rem', borderTop: '1px solid var(--border-subtle)' }}>
                      ✉️ Email:{' '}
                      <a href={`mailto:${modalState.data.secretariatEmail}?subject=Registration%20Payment%20-%20${encodeURIComponent(modalState.data.categoryName)}%20(${encodeURIComponent(modalState.data.amountFormatted)})`} style={{ color: 'var(--orange-500)', fontWeight: '600' }}>
                        {modalState.data.secretariatEmail}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a
                    href={`mailto:${modalState.data.secretariatEmail}?subject=Registration%20Payment%20-%20${encodeURIComponent(modalState.data.categoryName)}%20(${encodeURIComponent(modalState.data.amountFormatted)})`}
                    className="btn-pill-orange"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    Email Registration Desk &rarr;
                  </a>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="btn-pill-primary"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
