"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-40 border-b border-red-700 shadow">
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Brand/Logo */}
        <Link href="/" className="font-extrabold text-xl text-red-800 tracking-wide">
          FlexiPath
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          <Link href="/services" className="hover:text-red-700 transition">
            Services
          </Link>
          <Link href="/apply" className="hover:text-red-700 transition">
            Apply
          </Link>
          <Link href="/about" className="hover:text-red-700 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-red-700 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button aria-label="menu" onClick={() => setOpen((v) => !v)} className="p-2 rounded hover:bg-red-50 transition">
            <span className="text-2xl text-red-800 font-bold">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-t border-red-200 bg-white/95 shadow">
          <div className="p-4 space-y-2">
            <Link href="/services" className="block py-2 px-3 rounded hover:bg-red-50" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="/apply" className="block py-2 px-3 rounded hover:bg-red-50" onClick={() => setOpen(false)}>
              Apply
            </Link>
            <Link href="/about" className="block py-2 px-3 rounded hover:bg-red-50" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="block py-2 px-3 rounded hover:bg-red-50" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
