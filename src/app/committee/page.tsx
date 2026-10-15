import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageFrame from '@/components/PageFrame';

export default function CommitteePage() {
  const patrons = [
    {
      name: 'Dr. Parul Patel',
      role: 'Vice President (Student Affairs & General Administration) & Chair Admissions Committee',
      inst: 'Parul University',
      image: '/images/committee/parul-patel.jpg',
      tag: 'PATRON',
      objectPosition: 'center 20%',
    },
    {
      name: 'Dr. Geetika Madan Patel',
      role: 'Vice President (Quality, Research & Health Sciences) & Medical Director',
      inst: 'Parul University',
      image: '/images/committee/geetika-patel.jpg',
      tag: 'PATRON',
      objectPosition: 'center 20%',
    },
    {
      name: 'Dr. Komal Patel',
      role: 'Vice President (Medical & Paramedical Health Sciences) & Medical Director',
      inst: 'Parul University',
      image: '/images/committee/komal-patel.jpg',
      tag: 'PATRON',
      objectPosition: 'center 16%',
    },
  ];

  const administrativeLeaders = [
    {
      name: 'Prof. (Dr.) K. N. Madhusoodanan',
      role: 'Provost',
      inst: 'Parul University',
      image: '/images/committee/kn-madhusoodanan.png',
      tag: 'CO-PATRON',
      scale: 1.35,
      translateY: '4%',
      objectPosition: 'center 20%',
    },
    {
      name: 'Dr. Kunjal Sinha',
      role: 'Pro Vice-Chancellor',
      inst: 'Parul University',
      image: '/images/committee/kunjal-sinha.jpg',
      tag: 'CO-PATRON',
      scale: 1.35,
      translateY: '4%',
      objectPosition: 'center 20%',
    },
    {
      name: 'Prof. Manish Pandya',
      role: 'Registrar',
      inst: 'Parul University',
      image: '/images/committee/manish-pandya.jpg',
      tag: 'CO-PATRON',
      scale: 1.1,
      translateY: '4%',
      objectPosition: 'center 20%',
    },
    {
      name: 'Mr. Dhruvil Shah',
      role: 'Chief Executive Officer (CEO)',
      inst: 'Parul University',
      image: '/images/committee/dhruvil-shah.jpg',
      tag: 'LEADERSHIP',
      scale: 1.4,
      translateY: '8%',
      objectPosition: 'center 20%',
    },
  ];

  const organizingLeaders = [
    {
      name: 'Dr. Seeta Devi Penta',
      title: 'Conference Chairperson & Convenor',
      role: 'Dean, Faculty of Nursing & Principal, Parul Institute of Nursing',
      inst: 'Parul University, Vadodara, Gujarat',
      contact: 'dean.pin@paruluniversity.ac.in',
      phone: '+91 96655 39533',
      tag: 'CHAIRPERSON',
    },
    {
      name: 'Dr. Devraj Singh Chouhan',
      title: 'Conference Co-Convenor',
      role: 'Principal, Parul Institute of Nursing and Research, Faculty of Nursing',
      inst: 'Parul University, Vadodara, Gujarat',
      contact: 'criticonn@paruluniversity.ac.in',
      phone: null,
      tag: 'CO-CONVENOR',
    },
    {
      name: 'Prof. Takhellambam Kiranmala Chanu',
      title: 'Conference Co-Convenor',
      role: 'Professor, Vice Principal & Head, Dept. of Obstetric & Gynaecological Nursing, PIN',
      inst: 'Parul University, Vadodara, Gujarat',
      contact: 'criticonn@paruluniversity.ac.in',
      phone: '+91 99975 31367',
      tag: 'CO-CONVENOR',
    },
    {
      name: 'Dr. Swapnil Rahane',
      title: 'Organizing Secretary',
      role: 'Associate Professor, Parul Institute of Nursing, Faculty of Nursing',
      inst: 'Parul University, Vadodara, Gujarat',
      contact: 'swapnil.rahane19680@paruluniversity.ac.in',
      phone: '+91 95112 39601',
      tag: 'ORGANIZING SECRETARY',
    },
  ];

  return (
    <PageFrame>
      <div className="content-container" style={{ paddingBottom: '5rem', paddingTop: '1.5rem' }}>
        <div className="section-headline-group">
          <span className="section-eyebrow">Institutional Governance</span>
          <h1 className="section-title">Conference Committee &amp; Leadership</h1>
          <p className="section-subtitle">
            Distinguished university leadership, visionary patrons, and academic convenors guiding PU – स्वास्थ्य NOVA 2027 towards excellence in smart nursing innovation.
          </p>
        </div>

        {/* Chief Patron Section */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: 'var(--teal-900)', marginBottom: '1.8rem' }}>
            Chief Patron
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="theme-card"
              style={{
                textAlign: 'center',
                maxWidth: '360px',
                width: '100%',
                padding: '2.8rem 2rem',
                background: '#FFFFFF',
                border: '2px solid var(--border-subtle)',
              }}
            >
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  margin: '0 auto 1.4rem',
                  overflow: 'hidden',
                  border: '5px solid var(--teal-700)',
                  boxShadow: '0 12px 28px rgba(16, 102, 102, 0.22)',
                }}
              >
                <Image
                  src="/images/committee/devanshu-patel.png"
                  alt="Dr. Devanshu Patel"
                  width={140}
                  height={140}
                  className="person-profile-img pos-chief-patron"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 12%' }}
                />
              </div>
              <span className="badge-tag dark" style={{ marginBottom: '0.8rem' }}>
                CHIEF PATRON
              </span>
              <h3 style={{ fontSize: '1.45rem', color: 'var(--teal-900)', marginBottom: '0.4rem' }}>
                Dr. Devanshu Patel
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '0.6rem' }}>
                President
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--teal-600)', fontWeight: '700' }}>
                🏛️ Parul University
              </p>
            </div>
          </div>
        </section>

        {/* Patrons Section */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: 'var(--teal-900)', marginBottom: '1.8rem' }}>
            Patrons
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              maxWidth: '1140px',
              margin: '0 auto',
            }}
          >
            {patrons.map((patron, idx) => (
              <div
                key={idx}
                className="theme-card"
                style={{
                  textAlign: 'center',
                  padding: '2.5rem 1.6rem',
                  background: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    margin: '0 auto 1.3rem',
                    overflow: 'hidden',
                    border: '4px solid var(--teal-600)',
                    boxShadow: '0 10px 24px rgba(16, 102, 102, 0.18)',
                  }}
                >
                  <Image
                    src={patron.image}
                    alt={patron.name}
                    width={130}
                    height={130}
                    className="person-profile-img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: patron.objectPosition || 'center 20%',
                    }}
                  />
                </div>
                <span className="badge-tag orange" style={{ marginBottom: '0.8rem', alignSelf: 'center' }}>
                  {patron.tag}
                </span>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--teal-900)', marginBottom: '0.4rem' }}>
                  {patron.name}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1rem', flex: 1 }}>
                  {patron.role}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--teal-600)', fontWeight: '700', marginTop: 'auto' }}>
                  🏛️ {patron.inst}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Administrative Leadership & Co-Patrons */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: 'var(--teal-900)', marginBottom: '1.8rem' }}>
            Management &amp; Administrative Leadership
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.8rem',
              maxWidth: '1180px',
              margin: '0 auto',
            }}
          >
            {administrativeLeaders.map((admin, idx) => (
              <div
                key={idx}
                className="theme-card"
                style={{
                  textAlign: 'center',
                  padding: '2.2rem 1.4rem',
                  background: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    margin: '0 auto 1.2rem',
                    overflow: 'hidden',
                    border: '4px solid var(--teal-600)',
                    boxShadow: '0 8px 20px rgba(16, 102, 102, 0.16)',
                    background: 'var(--canvas-cream)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {admin.image ? (
                    <Image
                      src={admin.image}
                      alt={admin.name}
                      width={120}
                      height={120}
                      className="person-profile-img"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: admin.objectPosition || 'center 20%',
                        transform: `scale(${admin.scale || 1.0}) translateY(${admin.translateY || '0%'})`,
                        transformOrigin: 'center',
                      }}
                    />
                  ) : (
                    <span style={{ fontSize: '2.5rem' }}>🏛️</span>
                  )}
                </div>
                <span className="badge-tag dark" style={{ marginBottom: '0.8rem', alignSelf: 'center' }}>
                  {admin.tag}
                </span>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--teal-900)', marginBottom: '0.4rem' }}>
                  {admin.name}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem', flex: 1 }}>
                  {admin.role}
                </p>
                <p style={{ fontSize: '0.82rem', color: 'var(--teal-600)', fontWeight: '700', marginTop: 'auto' }}>
                  🏛️ {admin.inst}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Conference Leadership & Organizing Convenors */}
        <section
          style={{
            background: 'var(--canvas-cream)',
            borderRadius: '28px',
            padding: '3.5rem 2.5rem',
            border: '1.5px solid var(--border-subtle)',
          }}
        >
          <div className="section-headline-group" style={{ marginBottom: '2.5rem' }}>
            <span className="section-eyebrow">Academic &amp; Operational Core</span>
            <h2 className="section-title">Conference Leadership &amp; Convenors</h2>
            <p className="section-subtitle">
              Official faculty leadership coordinating scientific abstracts, peer reviews, workshops, and registrations.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.8rem',
            }}
          >
            {organizingLeaders.map((org, idx) => (
              <div
                key={idx}
                className="theme-card"
                style={{
                  background: '#FFFFFF',
                  padding: '2rem 1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  borderLeft: '5px solid var(--teal-900)',
                }}
              >
                <span
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: '0.7rem',
                    fontWeight: '800',
                    background: org.tag === 'CHAIRPERSON' ? 'var(--orange-500)' : 'var(--teal-900)',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.7rem',
                    borderRadius: '9999px',
                    marginBottom: '0.8rem',
                  }}
                >
                  {org.tag}
                </span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--teal-900)', marginBottom: '0.3rem' }}>
                  {org.name}
                </h3>
                <p style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--teal-700)', marginBottom: '0.4rem' }}>
                  {org.title}
                </p>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1rem', flex: 1 }}>
                  {org.role} &bull; {org.inst}
                </p>

                <div
                  style={{
                    paddingTop: '0.8rem',
                    borderTop: '1px solid var(--border-subtle)',
                    fontSize: '0.8rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.3rem',
                  }}
                >
                  {org.phone && (
                    <span style={{ color: 'var(--text-body)' }}>
                      📞 <strong>Phone:</strong> {org.phone}
                    </span>
                  )}
                  <span style={{ color: 'var(--text-body)' }}>
                    ✉️ <strong>Email:</strong> <a href={`mailto:${org.contact}`} style={{ color: 'var(--orange-500)' }}>{org.contact}</a>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/venue-contact" className="btn-pill-primary">
              Contact Conference Secretariat &rarr;
            </Link>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
