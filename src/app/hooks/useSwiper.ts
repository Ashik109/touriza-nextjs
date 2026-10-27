"use client";

import { useEffect } from "react";
import type { RefObject } from "react";
import Swiper from "swiper";
import { Autoplay, EffectFade, Mousewheel, Navigation, Pagination } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";

const modules = [Autoplay, EffectFade, Mousewheel, Navigation, Pagination];

export default function useSwiper(elementRef: RefObject<HTMLElement | null>, options: SwiperOptions) {
  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current as HTMLElement & { swiper?: Swiper };
    if (element.swiper || element.classList.contains("swiper-initialized")) return;

    const swiper = new Swiper(element, { modules, ...options });

    return () => {
      swiper.destroy(true, true);
    };
  }, [elementRef, options]);
}
