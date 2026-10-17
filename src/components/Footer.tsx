import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      id="site-footer"
      style={{
        background: 'var(--teal-950)',
        color: 'rgba(255, 255, 255, 0.85)',
        padding: '3.5rem 2.5rem 2rem',
        borderTop: '2px solid rgba(255, 255, 255, 0.08)',
        marginTop: 'auto',
      }}
    >
      <div className="content-container" style={{ padding: 0 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {/* Col 1: Conference Title & Theme */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ maxWidth: '190px' }}>
                <Image
                  src="/Criticonn_Logo.png"
                  alt="PU’s Criticonn"
                  width={987}
                  height={313}
                  style={{
                    height: '44px',
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: '#FFFFFF', fontWeight: '700' }}>
                PU’s Criticonn 2027
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '1.2rem' }}>
              International Conference on Smart Nursing and Healthcare Innovation
            </p>
            <p style={{ fontSize: '0.8rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.6)' }}>
              <em>&ldquo;Advancing Predictive, Critical and Personalised Care Through AI, Digital Technologies and Nursing-Led Multidisciplinary Innovation.&rdquo;</em>
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '0.5px' }}>
              Conference Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.85rem' }}>
              <li><Link href="/" style={{ color: 'rgba(255,255,255,0.8)' }}>Home Overview</Link></li>
              <li><Link href="/about" style={{ color: 'rgba(255,255,255,0.8)' }}>About & Objectives</Link></li>
              <li><Link href="/tracks" style={{ color: 'rgba(255,255,255,0.8)' }}>10 Scientific Tracks</Link></li>
              <li><Link href="/programme" style={{ color: 'rgba(255,255,255,0.8)' }}>Programme Schedule</Link></li>
              <li><Link href="/speakers" style={{ color: 'rgba(255,255,255,0.8)' }}>Keynote Speakers</Link></li>
              <li><Link href="/committee" style={{ color: 'rgba(255,255,255,0.8)' }}>Organizing Committee</Link></li>
            </ul>
          </div>

          {/* Col 3: Participation & Submission */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '0.5px' }}>
              Delegate & Author Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.85rem' }}>
              <li><Link href="/call-for-papers" style={{ color: 'rgba(255,255,255,0.8)' }}>Call for Abstracts & Format</Link></li>
              <li><Link href="/registration" style={{ color: 'rgba(255,255,255,0.8)' }}>Registration Fees & Matrix</Link></li>
              <li><Link href="/awards" style={{ color: 'rgba(255,255,255,0.8)' }}>Scientific Awards</Link></li>
              <li><Link href="/venue" style={{ color: 'rgba(255,255,255,0.8)' }}>Venue &amp; Directions</Link></li>
              <li><Link href="/contact" style={{ color: 'rgba(255,255,255,0.8)' }}>Secretariat &amp; Contact</Link></li>
            </ul>
          </div>

          {/* Col 4: Venue & Official Contact */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '0.5px' }}>
              Conference Secretariat
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.6', marginBottom: '0.8rem' }}>
              <strong>Medical Auditorium</strong><br />
              Parul University Campus<br />
              P.O. Limda, Tal. Waghodia, Vadodara, Gujarat 391760, India
            </p>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.75)' }}>
              ✉️ Email: <a href="mailto:criticonn@paruluniversity.ac.in" style={{ color: 'var(--orange-400)' }}>criticonn@paruluniversity.ac.in</a>
            </p>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '0.3rem' }}>
              📞 Secretary: +91 95112 39601
            </p>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.55)',
          }}
        >
          <div>
            <p style={{ marginBottom: '0.35rem' }}>
              &copy; 2027 Parul University &amp; Faculty of Nursing. All Rights Reserved.
            </p>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
              Designed and Developed by{' '}
              <a
                href="https://www.linkedin.com/in/mahek-darji-521651303/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--orange-400)',
                  fontWeight: '600',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                Mahek Darji
              </a>{' '}
              and{' '}
              <a
                href="https://www.linkedin.com/in/nipun-kulshrestha-816604288/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--orange-400)',
                  fontWeight: '600',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                Nipun Kulshrestha
              </a>
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span>NAAC A++ Grade</span>
            <span>UGC Category-1 Autonomous</span>
            <span>Top 50 NIRF Innovation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
