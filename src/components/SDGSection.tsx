import React from 'react';
import Image from 'next/image';

interface SDGSectionProps {
  compact?: boolean;
}

export default function SDGSection({ compact = false }: SDGSectionProps) {
  const sdgs = [
    {
      id: 'sdg-3',
      number: '03',
      name: 'Good Health & Well-Being',
      iconSrc: '/images/sdg/E_WEB_03.png',
      focus: 'Advancing predictive critical care, intelligent diagnostics, and patient safety.',
    },
    {
      id: 'sdg-4',
      number: '04',
      name: 'Quality Education',
      iconSrc: '/images/sdg/E_WEB_04.png',
      focus: 'Empowering nursing professionals through digital informatics and simulation training.',
    },
    {
      id: 'sdg-9',
      number: '09',
      name: 'Industry, Innovation & Infrastructure',
      iconSrc: '/images/sdg/E_WEB_09.png',
      focus: 'Fostering healthcare AI, IoMT wearables, and smart hospital technologies.',
    },
    {
      id: 'sdg-17',
      number: '17',
      name: 'Partnerships for the Goals',
      iconSrc: '/images/sdg/E_WEB_17.png',
      focus: 'Building multidisciplinary international collaboration across academia and clinicians.',
    },
  ];

  if (compact) {
    return (
      <div style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--teal-900)' }}>
            Aligned UN Sustainable Development Goals
          </span>
          <span style={{ fontSize: '0.72rem', color: 'var(--orange-500)', fontWeight: '700' }}>• Official UN Targets</span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0.85rem',
            maxWidth: '480px',
          }}
        >
          {sdgs.map((sdg) => (
            <div
              key={sdg.id}
              className="sdg-card-item"
              title={`SDG ${sdg.number}: ${sdg.name}`}
            >
              <Image
                src={sdg.iconSrc}
                alt={`UN Sustainable Development Goal ${sdg.number} - ${sdg.name}`}
                width={120}
                height={120}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  aspectRatio: '1/1',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section style={{ margin: '3.5rem 0' }}>
      <div className="section-headline-group">
        <span className="section-eyebrow">UN Agenda 2030 Alignment</span>
        <h2 className="section-title">Official Sustainable Development Goals</h2>
        <p className="section-subtitle">
          PU – स्वास्थ्य NOVA 2027 directly aligns its scientific tracks, clinical workshops, and research presentations with four official United Nations Sustainable Development Goals.
        </p>
      </div>

      <div className="sdg-grid-box">
        {sdgs.map((sdg) => (
          <div
            key={sdg.id}
            className="theme-card"
            style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              borderTop: '4px solid var(--teal-700)',
            }}
          >
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                marginBottom: '1.2rem',
                flexShrink: 0,
              }}
            >
              <Image
                src={sdg.iconSrc}
                alt={`UN Sustainable Development Goal ${sdg.number} - ${sdg.name}`}
                width={100}
                height={100}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: '800',
                background: 'var(--canvas-cream)',
                color: 'var(--teal-900)',
                padding: '0.2rem 0.6rem',
                borderRadius: '9999px',
                marginBottom: '0.5rem',
              }}
            >
              SDG {sdg.number}
            </span>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--teal-900)', marginBottom: '0.6rem', lineHeight: '1.3' }}>
              {sdg.name}
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.5', marginTop: 'auto' }}>
              {sdg.focus}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
