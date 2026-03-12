"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Globe, Check } from "lucide-react";

const consultItems = [
  "In home site visit and space assessment",
  "Space planning recommendations",
  "Equipment curation overview",
  "Preliminary budget range",
  "No obligation, no pressure",
];

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    const form = e.currentTarget;
    form.reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-8 lg:px-12">
        <div>
          <span className="text-[11px] font-medium tracking-[3px] uppercase text-accent mb-3 block">
            Get Started
          </span>
          <h2 className="font-serif text-[clamp(28px,3vw,52px)] font-normal leading-[1.1] text-ink tracking-tight mb-3.5">
            Book your <em className="italic text-accent">free consultation</em>
          </h2>
          <p className="text-[15px] text-muted leading-relaxed max-w-[520px] mb-12 font-light">
            Tell us about your home. We&apos;ll visit your space, understand
            your goals, and show you exactly what&apos;s possible. No
            obligation, no pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-medium tracking-[1.5px] uppercase text-slate">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="James"
                  required
                  className="font-sans text-sm font-light text-ink bg-white border border-line2 rounded-sm py-2.5 px-3.5 outline-none w-full transition-all focus:border-accent focus:ring-[3px] focus:ring-accent/[0.08] placeholder:text-muted"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-medium tracking-[1.5px] uppercase text-slate">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Harrison"
                  required
                  className="font-sans text-sm font-light text-ink bg-white border border-line2 rounded-sm py-2.5 px-3.5 outline-none w-full transition-all focus:border-accent focus:ring-[3px] focus:ring-accent/[0.08] placeholder:text-muted"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-medium tracking-[1.5px] uppercase text-slate">
                Email Address
              </label>
              <input
                type="email"
                placeholder="james@email.com"
                required
                className="font-sans text-sm font-light text-ink bg-white border border-line2 rounded-sm py-2.5 px-3.5 outline-none w-full transition-all focus:border-accent focus:ring-[3px] focus:ring-accent/[0.08] placeholder:text-muted"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-medium tracking-[1.5px] uppercase text-slate">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 (604) 000 0000"
                className="font-sans text-sm font-light text-ink bg-white border border-line2 rounded-sm py-2.5 px-3.5 outline-none w-full transition-all focus:border-accent focus:ring-[3px] focus:ring-accent/[0.08] placeholder:text-muted"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-medium tracking-[1.5px] uppercase text-slate">
                Your Neighbourhood
              </label>
              <select
                required
                defaultValue=""
                className="font-sans text-sm font-light text-ink bg-white border border-line2 rounded-sm py-2.5 px-3.5 outline-none w-full transition-all focus:border-accent focus:ring-[3px] focus:ring-accent/[0.08] appearance-none"
              >
                <option value="" disabled>
                  Select your area
                </option>
                <option>West Vancouver</option>
                <option>Shaughnessy</option>
                <option>South Granville / Kerrisdale</option>
                <option>North Vancouver</option>
                <option>Richmond</option>
                <option>South Surrey / White Rock</option>
                <option>Other Lower Mainland</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-medium tracking-[1.5px] uppercase text-slate">
                Service Interest
              </label>
              <select
                defaultValue=""
                className="font-sans text-sm font-light text-ink bg-white border border-line2 rounded-sm py-2.5 px-3.5 outline-none w-full transition-all focus:border-accent focus:ring-[3px] focus:ring-accent/[0.08] appearance-none"
              >
                <option value="" disabled>
                  Which tier interests you?
                </option>
                <option>Essential</option>
                <option>Premier</option>
                <option>Signature</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-medium tracking-[1.5px] uppercase text-slate">
                Tell Us About Your Space
              </label>
              <textarea
                placeholder="Describe your space, your goals, or any questions you have..."
                rows={4}
                className="font-sans text-sm font-light text-ink bg-white border border-line2 rounded-sm py-2.5 px-3.5 outline-none w-full transition-all focus:border-accent focus:ring-[3px] focus:ring-accent/[0.08] placeholder:text-muted resize-y"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3.5 mt-1">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-accent text-white font-sans text-sm font-medium px-6 py-3.5 rounded-sm border-none cursor-pointer transition-all hover:bg-accent2"
              >
                Send Request
              </button>
              <span className="text-[12px] text-muted">
                We respond within 24 hours
              </span>
            </div>

            {formSubmitted && (
              <div className="mt-2.5 bg-accent-bg border border-accent/25 rounded p-3 px-4 text-[13px] text-accent font-medium">
                Thank you. We&apos;ll be in touch within 24 hours to arrange
                your consultation.
              </div>
            )}
          </form>

          <div>
            <div className="flex flex-col">
              <ContactInfoBlock
                icon={<MapPin className="w-[17px] h-[17px]" />}
                label="Service Area"
                value="Metro Vancouver and Lower Mainland, BC"
                isFirst
              />
              <ContactInfoBlock
                icon={<Phone className="w-[17px] h-[17px]" />}
                label="Phone"
                value="+1 (604) 000 0000"
              />
              <ContactInfoBlock
                icon={<Mail className="w-[17px] h-[17px]" />}
                label="Email"
                value="hello@vantagegyms.ca"
              />
              <ContactInfoBlock
                icon={<Globe className="w-[17px] h-[17px]" />}
                label="Languages"
                value="English · Mandarin consultations available"
              />
            </div>

            <div className="bg-accent rounded p-7 mt-6 text-white">
              <div className="font-serif text-xl mb-3">
                Your free consultation includes:
              </div>
              <ul className="flex flex-col gap-2">
                {consultItems.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] text-white/80 flex gap-2.5 items-start leading-relaxed"
                  >
                    <Check className="w-3 h-3 text-[#7DC9A4] shrink-0 mt-1" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoBlock({
  icon,
  label,
  value,
  isFirst = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  isFirst?: boolean;
}) {
  return (
    <div
      className={`py-5 grid grid-cols-[40px_1fr] gap-3.5 items-start border-b border-line ${
        isFirst ? "border-t" : ""
      }`}
    >
      <div className="w-10 h-10 bg-accent-bg rounded-lg flex items-center justify-center text-accent shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[10px] font-medium tracking-[2px] uppercase text-muted mb-0.5">
          {label}
        </div>
        <div className="text-[13px] text-ink">{value}</div>
      </div>
    </div>
  );
}
