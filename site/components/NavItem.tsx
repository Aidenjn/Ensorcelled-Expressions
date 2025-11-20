"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import CustomIconSVG from "@/components/CustomIconSVG";
import { CustomIcon } from "@/lib/types/CustomIcon";

interface DropdownItem {
  name: string;
  href: string;
  icon: CustomIcon;
}

interface NavItemProps {
  name: string;
  href: string;
  icon: CustomIcon; // <-- now just the enum
  dropdown?: DropdownItem[];
  isMobile?: boolean;
  closeMobileMenu?: () => void;
}

// Small helper components
const ArrowIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`w-4 h-4 transition-transform ${open ? "rotate-90" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function NavItem(props: NavItemProps) {
  const { isMobile } = props;

  return <li>{isMobile ? <MobileNavItem {...props} /> : <DesktopNavItem {...props} />}</li>;
}

//
// ────────────────────────────────────────────────────────────────
//   MOBILE NAV ITEM
// ────────────────────────────────────────────────────────────────
//
function MobileNavItem({
  name,
  href,
  icon,
  dropdown,
  closeMobileMenu,
}: NavItemProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const hasDropdown = dropdown && dropdown.length > 0;
  const isActive =
    pathname === href ||
    dropdown?.some((item) => item.href === pathname);

  return (
    <div className="border-b border-gray-100">
      <div className="flex items-center justify-between w-full px-4 py-3">
        
        {/* MAIN LINK — always navigates */}
        <Link
          href={href}
          onClick={closeMobileMenu}
          className={`flex items-center gap-2 nav-link ${
            isActive ? "nav-focus" : "hover:text-hover_text_color"
          }`}
        >
          <CustomIconSVG icon={icon} className="w-6 h-6" /> {/* <-- Render Icon internally */}
          {name}
        </Link>

        {/* DROPDOWN TOGGLE BUTTON — ONLY toggles */}
        {hasDropdown && (
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle dropdown"
            className="p-2 -mr-2"
          >
            <ArrowIcon open={open} />
          </button>
        )}
      </div>

      {/* DROPDOWN SUBMENU */}
      {hasDropdown && (
        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex flex-col pl-8"
            >
              {dropdown!.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="px-3 py-2 hover:text-hover_text_color block nav-link"
                    onClick={closeMobileMenu}
                  >
                    <CustomIconSVG icon={item.icon} className="w-6 h-6 inline mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

//
// ────────────────────────────────────────────────────────────────
//   DESKTOP NAV ITEM
// ────────────────────────────────────────────────────────────────
//
function DesktopNavItem({
  name,
  href,
  icon,
  dropdown,
}: NavItemProps) {
  const pathname = usePathname();
  const [hover, setHover] = useState(false);

  const hasDropdown = dropdown && dropdown.length > 0;
  const isActive = pathname === href;

  return (
    <div
      className="relative"
      onMouseEnter={() => hasDropdown && setHover(true)}
      onMouseLeave={() => hasDropdown && setHover(false)}
    >
      <Link
        href={href}
        className={`flex items-center gap-2 px-2 py-1 font-medium transition-colors ${
          isActive ? "font-bold text-focus_text_color nav-focus" : "nav-link"
        }`}
      >
        <CustomIconSVG icon={icon} className="w-6 h-6" /> {/* <-- Render Icon internally */}
        {name}
      </Link>

      {hasDropdown && (
        <AnimatePresence>
          {hover && (
            <motion.ul
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              style={{ originY: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full -left-2 pt-1 pb-3 bg-foreground shadow-lg rounded-md overflow-hidden text-on_foreground_text_color"
            >
              {dropdown.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block ml-0 px-4 py-2 nav-link w-fit whitespace-nowrap">
                    <CustomIconSVG icon={item.icon} className="w-6 h-6 inline mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}