"use client";

import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-serif font-semibold text-amber-900 group-hover:text-amber-800 transition-colors">
              Estela Sousa
            </span>
            <span className="text-sm text-amber-900/70 font-medium">Advocacia</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-amber-900/80 hover:text-amber-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${CONTATO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-amber-900 text-white text-sm font-medium rounded-lg hover:bg-amber-800 transition-colors"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-amber-900"
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
            className="md:hidden bg-white border-t border-amber-900/10"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 text-amber-900 font-medium hover:bg-amber-50 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${CONTATO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 bg-amber-900 text-white text-center font-medium rounded-lg"
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
