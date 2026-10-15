'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  interface NavItem {
    label: string;
    href: string;
    icon?: string;
  }

  const navLinks: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Committee', href: '/committee' },
    { label: 'Tracks', href: '/tracks' },
    { label: 'Schedule', href: '/programme' },
    { label: 'Speakers', href: '/speakers' },
    { label: 'Contact', href: '/venue-contact' },
  ];

  const secondaryLinks: NavItem[] = [
    { label: 'Call for Papers', href: '/call-for-papers', icon: '📄' },
    { label: 'Awards & Sponsorship', href: '/awards-sponsorship', icon: '🏆' },
  ];

  const allMobileLinks: NavItem[] = [...navLinks, ...secondaryLinks];

  return (
    <header className="header-wrapper">
      <div className="nav-header-row">
        {/* Exact Approved Reference Brand Lockup */}
        <Link href="/" className="brand-lockup" onClick={() => setMobileMenuOpen(false)}>
          <div className="brand-parul-text">
            <span className="brand-parul-main">Parul<sup>&reg;</sup></span>
            <span className="brand-parul-sub">University</span>
          </div>

          <div className="brand-divider" aria-hidden="true"></div>

          <div className="brand-conf-text">
            <span className="brand-conf-title">PU – स्वास्थ्य</span>
            <span className="brand-conf-nova">
              <span className="nova-text">NOVA </span>
              <span className="nova-year">2027</span>
            </span>
          </div>
        </Link>

        {/* Compact Navigation Pill Bar */}
        <nav className="header-nav-container" aria-label="Main Navigation">
          <ul className="nav-pill-strip">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-pill-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Register Now Pill CTA & Mobile Hamburger */}
        <div className="header-actions-container" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <Link href="/registration" className="btn-register-pill">
            <span>REGISTER NOW</span>
            <span className="btn-register-circle" aria-hidden="true">&rarr;</span>
          </Link>

          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: '1rem',
            right: '1rem',
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '1.5rem',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.15)',
            border: '2px solid rgba(20, 23, 24, 0.15)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem', paddingBottom: '0.6rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--orange-500)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Conference Navigation
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>18–19 Feb 2027</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.5rem' }}>
            {allMobileLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: '0.65rem 0.9rem',
                    borderRadius: '12px',
                    fontSize: '0.86rem',
                    fontWeight: '700',
                    color: isActive ? '#FFFFFF' : 'var(--teal-900)',
                    background: isActive ? 'var(--teal-900)' : 'var(--canvas-strip)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div style={{ marginTop: '0.8rem', paddingTop: '0.8rem', borderTop: '1px solid var(--border-subtle)' }}>
            <Link
              href="/registration"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-register-pill"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>REGISTER NOW FOR PU NOVA 2027</span>
              <span className="btn-register-circle">&rarr;</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
