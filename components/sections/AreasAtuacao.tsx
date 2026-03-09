"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Scale,
  Shield,
  ShoppingCart,
  Heart,
  Award,
  ChevronDown,
} from "lucide-react";
import { AREAS_ATUACAO } from "@/lib/constants";
import { useState } from "react";

const iconMap = {
  briefcase: Briefcase,
  scale: Scale,
  shield: Shield,
  "shopping-cart": ShoppingCart,
  heart: Heart,
  award: Award,
};

export function AreasAtuacao() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="areas" className="py-24 bg-slate-50/50 bg-pattern-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            Atendimento especializado em diversas áreas do Direito
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AREAS_ATUACAO.map((area, index) => {
            const Icon = iconMap[area.icon as keyof typeof iconMap] || Briefcase;
            const isExpanded = expandedId === area.id;

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-800/5 overflow-hidden hover:shadow-xl hover:shadow-sky-500/10 hover:border-sky-400/30 transition-all duration-300 cursor-pointer"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : area.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-sky-100 text-slate-800 group-hover:scale-110 group-hover:bg-sky-200 transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{area.titulo}</h3>
                      <p className="text-base text-slate-600 mt-1">
                        {area.itens.length} especialidades
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`flex-shrink-0 text-slate-600 transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <ul className="px-6 pb-6 space-y-2">
                    {area.itens.map((item) => (
                      <li
                        key={item}
                        className="text-base text-slate-700 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
