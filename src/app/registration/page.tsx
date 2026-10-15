import React from 'react';
import PageFrame from '@/components/PageFrame';

export default function RegistrationPage() {
  const categories = [
    {
      category: 'Undergraduate / Postgraduate Student',
      workshop: '₹ 1,500',
      conference: '₹ 1,500',
      combo: '₹ 3,000',
      recommended: false,
      desc: 'Valid student ID required upon badge collection. Ideal for nursing students and interns.',
    },
    {
      category: 'Faculty / Clinician / Research Scholar / PhD',
      workshop: '₹ 2,000',
      conference: '₹ 3,500',
      combo: '₹ 5,500',
      recommended: true,
      desc: 'Academic faculty, clinical nursing specialists, research scholars, and hospital staff.',
    },
    {
      category: 'Industry Professional',
      workshop: '₹ 2,000',
      conference: '₹ 3,500',
      combo: '₹ 5,500',
      recommended: false,
      desc: 'Medical device developers, digital health software providers, and pharmaceutical representatives.',
    },
    {
      category: 'Paper Co-Author / Attendee Only',
      workshop: '₹ 2,000',
      conference: '₹ 3,500',
      combo: '₹ 5,500',
      recommended: false,
      desc: 'Co-investigators and conference attendees wishing to participate without presenting.',
    },
  ];

  const entitlements = [
    'Access to all registered plenary keynote lectures, symposia, and clinical workshops',
    'Official conference delegate kit with printed materials and stationery',
    'Daily networking buffet lunch, morning refreshments, and evening high tea',
    'Official Certificate of Participation and Presentation (authenticated by Parul University)',
    'Digital Abstract Book & Conference Proceedings Compendium',
    'Entry into scientific paper & poster exhibition sessions',
  ];

  return (
    <PageFrame>
      <div className="content-container" style={{ paddingBottom: '5rem', paddingTop: '1.5rem' }}>
        <div className="section-headline-group">
          <span className="section-eyebrow">Delegate Participation</span>
          <h1 className="section-title">Registration Fee Structure</h1>
          <p className="section-subtitle">
            Official registration categories for PU – स्वास्थ्य NOVA 2027. Choose between Pre-Conference Workshop, Main Conference, or Value Combo packages.
          </p>
        </div>

        {/* Pricing Cards Matrix */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
          }}
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="theme-card"
              style={{
                background: cat.recommended ? 'var(--canvas-cream)' : '#FFFFFF',
                border: cat.recommended ? '2.5px solid var(--teal-900)' : '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                padding: '2.5rem 1.8rem',
                position: 'relative',
              }}
            >
              {cat.recommended && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    right: '24px',
                    background: 'var(--orange-500)',
                    color: '#FFFFFF',
                    fontSize: '0.72rem',
                    fontWeight: '800',
                    padding: '0.25rem 0.8rem',
                    borderRadius: '9999px',
                    letterSpacing: '0.5px',
                  }}
                >
                  MOST POPULAR
                </span>
              )}

              <h2 style={{ fontSize: '1.25rem', color: 'var(--teal-900)', marginBottom: '0.6rem', lineHeight: '1.3' }}>
                {cat.category}
              </h2>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                {cat.desc}
              </p>

              {/* Combo Price Showcase */}
              <div
                style={{
                  background: '#FFFFFF',
                  padding: '1.2rem',
                  borderRadius: '16px',
                  marginBottom: '1.5rem',
                  border: '1px solid var(--border-subtle)',
                  textAlign: 'center',
                }}
              >
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--teal-700)', textTransform: 'uppercase' }}>
                  Combo (Workshop + Conference)
                </span>
                <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--teal-900)', margin: '0.2rem 0' }}>
                  {cat.combo}
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--orange-500)', fontWeight: '700' }}>
                  Full 2-Day Access (18–19 Feb)
                </span>
              </div>

              {/* Standalone breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Main Conference Only (19 Feb):</span>
                  <strong style={{ color: 'var(--teal-900)' }}>{cat.conference}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Pre-Conf Workshop (18 Feb):</span>
                  <strong style={{ color: 'var(--teal-900)' }}>{cat.workshop}</strong>
                </div>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <a
                  href="mailto:criticonn@paruluniversity.ac.in?subject=Registration%20Enquiry%20PU%20NOVA%202027"
                  className={cat.recommended ? 'btn-pill-orange' : 'btn-pill-primary'}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Register in this Category &rarr;
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Comparison Table */}
        <section
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1.5px solid var(--border-subtle)',
            marginBottom: '4rem',
            overflowX: 'auto',
          }}
        >
          <h2 style={{ fontSize: '1.4rem', color: 'var(--teal-900)', marginBottom: '1.5rem' }}>
            Official Fee Summary Matrix (INR ₹)
          </h2>

          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
            <thead>
              <tr style={{ background: 'var(--canvas-cream)', borderBottom: '2px solid var(--border-medium)' }}>
                <th style={{ padding: '1rem', color: 'var(--teal-900)', fontSize: '0.88rem' }}>Delegate Category</th>
                <th style={{ padding: '1rem', color: 'var(--teal-900)', fontSize: '0.88rem' }}>Pre-Conf Workshop (18 Feb)</th>
                <th style={{ padding: '1rem', color: 'var(--teal-900)', fontSize: '0.88rem' }}>Main Conference (19 Feb)</th>
                <th style={{ padding: '1rem', color: 'var(--teal-900)', fontSize: '0.88rem' }}>Combo (Both Days)</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--teal-900)', fontSize: '0.88rem' }}>{c.category}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-body)', fontSize: '0.88rem' }}>{c.workshop}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-body)', fontSize: '0.88rem' }}>{c.conference}</td>
                  <td style={{ padding: '1rem', fontWeight: '700', color: 'var(--orange-500)', fontSize: '0.92rem' }}>{c.combo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Entitlements & Note on Payment Desk */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem',
          }}
        >
          {/* Entitlements */}
          <div className="theme-card" style={{ background: '#FFFFFF', padding: '2.2rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--teal-900)', marginBottom: '1.2rem' }}>
              Registration Fee Entitlements
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {entitlements.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '0.8rem', fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: '1.5' }}>
                  <span style={{ color: 'var(--teal-600)', fontWeight: '800' }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '1.2rem', fontStyle: 'italic' }}>
              *Note: Travel, lodging, local transportation, and personal expenses are not included in the delegate registration fee.
            </p>
          </div>

          {/* Payment & Verification Desk Info */}
          <div className="theme-card" style={{ background: 'var(--canvas-cream)', padding: '2.2rem' }}>
            <span className="badge-tag dark" style={{ marginBottom: '0.8rem' }}>
              Official University Desk
            </span>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--teal-900)', marginBottom: '1rem' }}>
              Registration &amp; Verification Process
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '1rem' }}>
              Official registrations and fee verifications are processed through the Faculty of Nursing Secretariat, Parul University. No third-party online payment gateways are utilized.
            </p>
            <div style={{ background: '#FFFFFF', padding: '1.2rem', borderRadius: '16px', border: '1px solid var(--border-subtle)', marginBottom: '1.2rem' }}>
              <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--teal-900)', marginBottom: '0.3rem' }}>
                Registration Secretariat Contact:
              </strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                <strong>Ms. Sandhya Kumari Rajbhar</strong><br />
                Assistant Professor, Parul Institute of Nursing<br />
                📞 Phone: +91 79904 56089<br />
                ✉️ Email: <a href="mailto:criticonn@paruluniversity.ac.in" style={{ color: 'var(--orange-500)' }}>criticonn@paruluniversity.ac.in</a>
              </p>
            </div>
            <a
              href="mailto:criticonn@paruluniversity.ac.in?subject=Registration%20Assistance%20PU%20NOVA%202027"
              className="btn-pill-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Contact Registration Desk &rarr;
            </a>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
