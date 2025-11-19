'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import NavItem from './NavItem';

import LogoIcon from '@/public/custom_graphics/spiral_cut_gaze.svg';
import AboutIcon from '@/public/custom_graphics/joy_squint.svg';
import GalleryIcon from '@/public/custom_graphics/excited_gaze_down.svg';
import AvailableArtIcon from '@/public/custom_graphics/starry_eyes.svg';
import GraspHand from '@/public/custom_graphics/grasphand.svg';

/* -------------------------------------------------------
 * Static Navigation Data (clean, reusable, testable)
 * ----------------------------------------------------- */

const CATEGORIES = [
  { name: "Mugs", slug: "mugs" },
  { name: "Pots", slug: "pots" },
  { name: "Soap Dispensers", slug: "soap-dispensers" },
  { name: "Oddities", slug: "oddities" },
];

const GALLERY_DROPDOWN = CATEGORIES.map(c => ({
  name: c.name,
  href: `/gallery/category/${c.slug}`,
}));

const AVAILABLE_ART_DROPDOWN = CATEGORIES.map(c => ({
  name: c.name,
  href: `/available/category/${c.slug}`,
}));

const NAV_LINKS = [
  {
    name: 'About',
    href: '/',
    icon: <AboutIcon className="w-8 h-8" stroke="currentColor" />
  },
  {
    name: 'Gallery',
    href: '/gallery',
    icon: <GalleryIcon className="w-8 h-8" stroke="currentColor" />,
    dropdown: GALLERY_DROPDOWN,
  },
  {
    name: 'Available Art',
    href: '/available',
    icon: <AvailableArtIcon className="w-8 h-8" stroke="currentColor" />,
    // dropdown: AVAILABLE_ART_DROPDOWN, // enable anytime
  },
];

/* -------------------------------------------------------
 * Small subcomponents (cleaner JSX)
 * ----------------------------------------------------- */

function MobileMenuButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={ onClick }
      aria-label="Toggle menu"
      className="hover:text-hover_text_color focus:outline-none"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {open ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center nav-link">
      <LogoIcon className="w-14 h-14 mr-5" />
      <span className="font-bold text-lg">Ensorcelled Expressions</span>
    </Link>
  );
}

/* -------------------------------------------------------
 * Main Component
 * ----------------------------------------------------- */

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="static w-full z-50 pointer-events-none">
      <div className="relative bg-foreground pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Logo />

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center space-x-6">
              {NAV_LINKS.map(link => (
                <NavItem key={link.href} {...link} />
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <MobileMenuButton
                open={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(prev => !prev)}
              />
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-foreground overflow-hidden"
            >
              {NAV_LINKS.map(link => (
                <NavItem
                  key={link.href}
                  {...link}
                  isMobile
                  closeMobileMenu={() => setMobileMenuOpen(false)}
                />
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Bar */}
      <div className="grasphand-decor-bar pointer-events-none">
        <GraspHand className="w-24 h-24 float-left svg-grasp-hand-icon pointer-events-none" />
        <GraspHand className="w-24 h-24 float-right scale-x-[-1] svg-grasp-hand-icon pointer-events-none" />
      </div>
    </nav>
  );
}