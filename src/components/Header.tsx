'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  interface NavItem {
    label: string;
    href: string;
  }

  const navLinks: NavItem[] = [
    { label: 'About', href: '/about' },
    { label: 'Committee', href: '/committee' },
    { label: 'Speakers', href: '/speakers' },
    { label: 'Tracks', href: '/tracks' },
    { label: 'Call for Papers', href: '/call-for-papers' },
    { label: 'Schedule', href: '/programme' },
    { label: 'Awards', href: '/awards' },
    { label: 'Sponsorship', href: '/sponsorship' },
    { label: 'Venue', href: '/venue-contact' },
  ];

  return (
    <header className="header-wrapper">
      <div className="navbar-bar">
        {/* Official Brand Logos */}
        <Link href="/" className="navbar-brand" onClick={() => setMobileMenuOpen(false)} aria-label="PU’s Criticonn Home" style={{ gap: '0.75rem' }}>
          <Image
            src="/Criticonn_Logo.png"
            alt="PU’s Criticonn"
            width={987}
            height={313}
            priority
            style={{
              height: '36px',
              width: 'auto',
              maxWidth: '150px',
              objectFit: 'contain',
              display: 'block',
            }}
          />
          <span
            className="navbar-logo-divider"
            aria-hidden="true"
            style={{
              width: '1.5px',
              height: '22px',
              backgroundColor: 'rgba(14, 59, 56, 0.28)',
              borderRadius: '1px',
              flexShrink: 0,
              display: 'inline-block',
            }}
          />
          <Image
            src="/Parul_University_Logo.png"
            alt="Parul University"
            width={2170}
            height={725}
            priority
            style={{
              height: '32px',
              width: 'auto',
              maxWidth: '140px',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </Link>

        {/* Navigation Links */}
        <nav className="navbar-nav" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`navbar-link ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Register Button */}
        <Link href="/registration" className="navbar-register-btn">
          Register
        </Link>

        {/* Mobile Toggle */}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-menu-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/registration"
            onClick={() => setMobileMenuOpen(false)}
            className="navbar-register-btn mobile-register"
          >
            Register Now
          </Link>
        </div>
      )}
    </header>
  );
}

