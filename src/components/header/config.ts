import { Link } from "@/types";
export const config = {
  name: "Frenssen Wolfran",
  githubUsername: "Frenssen-Wolfran",
  githubRepo: "3d-portfolio",
};
const links: Link[] = [
  {
    title: 'Inicio',
    href: '/',
    thumbnail: '/assets/nav-link-previews/landing.png'
  },
  {
    title: 'Perfil',
    href: '/#about',
    thumbnail: '/assets/nav-link-previews/about.png'
  },
  {
    title: 'Habilidades',
    href: '/#skills',
    thumbnail: '/assets/nav-link-previews/skills.png'
  },
  {
    title: 'Proyectos',
    href: '/#projects',
    thumbnail: '/assets/nav-link-previews/projects.png'
  },
  // {
  //   title: 'Habilidades',
  //   href: '/skills',
  //   thumbnail: '/assets/nav-link-previews/skills.png'
  // },
  // {
  //   title: 'Testimonials',
  //   href: '/testimonials',
  //   thumbnail: '/assets/nav-link-previews/testimonials.png'
  // },
  {
    title: 'Contacto',
    href: '/#contact',
    thumbnail: '/assets/nav-link-previews/contact.png'
  }
];

export { links };
