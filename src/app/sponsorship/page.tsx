import React from 'react';
import Link from 'next/link';
import PageFrame from '@/components/PageFrame';

export const metadata = {
  title: "Call for Sponsorship & Partnership | PU’s Criticonn 2027",
  description: "Partner with PU’s Criticonn 2027. Platinum, Gold, Silver, and Associate sponsorship packages for healthcare technology and medical innovation leaders.",
};

export default function SponsorshipPage() {
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
          <span className="section-eyebrow">Industry &amp; Corporate Collaboration</span>
          <h1 className="section-title">Call for Sponsorship &amp; Partnership</h1>
          <p className="section-subtitle">
            Showcase your healthcare technologies, medical devices, EHR systems, and digital innovations to 1,000+ delegates, clinicians, researchers, and academic leaders.
          </p>
        </div>

        {/* Sponsorship Packages Grid */}
        <section style={{ marginBottom: '4rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'stretch',
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

                <h2 style={{ fontSize: '1.3rem', color: 'var(--teal-900)', marginBottom: '0.4rem' }}>
                  {tier.tier}
                </h2>

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
        </section>

        {/* Contact Secretariat for Sponsorship */}
        <section
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '3rem 2.5rem',
            border: '1px solid var(--border-subtle)',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem',
          }}
        >
          <span className="badge-tag teal">Exhibition &amp; Partnerships</span>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--teal-900)', marginTop: '0.5rem', marginBottom: '0.6rem' }}>
            Contact for Sponsorship &amp; Exhibition Queries
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.8rem', lineHeight: '1.6' }}>
            For custom booth spaces, plenary exhibition slots, workshop co-sponsorships, or equipment live demos, connect directly with our conference sponsorship coordinators:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.2rem',
              marginBottom: '2rem',
              textAlign: 'left',
            }}
          >
            <div style={{ background: 'var(--canvas-cream)', padding: '1.4rem', borderRadius: '16px' }}>
              <strong style={{ fontSize: '1rem', color: 'var(--teal-900)', display: 'block' }}>
                Dr. Swapnil Rahane
              </strong>
              <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Organizing Secretary &bull; Associate Professor, PIN<br />
                📞 +91 95112 39601<br />
                ✉️ <a href="mailto:criticonn@paruluniversity.ac.in" style={{ color: 'var(--orange-500)' }}>criticonn@paruluniversity.ac.in</a>
              </span>
            </div>

            <div style={{ background: 'var(--canvas-cream)', padding: '1.4rem', borderRadius: '16px' }}>
              <strong style={{ fontSize: '1rem', color: 'var(--teal-900)', display: 'block' }}>
                Mrs. Steffy Abraham
              </strong>
              <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Associate Professor, PIN<br />
                📞 +91 90338 80267<br />
                ✉️ <a href="mailto:criticonn@paruluniversity.ac.in" style={{ color: 'var(--orange-500)' }}>criticonn@paruluniversity.ac.in</a>
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/venue-contact" className="btn-pill-primary">
              View All Secretariat Contacts &rarr;
            </Link>
            <Link href="/registration" className="btn-pill-outline">
              View Delegate Fees &rarr;
            </Link>
            <Link href="/awards" className="btn-pill-outline">
              View Scientific Awards &rarr;
            </Link>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
