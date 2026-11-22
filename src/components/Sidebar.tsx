import Image from "next/image";
import Link from "next/link";
import { FaHouse, FaUser, FaScrewdriverWrench, FaFileLines, FaBriefcase, FaPaperPlane, FaDownload } from "react-icons/fa6";
import { profile } from "@/data/resume";
import CopyrightYear from "./CopyrightYear";
import SocialLinks from "./SocialLinks";

const NAV = [
  { href: "#hero", label: "Home", Icon: FaHouse },
  { href: "#about", label: "About", Icon: FaUser },
  { href: "#skills", label: "Skills", Icon: FaScrewdriverWrench },
  { href: "#resume", label: "Resume", Icon: FaFileLines },
  { href: "#projects", label: "Projects", Icon: FaBriefcase },
  { href: "#contact", label: "Contact", Icon: FaPaperPlane },
];

export default function Sidebar() {
  return (
    <aside className="w-80 bg-background/60 backdrop-blur-lg border-r border-border sticky top-0 h-screen p-6 hidden lg:flex flex-col items-center">
      <Image
        src="/images/profile.jpg"
        alt="Portrait of Ezekiel Okebule"
        width={400}
        height={440}
        priority
        className="w-40 h-44 object-cover rounded-xl shadow-xl ring-2 ring-border"
      />
      <h1 className="mt-4 text-2xl font-bold text-foreground">{profile.name}</h1>
      <p className="text-sm text-muted mt-1 text-center">
        {profile.title}
        <br />
        <span className="text-xs font-mono">{profile.tagline}</span>
      </p>

      <nav className="mt-8 w-full space-y-1">
        {NAV.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            className="group flex items-center gap-2 px-3 py-2 rounded text-sm text-foreground/80 hover:text-foreground hover:bg-surface transition-all hover:pl-4"
          >
            <Icon className="w-4 text-muted group-hover:text-accent transition-colors" />
            {label}
          </Link>
        ))}

        <a
          href={profile.resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-2 px-4 py-2 rounded bg-accent text-background font-semibold text-sm hover:bg-accent-soft transition-colors"
        >
          <FaDownload /> View Resume
        </a>
      </nav>

      <div className="mt-auto text-xs text-subtle text-center">
        <div>© <CopyrightYear /> {profile.name}</div>
        <SocialLinks className="justify-center mt-3" />
      </div>
    </aside>
  );
}
