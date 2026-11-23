import Image from "next/image";
import { profile } from "@/data/resume";
import SocialLinks from "./SocialLinks";

export default function MobileHeader() {
  return (
    <div
      className="lg:hidden flex items-center gap-3 px-5 pb-3 border-b border-border bg-background"
      style={{ paddingTop: "calc(1rem + env(safe-area-inset-top))" }}
    >
      <Image
        src="/images/profile.jpg"
        alt="Portrait of Ezekiel Okebule"
        width={400}
        height={440}
        priority
        className="w-14 h-[3.85rem] object-cover rounded-lg ring-2 ring-border shrink-0"
      />
      <div className="min-w-0 flex-1">
        <div className="text-base font-bold text-foreground leading-tight">{profile.name}</div>
        <div className="text-[11px] text-muted mt-0.5">{profile.title}</div>
        <SocialLinks className="mt-1.5" />
      </div>
    </div>
  );
}
