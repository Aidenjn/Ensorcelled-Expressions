import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import CustomIconSVG from '@/components/shared/CustomIconSVG';
import { DropdownItem, NavItemProps } from '../NavItem';
import ArrowIcon from './ArrowIcon';

export default function MobileNavItem({
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
    pathname === href || dropdown?.some((item: DropdownItem) => item.href === pathname);

  return (
    <div className="border-b border-gray-100">
      <div className="flex items-center justify-between w-full px-4 py-3">
        <Link
          href={href}
          onClick={closeMobileMenu}
          className={`flex items-center gap-2 nav-link ${
            isActive ? 'nav-focus' : 'hover:text-hover_text_color'
          }`}
        >
          <CustomIconSVG icon={icon} className="w-6 h-6" />
          {name}
        </Link>

        {hasDropdown && (
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle dropdown"
            className="p-2"
          >
            <ArrowIcon open={open} />
          </button>
        )}
      </div>

      {/* Dropdown submenu */}
      {hasDropdown && (
        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
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
