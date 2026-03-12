const steps = [
  {
    num: 1,
    name: "Discovery Consultation",
    desc: "Free in home visit. We assess your space, understand your goals, and scope the project. No obligation.",
    time: "1 to 2 weeks",
  },
  {
    num: 2,
    name: "Design and Equipment Curation",
    desc: "3D renderings, mood boards, equipment selection from Canadian available inventory, and material specifications.",
    time: "2 to 3 weeks",
  },
  {
    num: 3,
    name: "Fixed Price Proposal",
    desc: "Detailed written quote, timeline, and subcontractor agreements. Everything in writing. 30% deposit at signing.",
    time: "1 week",
  },
  {
    num: 4,
    name: "Pre Build Coordination",
    desc: "Permits filed where required, equipment ordered, trades scheduled, and all logistics confirmed.",
    time: "2 to 4 weeks",
  },
  {
    num: 5,
    name: "Construction",
    desc: "Flooring, walls, electrical (BC Hydro compliant), HVAC, acoustics, and smart system rough in. Daily supervision.",
    time: "3 to 8 weeks",
  },
  {
    num: 6,
    name: "Equipment Installation",
    desc: "Delivery, assembly, calibration, AV setup, and full technology testing. Everything working before we leave.",
    time: "1 to 2 weeks",
  },
  {
    num: 7,
    name: "Handover",
    desc: "Full walkthrough, equipment training session, documentation package, warranty activation, and maintenance plan.",
    time: "1 to 3 days",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-8 lg:px-12">
        <div>
          <span className="text-[11px] font-medium tracking-[3px] uppercase text-accent mb-3 block">
            Our Process
          </span>
          <h2 className="font-serif text-[clamp(28px,3vw,52px)] font-normal leading-[1.1] text-ink tracking-tight mb-3.5">
            Seven stages. <em className="italic text-accent">No surprises.</em>
          </h2>
          <p className="text-[15px] text-muted leading-relaxed max-w-[520px] mb-12 font-light">
            Every Vantage build follows the same rigorous 7 stage process, from
            your first conversation through to the day you train in your new
            gym.
          </p>
        </div>

        <div className="flex flex-col gap-0.5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group grid grid-cols-[44px_1fr] sm:grid-cols-[56px_1fr_auto] items-start bg-white border border-line transition-all hover:border-accent hover:bg-accent-bg overflow-hidden"
            >
              <div className="py-6 flex items-start justify-center border-r border-line font-serif text-xl text-muted group-hover:text-accent group-hover:border-accent/20">
                {step.num}
              </div>
              <div className="py-4.5 sm:py-6 px-4 sm:px-7">
                <div className="text-[15px] font-medium text-ink mb-1">
                  {step.name}
                </div>
                <div className="text-[13px] text-muted leading-relaxed">
                  {step.desc}
                </div>
              </div>
              <div className="hidden sm:flex py-6 pr-6 text-[11px] font-medium tracking-wide text-muted whitespace-nowrap items-start group-hover:text-accent">
                {step.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
