"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-15 flex items-center justify-between px-6 bg-white/[0.97] border-b border-line transition-shadow duration-300 ${
          isScrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.07)]" : ""
        }`}
      >
        <Link href="/" className="flex items-baseline gap-2 no-underline">
          <span className="font-serif text-xl text-ink">Vantage</span>
          <span className="text-[10px] tracking-[3px] uppercase text-accent font-medium">
            Gyms
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#services");
            }}
            className="text-[13px] font-normal text-muted no-underline transition-colors hover:text-ink"
          >
            Services
          </Link>
          <Link
            href="/#process"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#process");
            }}
            className="text-[13px] font-normal text-muted no-underline transition-colors hover:text-ink"
          >
            Process
          </Link>
          <Link
            href="/about"
            className="text-[13px] font-normal text-muted no-underline transition-colors hover:text-ink"
          >
            About Us
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            className="bg-accent text-white px-[18px] py-[9px] text-[13px] font-medium rounded-sm no-underline"
          >
            Free Consultation
          </Link>
        </div>

        <button
          className="md:hidden bg-transparent border-none text-xl cursor-pointer text-ink p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          mobileMenuOpen ? "flex" : "hidden"
        } fixed top-15 left-0 right-0 z-40 bg-white border-b border-line flex-col px-5 py-3 pb-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)]`}
      >
        <Link
          href="/#services"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#services");
          }}
          className="text-[15px] text-ink no-underline py-[13px] border-b border-line font-normal"
        >
          Services
        </Link>
        <Link
          href="/#process"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#process");
          }}
          className="text-[15px] text-ink no-underline py-[13px] border-b border-line font-normal"
        >
          Process
        </Link>
        <Link
          href="/about"
          onClick={() => setMobileMenuOpen(false)}
          className="text-[15px] text-ink no-underline py-[13px] border-b border-line font-normal"
        >
          About Us
        </Link>
        <Link
          href="/#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#contact");
          }}
          className="text-[15px] text-accent no-underline py-[13px] font-medium"
        >
          Free Consultation
        </Link>
      </div>
    </>
  );
}
