import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visitar sitio web
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "dashboard-sedacusco",
    category: "Sistema interno",
    title: "Dashboard SEDACUSCO",
    src: "/assets/projects-screenshots/dashboard-sedacusco/dashboard-overview.png",
    screenshots: ["dashboard-overview.png", "analytics-connections.png", "connection-funnel.png", "operational-kpis.png", "districts-pending.png", "financial-investment.png", "cost-matrix.png", "welcome-upload.png", "report-export.png", "login.png"],
    live: "",
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    content: (
      <div>
        <TypographyP className="font-mono text-lg">
          Dashboard para centralizar y analizar registros de conexiones de agua y desagüe.
        </TypographyP>

        <TypographyH3 className="my-4 mt-8">Panel ejecutivo</TypographyH3>
        <p className="font-mono mb-4">
          Vista consolidada de indicadores, filtros por periodo y métricas clave para el seguimiento de conexiones nuevas.
        </p>
        <SlideShow images={[`${BASE_PATH}/dashboard-sedacusco/dashboard-overview.png`, `${BASE_PATH}/dashboard-sedacusco/analytics-connections.png`]} />

        <TypographyH3 className="my-4 mt-8">Proceso y operación</TypographyH3>
        <p className="font-mono mb-4">
          Implementé el seguimiento del embudo de conexión, rendimiento de técnicos, distribución por distrito y alertas de solicitudes pendientes.
        </p>
        <SlideShow images={[`${BASE_PATH}/dashboard-sedacusco/connection-funnel.png`, `${BASE_PATH}/dashboard-sedacusco/operational-kpis.png`, `${BASE_PATH}/dashboard-sedacusco/districts-pending.png`]} />

        <TypographyH3 className="my-4 mt-8">Análisis financiero</TypographyH3>
        <p className="font-mono mb-4">
          El sistema permite revisar inversión, costos promedio y distribución de costos por tipo de matriz para apoyar la toma de decisiones.
        </p>
        <SlideShow images={[`${BASE_PATH}/dashboard-sedacusco/financial-investment.png`, `${BASE_PATH}/dashboard-sedacusco/cost-matrix.png`]} />

        <TypographyH3 className="my-4 mt-8">Carga de datos y reportes</TypographyH3>
        <p className="font-mono mb-4">
          El flujo permite cargar archivos Excel, procesar la información y generar reportes institucionales listos para descargar en PDF.
        </p>
        <SlideShow images={[`${BASE_PATH}/dashboard-sedacusco/welcome-upload.png`, `${BASE_PATH}/dashboard-sedacusco/report-export.png`]} />
        <TypographyH3 className="my-4 mt-8">Acceso seguro</TypographyH3>
        <SlideShow images={[`${BASE_PATH}/dashboard-sedacusco/login.png`]} />

        <TypographyH3 className="my-4 mt-8">Tecnologías</TypographyH3>
        <p className="font-mono mb-4">
          React, React Router, Material UI, Recharts, Axios, Express, MongoDB/Mongoose, ExcelJS y Multer.
        </p>
        <p className="rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-muted-foreground">
          Demo disponible en entorno local. La versión pública se añadirá próximamente.
        </p>
      </div>
    ),
  },
  {
    id: "inventario-sedacusco",
    category: "Sistema interno",
    title: "Inventario de Conexiones – SEDACUSCO",
    src: "/assets/projects-screenshots/inventario-sedacusco/inventory-dashboard.png",
    screenshots: ["inventory-dashboard.png", "low-stock-alert.png", "material-entries.png", "available-materials.png", "material-exits.png", "inventory-movements.png", "material-administration.png", "product-catalog.png", "work-materials.png", "user-management.png", "system-audit.png", "system-settings.png", "system-reports.png", "user-dashboard.png", "login-admin.png"],
    live: "",
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    content: (
      <div>
        <TypographyP className="font-mono text-lg">
          Sistema administrativo para controlar materiales y trabajos de conexiones nuevas en SEDACUSCO.
        </TypographyP>

        <TypographyH3 className="my-4 mt-8">Dashboard y alertas</TypographyH3>
        <p className="font-mono mb-4">
          El perfil administrador dispone de indicadores de stock, entradas, salidas y alertas de materiales críticos para una supervisión inmediata.
        </p>
        <SlideShow images={[`${BASE_PATH}/inventario-sedacusco/inventory-dashboard.png`, `${BASE_PATH}/inventario-sedacusco/low-stock-alert.png`]} />

        <TypographyH3 className="my-4 mt-8">Inventario y movimientos</TypographyH3>
        <p className="font-mono mb-4">
          Implementé consultas de disponibilidad, entradas y salidas de materiales, registro de movimientos y filtros para el control diario del almacén.
        </p>
        <SlideShow images={[`${BASE_PATH}/inventario-sedacusco/available-materials.png`, `${BASE_PATH}/inventario-sedacusco/material-entries.png`, `${BASE_PATH}/inventario-sedacusco/material-exits.png`, `${BASE_PATH}/inventario-sedacusco/inventory-movements.png`]} />

        <TypographyH3 className="my-4 mt-8">Catálogo y materiales por trabajo</TypographyH3>
        <p className="font-mono mb-4">
          El sistema administra el catálogo de productos, el alta y edición de materiales y la asignación de insumos por tipo de trabajo.
        </p>
        <SlideShow images={[`${BASE_PATH}/inventario-sedacusco/material-administration.png`, `${BASE_PATH}/inventario-sedacusco/product-catalog.png`, `${BASE_PATH}/inventario-sedacusco/work-materials.png`]} />

        <TypographyH3 className="my-4 mt-8">Administración, seguridad y reportes</TypographyH3>
        <p className="font-mono mb-4">
          Incluye control de usuarios y roles, auditoría de acciones, configuración operativa y generación de reportes exportables.
        </p>
        <SlideShow images={[`${BASE_PATH}/inventario-sedacusco/user-management.png`, `${BASE_PATH}/inventario-sedacusco/system-audit.png`, `${BASE_PATH}/inventario-sedacusco/system-settings.png`, `${BASE_PATH}/inventario-sedacusco/system-reports.png`]} />

        <TypographyH3 className="my-4 mt-8">Vista de usuario</TypographyH3>
        <p className="font-mono mb-4">
          El perfil operativo mantiene acceso a indicadores, historial, catálogo e inventario, sin exponer las opciones exclusivas de administración.
        </p>
        <SlideShow images={[`${BASE_PATH}/inventario-sedacusco/user-dashboard.png`]} />
        <TypographyH3 className="my-4 mt-8">Acceso administrativo</TypographyH3>
        <SlideShow images={[`${BASE_PATH}/inventario-sedacusco/login-admin.png`]} />

        <TypographyH3 className="my-4 mt-8">Tecnologías</TypographyH3>
        <p className="font-mono mb-4">
          Angular 19, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, Chart.js, jsPDF y XLSX.
        </p>
        <p className="rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-muted-foreground">
          Demo disponible en entorno local. La versión pública se añadirá próximamente.
        </p>
      </div>
    )
  },
  {
    id: "codingducks",
    category: "Plataforma de programación",
    title: "Coding Ducks",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.reactQuery,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "https://www.codingducks.xyz/",
    github: "https://github.com/Frenssen-Wolfran/Coding-Ducks",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Coding Ducks combina retos de programación, colaboración y creación de interfaces.
          </TypographyP>
          <TypographyP className="font-mono ">
            Plataforma de práctica para fortalecer habilidades de programación y trabajo colaborativo.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Problemas </TypographyH3>
          <p className="font-mono mb-2">
            Resuelve desafíos de programación similares a LeetCode y fortalece tus habilidades de lógica en distintos lenguajes.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/problems.png`,
              `${BASE_PATH}/codingducks/problem.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Ducklets</TypographyH3>
          <p className="font-mono mb-2">
            Colabora en tiempo real con otras personas en un entorno de programación compartido.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/ducklets.png`,
              `${BASE_PATH}/codingducks/ducklet1.png`,
              `${BASE_PATH}/codingducks/ducklet2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Retos de interfaz </TypographyH3>

          <p className="font-mono mb-2">
            Crea componentes de interfaz con HTML, CSS y JavaScript y recibe una evaluación automática de similitud.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/css-battles.png`,
              `${BASE_PATH}/codingducks/css-battle.png`,
              `${BASE_PATH}/codingducks/css-battle2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Concursos </TypographyH3>
          <p className="font-mono mb-2">
            Organiza o participa en concursos de programación y desafíos técnicos.
          </p>
          <SlideShow images={[`${BASE_PATH}/codingducks/contests.png`]} />
          <TypographyH3 className="my-4 mt-8">Entorno de pruebas </TypographyH3>
          <p className="font-mono mb-2">
            Prueba y ejecuta código al instante desde un entorno en línea.
          </p>
          <SlideShow images={[`${BASE_PATH}/codingducks/playground.png`]} />
          <TypographyH3 className="my-4 mt-8">Usuarios</TypographyH3>

          <p className="font-mono mb-2">
            Consulta tu progreso, obtén insignias y revisa perfiles con historial de actividad.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/users.png`,
              `${BASE_PATH}/codingducks/user.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "couponluxury",
    category: "Portal de cupones",
    title: "Coupon Luxury",
    src: "/assets/projects-screenshots/couponluxury/landing.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://www.couponluxury.com/",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.vue,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    get content(): React.JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Coupon Luxury es una plataforma para descubrir cupones, descuentos y ofertas de distintas tiendas en un solo lugar.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            La página principal presenta cupones recientes y ofertas destacadas para encontrar oportunidades rápidamente.
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/landing.png`]} />
          <TypographyH3 className="my-4 ">Tiendas</TypographyH3>
          <p className="font-mono mb-2">
            Explora un listado de tiendas con sus ofertas y descuentos disponibles.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/stores.png`,
              `${BASE_PATH}/couponluxury/store.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Categorías</TypographyH3>

          <p className="font-mono mb-2">
            Las ofertas se organizan por categorías, como moda, tecnología y alimentos, para facilitar la búsqueda.
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/categories.png`]} />
          <TypographyH3 className="my-4 mt-8">CMS personalizado </TypographyH3>
          <p className="font-mono mb-2">
            Incluye un CMS desarrollado con Vue.js para administrar contenido, ofertas y campañas de forma dinámica.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/cms-1.png`,
              `${BASE_PATH}/couponluxury/cms-2.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-5">
            También incorpora búsqueda, recomendaciones y un diseño adaptable a cualquier dispositivo.
          </p>
          <p className="font-mono mb-2">
            El objetivo es simplificar la búsqueda de promociones y ayudar a encontrar mejores oportunidades de compra.
          </p>
          {/* <TypographyP className="my-4 mt-8">
          <strong>Misc:</strong>
          Hosted not one, not two, but THREE coding contests (Codemacha) during
          college. Safe to say, Coding Ducks passed the vibe check.
        </TypographyP>
        <TypographyP className="my-4 mt-8">
          <strong>Target Audience:</strong>
          For all the novice coders out there ready to make their mark.
        </TypographyP> */}
        </div>
      );
    },
  },
  {
    id: "the-booking-desk",
    category: "Viajes",
    title: "The Booking Desk",
    src: "/assets/projects-screenshots/the-booking-desk/landing.png",
    screenshots: ["1.png"],
    live: "https://thebookingdesk.com/",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.sanity],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            The Booking Desk es una plataforma de asesoría de viajes creada para descubrir destinos, recomendaciones y experiencias de forma visual.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            Su interfaz moderna presenta consejos, ofertas y destinos recomendados alrededor del mundo.
          </p>
          <SlideShow images={[`${BASE_PATH}/the-booking-desk/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">Artículos de viaje</TypographyH3>
          <p className="font-mono mb-2">
            La sección reúne artículos seleccionados con recomendaciones, rutas y consejos para planificar viajes.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/blogs.png`,
              `${BASE_PATH}/the-booking-desk/blog.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Sanity CMS</TypographyH3>

          <p className="font-mono mb-2">
            Integré Sanity CMS para administrar los contenidos y mantener la información actualizada con facilidad.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/cms-1.png`,
              `${BASE_PATH}/the-booking-desk/cms-2.png`,
            ]}
          />
          <p className="font-mono mb-2 my-8">
            El proyecto prioriza rendimiento, accesibilidad y una experiencia visual clara para explorar y planificar viajes.
          </p>
        </div>
      );
    },
  },
];
export default projects;
