import Link from "next/link";
import { CONTATO } from "@/lib/constants";
import { WhatsAppIcon, InstagramIcon, TikTokIcon, EmailIcon } from "@/components/icons/SocialIcons";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-serif font-semibold text-white mb-4">
              Estela Sousa Advocacia
            </h3>
            <p className="text-sky-200/90 text-base leading-relaxed">
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
                className="flex items-center gap-2 text-sky-200 hover:text-white transition-all duration-200 hover:underline underline-offset-2"
              >
                  <WhatsAppIcon size={18} />
                  {CONTATO.whatsappFormatado}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTATO.email}`}
                  className="flex items-center gap-2 text-sky-200 hover:text-white transition-all duration-200 hover:underline underline-offset-2"
                >
                  <EmailIcon size={18} />
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
                className="group flex items-center justify-center p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <span className="flex items-center justify-center [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:scale-110">
                  <InstagramIcon size={22} gradient />
                </span>
              </a>
              <a
                href={`https://wa.me/${CONTATO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <span className="flex items-center justify-center [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:scale-110">
                  <WhatsAppIcon size={22} className="text-[#25D366]" />
                </span>
              </a>
              <a
                href={CONTATO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="TikTok"
              >
                <span className="flex items-center justify-center [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:scale-110">
                  <TikTokIcon size={22} className="text-[#00f2ea]" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap">
          <p className="text-sky-300/80 text-base">
            © {new Date().getFullYear()} Estela Sousa Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-sky-300/60 text-sm">
            Site desenvolvido por{" "}
            <a
              href="https://microfastinformatica.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-200 transition-colors"
            >
              Micro Fast Informática
            </a>
          </p>
          <div className="flex gap-6 text-base">
                <Link href="/consulta" className="text-sky-200 hover:text-white transition-all duration-200 hover:underline underline-offset-2">
              Consulta de Processos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
