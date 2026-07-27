"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Mail, Phone, Github, Linkedin, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto">
      <SectionHeader
        id="contact"
        className="relative mb-14"
        title={<><span>VAMOS A TRABAJAR</span> <br />JUNTOS</>}
      />

      <div className="mx-4 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Card className="mt-10 rounded-3xl border-white/10 bg-white/10 backdrop-blur-xl lg:mt-20 dark:bg-black/40">
          <CardHeader>
            <CardTitle className="text-4xl sm:text-5xl">Contacto directo</CardTitle>
            <CardDescription className="mt-4 text-lg leading-8">
              Si estás desarrollando una aplicación, una página web o necesitas automatizar procesos, estaré encantado de ayudarte a convertir tus ideas en realidad.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <a href="mailto:wolfrandelgado@gmail.com" className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:bg-white/[0.06]">
              <Mail className="h-7 w-7 shrink-0 text-blue-400" />
              <div className="min-w-0">
                <p className="text-sm text-gray-400">Correo electrónico</p>
                <p className="break-all text-base font-medium sm:text-lg">wolfrandelgado@gmail.com</p>
              </div>
            </a>

            <a href="https://wa.me/51941567135" target="_blank" rel="noreferrer" className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:bg-white/[0.06]">
              <Phone className="h-7 w-7 shrink-0 text-green-400" />
              <div>
                <p className="text-sm text-gray-400">WhatsApp</p>
                <p className="text-lg font-medium">+51 941 567 135</p>
              </div>
            </a>

            <div className="flex flex-wrap gap-4 pt-3">
              <a href="https://github.com/Wolfranzone" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10"><Github className="h-7 w-7" /></a>
              <a href="https://www.linkedin.com/in/frenssen-wolfran-delgado-paucar-52b7ab202" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-sky-500/20"><Linkedin className="h-7 w-7 text-sky-500" /></a>
              <a href="https://www.instagram.com/frenssenwolfran?igsh=MWIwdTBmMmNxejlmag==" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-pink-500/20"><Instagram className="h-7 w-7 text-pink-500" /></a>
              <a href="https://www.facebook.com/share/1AybZarqkb/" target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-blue-500/20"><Facebook className="h-7 w-7 text-blue-500" /></a>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-10 rounded-3xl bg-white/70 backdrop-blur-sm lg:mt-20 dark:bg-black/70">
          <CardHeader>
            <CardTitle className="text-4xl">Envíame un mensaje</CardTitle>
            <CardDescription>También puedes completar este formulario y me pondré en contacto contigo lo antes posible.</CardDescription>
          </CardHeader>
          <CardContent><ContactForm /></CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;