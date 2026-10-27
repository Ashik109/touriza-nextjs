"use client";

import { useEffect } from "react";

export default function PreloaderController() {
  useEffect(() => {
    let timeoutId = 0;
    let pageReady = false;
    let windowLoaded = document.readyState === "complete";

    const markAsLoaded = () => {
      if (!pageReady || !windowLoaded) return;
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => document.body.classList.add("loaded"), 0);
    };

    const handlePageReady = () => {
      pageReady = true;
      markAsLoaded();
    };

    const handleLoad = () => {
      windowLoaded = true;
      markAsLoaded();
    };

    window.addEventListener("touriza:page-ready", handlePageReady);
    window.addEventListener("load", handleLoad);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("touriza:page-ready", handlePageReady);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return null;
}
