"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";

import {
  Home,
  Layers3,
  User,
  Folder,
  Mail,
} from "lucide-react";

interface HeaderProps {
  loader?: boolean;
}

const navItems = [
  {
    title: "Inicio",
    href: "#hero",
    icon: Home,
  },
  {
    title: "Habilidades",
    href: "#skills",
    icon: Layers3,
  },
  {
    title: "Experiencia",
    href: "#experience",
    icon: User,
  },
  {
    title: "Proyectos",
    href: "#projects",
    icon: Folder,
  },
  {
    title: "Contacto",
    href: "#contact",
    icon: Mail,
  },
];

const Header = ({ loader }: HeaderProps) => {
  const pathname = usePathname();

  return (
    <motion.header
      className="fixed inset-x-0 top-4 z-[1000] flex justify-center px-2"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        delay: loader ? 3.5 : 0,
        duration: 0.8,
      }}
    >
      <div
        className={cn(
          "flex items-center gap-2",
          "rounded-full",
          "border border-white/10",
          "bg-black/60",
          "backdrop-blur-2xl",
          "shadow-2xl",
          "max-w-full px-1.5 py-1.5 sm:px-2 sm:py-2"
        )}
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full p-0 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-2",
                "transition-all duration-300",
                "text-zinc-400 hover:text-white",
                pathname === "/" && item.href === "#hero"
                  ? "bg-white text-black hover:text-black"
                  : ""
              )}
            >
              <Icon size={18} />
              <span className="hidden md:block">
                {item.title}
              </span>
            </Link>
          );
        })}

        <div className="ml-1">
          <FunnyThemeToggle className="w-5 h-5" />
        </div>
      </div>
    </motion.header>
  );
};
export default Header;