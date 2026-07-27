import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "../ui/use-toast";
import { themeDisclaimers } from "@/data/constants";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function FunnyThemeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();
  const [counter, setCounter] = React.useState({ dark: 0, light: 0 });
  const { toast } = useToast();

  const toggleTheme = async (newTheme: string, event?: React.MouseEvent) => {
    if (!document.startViewTransition || !event) return setTheme(newTheme);
    const { top, left, width, height } = (event.target as HTMLElement).getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(Math.max(left, window.innerWidth - left), Math.max(top, window.innerHeight - top));
    const transition = document.startViewTransition(() => flushSync(() => setTheme(newTheme)));
    await transition.ready;
    document.documentElement.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] }, { duration: 500, easing: "ease-in-out", pseudoElement: "::view-transition-new(root)" });
  };

  const goLight = (event: React.MouseEvent) => {
    setCounter((current) => ({ ...current, light: current.light + 1 }));
    toggleTheme("light", event);
  };

  const goDark = (event: React.MouseEvent) => {
    const description = themeDisclaimers.dark[counter.dark % themeDisclaimers.dark.length];
    setCounter((current) => ({ ...current, dark: current.dark + 1 }));
    toast({ description, className: "fixed top-0 right-0 flex md:right-4 md:top-16 md:max-w-[420px]" });
    toggleTheme("dark", event);
  };

  const buttonClass = cn("relative border border-white/10 bg-white/10 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-white/20 dark:bg-transparent dark:hover:bg-white/10", className);

  if (theme === "light") {
    return <Button variant="outline" size="icon" className={buttonClass} onClick={goDark} aria-label="Activar modo oscuro"><Sun className="h-[1.2rem] w-[1.2rem] text-amber-500 transition-all duration-500 dark:-rotate-90 dark:scale-0" /><Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" /><span className="sr-only">Activar modo oscuro</span></Button>;
  }

  const lightMessage = themeDisclaimers.light[counter.light % themeDisclaimers.light.length];
  return <Popover><PopoverTrigger asChild><Button variant="outline" size="icon" className={buttonClass} aria-label="Cambiar a modo claro"><Sun className="h-[1.2rem] w-[1.2rem] text-amber-400 transition-all duration-500 dark:-rotate-90 dark:scale-0" /><Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-slate-200 transition-all duration-500 dark:rotate-0 dark:scale-100" /><span className="sr-only">Cambiar a modo claro</span></Button></PopoverTrigger><PopoverContent className="z-[99999] w-64 rounded-2xl border-border/80 bg-background/95 p-4 text-center shadow-2xl backdrop-blur"><p className="text-sm leading-6 text-muted-foreground">{lightMessage}</p><Button onClick={goLight} className="mt-3 w-full bg-sky-600 text-white hover:bg-sky-700">Activar modo claro</Button></PopoverContent></Popover>;
}