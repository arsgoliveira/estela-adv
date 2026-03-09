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
    <section id="consulta" className="py-24 bg-slate-50/50 bg-pattern-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            Consulta de Processos
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
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
          <div className="bg-white rounded-2xl shadow-lg border border-slate-800/5 p-8 hover:shadow-xl hover:shadow-sky-500/10 transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-sky-100">
                <FileText className="text-slate-800" size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Consulte seu processo
                </h3>
                <p className="text-base text-slate-600">
                  Acesse os portais oficiais do Judiciário
                </p>
              </div>
            </div>

            <p className="text-slate-700 text-base mb-6">
              Para consultar o andamento do seu processo, utilize os portais oficiais
              do Poder Judiciário. O número do processo segue o formato:{" "}
              <code className="bg-sky-100 px-2 py-0.5 rounded text-sm text-slate-800">
                NNNNN-DD.AAAA.J.TR.OOOO
              </code>
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href={CONSULTA_ESAJ_1GRAU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-4 rounded-xl border border-slate-800/10 hover:border-sky-400/40 hover:bg-slate-50/80 hover:shadow-md hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <Search className="text-slate-800" size={24} />
                  <div>
                    <p className="font-medium text-slate-900">e-SAJ 1º Grau</p>
                    <p className="text-sm text-slate-600">
                      TJSP - Processos 1ª instância
                    </p>
                  </div>
                </div>
                <ExternalLink
                  size={18}
                  className="text-slate-600 group-hover:text-slate-900"
                />
              </a>
              <a
                href={CONSULTA_ESAJ_2GRAU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-4 rounded-xl border border-slate-800/10 hover:border-sky-400/40 hover:bg-slate-50/80 hover:shadow-md hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <Search className="text-slate-800" size={24} />
                  <div>
                    <p className="font-medium text-slate-900">e-SAJ 2º Grau</p>
                    <p className="text-sm text-slate-600">
                      TJSP - Processos 2ª instância
                    </p>
                  </div>
                </div>
                <ExternalLink
                  size={18}
                  className="text-slate-600 group-hover:text-slate-900"
                />
              </a>
              <a
                href={CONSULTA_PJE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-4 rounded-xl border border-slate-800/10 hover:border-sky-400/40 hover:bg-slate-50/80 hover:shadow-md hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <Search className="text-slate-800" size={24} />
                  <div>
                    <p className="font-medium text-slate-900">PJe - TJSP</p>
                    <p className="text-sm text-slate-600">
                      Processo Judicial Eletrônico
                    </p>
                  </div>
                </div>
                <ExternalLink
                  size={18}
                  className="text-slate-600 group-hover:text-slate-900"
                />
              </a>
              <a
                href={CONSULTA_CNJ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-4 rounded-xl border border-slate-800/10 hover:border-sky-400/40 hover:bg-slate-50/80 hover:shadow-md hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <Search className="text-slate-800" size={24} />
                  <div>
                    <p className="font-medium text-slate-900">CNJ</p>
                    <p className="text-sm text-slate-600">
                      Conselho Nacional de Justiça
                    </p>
                  </div>
                </div>
                <ExternalLink
                  size={18}
                  className="text-slate-600 group-hover:text-slate-900"
                />
              </a>
            </div>

            <Link
              href="/consulta"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all duration-200"
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
