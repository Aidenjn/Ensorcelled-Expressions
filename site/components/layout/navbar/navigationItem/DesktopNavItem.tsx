import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import CustomIconSVG from '@/components/shared/CustomIconSVG';
import { NavItemProps } from '../NavItem';

export default function DesktopNavItem({ name, href, icon, dropdown }: NavItemProps) {
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
          isActive ? 'font-bold text-focus_text_color nav-focus' : 'nav-link'
        }`}
      >
        <CustomIconSVG icon={icon} className="w-6 h-6" />
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
              className="absolute top-full -left-2 pt-1 pb-3 bg-foreground shadow-lg rounded-md overflow-hidden text-foreground_text_color"
            >
              {dropdown.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block ml-0 px-4 py-2 nav-link w-fit whitespace-nowrap"
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
