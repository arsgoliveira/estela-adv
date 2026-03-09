"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { DEPOIMENTOS } from "@/lib/constants";
import { useRef, useState, useEffect } from "react";

export function Depoimentos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            Depoimentos de quem confiou na nossa advocacia
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {DEPOIMENTOS.map((depoimento, index) => (
              <motion.div
                key={depoimento.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="flex-shrink-0 w-[320px] sm:w-[360px] bg-slate-50 rounded-2xl p-6 border border-slate-800/5 hover:shadow-xl hover:shadow-sky-500/10 hover:border-sky-400/30 transition-all duration-300"
              >
                <Quote className="text-sky-300 mb-4" size={32} />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: depoimento.avaliacao }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="inline-flex"
                    >
                      <Star
                        size={18}
                        className="fill-sky-500 text-sky-500"
                      />
                    </motion.span>
                  ))}
                </div>
                <p className="text-slate-700 text-base leading-relaxed mb-4">
                  &ldquo;{depoimento.texto}&rdquo;
                </p>
                <p className="font-semibold text-slate-900 text-base">
                  {depoimento.nome}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex justify-center gap-4 mt-8">
            <motion.button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full border border-slate-800/20 text-slate-800 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 hover:border-sky-400/40 transition-colors"
              aria-label="Anterior"
            >
              ←
            </motion.button>
            <motion.button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full border border-slate-800/20 text-slate-800 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 hover:border-sky-400/40 transition-colors"
              aria-label="Próximo"
            >
              →
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
