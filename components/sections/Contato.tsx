"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Instagram } from "lucide-react";
import { CONTATO } from "@/lib/constants";

export function Contato() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-950 mb-4">
            Entre em contato
          </h2>
          <p className="text-amber-900/70 max-w-2xl mx-auto">
            Estamos prontos para atender você. Escolha o canal de sua preferência.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <a
            href={`https://wa.me/${CONTATO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 rounded-2xl border border-amber-900/10 hover:border-amber-900/30 hover:bg-amber-50/50 transition-all group"
          >
            <div className="p-4 rounded-full bg-green-100 text-green-700 mb-4 group-hover:bg-green-200 transition-colors">
              <MessageCircle size={32} />
            </div>
            <h3 className="font-semibold text-amber-950 mb-2">WhatsApp</h3>
            <p className="text-amber-900/70 text-sm text-center">
              {CONTATO.whatsappFormatado}
            </p>
            <p className="text-amber-600 text-sm mt-2 font-medium">
              Clique para conversar →
            </p>
          </a>

          <a
            href={`mailto:${CONTATO.email}`}
            className="flex flex-col items-center p-8 rounded-2xl border border-amber-900/10 hover:border-amber-900/30 hover:bg-amber-50/50 transition-all group"
          >
            <div className="p-4 rounded-full bg-amber-100 text-amber-900 mb-4 group-hover:bg-amber-200 transition-colors">
              <Mail size={32} />
            </div>
            <h3 className="font-semibold text-amber-950 mb-2">E-mail</h3>
            <p className="text-amber-900/70 text-sm text-center break-all">
              {CONTATO.email}
            </p>
            <p className="text-amber-600 text-sm mt-2 font-medium">
              Enviar mensagem →
            </p>
          </a>

          <a
            href={CONTATO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 rounded-2xl border border-amber-900/10 hover:border-amber-900/30 hover:bg-amber-50/50 transition-all group"
          >
            <div className="p-4 rounded-full bg-pink-100 text-pink-600 mb-4 group-hover:bg-pink-200 transition-colors">
              <Instagram size={32} />
            </div>
            <h3 className="font-semibold text-amber-950 mb-2">Instagram</h3>
            <p className="text-amber-900/70 text-sm text-center">
              @estelasousa_adv
            </p>
            <p className="text-amber-600 text-sm mt-2 font-medium">
              Seguir no Instagram →
            </p>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
