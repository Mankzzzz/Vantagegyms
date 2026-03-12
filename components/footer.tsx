import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink text-white/45 pt-14 pb-8 px-4 md:px-12">
      <div className="max-w-[1160px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-10 pb-10 border-b border-white/[0.08]">
          <div>
            <div className="font-serif text-[22px] text-white mb-0.5">
              Vantage Gyms
            </div>
            <span className="text-[10px] tracking-[3px] uppercase text-accent/90 mb-3 block font-medium">
              Lower Mainland, BC
            </span>
            <p className="text-[13px] leading-relaxed max-w-[220px] text-white/35">
              Vancouver&apos;s premier luxury home gym design and build company.
              Fully managed, end to end.
            </p>
          </div>

          <div>
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-white/65 mb-3.5 block">
              Services
            </span>
            <Link
              href="/#services"
              className="block text-[13px] text-white/35 no-underline py-1 transition-colors hover:text-white/80"
            >
              Essential Build
            </Link>
            <Link
              href="/#services"
              className="block text-[13px] text-white/35 no-underline py-1 transition-colors hover:text-white/80"
            >
              Premier Build
            </Link>
            <Link
              href="/#services"
              className="block text-[13px] text-white/35 no-underline py-1 transition-colors hover:text-white/80"
            >
              Signature Build
            </Link>
            <Link
              href="/#services"
              className="block text-[13px] text-white/35 no-underline py-1 transition-colors hover:text-white/80"
            >
              Maintenance Plans
            </Link>
          </div>

          <div>
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-white/65 mb-3.5 block">
              Areas
            </span>
            <Link
              href="/#locations"
              className="block text-[13px] text-white/35 no-underline py-1 transition-colors hover:text-white/80"
            >
              West Vancouver
            </Link>
            <Link
              href="/#locations"
              className="block text-[13px] text-white/35 no-underline py-1 transition-colors hover:text-white/80"
            >
              Shaughnessy
            </Link>
            <Link
              href="/#locations"
              className="block text-[13px] text-white/35 no-underline py-1 transition-colors hover:text-white/80"
            >
              North Vancouver
            </Link>
            <Link
              href="/#locations"
              className="block text-[13px] text-white/35 no-underline py-1 transition-colors hover:text-white/80"
            >
              Richmond
            </Link>
            <Link
              href="/#locations"
              className="block text-[13px] text-white/35 no-underline py-1 transition-colors hover:text-white/80"
            >
              South Surrey
            </Link>
          </div>

          <div>
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-white/65 mb-3.5 block">
              Company
            </span>
            <Link
              href="/about"
              className="block text-[13px] text-white/35 no-underline py-1 transition-colors hover:text-white/80"
            >
              About Us
            </Link>
            <Link
              href="/#process"
              className="block text-[13px] text-white/35 no-underline py-1 transition-colors hover:text-white/80"
            >
              Our Process
            </Link>
            <Link
              href="/#contact"
              className="block text-[13px] text-white/35 no-underline py-1 transition-colors hover:text-white/80"
            >
              Contact
            </Link>
            <Link
              href="/#contact"
              className="block text-[13px] text-white/35 no-underline py-1 transition-colors hover:text-white/80"
            >
              Free Consultation
            </Link>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-[12px] gap-3">
          <span>
            &copy; 2025 Vantage Gyms &middot; Lower Mainland, BC &middot; All
            rights reserved
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-[10px] font-medium text-white/35">
              WorkSafeBC Registered
            </span>
            <span className="bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-[10px] font-medium text-white/35">
              Fully Insured
            </span>
            <span className="bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-[10px] font-medium text-white/35">
              BC Licensed Trades
            </span>
            <span className="bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-[10px] font-medium text-white/35">
              Red Seal Certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
