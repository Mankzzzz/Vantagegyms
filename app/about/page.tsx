import Link from "next/link";
import { Check, User, Target, Trophy, Handshake, Leaf, MapPin, Sparkles } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Vantage Gyms | Luxury Home Gym Builders, Vancouver BC",
  description:
    "Learn about Vantage Gyms, founded by Sarthak and Ibraheem. Vancouver's premier luxury home gym design and build company.",
};

const stats = [
  { value: "2", label: "Founders" },
  { value: "Vancouver", label: "Based and Built" },
  { value: "100%", label: "Client focused" },
  { value: "One", label: "Simple mission" },
];

const tags = [
  "Vancouver, BC",
  "UBC Alumni",
  "Fitness Obsessed",
  "Design Driven",
  "Client First",
  "Lower Mainland Focused",
];

const founders = [
  {
    name: "Sarthak Manikthala",
    role: "Head of Operations and Client Experience",
    bio: [
      "Sarthak is a <strong>Finance student at UBC</strong> with five years of dedicated training under his belt. What started as a personal passion quickly became a professional mission: he saw firsthand that no two athletes train the same way, yet every gym is built as if they do.",
      "That frustration became the spark for Vantage. Sarthak leads every client relationship from first consultation to final handover, ensuring the gym we build is a perfect reflection of how you actually move, train, and live.",
    ],
    traits: ["5 Years Training", "UBC Finance", "Client Focused", "Detail Oriented"],
    quote:
      "I spent years training in spaces that weren't built for me. Every gym we design at Vantage is built so you never feel that way.",
  },
  {
    name: "Ibraheem Bajwa",
    role: "Head of Brand and Growth",
    bio: [
      "Ibraheem brings the energy. A <strong>Marketing graduate</strong> with a natural ability to connect with people and a track record of building brands that resonate, he understood from day one that Vantage wasn't just selling gym builds. It was selling a better way to live.",
      "His outgoing personality and deep belief in personalized wellness make him the driving force behind Vantage's reputation in Vancouver's luxury market. His mission: help people create spaces that make them want to show up every day.",
    ],
    traits: ["Marketing Degree", "Brand Builder", "People Person", "Wellness Advocate"],
    quote:
      "A great gym doesn't just change how you train. It changes how you think about yourself. That's what we're really building.",
  },
];

const values = [
  {
    icon: <Target className="w-7 h-7" />,
    title: "Personalization First",
    desc: "No two clients train the same way. Every Vantage gym is designed from scratch around the person who will use it every day.",
  },
  {
    icon: <Trophy className="w-7 h-7" />,
    title: "Uncompromising Quality",
    desc: "We work only with the best equipment brands, the best tradespeople, and the best materials. Your home deserves nothing less.",
  },
  {
    icon: <Handshake className="w-7 h-7" />,
    title: "Radical Transparency",
    desc: "Fixed price contracts, clear timelines, and honest communication at every stage. No surprises ever.",
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: "Wellness as a Lifestyle",
    desc: "We believe a great gym changes more than your fitness. It changes how you start your day, how you feel, and how you live.",
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: "Proudly Local",
    desc: "We're Vancouver born and Lower Mainland focused. We know these homes, these neighbourhoods, and these clients.",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Built to Last",
    desc: "Every gym we build is designed to be used hard for decades and to look beautiful while doing it.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <div className="pt-15 bg-paper border-b border-line">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="text-[11px] font-medium tracking-[2px] uppercase text-muted mb-5 flex items-center gap-2">
            <Link
              href="/"
              className="text-muted no-underline transition-colors hover:text-ink"
            >
              Home
            </Link>
            <span>/</span>
            <span className="text-ink">About Us</span>
          </div>
          <h1 className="font-serif text-[clamp(36px,5vw,72px)] font-normal leading-[1.05] tracking-tight max-w-[700px]">
            Built by people who <em className="italic text-accent">live it</em>
          </h1>
          <p className="text-base text-muted leading-relaxed max-w-[560px] mt-5 font-light">
            Vantage Gyms was founded by two Vancouver based entrepreneurs who
            believe every serious home deserves a serious gym, designed around
            the person who uses it.
          </p>
          <div className="mt-12 flex flex-wrap gap-6 sm:gap-10 pt-10 border-t border-line">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-[28px] text-ink">{stat.value}</div>
                <div className="text-[11px] text-muted mt-0.5 font-normal">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 bg-paper">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[11px] font-medium tracking-[3px] uppercase text-accent mb-3 block">
                Our Story
              </span>
              <h2 className="font-serif text-[clamp(28px,3vw,52px)] font-normal leading-[1.1] text-ink tracking-tight mb-5">
                A gym should fit <em className="italic text-accent">you</em>
              </h2>
              <div className="space-y-4.5">
                <p className="text-[15px] text-slate leading-relaxed font-light">
                  Vantage Gyms started with a simple frustration: every gym
                  looks the same. The same machines in the same rows, the same
                  layout, the same experience, regardless of who you are or how
                  you train.
                </p>
                <p className="text-[15px] text-slate leading-relaxed font-light">
                  <strong className="font-medium text-ink">
                    Sarthak noticed it first.
                  </strong>{" "}
                  Five years of serious training taught him that the best
                  workout comes from a space designed around you. Your goals,
                  your body, your rhythm. No commercial gym could offer that.
                  But a home gym could.
                </p>
                <p className="text-[15px] text-slate leading-relaxed font-light">
                  <strong className="font-medium text-ink">
                    Ibraheem saw the opportunity.
                  </strong>{" "}
                  With a sharp eye for brand, experience, and what people
                  actually want, he understood that luxury homeowners
                  weren&apos;t just buying equipment. They were buying a
                  lifestyle statement and a daily ritual.
                </p>
                <p className="text-[15px] text-slate leading-relaxed font-light">
                  Together, they built Vantage to be the company that finally
                  bridges the gap: exceptional design, premium equipment, and a
                  build process that treats your home with the respect it
                  deserves.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-accent p-9 sm:p-10">
                <p className="font-lora italic text-xl text-white leading-relaxed">
                  &quot;Every gym we build is different. Because every client is
                  different. That&apos;s the whole point.&quot;
                </p>
                <div className="text-[11px] font-medium tracking-[2px] uppercase text-white/50 mt-4">
                  Sarthak and Ibraheem, Co Founders
                </div>
              </div>
              <div className="bg-paper2 border border-line p-6 sm:p-7 flex flex-wrap gap-2.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white border border-line2 rounded-full px-3.5 py-1.5 text-[12px] font-medium text-slate"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="mb-12">
            <span className="text-[11px] font-medium tracking-[3px] uppercase text-accent mb-3 block">
              The Founders
            </span>
            <h2 className="font-serif text-[clamp(28px,3vw,52px)] font-normal leading-[1.1] text-ink tracking-tight">
              Two people. One{" "}
              <em className="italic text-accent">shared vision.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0.5">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-white border border-line overflow-hidden transition-all hover:border-accent hover:shadow-[0_12px_40px_rgba(45,106,79,0.08)]"
              >
                <div className="w-full aspect-[4/3] bg-paper2 border-b border-line flex flex-col items-center justify-center gap-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-paper to-paper2" />
                  <div className="relative z-10 w-20 h-20 rounded-full bg-accent-bg border-2 border-line2 flex items-center justify-center">
                    <User className="w-8 h-8 text-muted" />
                  </div>
                  <div className="relative z-10 text-[11px] font-medium tracking-[2px] uppercase text-muted">
                    {founder.name}
                  </div>
                  <div className="relative z-10 text-[11px] bg-ink text-white/70 px-3.5 py-1.5 rounded-full">
                    Photo placeholder
                  </div>
                </div>

                <div className="p-6 sm:p-9">
                  <div className="text-[10px] font-medium tracking-[3px] uppercase text-accent mb-2">
                    Co Founder
                  </div>
                  <div className="font-serif text-[32px] text-ink mb-1 leading-[1.1]">
                    {founder.name}
                  </div>
                  <div className="text-[13px] text-muted mb-6">{founder.role}</div>
                  <div className="h-px bg-line mb-6" />
                  <div className="space-y-5 mb-5">
                    {founder.bio.map((para, i) => (
                      <p
                        key={i}
                        className="text-sm text-slate leading-relaxed font-light"
                        dangerouslySetInnerHTML={{ __html: para }}
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {founder.traits.map((trait) => (
                      <span
                        key={trait}
                        className="bg-accent-bg border border-accent/15 rounded-full px-3.5 py-1 text-[11px] font-medium text-accent"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                  <div className="bg-paper border-l-[3px] border-accent p-4 px-5 font-lora italic text-sm text-ink leading-relaxed">
                    &quot;{founder.quote}&quot;
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-paper2">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="mb-12">
            <span className="text-[11px] font-medium tracking-[3px] uppercase text-accent mb-3 block">
              What We Stand For
            </span>
            <h2 className="font-serif text-[clamp(28px,3vw,52px)] font-normal leading-[1.1] text-ink tracking-tight">
              The values behind <em className="italic text-accent">every build</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white border border-line p-8 sm:p-9 transition-colors hover:border-accent"
              >
                <span className="text-accent mb-4 block">{value.icon}</span>
                <div className="font-serif text-[22px] text-ink mb-2.5">
                  {value.title}
                </div>
                <p className="text-[13px] text-muted leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <div className="bg-ink py-20 px-4 sm:px-12 text-center">
        <h2 className="font-serif text-[clamp(28px,4vw,52px)] text-white font-normal leading-[1.1] tracking-tight mb-4">
          Ready to meet <em className="italic text-[#7DC9A4]">the team?</em>
        </h2>
        <p className="text-[15px] text-white/50 max-w-[480px] mx-auto mb-9 leading-relaxed">
          Book a free in home consultation and meet Sarthak or Ibraheem in
          person. We come to you.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 bg-accent text-white font-sans text-sm font-medium px-6 py-3.5 rounded-sm no-underline transition-colors hover:bg-accent2"
        >
          Book a Free Consultation
        </Link>
      </div>
    </main>
  );
}
