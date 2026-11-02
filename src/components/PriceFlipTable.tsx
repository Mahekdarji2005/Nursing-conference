'use client';

import React, { useState } from 'react';

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSemq3s4AWqQX9mvwPW2PNzIcIa0BEtDqfOzBix62SiZRNQ5rQ/viewform';

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
  amount?: number;
  categoryId: string;
  categoryName: string;
  packageType?: 'workshop' | 'conference' | 'combo';
  packageName: string;
}

function PriceFlipCard({
  priceText,
  categoryName,
  packageName,
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
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
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
              textDecoration: 'none',
            }}
            aria-label={`Pay Now for ${categoryName} ${packageName}`}
          >
            <span>Pay Now</span>
            <span style={{ color: 'var(--orange-400)', fontSize: '0.95rem' }}>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PriceFlipTable() {
  return (
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
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
