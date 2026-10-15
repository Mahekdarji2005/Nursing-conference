import React from 'react';
import Link from 'next/link';
import PageFrame from '@/components/PageFrame';

export default function CallForPapersPage() {
  const timeline = [
    { date: '10 October 2026', title: 'Call for Abstracts & Papers Opens', badge: 'Active' },
    { date: '15 November 2026', title: 'Abstract Submission Deadline', badge: 'Submission' },
    { date: '30 November 2026', title: 'Notification of Abstract Acceptance', badge: 'Review' },
    { date: '10 December 2026', title: 'Early-Bird / Author Registration Deadline', badge: 'Registration' },
    { date: '20 December 2026', title: 'Full Paper Submission Deadline', badge: 'Manuscript' },
    { date: '15 January 2027', title: 'Notification of Full Paper Review Decision', badge: 'Decision' },
    { date: '25 January 2027', title: 'Final Camera-Ready Paper & Author Registration', badge: 'Final Deadline' },
    { date: '18–19 February 2027', title: 'Pre-Conference Workshops & Main Conference Dates', badge: 'Conference' },
  ];

  const guidelines = [
    { label: 'Word Limit', desc: 'Abstract text must not exceed 250 words (excluding title, author names, and keywords).' },
    { label: 'Similarity / Plagiarism', desc: 'Similarity index must strictly remain below 10% (including responsible AI tool disclosure).' },
    { label: 'Mode of Presentation', desc: 'Offline / In-Person oral paper presentation or scientific poster display at Parul University.' },
    { label: 'Submission Tracks', desc: 'Must specify one of the 10 official scientific thematic tracks.' },
    { label: 'Originality & Integrity', desc: 'Must represent unpublished, original scholarly work free from duplicate submissions.' },
    { label: 'Mandatory Registration', desc: 'Conference registration is required for presenting authors upon abstract acceptance.' },
  ];

  const formatSections = [
    { sec: 'Title', desc: 'Concise and informative title reflecting research methodology and scope.' },
    { sec: 'Background', desc: 'Briefly introduce the clinical or technological context and significance of the problem.' },
    { sec: 'Objectives', desc: 'State the specific hypothesis or aims of the research study.' },
    { sec: 'Methods', desc: 'Describe study design, sample size, setting, data collection instruments, and statistical/AI methods.' },
    { sec: 'Results', desc: 'Report key empirical findings with precise quantitative or qualitative metrics.' },
    { sec: 'Conclusion', desc: 'Summarize implications for smart nursing practice, healthcare policy, or technology adoption.' },
    { sec: 'Keywords', desc: 'List 3 to 5 standardized MeSH or technical keywords.' },
  ];

  return (
    <PageFrame>
      <div className="content-container" style={{ paddingBottom: '5rem', paddingTop: '1.5rem' }}>
        <div className="section-headline-group">
          <span className="section-eyebrow">Academic Submissions</span>
          <h1 className="section-title">Call for Papers &amp; Abstracts</h1>
          <p className="section-subtitle">
            Original research, clinical implementation studies, systematic reviews, and technology innovations invited for Oral Paper and Scientific Poster presentations.
          </p>
        </div>

        {/* Live Submission Status Notice Box */}
        <section
          style={{
            background: 'var(--canvas-cream)',
            border: '2px solid var(--orange-500)',
            borderRadius: '24px',
            padding: '2rem 2.5rem',
            marginBottom: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span className="badge-pulse">
                <span className="pulse-dot"></span>
                SUBMISSIONS OPENING
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--teal-900)' }}>
                Author Abstract Portal
              </span>
            </div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--teal-900)', marginBottom: '0.3rem' }}>
              Submission Portal &amp; Manuscript Desk Notice
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: '1.5', maxWidth: '720px' }}>
              The official online abstract submission portal is configured and undergoing schedule activation per the conference timeline. Authors are requested to prepare structured abstracts adhering to the format below and may submit drafts directly to the Scientific Committee secretariat at <strong>criticonn@paruluniversity.ac.in</strong>.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.8rem' }}>
            <a
              href="mailto:criticonn@paruluniversity.ac.in?subject=PU-NOVA%202027%20Abstract%20Submission"
              className="btn-pill-orange"
            >
              Email Abstract Draft &rarr;
            </a>
          </div>
        </section>

        {/* Important Deadlines Timeline */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--teal-900)', textAlign: 'center', marginBottom: '2rem' }}>
            Important Submission &amp; Review Dates
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.2rem',
            }}
          >
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="theme-card"
                style={{
                  background: '#FFFFFF',
                  padding: '1.6rem 1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: idx < 2 ? '4px solid var(--orange-500)' : '4px solid var(--teal-700)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: '800', color: 'var(--teal-900)' }}>
                    {item.date}
                  </span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      background: idx < 2 ? 'var(--orange-100)' : 'var(--teal-100)',
                      color: idx < 2 ? 'var(--orange-600)' : 'var(--teal-800)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '9999px',
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
                <p style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--teal-900)', lineHeight: '1.4' }}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Submission Rules & Structured Abstract Format */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem',
          }}
        >
          {/* Submission Guidelines */}
          <div className="theme-card" style={{ background: '#FFFFFF', padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--teal-900)', marginBottom: '1.4rem' }}>
              Abstract Submission Rules
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {guidelines.map((g, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.8rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  <span style={{ color: 'var(--orange-500)', fontWeight: '800' }}>✓</span>
                  <div>
                    <strong style={{ color: 'var(--teal-900)' }}>{g.label}:</strong>{' '}
                    <span style={{ color: 'var(--text-body)' }}>{g.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Structured Format */}
          <div className="theme-card" style={{ background: '#FFFFFF', padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--teal-900)', marginBottom: '1.4rem' }}>
              Structured Abstract Format (250 Words)
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {formatSections.map((sec, i) => (
                <div key={i} style={{ background: 'var(--canvas-cream)', padding: '0.75rem 1rem', borderRadius: '12px' }}>
                  <strong style={{ color: 'var(--teal-900)', fontSize: '0.88rem', display: 'block' }}>
                    {sec.sec}
                  </strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {sec.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Review & Publication Process */}
        <section
          style={{
            background: 'var(--canvas-cream)',
            borderRadius: '24px',
            padding: '3rem 2.5rem',
            border: '1.5px solid var(--border-subtle)',
            marginBottom: '3.5rem',
          }}
        >
          <div className="section-headline-group" style={{ marginBottom: '2rem' }}>
            <span className="section-eyebrow">Integrity &amp; Indexing</span>
            <h2 className="section-title">Review, Presentation &amp; Publication Policy</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.8rem',
            }}
          >
            <div className="theme-card" style={{ background: '#FFFFFF' }}>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--teal-900)', marginBottom: '0.6rem' }}>
                Double-Blind Peer Review
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                All abstracts undergo rigorous review by the Scientific Committee for relevance, methodology, and alignment with the conference theme before acceptance for Oral or Poster presentation.
              </p>
            </div>

            <div className="theme-card" style={{ background: '#FFFFFF' }}>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--teal-900)', marginBottom: '0.6rem' }}>
                Publication in Proceedings &amp; Journals
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                Selected high-quality full manuscripts will be considered for publication in the Conference Proceedings / Compendium or associated peer-reviewed and indexed journals as per journal editorial policies.
              </p>
            </div>

            <div className="theme-card" style={{ background: '#FFFFFF' }}>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--teal-900)', marginBottom: '0.6rem' }}>
                Responsible AI &amp; Research Ethics
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                Adheres to COPE principles. Institutional Ethics Committee / IRB approval is required for clinical studies. AI tools must be transparently disclosed and cannot be listed as authors.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Scientific Queries */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Have queries regarding abstract tracks or formatting? Contact <strong>Dr. Abhya Pattan</strong> (+91 98444 38332) or <strong>Prof. T. Kiranmala Chanu</strong> (+91 99975 31367).
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tracks" className="btn-pill-primary">
              Browse 10 Scientific Tracks &rarr;
            </Link>
            <Link href="/registration" className="btn-pill-orange">
              Registration Fee Categories &rarr;
            </Link>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}
