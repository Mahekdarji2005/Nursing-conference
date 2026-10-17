import React from 'react';
import PageFrame from '@/components/PageFrame';

export default function VenueContactPage() {
  const contacts = [
    {
      role: 'Conference Chairperson & Convenor',
      name: 'Dr. Seeta Devi Penta',
      desc: 'Dean, Faculty of Nursing & Principal, Parul Institute of Nursing',
      inst: 'Parul University, Vadodara, Gujarat, India',
      mobile: '+91 96655 39533',
      email: 'dean.pin@paruluniversity.ac.in',
      badge: 'LEADERSHIP',
    },
    {
      role: 'Organizing Secretary & General Enquiries',
      name: 'Dr. Swapnil Rahane',
      desc: 'Associate Professor, Parul Institute of Nursing, Faculty of Nursing',
      inst: 'Parul University, Vadodara, Gujarat, India',
      mobile: '+91 95112 39601',
      email: 'swapnil.rahane19680@paruluniversity.ac.in',
      confEmail: 'criticonn@paruluniversity.ac.in',
      badge: 'SECRETARIAT',
    },
    {
      role: 'Registration Queries',
      name: 'Ms. Heena Baria, Ms. Sandhya Rajbhar & Dr. Jeba Khatun',
      desc: 'Assistant Professors, Parul Institute of Nursing & PINR',
      inst: 'Faculty of Nursing, Parul University',
      mobile: '+91 95378 85638 / +91 79904 56089 / +91 76239 03287',
      email: 'criticonn@paruluniversity.ac.in',
      badge: 'REGISTRATION',
    },
    {
      role: 'Scientific Abstract & Poster Queries',
      name: 'Prof. T. Kiranmala Chanu, Dr. Abhya Pattan & Dr. Roma Patel',
      desc: 'Vice Principal, Professors & Associate Professor, PIN',
      inst: 'Faculty of Nursing, Parul University',
      mobile: '+91 99975 31367 / +91 98444 38332 / +91 81601 27238',
      email: 'criticonn@paruluniversity.ac.in',
      badge: 'SCIENTIFIC',
    },
    {
      role: 'Accommodation & Hospitality Assistance',
      name: 'Ms. Manish Trivedi & Mr. Bhavik Bhatt',
      desc: 'Associate Professor & Nursing Tutor, Parul Institute of Nursing',
      inst: 'Faculty of Nursing, Parul University',
      mobile: '+91 79907 15967 / +91 77288 50919',
      email: 'criticonn@paruluniversity.ac.in',
      badge: 'HOSPITALITY',
    },
    {
      role: 'Sponsorship & Industry Partnership',
      name: 'Dr. Swapnil Rahane & Mrs. Steffy Abraham',
      desc: 'Associate Professors, Parul Institute of Nursing',
      inst: 'Faculty of Nursing, Parul University',
      mobile: '+91 95112 39601 / +91 90338 80267',
      email: 'criticonn@paruluniversity.ac.in',
      badge: 'SPONSORSHIP',
    },
  ];

  return (
    <PageFrame>
      <div className="content-container" style={{ paddingBottom: '5rem', paddingTop: '1.5rem' }}>
        <div className="section-headline-group">
          <span className="section-eyebrow">Location &amp; Communication</span>
          <h1 className="section-title">Venue &amp; Official Contact</h1>
          <p className="section-subtitle">
            Find transit directions to the Medical Auditorium, Parul University campus in Vadodara, and connect directly with official conference convenors.
          </p>
        </div>

        {/* Venue Information Card */}
        <section
          className="theme-card"
          style={{
            background: '#FFFFFF',
            border: '2px solid var(--border-subtle)',
            padding: '3rem',
            marginBottom: '4rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="badge-tag orange" style={{ marginBottom: '0.8rem' }}>
                OFFICIAL VENUE
              </span>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--teal-900)', marginBottom: '0.8rem' }}>
                Medical College Auditorium
              </h2>
              <p style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--teal-700)', marginBottom: '0.6rem' }}>
                Parul University Campus, Vadodara, Gujarat, India
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                P.O. Limda, Tal. Waghodia, District Vadodara, Gujarat 391760.<br />
                The Medical Auditorium is a premier facility equipped with state-of-the-art acoustic architecture, high-definition digital projection, multi-channel sound, and adjacent foyer spaces for scientific posters, parallel symposiums, and medical technology exhibitions.
              </p>

              {/* Transit Connectivity */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '1rem',
                  background: 'var(--canvas-cream)',
                  padding: '1.2rem',
                  borderRadius: '16px',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--teal-900)', display: 'block' }}>
                    🚆 Railway Connectivity
                  </strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Vadodara Junction (BRC) &bull; ~15 km from campus
                  </span>
                </div>

                <div>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--teal-900)', display: 'block' }}>
                    ✈️ Air Connectivity
                  </strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Vadodara Airport (BDQ) &bull; ~12 km from campus
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Destination Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, var(--teal-900) 0%, var(--teal-800) 100%)',
                color: '#FFFFFF',
                borderRadius: '24px',
                padding: '2.5rem',
                textAlign: 'center',
                boxShadow: '0 16px 36px rgba(10, 25, 26, 0.18)',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏛️</div>
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Parul University
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '1.5rem' }}>
                NAAC A++ Grade &bull; Category-1 University &bull; Vadodara, Gujarat
              </p>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '1rem',
                  fontSize: '0.82rem',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6',
                  textAlign: 'left',
                }}
              >
                📍 <strong>Auditorium Navigation:</strong> Proceed through Main University Gate 1. Follow campus signage to the Medical College Complex and Auditorium Foyer.
              </div>
              <a
                href="https://maps.google.com/?q=Parul+University+Limda+Vadodara"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-orange"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Official Secretariat & Contact Points */}
        <section>
          <div className="section-headline-group" style={{ marginBottom: '2.5rem' }}>
            <span className="section-eyebrow">Dedicated Helpdesk</span>
            <h2 className="section-title">Conference Secretariat &amp; Queries</h2>
            <p className="section-subtitle">
              Reach out to confirmed contact persons for general inquiries, abstract submissions, or registration verification.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {contacts.map((c, i) => (
              <div
                key={i}
                className="theme-card"
                style={{
                  background: '#FFFFFF',
                  padding: '2.2rem 1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: '4px solid var(--teal-900)',
                }}
              >
                <span
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: '0.7rem',
                    fontWeight: '800',
                    background: 'var(--canvas-cream)',
                    color: 'var(--teal-900)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '9999px',
                    marginBottom: '0.8rem',
                  }}
                >
                  {c.badge}
                </span>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--teal-900)', marginBottom: '0.3rem' }}>
                  {c.role}
                </h3>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--orange-500)', marginBottom: '0.4rem', fontWeight: '700' }}>
                  {c.name}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1.2rem', flex: 1 }}>
                  {c.desc}<br />
                  {c.inst}
                </p>

                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '0.8rem',
                    borderTop: '1px solid var(--border-subtle)',
                    fontSize: '0.82rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                  }}
                >
                  <div>
                    📞 <strong>Mobile:</strong> {c.mobile}
                  </div>
                  <div>
                    ✉️ <strong>Email:</strong>{' '}
                    <a href={`mailto:${c.email}`} style={{ color: 'var(--teal-700)', fontWeight: '600' }}>
                      {c.email}
                    </a>
                  </div>
                  {c.confEmail && (
                    <div>
                      ✉️ <strong>Conf:</strong>{' '}
                      <a href={`mailto:${c.confEmail}`} style={{ color: 'var(--orange-500)', fontWeight: '600' }}>
                        {c.confEmail}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
