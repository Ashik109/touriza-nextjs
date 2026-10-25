"use client";

import AOS from "aos";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function AosController() {
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      AOS.init({
        duration: 900,
        easing: "ease-out-cubic",
        once: true,
        offset: 80,
      });
      initialized.current = true;
    }, 500);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!initialized.current) return;

    const timeoutId = window.setTimeout(() => AOS.refreshHard(), 250);

    return () => window.clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
