'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BottomInfoStrip from './BottomInfoStrip';

interface VideoHeroProps {
  initialVideoSrc?: string | null;
}

export default function VideoHero({ initialVideoSrc = '/youtube-video.mp4' }: VideoHeroProps) {
  const [videoSrc] = useState<string | null>(initialVideoSrc);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Attempt autoplay muted on mount per browser policy
  useEffect(() => {
    if (videoRef.current && videoSrc) {
      videoRef.current.muted = true;
      videoRef.current
        .play()
        .catch((err) => {
          console.warn('Autoplay waiting for interaction:', err);
        });
    }
  }, [videoSrc]);

  const sdgTiles = [
    { src: '/images/sdg/E_WEB_03.png', alt: 'SDG 3 - Good Health and Well-Being' },
    { src: '/images/sdg/E_WEB_04.png', alt: 'SDG 4 - Quality Education' },
    { src: '/images/sdg/E_WEB_09.png', alt: 'SDG 9 - Industry, Innovation and Infrastructure' },
    { src: '/images/sdg/E_WEB_17.png', alt: 'SDG 17 - Partnerships for the Goals' },
  ];

  return (
    <section className="hero-section-container">
      {/* SVG Definitions for Mathematically Exact Asymmetrical Media Curved Clipping */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }} aria-hidden="true">
        <defs>
          <clipPath id="hero-curved-video-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.1261,0.0000 L 0.1209,0.0018 L 0.1157,0.0035 L 0.1118,0.0053 L 0.1014,0.0123 L 0.0975,0.0158 L 0.0936,0.0193 L 0.0780,0.0404 L 0.0754,0.0457 L 0.0676,0.0668 L 0.0663,0.0721 L 0.0650,0.0773 L 0.0637,0.0861 L 0.0624,0.0949 L 0.0624,0.4007 L 0.0611,0.4130 L 0.0598,0.4218 L 0.0585,0.4288 L 0.0546,0.4446 L 0.0520,0.4534 L 0.0403,0.4851 L 0.0312,0.5079 L 0.0130,0.5501 L 0.0052,0.5712 L 0.0039,0.5764 L 0.0026,0.5817 L 0.0013,0.5888 L 0.0000,0.5993 L 0.0000,0.6186 L 0.0013,0.6292 L 0.0026,0.6362 L 0.0052,0.6450 L 0.0104,0.6591 L 0.0130,0.6643 L 0.0156,0.6696 L 0.0221,0.6819 L 0.0286,0.6942 L 0.0403,0.7135 L 0.0767,0.7821 L 0.0962,0.8190 L 0.1053,0.8366 L 0.1079,0.8418 L 0.1105,0.8471 L 0.1196,0.8717 L 0.1222,0.8805 L 0.1339,0.9297 L 0.1378,0.9438 L 0.1404,0.9525 L 0.1417,0.9561 L 0.1443,0.9613 L 0.1469,0.9666 L 0.1599,0.9842 L 0.1638,0.9877 L 0.1743,0.9947 L 0.1782,0.9965 L 0.1821,0.9982 L 0.1886,1.0000 L 0.6788,1.0000 L 0.6853,0.9982 L 0.6892,0.9965 L 0.6944,0.9930 L 0.7022,0.9877 L 0.7087,0.9807 L 0.7217,0.9631 L 0.7581,0.9121 L 0.7893,0.8664 L 0.8296,0.8102 L 0.8908,0.7258 L 0.8921,0.7241 L 0.8973,0.7170 L 0.8986,0.7170 L 0.9038,0.7083 L 0.9064,0.7047 L 0.9155,0.6942 L 0.9181,0.6907 L 0.9259,0.6801 L 0.9662,0.6257 L 0.9740,0.6151 L 0.9766,0.6116 L 0.9818,0.6028 L 1.0000,0.5800 L 1.0000,0.0316 L 0.9948,0.0246 L 0.9883,0.0176 L 0.9844,0.0141 L 0.9805,0.0105 L 0.9727,0.0053 L 0.9688,0.0035 L 0.9649,0.0018 L 0.9584,0.0000 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="hero-editorial-grid">
        {/* Left Column: Conference Typography, Details & Controls */}
        <div className="hero-left-col">
          {/* Eyebrow with leading thin dash */}
          <div className="hero-eyebrow">
            <span className="eyebrow-dash">&mdash;</span>
            <span>18 &ndash; 19 FEBRUARY 2027 &middot; PARUL UNIVERSITY, VADODARA</span>
          </div>

          {/* Giant Title: PU – स्वास्थ्य NOVA 2027 */}
          <h1 className="hero-main-title">
            PU – <span className="hero-title-hindi">स्वास्थ्य</span><br />
            <span className="nova-word">NOVA </span><span className="hero-year-highlight">2027</span>
          </h1>

          {/* Subtitle */}
          <h2 className="hero-subtitle">
            International Conference on<br />
            Smart Nursing and Healthcare Innovation
          </h2>

          {/* Theme description */}
          <p className="hero-theme-desc">
            Advancing Predictive, Critical and Personalised Care Through<br className="desktop-break" />
            AI, Digital Technologies and Nursing-Led Multidisciplinary Innovation
          </p>

          {/* Four Official UN SDG Badges Row */}
          <div className="hero-sdg-row" aria-label="Official Aligned UN Sustainable Development Goals">
            {sdgTiles.map((tile, i) => (
              <div
                key={i}
                className="hero-sdg-tile"
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  width={290}
                  height={290}
                  className="hero-sdg-img"
                  priority
                  unoptimized
                />
              </div>
            ))}
          </div>

          {/* Action Buttons Row */}
          <div className="hero-actions-row">
            <Link href="/about" className="btn-explore">
              <span>EXPLORE CONFERENCE</span>
              <span className="btn-chevron" aria-hidden="true">&rsaquo;</span>
            </Link>

            <Link href="/tracks" className="btn-tracks">
              <span>SCIENTIFIC TRACKS</span>
              <span className="btn-chevron" aria-hidden="true">&rsaquo;</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Asymmetrical Healthcare Media & Video Composition */}
        <div className="hero-right-col">
          <div className="media-composition-wrapper">
            {/* Main Upper/Central Video Panel */}
            <div
              className="main-video-panel"
              style={{
                clipPath: 'url(#hero-curved-video-clip)',
                WebkitClipPath: 'url(#hero-curved-video-clip)',
              }}
            >
              <video
                ref={videoRef}
                src={videoSrc || '/youtube-video.mp4'}
                poster="/images/nurse_poster.png"
                autoPlay
                playsInline
                muted
                loop
                className="media-fill-video"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Strip */}
      <div className="hero-bottom-strip-wrapper">
        <BottomInfoStrip />
      </div>
    </section>
  );
}
