import Link from "next/link";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import { CONTATO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-serif font-semibold text-white mb-4">
              Estela Sousa Advocacia
            </h3>
            <p className="text-amber-200/90 text-sm leading-relaxed">
              Defesa estratégica dos seus direitos com ética, firmeza e comprometimento.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${CONTATO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors"
                >
                  <MessageCircle size={18} />
                  {CONTATO.whatsappFormatado}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTATO.email}`}
                  className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  {CONTATO.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href={CONTATO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-amber-900/50 hover:bg-amber-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`https://wa.me/${CONTATO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-amber-900/50 hover:bg-amber-800 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-amber-300/80 text-sm">
            © {new Date().getFullYear()} Estela Sousa Advocacia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/consulta" className="text-amber-200 hover:text-white transition-colors">
              Consulta de Processos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
