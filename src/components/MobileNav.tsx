import Link from "next/link";
import { FaHouse, FaUser, FaScrewdriverWrench, FaBriefcase, FaPaperPlane } from "react-icons/fa6";

const NAV = [
  { href: "#hero", label: "Home", Icon: FaHouse },
  { href: "#about", label: "About", Icon: FaUser },
  { href: "#skills", label: "Skills", Icon: FaScrewdriverWrench },
  { href: "#projects", label: "Projects", Icon: FaBriefcase },
  { href: "#contact", label: "Contact", Icon: FaPaperPlane },
];

export default function MobileNav() {
  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background/80 backdrop-blur-md border-t border-border"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-2 grid grid-cols-5 text-xs">
        {NAV.map(({ href, label, Icon }) => (
          <Link key={href} href={href} className="flex flex-col items-center py-2 min-h-[44px] text-foreground/80">
            <Icon className="text-base" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
