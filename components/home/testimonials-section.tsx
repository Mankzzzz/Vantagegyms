import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The result is beyond anything I imagined. It's not just a gym. It's genuinely the best room in my house. I use it every single day.",
    name: "M. Harrington",
    detail: "West Vancouver · Signature Build",
  },
  {
    quote:
      "From the first consultation to the final walkthrough, every detail was considered. A genuinely white glove experience from start to finish.",
    name: "J. and S. Chen",
    detail: "Shaughnessy · Premier Build",
  },
  {
    quote:
      "I've recommended Vantage to three of my clients already. They do what no one else in Vancouver can. The full package, executed perfectly.",
    name: "D. Tamblyn",
    detail: "Luxury Realtor · Sotheby's International Realty",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-8 lg:px-12">
        <div>
          <span className="text-[11px] font-medium tracking-[3px] uppercase text-accent mb-3 block">
            Client Stories
          </span>
          <h2 className="font-serif text-[clamp(28px,3vw,52px)] font-normal leading-[1.1] text-ink tracking-tight mb-12">
            Trusted by Vancouver&apos;s{" "}
            <em className="italic text-accent">finest homeowners</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-paper border border-line rounded p-6 sm:p-7 transition-shadow hover:shadow-[0_8px_28px_rgba(0,0,0,0.07)]"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-[13px] h-[13px] text-accent fill-accent"
                  />
                ))}
              </div>
              <p className="font-lora italic text-sm text-ink leading-relaxed mb-4.5">
                &quot;{t.quote}&quot;
              </p>
              <div className="h-px bg-line mb-3.5" />
              <div className="text-[13px] font-medium text-ink">{t.name}</div>
              <div className="text-[12px] text-muted mt-0.5">{t.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
