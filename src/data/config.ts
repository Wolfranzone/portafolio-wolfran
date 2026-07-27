const config = {
  title: "Frenssen Wolfran Delgado Paucar | Ingeniero de Sistemas",
  description: {
    long: "Portafolio de Frenssen Wolfran Delgado Paucar, Ingeniero de Sistemas y desarrollador Full Stack especializado en React, Next.js, Node.js y PostgreSQL. Conoce proyectos de aplicaciones, páginas web, automatizaciones y soluciones de software modernas.",
    short: "Portafolio de Frenssen Wolfran Delgado Paucar, Ingeniero de Sistemas y desarrollador Full Stack.",
  },
  keywords: [
    "Frenssen Wolfran",
    "desarrollador full stack",
    "desarrollo web",
    "aplicaciones web",
    "ingeniero de sistemas",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "TypeORM",
    "Material UI",
    "Tailwind CSS",
    "PWA",
    "n8n",
    "WhatsApp Cloud API",
    "ingeniero de software",
    "React",
    "Next.js",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Frenssen Wolfran",
  email: "wolfrandelgado@gmail.com",
  site: process.env.NEXT_PUBLIC_SITE_URL || "https://frenssenwolfran.site",

  // for github stars button
  githubUsername: "frenssen-wolfran",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/frenssen-wolfran-delgado-paucar-52b7ab202",
    instagram: "https://www.instagram.com/frenssenwolfran?igsh=MWIwdTBmMmNxejlmag==",
    facebook: "https://www.facebook.com/share/1AybZarqkb/",
    github: "https://github.com/Wolfranzone",
  },
};
export { config };
