'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ConferencePhoto {
  id: string;
  src: string;
  year: '2025' | '2023' | '2022';
  alt: string;
  caption: string;
}

const CONFERENCE_PHOTOS: ConferencePhoto[] = [
  // --- Criticonn 2025 (23 photos) ---
  {
    id: '2025-01',
    src: '/Criticonn/CRITICONN%202025/486834910_18265390840287233_7475031531084705517_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 plenary session and clinical keynote presentation',
    caption: 'Plenary Session & Keynote Address',
  },
  {
    id: '2025-02',
    src: '/Criticonn/CRITICONN%202025/487394641_18265390900287233_8408389955722121103_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 nursing scholars and scientific paper deliberations',
    caption: 'Scientific Research Presentations',
  },
  {
    id: '2025-03',
    src: '/Criticonn/CRITICONN%202025/487436965_18265390867287233_4577700546802201252_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 smart healthcare technologies and critical care demonstration',
    caption: 'Critical Care Technology Demo',
  },
  {
    id: '2025-04',
    src: '/Criticonn/CRITICONN%202025/487460471_18265391038287233_611666445073273001_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 interactive clinical workshop and delegates practice',
    caption: 'Hands-on Clinical Skills Workshop',
  },
  {
    id: '2025-05',
    src: '/Criticonn/CRITICONN%202025/487566735_18265390918287233_2383592922665022915_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 distinguished speaker address to nursing professionals',
    caption: 'Distinguished Guest Address',
  },
  {
    id: '2025-06',
    src: '/Criticonn/CRITICONN%202025/487782379_18265391005287233_6336477067050982719_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 audience interaction and expert panel discussions',
    caption: 'Expert Panel & Audience Q&A',
  },
  {
    id: '2025-07',
    src: '/Criticonn/CRITICONN%202025/487938410_18265390945287233_994633638337092103_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 intensive care patient surveillance and practical session',
    caption: 'Patient Surveillance Practical Session',
  },
  {
    id: '2025-08',
    src: '/Criticonn/CRITICONN%202025/487943170_18265391047287233_1458314491137867_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 collaborative roundtable discussion on smart healthcare',
    caption: 'Collaborative Clinical Discussion',
  },
  {
    id: '2025-09',
    src: '/Criticonn/CRITICONN%202025/487948594_18265391017287233_3845710848863804324_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 healthcare delegates engaging during technical presentations',
    caption: 'Technical Presentation Discourse',
  },
  {
    id: '2025-10',
    src: '/Criticonn/CRITICONN%202025/488009561_18265390990287233_4375578140114106059_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 workshop trainers and participants group session',
    caption: 'Simulation Mentorship & Training',
  },
  {
    id: '2025-11',
    src: '/Criticonn/CRITICONN%202025/488167990_18265390771287233_4149051385643828090_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 grand auditorium inaugural ceremony and conference lighting',
    caption: 'Inaugural Ceremony & Lighting',
  },
  {
    id: '2025-12',
    src: '/Criticonn/CRITICONN%202025/488207518_18265390879287233_8413128950843098073_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 scientific research exhibits and clinical case posters',
    caption: 'Scientific Research Showcase',
  },
  {
    id: '2025-13',
    src: '/Criticonn/CRITICONN%202025/488242512_18265390957287233_6585339806336897634_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 emergency airway and clinical life-support simulation',
    caption: 'Life-Support Skills Simulation',
  },
  {
    id: '2025-14',
    src: '/Criticonn/CRITICONN%202025/488258514_18265391029287233_7619539916465985248_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 active delegates participating in clinical masterclass',
    caption: 'Clinical Masterclass Engagement',
  },
  {
    id: '2025-15',
    src: '/Criticonn/CRITICONN%202025/488408611_18265390981287233_7118333116006511640_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 evidence-based nursing protocols demonstration',
    caption: 'Evidence-Based Protocol Review',
  },
  {
    id: '2025-16',
    src: '/Criticonn/CRITICONN%202025/488602254_1114441667150310_1973896818317961256_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 healthcare innovation and digital health solutions',
    caption: 'Healthcare Innovation Exhibition',
  },
  {
    id: '2025-17',
    src: '/Criticonn/CRITICONN%202025/512977195_23936626812668072_1247549459469069107_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 packed conference auditorium and national audience',
    caption: 'National Delegates Gathering',
  },
  {
    id: '2025-18',
    src: '/Criticonn/CRITICONN%202025/513029243_23936626826001404_1863386832454445611_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 keynote stage presentation with medical leadership',
    caption: 'Keynote Stage Session',
  },
  {
    id: '2025-19',
    src: '/Criticonn/CRITICONN%202025/513896146_23936626809334739_6216725993203791852_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 healthcare leadership reflections and conference address',
    caption: 'Conference Keynote & Strategic Vision',
  },
  {
    id: '2025-20',
    src: '/Criticonn/CRITICONN%202025/513971113_23936627009334719_8158061549157887594_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 valedictory ceremony and faculty recognition',
    caption: 'Valedictory Ceremony & Honors',
  },
  {
    id: '2025-21',
    src: '/Criticonn/CRITICONN%202025/514344639_23936626976001389_5268155083831621836_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 nursing awards and distinguished service felicitations',
    caption: 'Clinical Awards Presentation',
  },
  {
    id: '2025-22',
    src: '/Criticonn/CRITICONN%202025/514404655_23936626822668071_1280832839677522743_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 conference delegates group photograph and fellowship',
    caption: 'Delegates & Organizing Committee',
  },
  {
    id: '2025-23',
    src: '/Criticonn/CRITICONN%202025/514420319_23936626772668076_3051238395260769052_n.jpg',
    year: '2025',
    alt: 'Criticonn 2025 closing moments and delegates celebration',
    caption: 'Conference Closing Fellowship',
  },

  // --- Criticonn 2023 (5 photos) ---
  {
    id: '2023-01',
    src: '/Criticonn/CRITICONN%202023/502621122_10236349050336682_3343089732830590402_n.jpg',
    year: '2023',
    alt: 'Criticonn 2023 interactive nursing skills and clinical station training',
    caption: 'Clinical Station Skill Training',
  },
  {
    id: '2023-02',
    src: '/Criticonn/CRITICONN%202023/502627417_10236349052776743_7739890843918458494_n.jpg',
    year: '2023',
    alt: 'Criticonn 2023 faculty leadership panel and conference addresses',
    caption: 'Leadership Panel Discourse',
  },
  {
    id: '2023-03',
    src: '/Criticonn/CRITICONN%202023/503053301_10236349052936747_8080001445345422557_n.jpg',
    year: '2023',
    alt: 'Criticonn 2023 delegate discussions and collaborative nursing workshop',
    caption: 'Delegate Collaboration & Exchange',
  },
  {
    id: '2023-04',
    src: '/Criticonn/CRITICONN%202023/503390728_10236349050896696_1749980937639023010_n.jpg',
    year: '2023',
    alt: 'Criticonn 2023 practical bedside simulation and vital surveillance drill',
    caption: 'Vital Signs Simulation Drill',
  },
  {
    id: '2023-05',
    src: '/Criticonn/CRITICONN%202023/503500190_10236349052856745_7415560302092376591_n.jpg',
    year: '2023',
    alt: 'Criticonn 2023 workshop delegates and clinical mentor group session',
    caption: 'Faculty Mentorship Session',
  },

  // --- Criticonn 2022 (3 photos) ---
  {
    id: '2022-01',
    src: '/Criticonn/CRITICONN%202022/474750408_1123319286472014_3392048648854985544_n.jpg',
    year: '2022',
    alt: 'Criticonn 2022 inaugural ceremony and academic leadership on stage',
    caption: 'Inaugural Dignitary Assembly',
  },
  {
    id: '2022-02',
    src: '/Criticonn/CRITICONN%202022/474799630_1123318929805383_288837155539286677_n.jpg',
    year: '2022',
    alt: 'Criticonn 2022 ceremonial lamp lighting and inaugural blessing',
    caption: 'Ceremonial Lamp Lighting',
  },
  {
    id: '2022-03',
    src: '/Criticonn/CRITICONN%202022/475059917_1123318816472061_7650250041817704457_n.jpg',
    year: '2022',
    alt: 'Criticonn 2022 nursing delegates gathered at Parul University auditorium',
    caption: 'Audience & Delegate Assembly',
  },
];

const YEAR_GROUPS: { year: '2025' | '2023' | '2022'; label: string; count: number; description: string }[] = [
  {
    year: '2025',
    label: 'Criticonn 2025',
    count: 23,
    description: 'Smart healthcare technologies, advanced clinical simulations, and multidisciplinary innovations.',
  },
  {
    year: '2023',
    label: 'Criticonn 2023',
    count: 5,
    description: 'Hands-on critical care workshops, vital surveillance drills, and clinical station mastery.',
  },
  {
    year: '2022',
    label: 'Criticonn 2022',
    count: 3,
    description: 'Inaugural academic deliberations, nursing leadership summits, and foundation conferences.',
  },
];

export default function PreviousConferencesGallery() {
  const [selectedYear, setSelectedYear] = useState<'all' | '2025' | '2023' | '2022'>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Filtered photos based on active tab
  const displayedPhotos = selectedYear === 'all'
    ? CONFERENCE_PHOTOS
    : CONFERENCE_PHOTOS.filter((p) => p.year === selectedYear);

  // Close lightbox modal
  const closeModal = useCallback(() => {
    setActivePhotoIndex(null);
  }, []);

  // Next / Previous navigation
  const showPrev = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! > 0 ? prev! - 1 : displayedPhotos.length - 1));
  }, [activePhotoIndex, displayedPhotos.length]);

  const showNext = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! < displayedPhotos.length - 1 ? prev! + 1 : 0));
  }, [activePhotoIndex, displayedPhotos.length]);

  // Handle keyboard navigation (ESC, Arrow keys) and body scroll lock
  useEffect(() => {
    if (activePhotoIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowLeft') showPrev();
      else if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePhotoIndex, closeModal, showPrev, showNext]);

  const currentPhoto = activePhotoIndex !== null ? displayedPhotos[activePhotoIndex] : null;

  return (
    <section className="previous-conferences-section" id="previous-conferences">
      <div className="content-container">
        {/* Section Heading Group */}
        <div className="section-headline-group" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-eyebrow">Conference Legacy &amp; Visual Archives</span>
          <h2 className="section-title">Previous Conferences &amp; Workshops</h2>
          <p className="section-subtitle" style={{ maxWidth: '780px', margin: '0 auto' }}>
            Relive the learning, collaboration, and clinical innovation from our previous conferences.
          </p>
        </div>

        {/* Year Filter Tabs */}
        <div className="gallery-filter-bar" role="tablist" aria-label="Conference Year Filter">
          <button
            type="button"
            role="tab"
            aria-selected={selectedYear === 'all'}
            className={`gallery-filter-btn ${selectedYear === 'all' ? 'active' : ''}`}
            onClick={() => {
              setSelectedYear('all');
              setActivePhotoIndex(null);
            }}
          >
            All Conferences <span className="gallery-count-pill">{CONFERENCE_PHOTOS.length}</span>
          </button>
          {YEAR_GROUPS.map((group) => (
            <button
              key={group.year}
              type="button"
              role="tab"
              aria-selected={selectedYear === group.year}
              className={`gallery-filter-btn ${selectedYear === group.year ? 'active' : ''}`}
              onClick={() => {
                setSelectedYear(group.year);
                setActivePhotoIndex(null);
              }}
            >
              {group.label} <span className="gallery-count-pill">{group.count}</span>
            </button>
          ))}
        </div>

        {/* Gallery Content: Grouped by Year if 'all' is selected */}
        {selectedYear === 'all' ? (
          <div className="gallery-groups-container">
            {YEAR_GROUPS.map((group) => {
              const groupPhotos = CONFERENCE_PHOTOS.filter((p) => p.year === group.year);
              return (
                <div key={group.year} className="gallery-year-group" id={`criticonn-${group.year}`}>
                  <div className="gallery-year-header">
                    <div className="gallery-year-title-row">
                      <h3 className="gallery-year-title">{group.label}</h3>
                      <span className="gallery-year-badge">{groupPhotos.length} Photographs</span>
                    </div>
                    <p className="gallery-year-desc">{group.description}</p>
                  </div>

                  <div className="gallery-photo-grid">
                    {groupPhotos.map((photo) => {
                      const overallIndex = CONFERENCE_PHOTOS.findIndex((p) => p.id === photo.id);
                      return (
                        <div
                          key={photo.id}
                          className="gallery-photo-card"
                          onClick={() => setActivePhotoIndex(overallIndex)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setActivePhotoIndex(overallIndex);
                            }
                          }}
                          aria-label={`View photo: ${photo.caption} from ${group.label}`}
                        >
                          <div className="gallery-photo-frame">
                            <Image
                              src={photo.src}
                              alt={photo.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="gallery-photo-img"
                              loading="lazy"
                            />
                            <div className="gallery-hover-overlay">
                              <span className="gallery-view-icon" aria-hidden="true">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="11" cy="11" r="8"></circle>
                                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                  <line x1="11" y1="8" x2="11" y2="14"></line>
                                  <line x1="8" y1="11" x2="14" y2="11"></line>
                                </svg>
                              </span>
                              <span className="gallery-view-text">Enlarge Photo</span>
                            </div>
                          </div>
                          <div className="gallery-photo-meta">
                            <span className="gallery-meta-tag">{group.label}</span>
                            <span className="gallery-meta-caption">{photo.caption}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Filtered Year View */
          <div className="gallery-year-group">
            <div className="gallery-year-header">
              <div className="gallery-year-title-row">
                <h3 className="gallery-year-title">Criticonn {selectedYear}</h3>
                <span className="gallery-year-badge">{displayedPhotos.length} Photographs</span>
              </div>
              <p className="gallery-year-desc">
                {YEAR_GROUPS.find((g) => g.year === selectedYear)?.description}
              </p>
            </div>

            <div className="gallery-photo-grid">
              {displayedPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="gallery-photo-card"
                  onClick={() => setActivePhotoIndex(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActivePhotoIndex(index);
                    }
                  }}
                  aria-label={`View photo: ${photo.caption} from Criticonn ${photo.year}`}
                >
                  <div className="gallery-photo-frame">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="gallery-photo-img"
                      loading="lazy"
                    />
                    <div className="gallery-hover-overlay">
                      <span className="gallery-view-icon" aria-hidden="true">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          <line x1="11" y1="8" x2="11" y2="14"></line>
                          <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                      </span>
                      <span className="gallery-view-text">Enlarge Photo</span>
                    </div>
                  </div>
                  <div className="gallery-photo-meta">
                    <span className="gallery-meta-tag">Criticonn {photo.year}</span>
                    <span className="gallery-meta-caption">{photo.caption}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Accessible Full-Screen Lightbox Modal */}
      {currentPhoto && (
        <div
          className="gallery-lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged photograph: ${currentPhoto.caption}`}
          onClick={closeModal}
        >
          <div
            className="gallery-lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Title and Close Button */}
            <div className="gallery-lightbox-topbar">
              <div className="gallery-lightbox-title-group">
                <span className="gallery-lightbox-badge">Criticonn {currentPhoto.year}</span>
                <span className="gallery-lightbox-caption">{currentPhoto.caption}</span>
              </div>
              <div className="gallery-lightbox-actions">
                <span className="gallery-lightbox-counter">
                  {activePhotoIndex! + 1} / {displayedPhotos.length}
                </span>
                <button
                  type="button"
                  className="gallery-lightbox-close"
                  onClick={closeModal}
                  aria-label="Close photo viewer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Main Image Display */}
            <div className="gallery-lightbox-image-wrap">
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                priority
                sizes="92vw"
                className="gallery-lightbox-main-img"
              />
            </div>

            {/* Navigation Arrows */}
            {displayedPhotos.length > 1 && (
              <>
                <button
                  type="button"
                  className="gallery-lightbox-nav prev"
                  onClick={showPrev}
                  aria-label="Previous photograph"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button
                  type="button"
                  className="gallery-lightbox-nav next"
                  onClick={showNext}
                  aria-label="Next photograph"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
