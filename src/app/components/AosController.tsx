"use client";

import AOS from "aos";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function AosController() {
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    let timeoutId = 0;

    const activate = (event?: Event) => {
      const readyPath = event ? (event as CustomEvent<string>).detail : window.__tourizaPageReadyPath;
      if (readyPath !== pathname) return;

      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        if (initialized.current) {
          AOS.refreshHard();
          return;
        }

        AOS.init({
          duration: 900,
          easing: "ease-out-cubic",
          once: true,
          offset: 80,
        });
        initialized.current = true;
      }, 0);
    };

    window.addEventListener("touriza:page-ready", activate);
    activate();

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("touriza:page-ready", activate);
    };
  }, [pathname]);

  return null;
}
