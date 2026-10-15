import React from 'react';

export default function BottomInfoStrip() {
  return (
    <aside className="bottom-info-bar" aria-label="Conference Quick Information">
      {/* Column 1: Dates */}
      <div className="info-bar-col">
        <div className="info-bar-icon-box" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A2526">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7.5 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-9 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
          </svg>
        </div>
        <div className="info-bar-text">
          <strong className="info-bar-title">18 &ndash; 19 February 2027</strong>
          <span className="info-bar-desc">
            Pre-Conference Workshop: 18 Feb<br />
            Main Conference: 19 Feb
          </span>
        </div>
      </div>

      <div className="info-bar-divider" aria-hidden="true"></div>

      {/* Column 2: Venue */}
      <div className="info-bar-col">
        <div className="info-bar-icon-box" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A2526">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>
        <div className="info-bar-text">
          <strong className="info-bar-title">Medical College Auditorium</strong>
          <span className="info-bar-desc">
            Parul University, Vadodara<br />
            Gujarat, India
          </span>
        </div>
      </div>

      <div className="info-bar-divider" aria-hidden="true"></div>

      {/* Column 3: Organized By */}
      <div className="info-bar-col">
        <div className="info-bar-icon-box" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#0A2526">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
        </div>
        <div className="info-bar-text">
          <strong className="info-bar-title">Organized by</strong>
          <span className="info-bar-desc">
            Faculty of Nursing &amp;<br />
            Parul Institute of Nursing
          </span>
        </div>
      </div>
    </aside>
  );
}
