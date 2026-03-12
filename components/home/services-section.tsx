"use client";

import { Check } from "lucide-react";

const services = [
  {
    tag: "01",
    name: "Essential",
    featured: false,
    description:
      "Premium equipment curation and expert installation within your existing dedicated space. The fastest path to a world class gym.",
    features: [
      "Consultation and equipment curation",
      "Specialist flooring (rubber / hardwood)",
      "Professional mirror wall installation",
      "Gym grade lighting design",
      "Equipment delivery and assembly",
      "Client walkthrough and onboarding",
      "6 month follow up service call",
    ],
  },
  {
    tag: "02",
    name: "Premier",
    featured: true,
    description:
      "A complete transformation. Renovation, equipment, acoustics, and smart technology. Where function meets luxury.",
    features: [
      "Everything in Essential",
      "Full space renovation",
      "Acoustic wall panel system",
      "HVAC and dedicated ventilation",
      "Smart AV: TV, audio and lighting",
      "Permit management (where required)",
      "1 year maintenance contract",
    ],
  },
  {
    tag: "03",
    name: "Signature",
    featured: false,
    description:
      "Custom architectural design, bespoke equipment, full recovery suite. For clients with no budget limit and every expectation.",
    features: [
      "Everything in Premier",
      "Custom architectural design",
      "Infrared sauna and cold plunge",
      "Massage and recovery room",
      "Bespoke equipment packages",
      "Branded interior identity",
      "Dedicated account manager",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-paper">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="animate-fade-in">
          <span className="text-[11px] font-medium tracking-[3px] uppercase text-accent mb-3 block">
            Services
          </span>
          <h2 className="font-serif text-[clamp(28px,3vw,52px)] font-normal leading-[1.1] text-ink tracking-tight mb-3.5">
            Three tiers. One standard of{" "}
            <em className="italic text-accent">excellence</em>.
          </h2>
          <p className="text-[15px] text-muted leading-relaxed max-w-[520px] mb-12 font-light">
            We offer three fully managed service levels to match your space,
            your vision, and your investment. Every tier includes our signature
            white glove delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative flex flex-col p-8 sm:p-9 border border-line transition-all hover:border-accent hover:shadow-[0_8px_32px_rgba(45,106,79,0.08)] ${
                service.featured
                  ? "bg-paper2 border-accent"
                  : "bg-white"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-accent text-white text-[9px] font-semibold tracking-[2.5px] uppercase px-3.5 py-1.5 whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <div className="text-[10px] font-medium tracking-[3px] uppercase text-muted mb-2">
                {service.tag}
              </div>
              <div className="font-serif text-2xl text-ink mb-4">
                {service.name}
              </div>
              <div className="h-px bg-line mb-4" />
              <p className="text-[13px] text-muted leading-relaxed mb-5 flex-1">
                {service.description}
              </p>
              <ul className="flex flex-col gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-[13px] text-slate flex items-start gap-2.5 leading-relaxed"
                  >
                    <Check className="w-3 h-3 text-accent shrink-0 mt-1" strokeWidth={3} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
