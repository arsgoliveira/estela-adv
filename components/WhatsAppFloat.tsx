"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { CONTATO } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${CONTATO.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 left-auto z-[9999] flex h-16 w-16 items-center justify-center rounded-full text-white transition-all duration-300"
      style={{
        boxShadow:
          "inset 0 2px 12px rgba(255,255,255,0.5), inset 0 -2px 6px rgba(0,0,0,0.15), 0 0 0 4px rgba(220,220,220,0.9), 0 6px 24px rgba(37,211,102,0.45)",
        background: "linear-gradient(180deg, #25D366 0%, #20BD5A 50%, #128C7E 100%)",
      }}
      aria-label="Falar no WhatsApp"
    >
      <span className="relative flex items-center justify-center drop-shadow-sm">
        <WhatsAppIcon size={32} className="group-hover:scale-110 transition-transform duration-300 text-white" />
      </span>
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Falar no WhatsApp
      </span>
    </motion.a>
  );
}
