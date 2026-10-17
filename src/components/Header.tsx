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
  }

  const navLinks: NavItem[] = [
    { label: 'About', href: '/about' },
    { label: 'Committee', href: '/committee' },
    { label: 'Speakers', href: '/speakers' },
    { label: 'Tracks', href: '/tracks' },
    { label: 'Call for Papers', href: '/call-for-papers' },
    { label: 'Schedule', href: '/programme' },
    { label: 'Awards', href: '/awards-sponsorship' },
    { label: 'Venue', href: '/venue-contact' },
  ];

  return (
    <header className="header-wrapper">
      <div className="navbar-bar">
        {/* Brand Name */}
        <Link href="/" className="navbar-brand" onClick={() => setMobileMenuOpen(false)}>
          <span className="navbar-brand-pu">PU</span>
          <span className="navbar-brand-divider">|</span>
          <span className="navbar-brand-nova">स्वास्थ्य NOVA <span className="navbar-brand-year">2027</span></span>
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

