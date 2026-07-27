// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Lenguaje de programación estándar de la web. Se utiliza para crear páginas interactivas.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "Capa de tipado estático sobre JavaScript que mejora la robustez, mantenibilidad.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "HTML es un estándar del W3C utilizado para describir semánticamente documentos web.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "CSS es un lenguaje declarativo encargado de controlar la representación visual de los elementos.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Librería orientada al desarrollo de Single Page Applications (SPA).",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription:
      "Framework progresivo basado en componentes que permite desarrollar interfaces de usuario.ðŸŸ¢ðŸ˜Œ",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "Framework más demandado en 2025-2026. Muchas empresas lo usan por sus ventajas en SEO, rendimiento y renderizado híbrido.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Tailwind CSS se ha convertido en uno de los frameworks CSS más utilizados en aplicaciones modernas.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Node.js es un runtime de JavaScript impulsado por el motor V8 y diseñado para aplicaciones I/O intensivas.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "Framework ligero y flexible que proporciona una capa de abstracción sobre Node.js.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Sistema gestor de bases de datos relacionales más utilizado en aplicaciones.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Base de datos NoSQL orientada a documentos que proporciona un esquema flexible y almacena información.! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Sistema de control de versiones distribuido que permite registrar cambios en los archivos.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Sistema de control de versiones distribuido que permite registrar cambios en los archivos.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Formateador de código que aplica automáticamente reglas de estilo para mantener un formato.",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "Gestor de paquetes predeterminado de Node.js que  instala, administra y comparte librerías.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "Plataforma Backend as a Service (BaaS) desarrollada por Google que proporciona servicios listos para usar.",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "Plataforma de gestión de contenidos extensible que permite desarrollar sitios web, blogs, tiendas virtuales.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "Sistema operativo de código abierto basado en Unix que proporciona un entorno multitarea.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "Plataforma de virtualización basada en contenedores que permite empaquetar aplicaciones.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "Servidor web, reverse proxy, balanceador de carga y servidor de caché de alto rendimiento.",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "Plataforma de servicios en la nube que ofrece infraestructura, almacenamiento. ",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "Plataforma de cloud computing que ofrece servicios como computación, almacenamiento, bases de datos, machine learning y redes.",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription: "Editor de texto modal que permite editar archivos de forma eficiente directamente desde la terminal.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "Plataforma cloud que permite desplegar aplicaciones web de forma automática, optimizada.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
  certificate?: string;
  image?: string;
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "03/03/2026",
    endDate: "Actualidad",
    title: "Operador de centro de Computo Onpe",
    company: "ONPE",
    description: [
      "Monitoreo de sistemas de conteo de votos.",
      "Soporte técnico a usuarios.",
      "Operación y monitoreo de equipos informáticos del centro de cómputo durante jornadas electorales",
      "Supervisión del correcto funcionamiento de sistemas, redes y estaciones de trabajo",
      "Verificación y procesamiento de información electoral en sistemas informáticos",
      "Respaldo y validación de información procesada en el centro de cómputo",

    ],

    skills: [
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.POSTGRES,
      SkillNames.MONGODB
    ],
    certificate: "/certificados/constancia-operador-onpe.pdf",
    image: "/images/onpe.webp"
  },
  {
    id: 2,
    startDate: "01/01/2026",
    endDate: "03/02/2026",
    title: "Analista de Sistemas  Y auditor interno",
    company: "PURETECH -SUNAT",
    description: [
      "Control de inventarios físicos y sistemáticos.",
      "Elaboración de reportes de inventario y análisis de variaciones",
      "Conteo y auditorías internas de inventario en SUNAT-2026",

    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.POSTGRES,
      SkillNames.MONGODB
    ],
    certificate: "/certificados/certificado-puretech-sunat.pdf",
    image: "/images/onpe.webp"
  },
  {
    id: 3,
    startDate: "01/03/2025",
    endDate: "28/12/2025",
    title: "Analista de Soporte en Tecnologías de Información",
    company: "MUNICIPALIDAD DISTRITAL DE SAN SALVADOR",
    description: [
      "Gestión de incidencias tecnológicas y resolución de problemas relacionados a hardware, software y conectividad.",
      "Gestión de la mesa de partes virtual para recepción, registro y derivación de documentos.",
      "Elaboración de reportes técnicos e incidencias.",
      "Coordinación con diferentes áreas operativas para asegurar la continuidad operativa de servicios tecnológicos.",
      "Asistencia en procesos administrativos apoyados por Ti.",

    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.NODEJS,
      SkillNames.POSTGRES,
      SkillNames.TAILWIND,
      SkillNames.DOCKER
    ],
    certificate: "/certificados/certificado-municipalidad-san-salvador.pdf",
    image: "/images/onpe.webp"
  },
  {
    id: 4,
    startDate: "01/11/2024",
    endDate: "03/02/2025",
    title: "Analista de sistemas, seguridad y soporte técnico en telecomunicaciones",
    company: "IAC ENTERPRISE GROUP S.A.C",
    description: [
      "Implementación de buenas prácticas de ciberseguridad y protección de la información.",
      "Supervisión de conexiones y recursos tecnológicos.",
      "Administración y resguardo de información sensible.",
      "Brindar soporte técnico a usuarios en incidencias relacionadas con infraestructura y seguridad TI.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.POSTGRES,
      SkillNames.MONGODB
    ],
    certificate: "/certificados/certificado-iac-enterprise-group.pdf",
    image: "/images/onpe.webp"
  },
  {
    id: 5,
    startDate: "03/06/2024",
    endDate: "28/10/2024",
    title: "Practicante de Producción en Gerencia de Operaciones",
    company: "EPS SEDACUSCO S.A.",
    description: [
      "Soporte técnico en software y hardware a usuarios administrativos y académicos",
      "Documentación y control de equipos de cómputo, revisión de especificaciones técnicas",
      "Gestión de archivos de hardware y software",
      "Cumplimiento de políticas, normas y procedimientos institucionales para asegurar la confiabilidad de los sistemas",


    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.POSTGRES,
      SkillNames.MONGODB
    ],
    certificate: "/certificados/certificado-practicas-sedacusco.pdf",
    image: "/images/onpe.webp"
  },
];


export const themeDisclaimers = {
  light: [
    "El modo claro está listo: limpio, sobrio y fácil de leer.",
    "Cambiando a una vista clara para trabajar con comodidad.",
    "Modo claro activado: mayor contraste y lectura más cómoda.",
  ],
  dark: [
    "Modo oscuro activado: una vista cómoda para seguir navegando.",
    "Volvemos al modo oscuro, ideal para una navegación relajada.",
    "Modo oscuro listo. Gracias por cuidar tus ojos.",
  ],
};