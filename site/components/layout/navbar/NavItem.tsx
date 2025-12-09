import { CustomIcon } from '@/lib/types/CustomIcon';
import DesktopNavItem from './navigationItem/DesktopNavItem';
import MobileNavItem from './navigationItem/MobileNavItem';

export interface DropdownItem {
  name: string;
  href: string;
  icon: CustomIcon;
}

export interface NavItemProps {
  name: string;
  href: string;
  icon: CustomIcon;
  dropdown?: DropdownItem[];
  isMobile?: boolean;
  closeMobileMenu?: () => void;
}

export default function NavItem(props: NavItemProps) {
  const { isMobile } = props;

  return <li>{isMobile ? <MobileNavItem {...props} /> : <DesktopNavItem {...props} />}</li>;
}
