import Link from 'next/link';
import CustomIconSVG from '@/components/shared/CustomIconSVG';
import { CustomIcon } from '@/lib/types/CustomIcon';

export default function NavLogo() {
  return (
    <Link href="/" className="flex items-center nav-link">
      <CustomIconSVG icon={CustomIcon.SpiralCutGaze} className="w-14 h-14 mr-5" />
      <span className="font-bold text-lg">Ensorcelled Expressions</span>
    </Link>
  );
}