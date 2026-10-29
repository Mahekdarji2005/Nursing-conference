'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageFrame from '@/components/PageFrame';

export default function SpeakersPage() {
  interface SpeakerItem {
    name: string;
    category: string;
    designation: string;
    chair: string | null;
    affiliation: string;
    session: string | null;
    workshop: string | null;
    initials: string;
    image: string | null;
    scale?: number;
    objectPosition?: string;
  }

  const speakers: SpeakerItem[] = [
    {
      name: 'Ms. Viktorija Kielė',
      category: 'Conference Speaker',
      designation: 'Lecturer,\nFaculty of Health Care',
      chair: null,
      affiliation: 'Vilniaus Kolegija (VIKO), Higher Education Institution\nVilnius, Lithuania, Europe',
      session: null,
      workshop: null,
      initials: 'VK',
      image: '/images/speakers/processed/viktorija-kiele.jpeg',
      objectPosition: 'center 20%',
    },
    {
      name: 'Dr. Jurgita Kazlauskienė',
      category: 'Conference Speaker',
      designation: 'Vice-Dean (Prodekanė), Faculty of Health Care',
      chair: null,
      affiliation: 'Vilnius University of Applied Sciences (VIKO),\nVilnius, Lithuania',
      session: null,
      workshop: null,
      initials: 'JK',
      image: '/images/speakers/processed/jurgita-kazlauskiene.jpeg',
      objectPosition: 'center 20%',
    },
    {
      name: 'Dr. Judie Arulappan',
      category: 'International Keynote',
      designation: 'Associate Professor & Director: Nursing Laboratory and Simulation Unit (NLSU)',
      chair: 'Certified Healthcare Simulation Educator (SSH, USA), Faculty Fellow (SQU)',
      affiliation: 'Sultan Qaboos University (SQU), Sultanate of Oman',
      session: 'Session 01: The Digital Heart — Advancing Nursing Research and Evidence for Early Detection & Personalized Cardiovascular Care',
      workshop: 'Workshop III: Smart Monitoring in Critical Care Nursing',
      initials: 'JA',
      image: '/images/speakers/processed/judie-arulappan.jpg',
      objectPosition: 'center 15%',
      scale: 1.05,
    },
    {
      name: 'Dr. Gerald Amandu',
      category: 'International Keynote',
      designation: 'Associate Professor, Leadership, Management, Entrepreneurship',
      chair: 'Healthcare Simulation & Clinical Leadership Lead',
      affiliation: 'Sultan Qaboos University (SQU), Sultanate of Oman',
      session: 'International Healthcare & Nursing Deliberations',
      workshop: 'Workshop V: Human-Technology Integration: Smart Healthcare with Nursing and Clinical Judgment',
      initials: 'GA',
      image: '/images/speakers/processed/gerald-amandu.jpg',
      objectPosition: 'center 15%',
      scale: 1.05,
    },
    {
      name: 'Mr. Shivaprasad Anagi',
      category: 'International Keynote',
      designation: 'Nurse Practitioner & Critical Care Researcher',
      chair: 'PhD Scholar, Flinders University',
      affiliation: 'Flinders University, South Australia',
      session: 'Session 07: Ageing Smarter — Digital Innovation and Nursing Evidence for Healthy, Independent and Person-Centred Ageing',
      workshop: null,
      initials: 'SA',
      image: '/images/speakers/processed/shivaprasad.jpeg',
      objectPosition: 'center 15%',
      scale: 1.05,
    },
    {
      name: 'Harikrishnan Ramachandran',
      category: 'Resource Person',
      designation: 'Professor, Dept. of Electronics & Telecommunication Engineering',
      chair: 'Biomedical IoMT Systems Lead',
      affiliation: 'Symbiosis Institute of Technology (SIT), Pune, Maharashtra, India',
      session: 'IoMT and Medical Sensor Integration',
      workshop: 'Workshop III: Wearables, Smart Alarms & Early Recognition in Critical Care',
      initials: 'HR',
      image: '/images/speakers/processed/harikrishnan-ramachandran.png',
      objectPosition: 'center 10%',
    },
    {
      name: 'Prof. (Dr.) Ketki Pathak',
      category: 'Resource Person',
      designation: 'Associate Professor, Electronics & Communication Department',
      chair: 'Signal Processing & Clinical Surveillance',
      affiliation: 'Sarvajanik College of Engineering and Technology, Surat, Gujarat, India',
      session: 'Clinical Signal Alerts in ICUs',
      workshop: 'Workshop IV: Smart Nursing Surveillance — Early Recognition of Clinical Deterioration',
      initials: 'KP',
      image: '/images/speakers/processed/ketki-pathak.png',
      objectPosition: 'center 10%',
    },
    {
      name: 'Dr. Shilpa Bade-Gite',
      category: 'Invited Expert',
      designation: 'Professor of Computer Science',
      chair: 'AI & Connected Health Systems Lead',
      affiliation: 'University of York, Mumbai, Maharashtra, India',
      session: 'Session 06: Breathing Smarter — Connected Technologies for Predictive Respiratory Care',
      workshop: 'Workshop IV: Physiological Trends & Early-Warning Scores (EWS)',
      initials: 'SB',
      image: '/images/speakers/processed/shilpa-bade-gite.png',
      objectPosition: 'center 10%',
    },
    {
      name: 'Dr. Sukhpal Kaur',
      category: 'Invited Expert',
      designation: 'Professor cum Principal',
      chair: 'National Institute of Nursing Education (NINE)',
      affiliation: 'Postgraduate Institute of Medical Education and Research (PGIMER), Chandigarh, India',
      session: 'Clinical Simulation & Nursing Judgment',
      workshop: 'Workshop V: Interactive Simulation in Smart Clinical Environments',
      initials: 'SK',
      image: '/images/speakers/processed/sukhpal-kaur.png',
      objectPosition: 'center 10%',
    },
    {
      name: 'Dr. Sheela Durai, Ph.D.',
      category: 'Resource Person',
      designation: 'Head of Department, Medical & Surgical Nursing',
      chair: 'College of Nursing',
      affiliation: 'Christian Medical College (CMC), Vellore, Tamil Nadu, India',
      session: 'Evidence-Based Practice Systems',
      workshop: 'Workshop I: From Patient Data to Bedside Decisions — EHR & Evidence-Based Care',
      initials: 'SD',
      image: '/images/speakers/processed/sheela-durai.png',
      objectPosition: 'center 10%',
    },
    {
      name: 'Venkateswarlu Gonuguntla, Ph.D.',
      category: 'Invited Expert',
      designation: 'Associate Professor and Research Faculty',
      chair: 'Quantum AI School for Advanced Research',
      affiliation: 'Alliance University, Bengaluru, Karnataka, India',
      session: 'Session 03: Time Is Brain — Smart Nursing for Early Recognition & Rapid Stroke Care',
      workshop: 'Workshop II: AI-Assisted Imaging in Acute and Bedside Nursing',
      initials: 'VG',
      image: '/images/speakers/processed/venkateswarlu-gonuguntla.png',
      objectPosition: 'center 10%',
    },
    {
      name: 'Prof. (Dr.) Lilly Podder',
      category: 'Invited Expert',
      designation: 'Associate Professor, Dept. of Obstetrics & Gynaecology Nursing',
      chair: 'Faculty of Nursing',
      affiliation: 'All India Institute of Medical Sciences (AIIMS), Bhopal, Madhya Pradesh, India',
      session: 'Session 05: Smart Maternal & Newborn Care — Risk Prediction and Personalised Midwifery',
      workshop: null,
      initials: 'LP',
      image: '/images/speakers/processed/lilly-podder.png',
      objectPosition: 'center 10%',
    },
    {
      name: 'Dr. Vithoba Narayan Mhalkar',
      category: 'Invited Expert',
      designation: 'Associate Professor',
      chair: 'Psychiatric Nursing & Digital Mental Health',
      affiliation: 'Institute of Psychiatry & Human Behaviour, Bambolim, Goa, India',
      session: 'Session 08: Next-Generation Mental Health Nursing — Digital Innovation for Early Detection',
      workshop: null,
      initials: 'VM',
      image: '/images/speakers/processed/vithoba-narayan-mhalkar.png',
      objectPosition: 'center 10%',
    },
    {
      name: 'Dr. Kiran R. Amin',
      category: 'Invited Expert',
      designation: 'Deputy Pro Vice-Chancellor & Executive Dean',
      chair: 'Faculty of Engineering & Technology',
      affiliation: 'Ganpat University, Gujarat, India',
      session: 'Session 02: Precision Oncology Nursing — Next-Gen Evidence for Early Detection & Personalized Cancer Care',
      workshop: null,
      initials: 'KA',
      image: '/images/speakers/processed/kiran-amin.png',
      scale: 1.1,
    },
    {
      name: 'Prof. (Dr.) Harmeet Kaur Kang',
      category: 'Invited Expert',
      designation: 'Director, Chitkara School of Health Sciences',
      chair: 'Chitkara School of Health Sciences',
      affiliation: 'Chitkara University, Punjab, India',
      session: 'Session 04: Smart Nursing in Diabetes Care — Digital Innovation for Early Detection, Prediction and Personalised Management',
      workshop: 'Workshop II: Intelligent Imaging in Smart Nursing: From Visual Detection to Clinical Decision-Making',
      initials: 'HK',
      image: '/images/speakers/processed/harmeet-kaur-kang.png',
      scale: 1.15,
    },
    {
      name: 'Dr. Hemant Kumar Patadia',
      category: 'Session Chairperson',
      designation: 'Professor & Principal, Parul Institute of Allied & Healthcare Sciences',
      chair: 'Session 01 Chairperson',
      affiliation: 'Faculty of Medicine, Parul University, Vadodara, Gujarat',
      session: 'Chairing Session 01: Cardiovascular Care (Dr. Judie Arulappan)',
      workshop: null,
      initials: 'HP',
      image: '/images/speakers/processed/hemant-kumar-patadia.png',
      objectPosition: 'center 10%',
    },
    {
      name: 'Dr. Anita Prakashan',
      category: 'Session Chairperson',
      designation: 'Dean, Faculty of Nursing',
      chair: 'Session 02 Chairperson',
      affiliation: 'Sumandeep Vidyapeeth, Vadodara, Gujarat, India',
      session: 'Chairing Session 02: Precision Oncology (Dr. Kiran R. Amin)',
      workshop: null,
      initials: 'AP',
      image: '/images/speakers/processed/anita-prakashan.png',
      objectPosition: 'center 10%',
    },
    {
      name: 'Dr. Satish Biradar',
      category: 'Session Chairperson',
      designation: 'Registrar',
      chair: 'Session 03 Chairperson',
      affiliation: 'P. P. Savani University, Surat, Gujarat, India',
      session: 'Chairing Session 03: Stroke Care (Venkateswarlu Gonuguntla)',
      workshop: null,
      initials: 'SB',
      image: '/images/speakers/processed/satish-biradar.png',
      objectPosition: 'center 10%',
    },
    {
      name: 'Dr. Ravindra H. N',
      category: 'Session Chairperson',
      designation: 'Dean, ITM College of Nursing & Director of Paramedical Programs',
      chair: 'Session 04 Chairperson',
      affiliation: 'ITM SLS Baroda University, Vadodara, Gujarat, India',
      session: 'Chairing Session 04: Diabetes Care (Prof. Harmeet Kaur Kang)',
      workshop: null,
      initials: 'RH',
      image: '/images/speakers/processed/ravindra-hn.png',
      objectPosition: 'center 10%',
    },
    {
      name: 'Ms. Indravati Pandey',
      category: 'Session Chairperson',
      designation: 'Principal',
      chair: 'Session 06 Chairperson',
      affiliation: 'Government College of Nursing, Surat, Gujarat, India',
      session: 'Chairing Session 06: Respiratory Care (Dr. Shilpa Bade-Gite)',
      workshop: null,
      initials: 'IP',
      image: '/images/speakers/processed/indravati-pandey.jpg',
      objectPosition: 'center 15%',
      scale: 1.05,
    },
    {
      name: 'Dr. Siddaram Sarate',
      category: 'Session Chairperson',
      designation: 'Principal, College of Nursing',
      chair: 'Session 07 Chairperson',
      affiliation: 'CVM University, Anand, Gujarat, India',
      session: 'Chairing Session 07: Healthy Ageing (Mr. Shivaprasad Anagi)',
      workshop: null,
      initials: 'SS',
      image: '/images/speakers/processed/siddaram-sarate.png',
      scale: 1.15,
    },
    {
      name: 'Dr. Nivedita Gupta',
      category: 'Session Chairperson',
      designation: 'Associate Professor, Research Cadre',
      chair: 'Session 08 Chairperson',
      affiliation: 'Parul Institute of Allied Healthcare Sciences, Parul University, Vadodara, Gujarat',
      session: 'Chairing Session 08: Mental Health Digital Care (Dr. Vithoba Mhalkar)',
      workshop: null,
      initials: 'NG',
      image: '/images/speakers/processed/nivedita-gupta.png',
      objectPosition: 'center 10%',
    },
    {
      name: 'Dr. Ramji Gupta',
      category: 'Resource Person',
      designation: 'R & D Member, Assistant Professor',
      chair: 'Biomedical & Engineering Informatics',
      affiliation: 'Parul Institute of Engineering & Technology (PIET), Parul University, Vadodara, Gujarat',
      session: 'Clinical Engineering Collaboration',
      workshop: 'Workshop I: Electronic Health Records & Clinical Data Integration',
      initials: 'RG',
      image: '/images/speakers/processed/ramji-gupta.png',
      objectPosition: 'center 10%',
    },
  ];

  const [activeCategory, setActiveCategory] = useState<'all' | 'conference-speaker' | 'resource-person' | 'workshop-leads' | 'session-chairpersons'>('all');

  const filteredSpeakers = activeCategory === 'all'
    ? speakers
    : activeCategory === 'conference-speaker'
    ? speakers.filter(spk => spk.category === 'Conference Speaker')
    : activeCategory === 'resource-person'
    ? speakers.filter(spk => spk.category !== 'Conference Speaker' && spk.category !== 'Session Chairperson')
    : activeCategory === 'workshop-leads'
    ? speakers.filter(spk => spk.workshop !== null)
    : speakers.filter(spk => spk.category === 'Session Chairperson');

  // Progressive pyramid rows for remaining speakers under the two conference speakers
  const remainingSpeakers = speakers.filter(spk => spk.category !== 'Conference Speaker');
  const rowSizes = [3, 4, 5, 5, 4];
  const pyramidRows: SpeakerItem[][] = [];
  let currentIndex = 0;
  for (const size of rowSizes) {
    if (currentIndex < remainingSpeakers.length) {
      pyramidRows.push(remainingSpeakers.slice(currentIndex, currentIndex + size));
      currentIndex += size;
    }
  }
  if (currentIndex < remainingSpeakers.length) {
    pyramidRows.push(remainingSpeakers.slice(currentIndex));
  }

  const renderCard = (spk: SpeakerItem, idx: number, isCompact: boolean = false) => {
    const isConfSpeaker = spk.category === 'Conference Speaker';
    return (
      <div
        key={`${spk.name}-${idx}`}
        className="theme-card"
        style={{
          background: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          width: isCompact ? '290px' : '300px',
          maxWidth: '100%',
          flex: isCompact ? '0 1 290px' : '0 1 300px',
          padding: isCompact ? '1.5rem 1.3rem 1.4rem' : '2.2rem 1.6rem 1.8rem',
          borderLeft: isConfSpeaker ? '4px solid var(--orange-500)' : '4px solid var(--teal-700)',
          boxShadow: isCompact
            ? '0 6px 20px rgba(234, 88, 12, 0.12)'
            : '0 8px 24px rgba(11, 37, 38, 0.06)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
      >
        {/* Centered Circular Speaker Photograph */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: isCompact ? '0.85rem' : '1.1rem',
          }}
        >
          <div
            style={{
              width: isCompact ? '104px' : '128px',
              height: isCompact ? '104px' : '128px',
              borderRadius: '50%',
              background: spk.image ? 'var(--canvas-cream)' : 'var(--teal-900)',
              overflow: 'hidden',
              border: isConfSpeaker ? '3px solid var(--orange-500)' : '3.5px solid var(--teal-600)',
              boxShadow: isConfSpeaker
                ? '0 4px 14px rgba(234, 88, 12, 0.2)'
                : '0 6px 18px rgba(16, 102, 102, 0.16)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              flexShrink: 0,
            }}
          >
            {spk.image ? (
              <Image
                src={spk.image}
                alt={spk.name}
                width={isCompact ? 104 : 128}
                height={isCompact ? 104 : 128}
                className="person-profile-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: (spk.image.endsWith('.jpg') || spk.image.endsWith('.jpeg')) ? 'cover' : 'contain',
                  objectPosition: spk.objectPosition || 'center 20%',
                  transform: spk.scale ? `scale(${spk.scale})` : undefined,
                  display: 'block',
                }}
              />
            ) : (
              <span
                style={{
                  color: '#FFFFFF',
                  fontSize: isCompact ? '1.5rem' : '1.85rem',
                  fontWeight: '800',
                  letterSpacing: '0.5px',
                }}
              >
                {spk.initials}
              </span>
            )}
          </div>
        </div>

        {/* Centered Category Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: isCompact ? '0.7rem' : '1rem' }}>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: '800',
              background: isConfSpeaker
                ? 'var(--orange-100)'
                : spk.category === 'Session Chairperson'
                ? 'var(--canvas-cream)'
                : 'var(--teal-100)',
              color: isConfSpeaker
                ? 'var(--orange-600)'
                : spk.category === 'Session Chairperson'
                ? 'var(--teal-900)'
                : 'var(--teal-800)',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
            }}
          >
            {isConfSpeaker
              ? 'Conference Speaker'
              : spk.category === 'Session Chairperson'
              ? 'Session Chairperson'
              : 'Resource Person'}
          </span>
        </div>

        {/* Speaker Details */}
        <div style={{ textAlign: 'center', marginBottom: isCompact ? 0 : '1.2rem' }}>
          <h3 style={{ fontSize: isCompact ? '1.15rem' : '1.25rem', color: 'var(--teal-900)', marginBottom: '0.3rem' }}>
            {spk.name}
          </h3>
          <p style={{ fontSize: isCompact ? '0.84rem' : '0.88rem', fontWeight: '700', color: 'var(--teal-700)', marginBottom: '0.25rem', whiteSpace: 'pre-line' }}>
            {spk.designation}
          </p>
          {spk.chair && (
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: '500', whiteSpace: 'pre-line' }}>
              {spk.chair}
            </p>
          )}
          <p style={{ fontSize: isCompact ? '0.8rem' : '0.82rem', color: 'var(--text-muted)', marginBottom: 0, lineHeight: '1.4', whiteSpace: 'pre-line' }}>
            🏛️ {spk.affiliation}
          </p>
        </div>

        {/* Session / Workshop Details */}
        {(spk.session || spk.workshop) && (
          <div
            style={{
              marginTop: 'auto',
              paddingTop: '0.9rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              fontSize: '0.8rem',
              textAlign: 'left',
            }}
          >
            {spk.session && (
              <div>
                <strong style={{ color: 'var(--teal-900)', display: 'block' }}>Scientific Session:</strong>
                <span style={{ color: 'var(--text-body)' }}>{spk.session}</span>
              </div>
            )}
            {spk.workshop && (
              <div>
                <strong style={{ color: 'var(--orange-600)', display: 'block' }}>Pre-Conference Workshop:</strong>
                <span style={{ color: 'var(--text-body)' }}>{spk.workshop}</span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <PageFrame>
      <div className="content-container" style={{ paddingBottom: '5rem', paddingTop: '1.5rem' }}>
        <div className="section-headline-group">
          <span className="section-eyebrow">Distinguished Faculty</span>
          <h1 className="section-title">Keynote Speakers &amp; Resource Persons</h1>
          <p className="section-subtitle">
            Pioneering researchers, clinicians, engineering scholars, and healthcare leaders convening at Parul University to share next-generation evidence and smart nursing innovations.
          </p>
        </div>

        {/* Legend / Category Tags */}
        <div
          role="navigation"
          aria-label="Speaker category navigation"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.8rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          <button
            type="button"
            onClick={() => setActiveCategory(prev => prev === 'conference-speaker' ? 'all' : 'conference-speaker')}
            className="badge-tag orange"
            style={{
              cursor: 'pointer',
              border: activeCategory === 'conference-speaker' ? '2px solid var(--orange-600)' : '2px solid transparent',
              outline: 'none',
              boxShadow: activeCategory === 'conference-speaker' ? '0 4px 12px rgba(234, 88, 12, 0.25)' : 'none',
              transition: 'all 0.2s ease',
              font: 'inherit',
            }}
          >
            Conference Speaker
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory(prev => prev === 'resource-person' ? 'all' : 'resource-person')}
            className="badge-tag dark"
            style={{
              cursor: 'pointer',
              border: activeCategory === 'resource-person' ? '2px solid var(--teal-500)' : '2px solid transparent',
              outline: 'none',
              boxShadow: activeCategory === 'resource-person' ? '0 4px 12px rgba(11, 37, 38, 0.25)' : 'none',
              transition: 'all 0.2s ease',
              font: 'inherit',
            }}
          >
            Resource Person
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory(prev => prev === 'workshop-leads' ? 'all' : 'workshop-leads')}
            className="badge-tag"
            style={{
              cursor: 'pointer',
              border: activeCategory === 'workshop-leads' ? '2px solid var(--teal-700)' : '2px solid transparent',
              outline: 'none',
              boxShadow: activeCategory === 'workshop-leads' ? '0 4px 12px rgba(16, 102, 102, 0.2)' : 'none',
              transition: 'all 0.2s ease',
              font: 'inherit',
            }}
          >
            Workshop Leads
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory(prev => prev === 'session-chairpersons' ? 'all' : 'session-chairpersons')}
            className="badge-tag"
            style={{
              cursor: 'pointer',
              background: 'var(--canvas-cream)',
              color: 'var(--teal-900)',
              border: activeCategory === 'session-chairpersons' ? '2px solid var(--teal-900)' : '2px solid transparent',
              outline: 'none',
              boxShadow: activeCategory === 'session-chairpersons' ? '0 4px 12px rgba(16, 102, 102, 0.2)' : 'none',
              transition: 'all 0.2s ease',
              font: 'inherit',
            }}
          >
            Session Chairpersons
          </button>
        </div>

        {/* Speakers Layout */}
        {activeCategory === 'all' ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginBottom: '3.5rem', width: '100%' }}>
            {/* Top Row: Two Centered Conference Speakers */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.8rem',
                flexWrap: 'wrap',
                width: '100%',
              }}
            >
              {speakers.filter(s => s.category === 'Conference Speaker').map((spk, idx) => renderCard(spk, idx, true))}
            </div>

            {/* Progressive Pyramid Rows for Remaining Speakers */}
            {pyramidRows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1.8rem',
                  flexWrap: 'wrap',
                  width: '100%',
                }}
              >
                {row.map((spk, idx) => renderCard(spk, idx, false))}
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.8rem',
              flexWrap: 'wrap',
              marginBottom: '3.5rem',
              width: '100%',
            }}
          >
            {filteredSpeakers.map((spk, idx) => renderCard(spk, idx, spk.category === 'Conference Speaker'))}
          </div>
        )}

        {/* CTA Banner */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/programme" className="btn-pill-primary">
              View Detailed Programme Schedule &rarr;
            </Link>
            <Link href="/registration" className="btn-pill-orange">
              Register as Delegate &rarr;
            </Link>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}
