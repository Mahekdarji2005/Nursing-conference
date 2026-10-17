import React from 'react';
import Link from 'next/link';
import PageFrame from '@/components/PageFrame';

export const metadata = {
  title: "Scientific Awards & Cash Prizes | PU’s Criticonn 2027",
  description: "Recognizing outstanding research in nursing and critical care with ₹37,000 in cash prizes for Best Paper, Best Poster, and Smart Innovation Research Impact Award.",
};

export default function AwardsPage() {
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

  return (
    <PageFrame>
      <div className="content-container" style={{ paddingBottom: '5rem', paddingTop: '1.5rem' }}>
        <div className="section-headline-group">
          <span className="section-eyebrow">Academic Excellence &amp; Recognition</span>
          <h1 className="section-title">Scientific Awards &amp; Cash Prizes</h1>
          <p className="section-subtitle">
            Celebrating outstanding research contributions in nursing science, patient safety, and critical care innovation with ₹37,000 in total cash awards.
          </p>
        </div>

        {/* Cash Prize Cards */}
        <section style={{ marginBottom: '4rem' }}>
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
                  <h2 style={{ fontSize: '1.3rem', color: 'var(--teal-900)' }}>Best Paper Presentation</h2>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Oral Scientific Presentation Sessions</span>
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
                  <h2 style={{ fontSize: '1.3rem', color: 'var(--teal-900)' }}>Best Poster Presentation</h2>
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

              <h2 style={{ fontSize: '1.45rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Smart Innovation Research Impact Award
              </h2>

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
                🏆 <strong>Includes:</strong> Special Trophy + Certificate of Distinction + Keynote Acknowledgement
              </div>
            </div>
          </div>
        </section>

        {/* Evaluation & Guidelines Information */}
        <section
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '3rem 2.5rem',
            border: '1px solid var(--border-subtle)',
            marginBottom: '3rem',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
            <span className="badge-tag teal">Evaluation Criteria</span>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--teal-900)', marginTop: '0.5rem' }}>
              Jury Evaluation &amp; Presentation Guidelines
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              All submitted and accepted oral and poster presentations will be independently scored by expert academic reviewers on 19 February 2027.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.8rem',
            }}
          >
            <div style={{ background: 'var(--canvas-cream)', padding: '1.8rem', borderRadius: '16px' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>🎯</div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--teal-900)', marginBottom: '0.5rem' }}>Scientific Rigor</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                Clarity of the research hypothesis, methodology, statistical validity, and adherence to international clinical trial or empirical research standards.
              </p>
            </div>

            <div style={{ background: 'var(--canvas-cream)', padding: '1.8rem', borderRadius: '16px' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>💡</div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--teal-900)', marginBottom: '0.5rem' }}>Originality &amp; Innovation</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                Novelty of the nursing intervention, technological adaptation, digital tool application, or clinical process workflow improvement.
              </p>
            </div>

            <div style={{ background: 'var(--canvas-cream)', padding: '1.8rem', borderRadius: '16px' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>🗣️</div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--teal-900)', marginBottom: '0.5rem' }}>Presentation &amp; Defense</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                Oral delivery adherence (8 mins talk + 2 mins Q&amp;A), quality of audio-visual slides or poster layout, and ability to defend findings before the panel.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Navigation CTAs */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/call-for-papers" className="btn-pill-orange">
              Submit Your Abstract &rarr;
            </Link>
            <Link href="/programme" className="btn-pill-primary">
              View Scientific Programme &rarr;
            </Link>
            <Link href="/sponsorship" className="btn-pill-outline">
              Explore Sponsorship Packages &rarr;
            </Link>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}
