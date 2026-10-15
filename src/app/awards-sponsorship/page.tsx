import React from 'react';
import Link from 'next/link';
import PageFrame from '@/components/PageFrame';

export default function AwardsSponsorshipPage() {
  const paperAwards = [
    { place: '1st Prize', amount: '₹ 10,000', perk: 'Trophy + Official Certificate of Excellence' },
    { place: '2nd Prize', amount: '₹ 5,000', perk: 'Trophy + Official Certificate of Excellence' },
    { place: '3rd Prize', amount: '₹ 3,000', perk: 'Trophy + Official Certificate of Excellence' },
  ];

  const posterAwards = [
    { place: '1st Prize', amount: '₹ 10,000', perk: 'Trophy + Official Certificate of Excellence' },
    { place: '2nd Prize', amount: '₹ 5,000', perk: 'Trophy + Official Certificate of Excellence' },
    { place: '3rd Prize', amount: '₹ 3,000', perk: 'Trophy + Official Certificate of Excellence' },
  ];

  const sponsorTiers = [
    {
      tier: 'Platinum Sponsor',
      amount: '₹ 1,00,000',
      tag: 'PREMIUM PARTNER',
      highlight: true,
      benefits: [
        'Premium logo placement across all stage backdrops, banners & digital screens',
        'Dedicated prime exhibition stall / booth in the conference showcase foyer',
        'Special acknowledgement during the Inaugural & Valedictory ceremonies',
        'Inclusion of corporate promotional brochures inside all delegate kits',
        '5 Complimentary delegate registrations (full conference + workshop)',
        'Honorary conference memento and partnership plaque presented by University Leadership',
      ],
    },
    {
      tier: 'Gold Sponsor',
      amount: '₹ 75,000',
      tag: 'EXECUTIVE PARTNER',
      highlight: false,
      benefits: [
        'Prominent logo placement on main conference materials and website',
        'Exhibition stall space in the central medical exhibition gallery',
        'Acknowledgement during scientific plenary session introductions',
        'Inclusion of branded flyers in delegate conference materials',
        '3 Complimentary delegate registrations',
        'Official certificate and institutional memento',
      ],
    },
    {
      tier: 'Silver Sponsor',
      amount: '₹ 50,000',
      tag: 'ASSOCIATE PARTNER',
      highlight: false,
      benefits: [
        'Logo presence on selected conference materials and signage',
        'Display counter / tabletop exhibition space',
        'Acknowledgement during parallel paper presentation sessions',
        '2 Complimentary delegate registrations',
        'Certificate of corporate sponsorship',
      ],
    },
    {
      tier: 'Associate Sponsor',
      amount: '₹ 25,000',
      tag: 'SUPPORTING SPONSOR',
      highlight: false,
      benefits: [
        'Logo visibility on official conference website and proceedings compendium',
        'Acknowledgement during valedictory closing announcements',
        '1 Complimentary delegate registration',
        'Certificate of appreciation',
      ],
    },
  ];

  return (
    <PageFrame>
      <div className="content-container" style={{ paddingBottom: '5rem', paddingTop: '1.5rem' }}>
        <div className="section-headline-group">
          <span className="section-eyebrow">Recognition &amp; Industry Partnership</span>
          <h1 className="section-title">Awards &amp; Sponsorship</h1>
          <p className="section-subtitle">
            Celebrating outstanding research contributions with ₹37,000 in cash awards, and inviting healthcare leaders to showcase next-generation health innovations.
          </p>
        </div>

        {/* Part 1: Awards & Cash Prizes */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge-tag orange">Academic Excellence</span>
            <h2 style={{ fontSize: '2rem', color: 'var(--teal-900)', marginTop: '0.5rem' }}>
              Conference Scientific Awards &amp; Cash Prizes
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              Evaluated by independent scientific juries during the Oral Paper and Poster Sessions on 19 February 2027.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              alignItems: 'stretch',
            }}
          >
            {/* Best Paper */}
            <div className="theme-card" style={{ background: '#FFFFFF', padding: '2.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
                <span style={{ fontSize: '1.8rem' }}>🏆</span>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--teal-900)' }}>Best Paper Presentation</h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Oral Presentation Sessions</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1rem' }}>
                {paperAwards.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--canvas-cream)',
                      padding: '1rem 1.2rem',
                      borderRadius: '14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <strong style={{ color: 'var(--teal-900)', display: 'block', fontSize: '0.95rem' }}>{item.place}</strong>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{item.perk}</span>
                    </div>
                    <span style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--orange-500)' }}>
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Poster */}
            <div className="theme-card" style={{ background: '#FFFFFF', padding: '2.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
                <span style={{ fontSize: '1.8rem' }}>📜</span>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--teal-900)' }}>Best Poster Presentation</h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Medical Auditorium Exhibition Hall</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1rem' }}>
                {posterAwards.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--canvas-cream)',
                      padding: '1rem 1.2rem',
                      borderRadius: '14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <strong style={{ color: 'var(--teal-900)', display: 'block', fontSize: '0.95rem' }}>{item.place}</strong>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{item.perk}</span>
                    </div>
                    <span style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--orange-500)' }}>
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Smart Innovation Award */}
            <div
              className="theme-card"
              style={{
                background: 'linear-gradient(135deg, var(--teal-900) 0%, var(--teal-800) 100%)',
                color: '#FFFFFF',
                padding: '2.4rem',
                border: '2px solid var(--orange-500)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span className="badge-tag orange" style={{ alignSelf: 'flex-start', marginBottom: '1rem' }}>
                PRESTIGIOUS SPECIAL AWARD
              </span>

              <h3 style={{ fontSize: '1.45rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Smart Innovation Research Impact Award
              </h3>

              <div style={{ fontSize: '2.6rem', fontWeight: '800', color: 'var(--orange-400)', margin: '0.8rem 0' }}>
                ₹ 11,000
              </div>

              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Presented for an outstanding research-based healthcare innovation demonstrating originality, scientific rigor, practical clinical applicability, and transformative impact on patient outcomes.
              </p>

              <div
                style={{
                  marginTop: 'auto',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '0.8rem 1rem',
                  fontSize: '0.8rem',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                🏆 <strong>Includes:</strong> Special Trophy + Certificate + Keynote Acknowledgement
              </div>
            </div>
          </div>
        </section>

        {/* Part 2: Sponsorship Packages */}
        <section
          style={{
            background: 'var(--canvas-cream)',
            borderRadius: '28px',
            padding: '4rem 2.5rem',
            border: '1.5px solid var(--border-subtle)',
          }}
        >
          <div className="section-headline-group" style={{ marginBottom: '3rem' }}>
            <span className="section-eyebrow">Industry &amp; Corporate Collaboration</span>
            <h2 className="section-title">Call for Sponsorship &amp; Partnership</h2>
            <p className="section-subtitle">
              Showcase your healthcare technologies, medical devices, EHR systems, and digital innovations to 1,000+ delegates, clinicians, researchers, and academic leaders.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '3.5rem',
            }}
          >
            {sponsorTiers.map((tier, idx) => (
              <div
                key={idx}
                className="theme-card"
                style={{
                  background: '#FFFFFF',
                  padding: '2.4rem 1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  border: tier.highlight ? '2.5px solid var(--orange-500)' : '1px solid var(--border-subtle)',
                }}
              >
                <span
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: '0.7rem',
                    fontWeight: '800',
                    background: tier.highlight ? 'var(--orange-500)' : 'var(--teal-900)',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.7rem',
                    borderRadius: '9999px',
                    marginBottom: '0.8rem',
                  }}
                >
                  {tier.tag}
                </span>

                <h3 style={{ fontSize: '1.3rem', color: 'var(--teal-900)', marginBottom: '0.4rem' }}>
                  {tier.tier}
                </h3>

                <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--teal-900)', marginBottom: '1.2rem' }}>
                  {tier.amount}
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.85rem', marginBottom: '2rem', flex: 1 }}>
                  {tier.benefits.map((b, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.6rem', color: 'var(--text-body)', lineHeight: '1.5' }}>
                      <span style={{ color: tier.highlight ? 'var(--orange-500)' : 'var(--teal-600)', fontWeight: '800' }}>✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: 'auto' }}>
                  <a
                    href={`mailto:criticonn@paruluniversity.ac.in?subject=Sponsorship%20Inquiry%20-%20${encodeURIComponent(tier.tier)}`}
                    className={tier.highlight ? 'btn-pill-orange' : 'btn-pill-primary'}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Partner as {tier.tier} &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.15rem', color: 'var(--teal-900)', marginBottom: '0.6rem' }}>
              Custom Partnership &amp; Exhibition Inquiries
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              For custom booth spaces, workshop co-sponsorships, or equipment live demos, connect directly with the organizing secretariat.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/venue-contact" className="btn-pill-primary">
                Contact Secretariat &rarr;
              </Link>
              <Link href="/registration" className="btn-pill-outline">
                View Delegate Fees &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
