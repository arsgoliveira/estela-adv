"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500"
          >
            <Image
              src="/estela-sousa.png"
              alt="Dra. Estela Sousa - Advogada"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-6">
              Advocacia Estratégica e Soluções Jurídicas
            </h2>
            <p className="text-slate-800/80 text-lg leading-relaxed mb-6">
              Advogada com pós-graduação em Direito do Trabalho e Processo do Trabalho,
              atuando em todo o Brasil nas áreas de Direito do Trabalho, Família, Civil,
              Consumidor e Previdenciário.
            </p>
            <p className="text-slate-800/80 text-lg leading-relaxed">
              Comprometida com a excelência técnica, atendimento humanizado e soluções
              jurídicas eficazes, sempre pautada na ética e na defesa dos direitos de
              seus clientes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
