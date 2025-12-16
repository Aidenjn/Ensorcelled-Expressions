import GraspHand from '@/public/custom_graphics/grasphand.svg';
import { FaInstagram, FaFacebook, FaReddit } from 'react-icons/fa';

export default function Footer() {
  const links = [
    { href: 'https://facebook.com/ensorcelledexpressions', icon: <FaFacebook /> },
    { href: 'https://instagram.com/ensorcelledexpressions', icon: <FaInstagram /> },
    { href: 'https://www.reddit.com/user/EnsorcelledExpress', icon: <FaReddit /> },
    // { href: "https://etsy.com/ensorcelledexpressions", icon: <FaEtsy /> },
  ];

  return (
    <footer className="static w-full z-50 mt-auto pointer-events-none">
      <div className="grasphand-decor-bar -bottom-px">
        <GraspHand className="w-24 h-24 float-left scale-y-[-1] svg-grasp-hand-icon" />
        <GraspHand className="w-24 h-24 float-right scale-y-[-1] scale-x-[-1] svg-grasp-hand-icon" />
      </div>
      <div className="relative grid place-items-center z-60 h-20 w-full bg-foreground pointer-events-auto">
        <div className="flex flex-col items-center">
          <div className="flex gap-4 text-2xl mb-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-1xl"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div>© 2025 Aiden Nelson</div>
        </div>
      </div>
    </footer>
  );
}
