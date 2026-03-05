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
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-950 mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-amber-900/70 max-w-2xl mx-auto">
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
                className="flex-shrink-0 w-[320px] sm:w-[360px] bg-amber-50 rounded-2xl p-6 border border-amber-900/5"
              >
                <Quote className="text-amber-300 mb-4" size={32} />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: depoimento.avaliacao }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
                <p className="text-amber-900/80 text-sm leading-relaxed mb-4">
                  &ldquo;{depoimento.texto}&rdquo;
                </p>
                <p className="font-semibold text-amber-950 text-sm">
                  {depoimento.nome}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex justify-center gap-4 mt-8">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="p-2 rounded-full border border-amber-900/20 text-amber-900 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-amber-50 transition-colors"
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="p-2 rounded-full border border-amber-900/20 text-amber-900 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-amber-50 transition-colors"
              aria-label="Próximo"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
