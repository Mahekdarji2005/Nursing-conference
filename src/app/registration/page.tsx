import React from 'react';
import PageFrame from '@/components/PageFrame';
import PriceFlipTable from '@/components/PriceFlipTable';

export default function RegistrationPage() {
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
            Official registration categories for PU’s Criticonn. Choose between Pre-Conference Workshop, Main Conference, or Value Combo packages.
          </p>
        </div>

        {/* Interactive 3D Flip Price Fee Matrix */}
        <PriceFlipTable />

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
              <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--teal-900)', marginBottom: '0.5rem' }}>
                Registration Secretariat Contacts:
              </strong>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <div>
                  <strong style={{ color: 'var(--teal-900)' }}>Ms. Heena Baria</strong> &bull; Assistant Professor, PIN<br />
                  📞 +91 95378 85638
                </div>
                <div>
                  <strong style={{ color: 'var(--teal-900)' }}>Ms. Sandhya Kumari Rajbhar</strong> &bull; Assistant Professor, PIN<br />
                  📞 +91 79904 56089
                </div>
                <div>
                  <strong style={{ color: 'var(--teal-900)' }}>Dr. Jeba Khatun</strong> &bull; Assistant Professor, PINR<br />
                  📞 +91 76239 03287
                </div>
                <div style={{ paddingTop: '0.3rem', borderTop: '1px solid var(--border-subtle)' }}>
                  ✉️ Email: <a href="mailto:criticonn@paruluniversity.ac.in" style={{ color: 'var(--orange-500)', fontWeight: '600' }}>criticonn@paruluniversity.ac.in</a>
                </div>
              </div>
            </div>
            <a
              href="mailto:criticonn@paruluniversity.ac.in?subject=Registration%20Assistance%20PU%20Criticonn%202027"
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
