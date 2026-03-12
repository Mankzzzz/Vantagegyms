import { Target, Dumbbell, Shield, TrendingUp } from "lucide-react";

const whyPoints = [
  {
    icon: <Target className="w-[15px] h-[15px]" />,
    title: "True End to End Service",
    desc: "Design, build, equipment, technology, handover. One company. One point of contact. No managing multiple contractors.",
  },
  {
    icon: <Dumbbell className="w-[15px] h-[15px]" />,
    title: "Fitness Expertise Built In",
    desc: "We understand equipment spacing, sightlines, flooring loads, and ventilation demands. Things general contractors simply don't know.",
  },
  {
    icon: <Shield className="w-[15px] h-[15px]" />,
    title: "Your Home Is Protected",
    desc: "Fully insured, WorkSafeBC registered, all trades Red Seal certified. Everything permitted that needs permitting. No shortcuts.",
  },
  {
    icon: <TrendingUp className="w-[15px] h-[15px]" />,
    title: "Adds Real Value",
    desc: "In Vancouver's luxury market, a professionally built home gym adds meaningful perceived resale value.",
  },
];

export function WhySection() {
  return (
    <section id="why" className="py-20 bg-paper2">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-18 items-center">
          <div>
            <span className="text-[11px] font-medium tracking-[3px] uppercase text-accent mb-3 block">
              Why Vantage
            </span>
            <h2 className="font-serif text-[clamp(28px,3vw,52px)] font-normal leading-[1.1] text-ink tracking-tight mb-3.5">
              One company.{" "}
              <em className="italic text-accent">Everything covered.</em>
            </h2>
            <p className="text-[15px] text-muted leading-relaxed max-w-[520px] font-light">
              General contractors don&apos;t understand fitness. Equipment
              dealers can&apos;t renovate. Vantage is the only team in the Lower
              Mainland that does both, expertly.
            </p>

            <div className="mt-9 flex flex-col">
              {whyPoints.map((point, index) => (
                <div
                  key={point.title}
                  className={`py-5 grid grid-cols-[34px_1fr] gap-4 items-start border-b border-line ${
                    index === 0 ? "border-t" : ""
                  }`}
                >
                  <div className="w-[34px] h-[34px] bg-accent-bg rounded-md flex items-center justify-center text-accent shrink-0 mt-0.5">
                    {point.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-ink mb-0.5">
                      {point.title}
                    </div>
                    <div className="text-[13px] text-muted leading-relaxed">
                      {point.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-first lg:order-last">
            <div className="flex flex-col gap-0.5">
              <MetricCard
                label="Typical total build time"
                value="8 to 16"
                sub="weeks"
              />
              <MetricCard
                label="Service area"
                value="Metro"
                sub="Vancouver and Lower Mainland"
              />
              <MetricCard
                label="Consultation languages"
                value="EN"
                sub="Mandarin available"
              />
              <div className="bg-accent p-6 sm:p-7 mt-0.5 flex items-center justify-between gap-4">
                <p className="font-lora italic text-[15px] text-white leading-relaxed">
                  &quot;We don&apos;t just build gyms. We build the best room in
                  your home.&quot;
                </p>
                <Dumbbell className="w-7 h-7 text-white/60 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="bg-white border border-line p-6 sm:p-7 grid grid-cols-[1fr_auto] items-center transition-colors hover:border-accent">
      <div className="text-[13px] text-muted">{label}</div>
      <div className="text-right">
        <div className="font-serif text-3xl text-ink leading-none">{value}</div>
        <div className="text-[11px] text-muted">{sub}</div>
      </div>
    </div>
  );
}
