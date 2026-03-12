export function LogoStrip() {
  const brands = [
    "Technogym",
    "Life Fitness",
    "Rogue Fitness",
    "Peloton",
    "True Fitness",
    "Clearlight Saunas",
    "Sunlighten",
  ];

  return (
    <div className="bg-white border-t border-b border-line py-5 px-6 flex flex-col items-center gap-2">
      <span className="text-[11px] font-medium tracking-[2px] uppercase text-muted text-center">
        Equipment partners
      </span>
      <div className="flex flex-wrap justify-center gap-2">
        {brands.map((brand) => (
          <span
            key={brand}
            className="bg-paper border border-line rounded-full px-3.5 py-1.5 text-[12px] font-medium text-slate"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
