"use client";

import { motion } from "framer-motion";
import { Search, ExternalLink, FileText } from "lucide-react";
import {
  CONSULTA_ESAJ_1GRAU_URL,
  CONSULTA_ESAJ_2GRAU_URL,
  CONSULTA_CNJ_URL,
  CONSULTA_PJE_URL,
} from "@/lib/constants";
import Link from "next/link";

export function ConsultaProcessos() {
  return (
    <section id="consulta" className="py-24 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-950 mb-4">
            Consulta de Processos
          </h2>
          <p className="text-amber-900/70 max-w-2xl mx-auto">
            Acompanhe o andamento do seu processo de forma rápida e prática
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-amber-900/5 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-amber-100">
                <FileText className="text-amber-900" size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-amber-950">
                  Consulte seu processo
                </h3>
                <p className="text-sm text-amber-900/60">
                  Acesse os portais oficiais do Judiciário
                </p>
              </div>
            </div>

            <p className="text-amber-900/80 text-sm mb-6">
              Para consultar o andamento do seu processo, utilize os portais oficiais
              do Poder Judiciário. O número do processo segue o formato:{" "}
              <code className="bg-amber-100 px-2 py-0.5 rounded text-xs">
                NNNNN-DD.AAAA.J.TR.OOOO
              </code>
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href={CONSULTA_ESAJ_1GRAU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-4 rounded-xl border border-amber-900/10 hover:border-amber-900/30 hover:bg-amber-50/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Search className="text-amber-900" size={24} />
                  <div>
                    <p className="font-medium text-amber-950">e-SAJ 1º Grau</p>
                    <p className="text-xs text-amber-900/60">
                      TJSP - Processos 1ª instância
                    </p>
                  </div>
                </div>
                <ExternalLink
                  size={18}
                  className="text-amber-900/60 group-hover:text-amber-900"
                />
              </a>
              <a
                href={CONSULTA_ESAJ_2GRAU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-4 rounded-xl border border-amber-900/10 hover:border-amber-900/30 hover:bg-amber-50/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Search className="text-amber-900" size={24} />
                  <div>
                    <p className="font-medium text-amber-950">e-SAJ 2º Grau</p>
                    <p className="text-xs text-amber-900/60">
                      TJSP - Processos 2ª instância
                    </p>
                  </div>
                </div>
                <ExternalLink
                  size={18}
                  className="text-amber-900/60 group-hover:text-amber-900"
                />
              </a>
              <a
                href={CONSULTA_PJE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-4 rounded-xl border border-amber-900/10 hover:border-amber-900/30 hover:bg-amber-50/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Search className="text-amber-900" size={24} />
                  <div>
                    <p className="font-medium text-amber-950">PJe - TJSP</p>
                    <p className="text-xs text-amber-900/60">
                      Processo Judicial Eletrônico
                    </p>
                  </div>
                </div>
                <ExternalLink
                  size={18}
                  className="text-amber-900/60 group-hover:text-amber-900"
                />
              </a>
              <a
                href={CONSULTA_CNJ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-4 rounded-xl border border-amber-900/10 hover:border-amber-900/30 hover:bg-amber-50/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Search className="text-amber-900" size={24} />
                  <div>
                    <p className="font-medium text-amber-950">CNJ</p>
                    <p className="text-xs text-amber-900/60">
                      Conselho Nacional de Justiça
                    </p>
                  </div>
                </div>
                <ExternalLink
                  size={18}
                  className="text-amber-900/60 group-hover:text-amber-900"
                />
              </a>
            </div>

            <Link
              href="/consulta"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-amber-900 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors"
            >
              Página completa de consulta
              <ExternalLink size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
