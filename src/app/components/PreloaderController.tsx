"use client";

import { useEffect } from "react";

export default function PreloaderController() {
  useEffect(() => {
    const markAsLoaded = () => {
      document.body.classList.add("loaded");
    };

    if (document.readyState === "complete") {
      markAsLoaded();
      return;
    }

    window.addEventListener("load", markAsLoaded);

    return () => window.removeEventListener("load", markAsLoaded);
  }, []);

  return null;
}
