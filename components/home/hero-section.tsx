"use client";

import { Shield, ClipboardList, Trophy, MapPin } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-15 min-h-svh grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-paper flex flex-col justify-center px-4 py-12 sm:px-10 lg:px-12 lg:py-18 lg:pr-14 relative">
        <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-px bg-line2" />

        <div className="inline-flex items-center gap-2 bg-accent-bg border border-accent/20 px-3.5 py-1.5 rounded-full text-[11px] font-medium text-accent tracking-wide mb-7 w-fit">
          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
          Serving Metro Vancouver &middot; Lower Mainland, BC
        </div>

        <h1 className="font-serif text-[clamp(34px,4vw,68px)] font-normal leading-[1.08] text-ink tracking-tight">
          Vancouver&apos;s finest homes deserve{" "}
          <em className="italic text-accent">exceptional gyms</em>
        </h1>

        <p className="mt-5 text-[15px] text-muted leading-relaxed max-w-[420px] font-light">
          Vantage Gyms designs and builds luxury home gyms for the Lower
          Mainland&apos;s most discerning homeowners. From first consultation to
          final handover, we handle everything.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 mt-9">
          <button
            onClick={() => scrollToSection("#contact")}
            className="inline-flex items-center justify-center gap-2 bg-accent text-white font-sans text-sm font-medium px-6 py-3.5 rounded-sm border-none cursor-pointer transition-all hover:bg-accent2 hover:gap-3 whitespace-nowrap"
          >
            Book a Free Consultation
          </button>
          <button
            onClick={() => scrollToSection("#services")}
            className="inline-flex items-center justify-center bg-transparent text-ink font-sans text-sm font-normal px-5 py-3.5 rounded-sm border border-line2 cursor-pointer transition-colors hover:border-slate hover:text-slate whitespace-nowrap"
          >
            See Our Services
          </button>
        </div>

        <div className="mt-11 pt-7 border-t border-line flex flex-wrap gap-5 sm:gap-7">
          <div className="flex flex-col">
            <span className="font-serif text-2xl text-ink leading-none">7</span>
            <span className="text-[11px] text-muted mt-1 font-normal">
              Stage build process
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl text-ink leading-none">
              100%
            </span>
            <span className="text-[11px] text-muted mt-1 font-normal">
              Turnkey delivery
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl text-ink leading-none">
              Free
            </span>
            <span className="text-[11px] text-muted mt-1 font-normal">
              In home consultation
            </span>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex bg-white flex-col justify-center px-12 py-18 pl-14 gap-4">
        <TrustCard
          icon={<Shield className="w-[17px] h-[17px]" />}
          title="Fully Insured and Compliant"
          body="WorkSafeBC registered. Commercial liability insurance. All trades Red Seal certified. Your home is protected."
        />
        <TrustCard
          icon={<ClipboardList className="w-[17px] h-[17px]" />}
          title="Fixed Price Contracts"
          body="No surprises. Every project starts with a detailed written quote and a signed fixed price contract."
        />
        <TrustCard
          icon={<Trophy className="w-[17px] h-[17px]" />}
          title="Premium Equipment Partners"
          body="Preferred dealer access to Technogym, Life Fitness, and Rogue Fitness through our Canadian distributor network."
        />
        <TrustCard
          icon={<MapPin className="w-[17px] h-[17px]" />}
          title="We Come to You"
          body="All consultations are in your home. Great design starts with understanding your space, not a showroom."
        />
      </div>
    </section>
  );
}

function TrustCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-paper border border-line rounded p-5 px-6 flex gap-4 items-start transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
      <div className="w-[38px] h-[38px] shrink-0 bg-accent-bg rounded-lg flex items-center justify-center text-accent">
        {icon}
      </div>
      <div>
        <div className="text-[13px] font-medium text-ink mb-0.5">{title}</div>
        <div className="text-[12px] text-muted leading-relaxed">{body}</div>
      </div>
    </div>
  );
}
