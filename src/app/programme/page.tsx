'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageFrame from '@/components/PageFrame';

export default function ProgrammePage() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  const workshops = [
    {
      time: '08:30 – 09:00 AM',
      title: 'Participant Registration, Networking & Breakfast',
      lead: 'Secretariat & Hospitality Team',
      desc: 'Distribution of workshop delegate kits, badge collection, and breakfast.',
      type: 'registration',
    },
    {
      time: '09:00 – 10:00 AM',
      title: 'WORKSHOP I — From Patient Data to Bedside Decisions: Advancing Evidence-Based Nursing and Clinical Care',
      lead: 'Dr. Sheela Durai (CMC Vellore) & Dr. Ramji Gupta (PIET, Parul University)',
      desc: 'EHR, laboratory, vital-sign, and clinical data integration for pattern recognition and bedside decision-making.',
      type: 'workshop',
    },
    {
      time: '10:00 – 11:00 AM',
      title: 'WORKSHOP II — Intelligent Imaging in Smart Nursing: From Visual Detection to Clinical Decision-Making',
      lead: 'Venkateswarlu Gonuguntla (Alliance University) & Prof. (Dr.) Harmeet Kaur Kang (Chitkara University)',
      desc: 'AI-assisted X-ray, CT, ultrasound, and bedside imaging technologies supporting nursing assessment and acute/critical care triage.',
      type: 'workshop',
    },
    {
      time: '11:00 – 11:15 AM',
      title: 'Tea Break & Networking',
      lead: 'Delegates & Resource Persons',
      desc: 'Mid-morning tea and informal multidisciplinary interactions.',
      type: 'break',
    },
    {
      time: '11:15 AM – 12:15 PM',
      title: 'WORKSHOP III — Smart Monitoring in Critical Care Nursing: Real-Time Data to Early Recognition and Timely Intervention',
      lead: 'Prof. Dr. Anil Sharma (MTIN, CHARUSAT) & Harikrishnan Ramachandran (SIT Pune)',
      desc: 'Wearables, telemetry, IoT sensors, smart alarm optimization; interpreting clinical trends and early deterioration signals.',
      type: 'workshop',
    },
    {
      time: '12:15 – 01:00 PM',
      title: 'Lunch Break & Exhibition Viewing',
      lead: 'Delegates & Industry Partners',
      desc: 'Buffet lunch at University dining facility & exhibition networking.',
      type: 'break',
    },
    {
      time: '01:00 – 02:00 PM',
      title: 'WORKSHOP IV — Smart Nursing Surveillance: Early Recognition and Response to Clinical Deterioration',
      lead: 'Prof. (Dr.) Ketki Pathak (SCET Surat) & Dr. Shilpa Bade-Gite (University of York, Mumbai)',
      desc: 'Physiological trends, Early Warning Scores (EWS/MEWS), automated telemetry alerts, rapid response team escalation protocols.',
      type: 'workshop',
    },
    {
      time: '02:00 – 03:30 PM',
      title: 'WORKSHOP V — Human-Technology Integration: Smart Healthcare with Nursing and Clinical Judgment',
      lead: 'Prof. Wang Wenru (National University of Singapore) & Dr. Sukhpal Kaur (NINE, PGIMER Chandigarh)',
      desc: 'Interactive high-fidelity simulation balancing patient assessment, clinical intuition, real-time telemetry, and automated alerts.',
      type: 'workshop',
    },
    {
      time: '03:30 – 03:45 PM',
      title: 'Tea Break & Networking',
      lead: 'Delegates & Faculty',
      desc: 'Afternoon tea and peer feedback exchange.',
      type: 'break',
    },
    {
      time: '03:45 – 04:00 PM',
      title: 'Key Takeaways, Feedback & Closing Remarks',
      lead: 'Workshop Organizing Committee',
      desc: 'Summary of clinical competencies acquired, participant feedback, and pre-conference certificate orientation.',
      type: 'valedictory',
    },
  ];

  const mainConferenceSessions = [
    {
      time: '08:00 – 09:00 AM',
      title: 'Delegate Registration & Morning Tea',
      speakers: 'Secretariat Team',
      chair: null,
      desc: 'Conference kit collection, badge verification, and networking.',
      type: 'registration',
    },
    {
      time: '09:00 – 09:45 AM',
      title: 'Scientific Session 01: The Digital Heart — Advancing Nursing Research and Evidence for Early Detection & Personalized Cardiovascular Care',
      speakers: 'Prof. Wang Wenru (Alice Lee Centre for Nursing Studies, NUS, Singapore)',
      chair: 'Session Chair: Dr. Hemant Kumar Patadia (Principal, PIAHS, Parul University)',
      desc: 'Keynote exploration of AI in telemetry, cardiac risk prediction, and nurse-led preventive management.',
      type: 'keynote',
    },
    {
      time: '09:45 – 10:30 AM',
      title: 'Scientific Session 02: Precision Oncology Nursing — Next-Gen Evidence for Early Detection & Personalized Cancer Care',
      speakers: 'Dr. Kiran R. Amin (Deputy Pro VC & Executive Dean, Ganpat University)',
      chair: 'Session Chair: Dr. Anita Prakashan (Dean, Faculty of Nursing, Sumandeep Vidyapeeth)',
      desc: 'Next-generation biomarker telemetry, intelligent symptom management, and patient-tailored oncology support.',
      type: 'keynote',
    },
    {
      time: '10:30 – 10:45 AM',
      title: 'Tea Break & Academic Networking',
      speakers: 'Delegates & Dignitaries',
      chair: null,
      desc: 'Informal networking break.',
      type: 'break',
    },
    {
      time: '10:45 – 11:30 AM',
      title: 'Official Inauguration Ceremony',
      speakers: 'Chief Patron Dr. Devanshu Patel, Patrons Dr. Parul Patel, Dr. Geetika Madan Patel, Dr. Komal Patel, Provost Prof. K. N. Madhusoodanan',
      chair: 'Dean Dr. Seeta Devi Penta & Convenors',
      desc: 'Lamp lighting, ceremonial address, release of Conference Compendium / Abstract Proceedings.',
      type: 'inauguration',
    },
    {
      time: '11:30 AM – 12:00 PM',
      title: 'Scientific Session 03: Time Is Brain — Smart Nursing and Next-Gen Evidence for Early Recognition & Rapid Stroke Care',
      speakers: 'Venkateswarlu Gonuguntla, Ph.D. (Quantum AI School, Alliance University)',
      chair: 'Session Chair: Dr. Satish Biradar (P. P. Savani University, Surat)',
      desc: 'Stroke recognition algorithms, rapid triage workflows, and acute telemetry protocols.',
      type: 'session',
    },
    {
      time: '12:00 – 12:45 PM',
      title: 'Scientific Session 04: Smart Nursing in Diabetes Care — Digital Innovation for Early Detection, Prediction and Personalised Management',
      speakers: 'Prof. (Dr.) Harmeet Kaur Kang (Director, Chitkara School of Health Sciences)',
      chair: 'Session Chair: Dr. Ravindra H. N (Dean, ITM SLS Baroda University)',
      desc: 'Continuous glucose monitoring, automated insulin titration support, and digital self-management portals.',
      type: 'session',
    },
    {
      time: '12:45 – 01:30 PM',
      title: 'Scientific Session 05: Smart Maternal & Newborn Care — Next-Gen Nursing & Midwifery Evidence for Risk Prediction and Personalised Midwifery Care',
      speakers: 'Prof. (Dr.) Lilly Podder (AIIMS Bhopal)',
      chair: 'Session Chair: Dr. Seeta Devi Penta (Dean, Faculty of Nursing, Parul University)',
      desc: 'High-risk obstetric prediction, intrapartum digital monitoring, and neonatal resuscitation telemetry.',
      type: 'session',
    },
    {
      time: '01:30 – 02:15 PM',
      title: 'Lunch Break & Industry Exhibition Showcase',
      speakers: 'Delegates & Sponsors',
      chair: null,
      desc: 'Networking lunch and medical technology exhibition viewing.',
      type: 'break',
    },
    {
      time: '02:15 – 03:45 PM',
      title: 'Parallel Scientific Presentations: Oral Papers & Poster Presentations',
      speakers: 'Peer-Reviewed Abstract Presenters & Researchers across 10 Tracks',
      chair: 'Scientific Jury Panels',
      desc: 'Oral Papers: Seminar Hall (3rd Floor, Medical College) | Scientific Posters: Medical Auditorium.',
      type: 'parallel',
    },
    {
      time: '02:15 – 03:00 PM',
      title: 'Scientific Session 06: Breathing Smarter — Connected Technologies for Predictive & Personalised Respiratory Nursing Care',
      speakers: 'Dr. Shilpa Bade-Gite (Professor of Computer Science, University of York, Mumbai)',
      chair: 'Session Chair: Ms. Indravati Pandey (Principal, Government College of Nursing, Surat)',
      desc: 'Smart ventilatory management, COPD prediction algorithms, and remote respiratory therapy.',
      type: 'session',
    },
    {
      time: '03:00 – 03:45 PM',
      title: 'Scientific Session 07: Ageing Smarter — Digital Innovation and Nursing Evidence for Healthy, Independent and Person-Centred Ageing',
      speakers: 'Prof. Dr. Miyuki Ishibashi (Vice Dean, Graduate School of Nursing, Chiba University, Japan)',
      chair: 'Session Chair: Dr. Siddaram Sarate (Principal, College of Nursing, CVM University)',
      desc: 'Geriatric assistive robotics, dementia cognitive sensors, and independent ageing technologies.',
      type: 'session',
    },
    {
      time: '03:45 – 04:00 PM',
      title: 'Tea Break',
      speakers: 'Delegates',
      chair: null,
      desc: 'Short tea refreshment break.',
      type: 'break',
    },
    {
      time: '04:00 – 04:45 PM',
      title: 'Scientific Session 08: Next-Generation Mental Health Nursing — Digital Innovation for Early Detection and Personalised Care',
      speakers: 'Dr. Vithoba Narayan Mhalkar (Institute of Psychiatry & Human Behaviour, Bambolim, Goa)',
      chair: 'Session Chair: Dr. Nivedita Gupta (PIAHS, Parul University)',
      desc: 'Digital psychiatric therapeutics, mood surveillance apps, and evidence-based mental healthcare.',
      type: 'session',
    },
    {
      time: '04:45 – 05:00 PM',
      title: 'Scientific Paper & Poster Award Distribution & Valedictory Session',
      speakers: 'Conference Patronage, Organizing Committee & Invited Dignitaries',
      chair: 'Dr. Seeta Devi Penta & Dr. Swapnil Rahane',
      desc: 'Announcement of Best Oral Paper Awards, Best Poster Awards, Smart Innovation Award (₹37,000 in total prizes), and Valedictory Address.',
      type: 'valedictory',
    },
  ];

  return (
    <PageFrame>
      <div className="content-container" style={{ paddingBottom: '5rem', paddingTop: '1.5rem' }}>
        <div className="section-headline-group">
          <span className="section-eyebrow">Itinerary &amp; Timeline</span>
          <h1 className="section-title">Scientific Programme &amp; Schedule</h1>
          <p className="section-subtitle">
            Two intensive days spanning 5 hands-on clinical workshops, 8 keynote sessions, parallel oral &amp; poster presentations, and awards.
          </p>
        </div>

        {/* Day Selector Pill Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <div
            style={{
              background: '#FFFFFF',
              border: '1.5px solid var(--border-subtle)',
              borderRadius: '9999px',
              padding: '0.4rem',
              display: 'inline-flex',
              gap: '0.4rem',
              boxShadow: '0 8px 24px rgba(15, 61, 62, 0.06)',
            }}
          >
            <button
              type="button"
              onClick={() => setActiveDay('day1')}
              style={{
                background: activeDay === 'day1' ? 'var(--teal-900)' : 'transparent',
                color: activeDay === 'day1' ? '#FFFFFF' : 'var(--teal-900)',
                border: 'none',
                borderRadius: '9999px',
                padding: '0.75rem 1.8rem',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              📅 Day 1 — 18 Feb 2027 (Pre-Conference Workshops)
            </button>

            <button
              type="button"
              onClick={() => setActiveDay('day2')}
              style={{
                background: activeDay === 'day2' ? 'var(--teal-900)' : 'transparent',
                color: activeDay === 'day2' ? '#FFFFFF' : 'var(--teal-900)',
                border: 'none',
                borderRadius: '9999px',
                padding: '0.75rem 1.8rem',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              🌟 Day 2 — 19 Feb 2027 (Main Scientific Conference)
            </button>
          </div>
        </div>

        {/* Day 1: Pre-Conference Workshop Schedule */}
        {activeDay === 'day1' && (
          <section>
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '2rem 2.5rem',
                border: '1.5px solid var(--border-subtle)',
                marginBottom: '2.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <span className="badge-tag orange" style={{ marginBottom: '0.5rem' }}>
                  Pre-Conference Workshop Theme
                </span>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--teal-900)' }}>
                  Smart Nursing and Digital Healthcare: From Early Detection to Critical Care and Clinical Decision-Making
                </h2>
              </div>
              <div style={{ textAlign: 'right' }}>
                <strong style={{ color: 'var(--teal-900)', display: 'block', fontSize: '0.95rem' }}>
                  📍 Medical College Auditorium
                </strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Parul University, Vadodara, Gujarat
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {workshops.map((item, idx) => (
                <div
                  key={idx}
                  className="theme-card"
                  style={{
                    background: item.type === 'break' ? 'var(--canvas-cream)' : '#FFFFFF',
                    padding: '1.8rem 2rem',
                    borderLeft: item.type === 'workshop' ? '5px solid var(--teal-900)' : item.type === 'valedictory' ? '5px solid var(--orange-500)' : '5px solid var(--border-subtle)',
                    display: 'grid',
                    gridTemplateColumns: '180px 1fr',
                    gap: '1.5rem',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--orange-500)', display: 'block' }}>
                      {item.time}
                    </span>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        color: 'var(--teal-700)',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {item.type}
                    </span>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--teal-900)', marginBottom: '0.3rem', lineHeight: '1.3' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--teal-700)', marginBottom: '0.4rem' }}>
                      👨‍🏫 Lead: {item.lead}
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Day 2: Main Scientific Conference Schedule */}
        {activeDay === 'day2' && (
          <section>
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '2rem 2.5rem',
                border: '1.5px solid var(--border-subtle)',
                marginBottom: '2.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <span className="badge-tag dark" style={{ marginBottom: '0.5rem' }}>
                  Main Scientific Conference
                </span>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--teal-900)' }}>
                  Advancing Predictive, Critical and Personalised Care Through AI &amp; Nursing Innovation
                </h2>
              </div>
              <div style={{ textAlign: 'right' }}>
                <strong style={{ color: 'var(--teal-900)', display: 'block', fontSize: '0.95rem' }}>
                  📍 Medical College Auditorium &amp; Seminar Hall
                </strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Parul University, Vadodara, Gujarat
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {mainConferenceSessions.map((session, idx) => (
                <div
                  key={idx}
                  className="theme-card"
                  style={{
                    background: session.type === 'inauguration' ? 'var(--teal-50)' : session.type === 'break' ? 'var(--canvas-cream)' : '#FFFFFF',
                    padding: '1.8rem 2rem',
                    borderLeft: session.type === 'inauguration' ? '5px solid var(--orange-500)' : session.type === 'keynote' ? '5px solid var(--teal-900)' : session.type === 'valedictory' ? '5px solid var(--orange-500)' : '5px solid var(--teal-600)',
                    display: 'grid',
                    gridTemplateColumns: '180px 1fr',
                    gap: '1.5rem',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--orange-500)', display: 'block' }}>
                      {session.time}
                    </span>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        color: 'var(--teal-700)',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {session.type}
                    </span>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--teal-900)', marginBottom: '0.35rem', lineHeight: '1.3' }}>
                      {session.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--teal-700)', marginBottom: '0.2rem' }}>
                      🎤 Speaker: {session.speakers}
                    </p>
                    {session.chair && (
                      <p style={{ fontSize: '0.82rem', fontWeight: '500', color: 'var(--orange-600)', marginBottom: '0.3rem' }}>
                        ⚖️ {session.chair}
                      </p>
                    )}
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                      {session.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Footer */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/registration" className="btn-pill-orange">
              Register for Conference &amp; Workshop &rarr;
            </Link>
            <Link href="/speakers" className="btn-pill-primary">
              View Keynote Speaker Biographies &rarr;
            </Link>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}
