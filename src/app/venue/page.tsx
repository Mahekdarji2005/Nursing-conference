import React from 'react';
import Link from 'next/link';
import PageFrame from '@/components/PageFrame';

export const metadata = {
  title: "Official Venue & Transit Directions | PU’s Criticonn 2027",
  description: "Transit directions and campus guidelines for the Medical College Auditorium at Parul University, Vadodara, Gujarat, India.",
};

export default function VenuePage() {
  return (
    <PageFrame>
      <div className="content-container" style={{ paddingBottom: '5rem', paddingTop: '1.5rem' }}>
        <div className="section-headline-group">
          <span className="section-eyebrow">Location &amp; Campus Navigation</span>
          <h1 className="section-title">Official Conference Venue</h1>
          <p className="section-subtitle">
            Find transit directions to the Medical Auditorium on the Parul University campus in Vadodara, Gujarat.
          </p>
        </div>

        {/* Venue Information Card */}
        <section
          className="theme-card"
          style={{
            background: '#FFFFFF',
            border: '2px solid var(--border-subtle)',
            padding: '3rem',
            marginBottom: '3.5rem',
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

        {/* Action CTAs */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-pill-primary">
              Contact Conference Secretariat &rarr;
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
