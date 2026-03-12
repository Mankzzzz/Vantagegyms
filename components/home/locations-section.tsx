const locations = [
  {
    area: "Primary Market",
    name: "West Vancouver",
    desc: "Cypress Park, Dundarave, Caulfeild. Old money estates with the space and pedigree for world class wellness suites.",
    badge: "Core Territory",
  },
  {
    area: "Primary Market",
    name: "Shaughnessy",
    desc: "Heritage mansions and custom builds. Renovation savvy clients who understand the value of curated interiors.",
    badge: "Core Territory",
  },
  {
    area: "Primary Market",
    name: "South Granville and Kerrisdale",
    desc: "Affluent families who prioritize health and wellness. The strongest word of mouth culture in Vancouver.",
    badge: "Core Territory",
  },
  {
    area: "Secondary Market",
    name: "North Vancouver",
    desc: "Outdoor lifestyle homeowners with dedicated basement or garage spaces ideal for conversion.",
    badge: "Active Service Area",
  },
  {
    area: "Secondary Market",
    name: "Richmond",
    desc: "Rapidly growing high net worth demographic. Mandarin consultations available for this community.",
    badge: "Active Service Area",
  },
  {
    area: "Emerging Market",
    name: "South Surrey and White Rock",
    desc: "Larger lots, newer custom builds, and a less competitive luxury fitness landscape. Growing fast.",
    badge: "Growing Territory",
  },
];

export function LocationsSection() {
  return (
    <section id="locations" className="py-20 bg-paper">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-8 lg:px-12">
        <div>
          <span className="text-[11px] font-medium tracking-[3px] uppercase text-accent mb-3 block">
            Where We Build
          </span>
          <h2 className="font-serif text-[clamp(28px,3vw,52px)] font-normal leading-[1.1] text-ink tracking-tight mb-3.5">
            Serving the Lower Mainland&apos;s{" "}
            <em className="italic text-accent">finest addresses</em>
          </h2>
          <p className="text-[15px] text-muted leading-relaxed max-w-[520px] mb-12 font-light">
            We build throughout Metro Vancouver, from West Vancouver estates to
            South Surrey&apos;s emerging luxury market.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="bg-white border border-line p-5.5 sm:p-6 transition-colors hover:border-accent"
            >
              <div className="text-[10px] font-medium tracking-[2.5px] uppercase text-accent mb-1.5">
                {loc.area}
              </div>
              <div className="font-serif text-lg text-ink mb-2.5">
                {loc.name}
              </div>
              <p className="text-[13px] text-slate leading-relaxed">
                {loc.desc}
              </p>
              <span className="inline-block mt-3 text-[9px] font-semibold tracking-[2px] uppercase bg-accent-bg text-accent px-2.5 py-1 rounded-full">
                {loc.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
