"use client";

import { motion } from "framer-motion";
import { CONTATO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-amber-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-100/40 via-transparent to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-amber-800 font-medium tracking-widest uppercase text-sm mb-4"
        >
          Dra. Estela Sousa
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-amber-950 mb-6"
        >
          A lei existe!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-amber-900/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Defesa estratégica dos seus direitos com ética, firmeza e comprometimento.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`https://wa.me/${CONTATO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-amber-900 text-white font-semibold rounded-lg hover:bg-amber-800 transition-colors shadow-lg shadow-amber-900/20"
          >
            Falar no WhatsApp
          </a>
          <a
            href="#consulta"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-900 text-amber-900 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
          >
            Consultar Processo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
