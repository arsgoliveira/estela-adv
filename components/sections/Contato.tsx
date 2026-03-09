"use client";

import { motion } from "framer-motion";
import { CONTATO } from "@/lib/constants";
import { WhatsAppIcon, InstagramIcon, TikTokIcon, EmailIcon } from "@/components/icons/SocialIcons";

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
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            Entre em contato
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            Estamos prontos para atender você. Escolha o canal de sua preferência.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          <a
            href={`https://wa.me/${CONTATO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 rounded-2xl border border-slate-800/10 hover:border-sky-400/40 hover:bg-slate-50/80 hover:shadow-xl hover:shadow-sky-500/10 hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="p-4 rounded-full bg-green-100 text-[#25D366] mb-4 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
              <WhatsAppIcon size={32} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">WhatsApp</h3>
            <p className="text-slate-700 text-base text-center">
              {CONTATO.whatsappFormatado}
            </p>
            <p className="text-sky-600 text-base mt-2 font-medium">
              Clique para conversar →
            </p>
          </a>

          <a
            href={`mailto:${CONTATO.email}`}
            className="flex flex-col items-center p-8 rounded-2xl border border-slate-800/10 hover:border-sky-400/40 hover:bg-slate-50/80 hover:shadow-xl hover:shadow-sky-500/10 hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="p-4 rounded-full bg-sky-100 text-slate-800 mb-4 group-hover:bg-sky-200 group-hover:scale-110 transition-all duration-300">
              <EmailIcon size={32} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">E-mail</h3>
            <p className="text-slate-700 text-base text-center break-all">
              {CONTATO.email}
            </p>
            <p className="text-sky-600 text-base mt-2 font-medium">
              Enviar mensagem →
            </p>
          </a>

          <a
            href={CONTATO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 rounded-2xl border border-slate-800/10 hover:border-sky-400/40 hover:bg-slate-50/80 hover:shadow-xl hover:shadow-sky-500/10 hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="p-4 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 mb-4 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
              <InstagramIcon size={28} className="text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Instagram</h3>
            <p className="text-slate-700 text-base text-center">
              @estelasousa_adv
            </p>
            <p className="text-sky-600 text-base mt-2 font-medium">
              Seguir no Instagram →
            </p>
          </a>

          <a
            href={CONTATO.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 rounded-2xl border border-slate-800/10 hover:border-sky-400/40 hover:bg-slate-50/80 hover:shadow-xl hover:shadow-sky-500/10 hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="p-4 rounded-full bg-black/10 text-black mb-4 group-hover:bg-black/20 group-hover:scale-110 transition-all duration-300">
              <TikTokIcon size={32} className="text-black" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">TikTok</h3>
            <p className="text-slate-700 text-base text-center">
              @estelasousa_adv
            </p>
            <p className="text-sky-600 text-base mt-2 font-medium">
              Seguir no TikTok →
            </p>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
