import React from 'react';
import Link from 'next/link';
import PageFrame from '@/components/PageFrame';

export default function TracksPage() {
  const tracks = [
    {
      id: '01',
      title: 'Artificial Intelligence, Machine Learning & Predictive Healthcare',
      desc: 'AI-enabled healthcare, machine learning, predictive analytics, risk prediction, disease forecasting, intelligent screening, and AI-assisted clinical care.',
      topics: ['Predictive risk modeling', 'AI-assisted diagnosis', 'Machine learning algorithms', 'Clinical prognostic tools'],
    },
    {
      id: '02',
      title: 'Smart Nursing, Nursing Informatics & Digital Transformation',
      desc: 'Nursing informatics, smart nursing practices, digital nursing documentation, AI-supported nursing care, nursing-led innovation, digital competency, and technology-enabled nursing education.',
      topics: ['Digital bedside documentation', 'Smart nursing workflows', 'Informatics curricula', 'Simulation in education'],
    },
    {
      id: '03',
      title: 'Digital Health, Telehealth, IoMT, Wearables & Remote Patient Monitoring',
      desc: 'Telemedicine, mobile health, Internet of Medical Things, wearable technologies, remote monitoring, digital therapeutics, virtual care, and connected healthcare systems.',
      topics: ['IoMT sensor platforms', 'Virtual care clinics', 'Ambulatory cardiac monitoring', 'mHealth adherence'],
    },
    {
      id: '04',
      title: 'Biomedical Imaging, Intelligent Diagnostics & Clinical Decision Support',
      desc: 'AI-assisted imaging, intelligent diagnostic systems, clinical decision-support technologies, point-of-care diagnostics, automated interpretation, and precision diagnostics.',
      topics: ['Point-of-care ultrasound (POCUS)', 'Automated chest X-ray reading', 'Bedside optical sensors', 'Diagnostic validation'],
    },
    {
      id: '05',
      title: 'Smart Critical Care, Emergency Medicine & Early Warning Systems',
      desc: 'Critical-care technologies, emergency-care innovations, early warning scores, patient deterioration prediction, smart ICUs, rapid response systems, resuscitation science, and acute-care decision support.',
      topics: ['Early Warning Scores (EWS)', 'Smart ICU alarms', 'Sepsis early alerts', 'Resuscitation telemetry'],
    },
    {
      id: '06',
      title: 'Personalised Digital Care for Cardiovascular, Neurological & Chronic Diseases',
      desc: 'Personalised care pathways, cardiovascular and stroke technologies, neurological monitoring, chronic disease management, rehabilitation technologies, digital follow-up, and predictive care models.',
      topics: ['Stroke rapid care workflows', 'Hypertension & diabetes portals', 'Digital cardiac rehab', 'Neuro-monitoring'],
    },
    {
      id: '07',
      title: 'Smart Maternal, Newborn, Child, Mental Health & Healthy Ageing Technologies',
      desc: 'Maternal and newborn monitoring, paediatric innovations, digital mental-health interventions, behavioural technologies, geriatric care, healthy ageing, and technology-supported family-centred care.',
      topics: ['Fetal heart rate analytics', 'Neonatal smart incubators', 'Digital CBT apps', 'Fall detection for elders'],
    },
    {
      id: '08',
      title: 'Biomedical Engineering, Medical Devices, Robotics & Assistive Healthcare Technologies',
      desc: 'Innovative medical devices, biomedical engineering solutions, healthcare robotics, rehabilitation devices, simulation technologies, assistive technologies, prototypes, and healthcare product innovation.',
      topics: ['Robotic assistive mobility', 'Haptic simulation', 'Low-cost clinical devices', 'Exoskeletons in rehab'],
    },
    {
      id: '09',
      title: 'Healthcare Data Science, Electronic Health Records & Intelligent Health Systems',
      desc: 'Healthcare analytics, electronic health records, big data, interoperability, clinical data integration, smart hospital systems, health-information systems, and population-health analytics.',
      topics: ['FHIR / HL7 interoperability', 'EHR clinical workflow integration', 'Big data epidemiological models', 'Hospital dashboards'],
    },
    {
      id: '10',
      title: 'Responsible AI, Cybersecurity, Privacy, Ethics & Governance in Digital Healthcare',
      desc: 'Ethical AI, patient privacy, cybersecurity, responsible innovation, algorithmic transparency, data protection, regulatory considerations, digital-health governance, and safe adoption of emerging technologies.',
      topics: ['HIPAA / DISHA privacy standards', 'Algorithmic bias mitigation', 'Cybersecurity in hospital networks', 'Ethical AI oversight'],
    },
  ];

  return (
    <PageFrame>
      <div className="content-container" style={{ paddingBottom: '5rem', paddingTop: '1.5rem' }}>
        <div className="section-headline-group">
          <span className="section-eyebrow">Academic Scope &amp; Taxonomy</span>
          <h1 className="section-title">10 Official Scientific Thematic Tracks</h1>
          <p className="section-subtitle">
            Researchers, scholars, nursing clinicians, engineers, and healthcare innovators are invited to submit abstracts and full manuscripts across ten multidisciplinary domains.
          </p>
        </div>

        {/* Tracks Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
          }}
        >
          {tracks.map((track) => (
            <div
              key={track.id}
              className="theme-card"
              style={{
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                padding: '2.4rem 2rem',
                borderTop: '5px solid var(--teal-900)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: '800',
                    background: 'var(--orange-100)',
                    color: 'var(--orange-600)',
                    padding: '0.3rem 0.85rem',
                    borderRadius: '9999px',
                  }}
                >
                  TRACK {track.id}
                </span>

                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                  Oral Paper &bull; Poster
                </span>
              </div>

              <h2 style={{ fontSize: '1.35rem', color: 'var(--teal-900)', marginBottom: '0.9rem', lineHeight: '1.3' }}>
                {track.title}
              </h2>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {track.desc}
              </p>

              {/* Sample Sub-topics */}
              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <strong style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--teal-700)', letterSpacing: '0.5px', display: 'block', marginBottom: '0.5rem' }}>
                  Key Sub-Domains:
                </strong>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {track.topics.map((top, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.75rem',
                        background: 'var(--canvas-cream)',
                        color: 'var(--teal-900)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px',
                        fontWeight: '500',
                      }}
                    >
                      {top}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <Link
                  href="/call-for-papers"
                  className="btn-pill-outline"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem' }}
                >
                  Submit Abstract for Track {track.id} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call for Papers Linkage Box */}
        <section
          style={{
            background: 'var(--canvas-cream)',
            borderRadius: '24px',
            padding: '3rem 2rem',
            textAlign: 'center',
            border: '1.5px solid var(--border-subtle)',
          }}
        >
          <span className="badge-tag dark" style={{ marginBottom: '1rem' }}>
            Abstract Submissions Open
          </span>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--teal-900)', marginBottom: '0.8rem' }}>
            Ready to Submit Your Research?
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto 1.8rem', lineHeight: '1.6' }}>
            Review our structured abstract guidelines (max 250 words, similarity &lt; 10%), presentation formats, and important deadlines.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/call-for-papers" className="btn-pill-orange">
              Review Abstract Guidelines &rarr;
            </Link>
            <Link href="/registration" className="btn-pill-primary">
              Registration Fee Details &rarr;
            </Link>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
