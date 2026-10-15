import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BottomInfoStrip from './BottomInfoStrip';

interface PageFrameProps {
  children: React.ReactNode;
  showBottomInfoAtBase?: boolean;
  homePage?: boolean;
  showFooter?: boolean;
}

export default function PageFrame({ children, showBottomInfoAtBase = false, homePage = false, showFooter = true }: PageFrameProps) {
  return (
    <div className={`site-outer-wrapper${homePage ? ' home-page' : ''}`}>
      <div className="site-frame">
        <Header />
        <main className="frame-content">
          {children}
        </main>
        {showBottomInfoAtBase && <BottomInfoStrip />}
        {showFooter && <Footer />}
      </div>
    </div>
  );
}
