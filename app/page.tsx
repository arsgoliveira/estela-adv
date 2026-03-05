import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { AreasAtuacao } from "@/components/sections/AreasAtuacao";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { ConsultaProcessos } from "@/components/sections/ConsultaProcessos";
import { Contato } from "@/components/sections/Contato";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <AreasAtuacao />
      <Depoimentos />
      <ConsultaProcessos />
      <Contato />
    </>
  );
}
