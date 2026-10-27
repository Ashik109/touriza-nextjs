"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    lenisRef.current = lenis;

    let frameId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    const handleHashLinkClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest<HTMLAnchorElement>('a[href^="#"]');

      if (!link) {
        return;
      }

      const hash = link.hash;

      if (!hash || hash === "#") {
        event.preventDefault();
        return;
      }

      const targetElement = document.getElementById(decodeURIComponent(hash.slice(1)));

      if (!targetElement) {
        return;
      }

      event.preventDefault();

      const stickyHeader = document.querySelector<HTMLElement>(".header--sticky");
      const offset = stickyHeader ? -stickyHeader.offsetHeight - 12 : 0;

      window.history.pushState(null, "", hash);
      lenis.scrollTo(targetElement, {
        offset,
        duration: 1.1,
      });
    };

    document.addEventListener("click", handleHashLinkClick, true);

    return () => {
      document.removeEventListener("click", handleHashLinkClick, true);
      cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
