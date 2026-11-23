import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { profile } from "@/data/resume";

export default function SocialLinks({ className = "" }: { className?: string }) {
  const links = [
    { href: profile.github, label: "GitHub", Icon: FaGithub },
    { href: profile.linkedin, label: "LinkedIn", Icon: FaLinkedin },
    { href: profile.x, label: "X", Icon: FaXTwitter },
  ];
  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-muted hover:text-accent transition-colors"
        >
          <Icon size={17} />
        </a>
      ))}
    </div>
  );
}
