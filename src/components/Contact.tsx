import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { profile } from "@/data/resume";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="p-5 sm:p-8 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-muted mt-2">Open to leading and building ambitious products.</p>
          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="p-4 rounded-xl ring-1 ring-border bg-surface/50 hover:bg-surface flex items-center gap-3 transition-colors"
            >
              <FaEnvelope className="text-xl text-accent" />
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-muted">{profile.email}</div>
              </div>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="p-4 rounded-xl ring-1 ring-border bg-surface/50 hover:bg-surface flex items-center gap-3 transition-colors"
            >
              <FaPhone className="text-xl text-accent" />
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-sm text-muted">{profile.phoneDisplay}</div>
              </div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
