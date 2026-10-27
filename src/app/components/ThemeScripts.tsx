"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    __tourizaPageReadyPath?: string;
  }
}

export default function ThemeScripts() {
  const pathname = usePathname();

  useEffect(() => {
    window.__tourizaPageReadyPath = pathname;
    window.dispatchEvent(new CustomEvent("touriza:page-ready", { detail: pathname }));

    return () => {
      if (window.__tourizaPageReadyPath === pathname) {
        delete window.__tourizaPageReadyPath;
      }
    };
  }, [pathname]);

  return null;
}
