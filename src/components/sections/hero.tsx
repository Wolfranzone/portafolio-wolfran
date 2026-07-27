import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, FolderKanban } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  return (
    <SectionWrapper id="hero" className={cn("relative w-full min-h-[100svh]")}>
      <div className="grid md:grid-cols-2 items-center h-full">

        {/* IZQUIERDA */}
        <div className="flex flex-col justify-center pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28">

          <div className="mb-8 flex justify-center md:hidden">
            <div className="h-36 w-36 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-xl">
              <img
                src="/Fotoperfil.png"
                alt="Retrato de Frenssen Wolfran"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <p className="text-zinc-400 tracking-widest uppercase mb-3">
            Hola, soy
          </p>

          <h1 className="text-6xl md:text-8xl font-light leading-none text-white">
            {config.author.split(" ")[0]}
            <br />
            {config.author.split(" ")[1]}
          </h1>

          <h2 className="mt-6 text-2xl text-blue-400 font-semibold">
            Ingeniero de Sistemas · Desarrollador Full Stack
          </h2>

          <p className="mt-8 max-w-xl text-zinc-400 leading-8 text-lg">
            Desarrollo soluciones digitales modernas, escalables y de alto rendimiento,
            combinando diseño elegante con arquitecturas robustas. Mi pasion es
            transformar ideas en soluciones digitales que generen impacto real,
            utilizando tecnologias enfrentando nuevos desafiÂ­os,
            aprendiendo continuamente y creando software que aporte valor tanto a
            empresas como a usuarios.
          </p>

          <div className="flex gap-4 mt-10">

            <Button size="lg">
              <a
                href="/Frenssen-Wolfran-CV.pdf"
                target="_blank"
                rel="noopener noreferrer">
                <File className="mr-2 h-5 w-5" />
                Ver CV
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#projects">
                <FolderKanban className="mr-2 h-5 w-5" />
                Ver proyectos
              </Link>
            </Button>


          </div>

          <div className="flex gap-5 mt-8 text-2xl">

            <Link href={config.social.github || "#"}>
              <SiGithub />
            </Link>

            <Link href={config.social.linkedin || "#"}>
              <SiLinkedin />
            </Link>

            <Link href={config.social.twitter || "#"}>
              <SiX />
            </Link>

          </div>

        </div>

        {/* DERECHA */}
        <div className="hidden md:flex justify-center items-center">

          <div className="relative">

            {/* Luz de fondo */}
            <div className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full scale-125" />

            {/* Marco */}
            <div className="relative h-[480px] w-[380px] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">

              <img
                src="/Fotoperfil.png"
                alt="Foto de perfil"
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </SectionWrapper>
  );
};

export default HeroSection;