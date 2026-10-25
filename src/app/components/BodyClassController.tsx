"use client";

import { useEffect } from "react";

export default function BodyClassController({ className }: { className: string }) {
  useEffect(() => {
    const classes = className.split(/\s+/).filter(Boolean);
    document.body.classList.add(...classes);

    return () => document.body.classList.remove(...classes);
  }, [className]);

  return null;
}
