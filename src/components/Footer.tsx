import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="p-6 text-center text-subtle text-sm border-t border-border">
      Built by {profile.name}
    </footer>
  );
}
