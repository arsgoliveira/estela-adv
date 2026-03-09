"use client";

import { motion } from "framer-motion";
import { CONTATO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-sky-100 via-slate-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-200/30 via-transparent to-transparent" />
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-slate-400/25 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-slate-700 font-medium tracking-widest uppercase text-base mb-4"
        >
          Dra. Estela Sousa
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 mb-6"
        >
          A lei existe!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-800/80 max-w-2xl mx-auto mb-10 leading-relaxed"
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
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-slate-800/30 hover:shadow-xl hover:shadow-slate-800/40"
          >
            Falar no WhatsApp
          </a>
          <a
            href="#consulta"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-800 text-slate-800 font-semibold rounded-lg hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all duration-200 hover:shadow-lg hover:shadow-slate-800/20"
          >
            Consultar Processo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
