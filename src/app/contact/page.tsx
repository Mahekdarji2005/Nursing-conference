import React from 'react';
import Link from 'next/link';
import PageFrame from '@/components/PageFrame';

export const metadata = {
  title: "Conference Secretariat & Official Contact | PU’s Criticonn 2027",
  description: "Get in touch with the PU’s Criticonn 2027 Conference Secretariat, Registration Desk, Scientific Abstract Jury, Accommodation Assistance, and Sponsorship Coordinators.",
};

export default function ContactPage() {
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
        <div className="section-headline-group" style={{ marginBottom: '2.5rem' }}>
          <span className="section-eyebrow">Dedicated Helpdesk &amp; Secretariat</span>
          <h1 className="section-title">Conference Secretariat &amp; Queries</h1>
          <p className="section-subtitle">
            Reach out directly to confirmed contact persons for general inquiries, abstract submissions, or registration verification.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <section style={{ marginBottom: '3.5rem' }}>
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

                <h2 style={{ fontSize: '1.25rem', color: 'var(--teal-900)', marginBottom: '0.3rem' }}>
                  {c.role}
                </h2>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--orange-500)', marginBottom: '0.4rem', fontWeight: '700' }}>
                  {c.name}
                </h3>
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
                    <a
                      href={`mailto:${c.email}`}
                      className="contact-email-link"
                      style={{ color: 'var(--orange-500)', fontWeight: '600', textDecoration: 'none' }}
                    >
                      {c.email}
                    </a>
                  </div>
                  {c.confEmail && (
                    <div>
                      ✉️ <strong>Conf:</strong>{' '}
                      <a
                        href={`mailto:${c.confEmail}`}
                        className="contact-email-link"
                        style={{ color: 'var(--orange-500)', fontWeight: '600', textDecoration: 'none' }}
                      >
                        {c.confEmail}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Action CTAs */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/venue" className="btn-pill-primary">
              View Venue &amp; Directions &rarr;
            </Link>
            <Link href="/registration" className="btn-pill-orange">
              Register for Conference &rarr;
            </Link>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}
