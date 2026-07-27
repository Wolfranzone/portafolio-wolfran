"use client";

import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

import Loader from "./loader";
import { usePerfProfile } from "@/hooks/use-perf-profile";

type PreloaderContextType = {
  isLoading: boolean;
  loadingPercent: number;
  bypassLoading: () => void;
};

const PreloaderContext = createContext<PreloaderContextType | null>(null);

export const usePreloader = () => {
  const ctx = useContext(PreloaderContext);
  if (!ctx) throw new Error("usePreloader must be used within provider");
  return ctx;
};

type Props = {
  children: ReactNode;
  disabled?: boolean;
};

const DURATION = 4.5;

export default function Preloader({ children, disabled }: Props) {
  const pathname = usePathname();
  const skip = Boolean(disabled || pathname?.startsWith("/resume"));

  const { ready, disable3D } = usePerfProfile();

  const [isLoading, setIsLoading] = useState(!skip);
  const [percent, setPercent] = useState(skip ? 100 : 0);

  const progress = useRef({ v: 0 });
  const tween = useRef<gsap.core.Tween | null>(null);

  // 🧠 single exit point (CRÍTICO)
  const finish = useCallback(() => {
    if (tween.current) {
      tween.current.kill();
      tween.current = null;
    }

    progress.current.v = 100;
    setPercent(100);
    setIsLoading(false);
  }, []);

  const bypassLoading = useCallback(() => {
    finish();
  }, [finish]);

  // 🚀 perf escape hatch
  useEffect(() => {
    if (ready && disable3D) {
      bypassLoading();
    }
  }, [ready, disable3D, bypassLoading]);

  // 🎬 animation only (no logic mixing)
  useEffect(() => {
    if (skip) {
      setIsLoading(false);
      setPercent(100);
      return;
    }

    tween.current?.kill();

    tween.current = gsap.to(progress.current, {
      v: 100,
      duration: DURATION,
      ease: "power2.out",

      onUpdate: () => {
        setPercent(progress.current.v);
      },

      onComplete: () => {
        finish();
      },
    });

    return () => {
      tween.current?.kill();
      tween.current = null;
    };
  }, [skip, finish]);

  // 🧠 memo context (evita rerenders innecesarios)
  const value = useMemo(
    () => ({
      isLoading,
      loadingPercent: percent,
      bypassLoading,
    }),
    [isLoading, percent, bypassLoading]
  );

  return (
    <PreloaderContext.Provider value={value}>
      <AnimatePresence mode="wait">
        {isLoading && <Loader />}
      </AnimatePresence>

      {children}
    </PreloaderContext.Provider>
  );
}