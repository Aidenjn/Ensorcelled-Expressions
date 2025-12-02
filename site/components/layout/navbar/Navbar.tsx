'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavItem from './NavItem';
import { CustomIcon } from '@/lib/types/CustomIcon';
import GraspHand from '@/public/custom_graphics/grasphand.svg';
import { ALL_CATEGORIES } from '@/lib/constants/categories';
import { CategoryFamily } from '@/lib/types/Category';
import NavLogo from './NavLogo';
import MobileMenuCollapseButton from './MobileMenuCollapseButton';
import SearchBar from './SearchBar';

export default function Navbar() {
  // Navbar will show navigable pages for only the functional form categories
  const CATEGORIES = ALL_CATEGORIES.filter(
    (category) => category.categoryFamily === CategoryFamily.FunctionForm,
  );

  const GALLERY_DROPDOWN = CATEGORIES.map((c) => ({
    name: c.title,
    icon: c.icon,
    href: `/gallery/category/${c.slug}`,
  }));

  // const AVAILABLE_ART_DROPDOWN = CATEGORIES.map(c => ({
  //   name: c.title,
  //   href: `/available/category/${c.slug}`,
  // }));

  const NAV_LINKS = [
    {
      name: 'About',
      href: '/',
      icon: CustomIcon.JoySquint,
    },
    {
      name: 'Gallery',
      href: '/gallery',
      icon: CustomIcon.ExcitedGlace,
      dropdown: GALLERY_DROPDOWN,
    },
    {
      name: 'Available Art',
      href: '/available',
      icon: CustomIcon.StarryEyes,
      // dropdown: AVAILABLE_ART_DROPDOWN, // enable anytime
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="static w-full z-50 pointer-events-none">
      <div className="relative bg-foreground pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <NavLogo />

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <NavItem key={link.href} {...link} icon={link.icon} />
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <MobileMenuCollapseButton
                open={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              />
            </div>

            {/* <SearchBar/> */}
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
              {NAV_LINKS.map((link) => (
                <NavItem
                  key={link.href}
                  {...link}
                  icon={link.icon}
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
