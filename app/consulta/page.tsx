import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Search, ExternalLink, FileText } from "lucide-react";
import {
  CONSULTA_ESAJ_1GRAU_URL,
  CONSULTA_ESAJ_2GRAU_URL,
  CONSULTA_CNJ_URL,
  CONSULTA_PJE_URL,
  CONTATO,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Consulta de Processos | Estela Sousa Advocacia",
  description:
    "Consulte o andamento do seu processo nos portais oficiais do Poder Judiciário.",
};

const portais = [
  {
    nome: "e-SAJ 1º Grau - TJSP",
    url: CONSULTA_ESAJ_1GRAU_URL,
    descricao: "Consulta de processos da 1ª instância - Tribunal de Justiça de SP",
  },
  {
    nome: "e-SAJ 2º Grau - TJSP",
    url: CONSULTA_ESAJ_2GRAU_URL,
    descricao: "Consulta de processos da 2ª instância - Tribunal de Justiça de SP",
  },
  {
    nome: "PJe - Processo Judicial Eletrônico (TJSP)",
    url: CONSULTA_PJE_URL,
    descricao: "Consultas de processos eletrônicos do TJSP",
  },
  {
    nome: "CNJ - Conselho Nacional de Justiça",
    url: CONSULTA_CNJ_URL,
    descricao: "Informações sobre processos eletrônicos no Brasil",
  },
];

export default function ConsultaPage() {
  return (
    <div className="min-h-screen bg-amber-50/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-amber-900/80 hover:text-amber-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Voltar ao site
        </Link>

        <div className="bg-white rounded-2xl shadow-lg border border-amber-900/5 p-8 sm:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-xl bg-amber-100">
              <FileText className="text-amber-900" size={36} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-amber-950">
                Consulta de Processos
              </h1>
              <p className="text-amber-900/70 mt-1">
                Acompanhe o andamento do seu processo
              </p>
            </div>
          </div>

          <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-900/10">
            <h3 className="font-semibold text-amber-950 mb-2">
              Formato do número do processo
            </h3>
            <p className="text-sm text-amber-900/80 mb-2">
              O número do processo segue o padrão unificado do CNJ:
            </p>
            <code className="block bg-white px-4 py-2 rounded-lg text-amber-900 font-mono text-sm border border-amber-900/10">
              NNNNN-DD.AAAA.J.TR.OOOO
            </code>
            <p className="text-xs text-amber-900/60 mt-2">
              Onde: N = número, D = dígito verificador, A = ano, J = segmento
              (8=Trabalho), TR = tribunal, O = origem
            </p>
          </div>

          <h3 className="font-semibold text-amber-950 mb-4">
            Acesse os portais oficiais
          </h3>
          <div className="space-y-4">
            {portais.map((portal) => (
              <a
                key={portal.nome}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-4 rounded-xl border border-amber-900/10 hover:border-amber-900/30 hover:bg-amber-50/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-amber-100">
                    <Search className="text-amber-900" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-amber-950">{portal.nome}</p>
                    <p className="text-sm text-amber-900/60">
                      {portal.descricao}
                    </p>
                  </div>
                </div>
                <ExternalLink
                  size={20}
                  className="text-amber-900/60 group-hover:text-amber-900 flex-shrink-0"
                />
              </a>
            ))}
          </div>

          <p className="mt-8 text-sm text-amber-900/60">
            Dúvidas sobre seu processo? Entre em contato pelo{" "}
            <a
              href={`https://wa.me/${CONTATO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-900 font-medium hover:underline"
            >
              WhatsApp
            </a>{" "}
            ou{" "}
            <a
              href={`mailto:${CONTATO.email}`}
              className="text-amber-900 font-medium hover:underline"
            >
              e-mail
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
