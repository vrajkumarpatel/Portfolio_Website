"use client";

import React, { createContext, useContext, useEffect, useMemo, useRef } from "react";
import Lenis from "lenis";

type LenisInstance = InstanceType<typeof Lenis> | null;

type LenisContextValue = {
  lenis: LenisInstance;
};

const LenisContext = createContext<LenisContextValue>({ lenis: null });

type ReactLenisProps = {
  children: React.ReactNode;
  root?: boolean;
  options?: ConstructorParameters<typeof Lenis>[0];
};

export function ReactLenis({ children, options }: ReactLenisProps) {
  const lenisRef = useRef<LenisInstance>(null);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      // smoothTouch: false,
      ...options,
    });
    lenisRef.current = instance;

    let raf: number;
    const loop = (time: number) => {
      instance.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      instance.destroy();
      lenisRef.current = null;
    };
  }, [options]);

  const value = useMemo<LenisContextValue>(() => ({ lenis: lenisRef.current }), [lenisRef.current]);

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}

type UseLenisHandler = (e: { scroll: number; limit: number }) => void;

export function useLenis(handler?: UseLenisHandler) {
  const { lenis } = useContext(LenisContext);

  useEffect(() => {
    if (!lenis || !handler) return;
    const onScroll = ({ scroll, limit }: any) => handler({ scroll, limit });
    lenis.on("scroll", onScroll);
    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis, handler]);

  return lenis;
}