"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { CONTATO } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#consulta", label: "Consulta de Processos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b transition-shadow duration-300 ${
        scrolled ? "border-slate-800/10 shadow-md shadow-slate-800/5" : "border-slate-800/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-serif font-semibold text-slate-800 group-hover:text-slate-700 transition-colors">
              Estela Sousa
            </span>
            <span className="text-base text-slate-700 font-medium">Advocacia</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-slate-700 hover:text-slate-900 transition-all duration-200 hover:underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${CONTATO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-slate-800 text-white text-base font-medium rounded-lg hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-800"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-800/10"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 text-slate-800 font-medium hover:bg-slate-50 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${CONTATO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 bg-slate-800 text-white text-center font-medium rounded-lg"
              >
                WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
