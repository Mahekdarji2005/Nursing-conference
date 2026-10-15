import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageFrame from '@/components/PageFrame';

export default function AboutPage() {
  const confObjectives = [
    'Advance participants’ understanding of emerging trends in smart nursing, digital health, artificial intelligence, predictive analytics, and technology-enabled healthcare.',
    'Strengthen competencies in early detection, clinical surveillance, critical care, remote monitoring, and technology-supported clinical decision-making for safer and more effective patient care.',
    'Promote the integration of nursing science, clinical expertise, engineering, data science, and digital technologies in developing innovative and patient-centred healthcare solutions.',
    'Encourage the application of evidence-based, predictive, personalised, and digitally enabled care approaches across acute, critical, chronic, and community healthcare settings.',
    'Foster interdisciplinary and international collaboration in research, innovation, and responsible digital healthcare, with emphasis on patient safety, ethics, privacy, cybersecurity, and effective translation into clinical practice.',
  ];

  const workshopObjectives = [
    'Develop knowledge and practical understanding of smart healthcare technologies for early detection, patient monitoring, and clinical decision-making.',
    'Strengthen skills in integrating and interpreting EHR, laboratory, vital-sign, and clinical data for comprehensive patient assessment.',
    'Provide hands-on exposure to AI-assisted imaging and intelligent diagnostic technologies that support bedside nursing and clinical decision-making.',
    'Develop practical skills in the application of wearable devices, sensors, IoT, and smart monitoring systems in acute and critical care.',
    'Strengthen competencies in the early recognition of clinical deterioration, interpretation of alerts, and timely escalation of care.',
    'Integrate technology-generated information with nursing assessment, clinical reasoning, and professional judgment to support safe, evidence-based, and person-centred care.',
  ];

  return (
    <PageFrame>
      <div className="content-container" style={{ paddingBottom: '5rem', paddingTop: '1.5rem' }}>
        {/* Header Breadcrumb Banner */}
        <div className="section-headline-group" style={{ marginBottom: '3.5rem' }}>
          <span className="section-eyebrow">Institutional Background &amp; Vision</span>
          <h1 className="section-title">About PU – स्वास्थ्य NOVA 2027</h1>
          <p className="section-subtitle">
            An international platform advancing predictive, critical, and personalised healthcare through nursing-led digital innovation and interdisciplinary excellence.
          </p>
        </div>

        {/* Welcome Message Card */}
        <section
          className="theme-card"
          style={{
            background: '#FFFFFF',
            border: '2px solid var(--border-subtle)',
            padding: '3rem',
            marginBottom: '3.5rem',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="badge-tag orange" style={{ marginBottom: '0.8rem' }}>
                Welcome Address
              </span>
              <h2 style={{ fontSize: '2.1rem', color: 'var(--teal-900)', marginBottom: '1.2rem' }}>
                Message from the Vice President
              </h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '1rem' }}>
                &ldquo;It gives me immense pleasure to welcome all distinguished delegates, eminent speakers, researchers, healthcare professionals, academicians, innovators, and students to the International Conference on Smart Nursing and Healthcare Innovation, centered on the theme: <em>&lsquo;Smart nursing and healthcare innovation advancing predictive, critical and personalised care through AI, digital technologies and nursing-led multidisciplinary innovation&rsquo;</em>.&rdquo;
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '1rem' }}>
                &ldquo;Healthcare is undergoing a remarkable transformation driven by advances in artificial intelligence, digital health technologies, predictive analytics, clinical decision-support systems, and multidisciplinary innovation. Within this rapidly evolving environment, nursing professionals have an increasingly important role in translating technological advancement into compassionate, evidence-based, safe, and personalised patient care.&rdquo;
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                &ldquo;The Pre-Conference Workshop on <em>&lsquo;Smart nursing and digital healthcare: from early detection to critical care and clinical decision-making&rsquo;</em> will further provide participants with opportunities to explore contemporary approaches to early detection, patient monitoring, critical care, clinical data interpretation, and technology-supported decision-making.&rdquo;
              </p>
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--teal-900)' }}>
                  Dr. Geetika Madan Patel
                </strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Vice President (Quality, Research &amp; Health Sciences) &amp; Medical Director, Parul University
                </span>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '240px',
                  height: '240px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 1.5rem',
                  border: '6px solid var(--teal-100)',
                  boxShadow: '0 16px 36px rgba(15, 61, 62, 0.15)',
                }}
              >
                <Image
                  src="/images/committee/geetika-patel.jpg"
                  alt="Dr. Geetika Madan Patel"
                  width={240}
                  height={240}
                  className="person-profile-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 8%' }}
                />
              </div>
              <span className="badge-tag dark">Patron &bull; Parul University</span>
            </div>
          </div>
        </section>

        {/* Institutional Background Cards: About University & About Faculty */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem',
          }}
        >
          <div className="theme-card" style={{ background: '#FFFFFF' }}>
            <span className="badge-tag dark" style={{ marginBottom: '1rem' }}>
              Host University
            </span>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--teal-900)', marginBottom: '1rem' }}>
              About Parul University
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '1rem' }}>
              Parul University, located in Vadodara, Gujarat, is a leading multidisciplinary private university committed to excellence in education, research, innovation, entrepreneurship, healthcare, technology, and global engagement. Accredited with the prestigious <strong>NAAC A++ Grade</strong> and recognised by the UGC as a <strong>Category-1 University with Graded Autonomy</strong>, the University has also been notified as a Centre of Excellence by the Government of Gujarat.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1rem' }}>
              Under the leadership of <strong>Dr. Devanshu Patel</strong>, President, Parul University serves over <strong>70,000+ students</strong>, including 6,000+ international students from 75+ countries. Ranked in the <strong>Top 50 in India for Innovation</strong> (NIRF 2025) and holding 4/4 Stars from MoE&apos;s IIC.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: '1.2rem' }}>
              <span className="badge-tag orange">Top 50 NIRF Innovation</span>
              <span className="badge-tag">QS Diamond Rated</span>
              <span className="badge-tag">OBE Platinum+</span>
            </div>
          </div>

          <div className="theme-card" style={{ background: '#FFFFFF' }}>
            <span className="badge-tag orange" style={{ marginBottom: '1rem' }}>
              Organizing Faculty
            </span>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--teal-900)', marginBottom: '1rem' }}>
              Faculty of Nursing
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '1rem' }}>
              The Faculty of Nursing, Parul University, is committed to excellence in nursing education, clinical practice, research, and innovation, preparing competent and globally responsive nursing professionals. Offering programmes from ANM and GNM to B.Sc. Nursing, Post Basic B.Sc. Nursing, M.Sc. Nursing, and Ph.D. education.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.2rem' }}>
              Clinical education is backed by the comprehensive <strong>1,100-bedded Parul Sevashram Hospital</strong>, the <strong>Pragya Advanced Skills &amp; Simulation Center</strong>, and active community outreach programmes, fostering clinical excellence and technology integration.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: '1.2rem' }}>
              <span className="badge-tag dark">1,100-Bed Hospital</span>
              <span className="badge-tag">Pragya Simulation Center</span>
              <span className="badge-tag orange">Ph.D. Research</span>
            </div>
          </div>
        </section>

        {/* Objectives Section: Conference & Pre-Conference Workshop */}
        <section
          style={{
            background: 'var(--canvas-cream)',
            borderRadius: '28px',
            padding: '3.5rem 2.5rem',
            border: '1.5px solid var(--border-subtle)',
            marginBottom: '3.5rem',
          }}
        >
          <div className="section-headline-group" style={{ marginBottom: '2.5rem' }}>
            <span className="section-eyebrow">Strategic Goals</span>
            <h2 className="section-title">Conference &amp; Workshop Objectives</h2>
            <p className="section-subtitle">
              Equipping nurses and healthcare leaders with actionable competencies in artificial intelligence, clinical surveillance, and patient-centred care models.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {/* Conference Objectives */}
            <div className="theme-card" style={{ background: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🎯</span>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--teal-900)' }}>
                  Main Conference Objectives
                </h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {confObjectives.map((obj, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                    <span style={{ color: 'var(--orange-500)', fontWeight: '800' }}>{i + 1}.</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Workshop Objectives */}
            <div className="theme-card" style={{ background: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🛠️</span>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--teal-900)' }}>
                  Pre-Conference Workshop Objectives
                </h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {workshopObjectives.map((wObj, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                    <span style={{ color: 'var(--teal-600)', fontWeight: '800' }}>{i + 1}.</span>
                    <span>{wObj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation CTAs */}
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/committee" className="btn-pill-primary">
              View Organizing Committee &rarr;
            </Link>
            <Link href="/tracks" className="btn-pill-orange">
              Explore 10 Scientific Tracks &rarr;
            </Link>
            <Link href="/programme" className="btn-pill-outline">
              Review Programme Schedule &rarr;
            </Link>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}
