"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";

type SwiperElement = HTMLElement & { swiper?: Swiper };

function createSwiper(selector: string, options: SwiperOptions) {
  const element = document.querySelector<SwiperElement>(selector);
  if (!element || element.swiper) return null;

  return new Swiper(element, {
    modules: [Navigation, Pagination],
    ...options,
  });
}

export default function HomeSixController() {
  useEffect(() => {
    let timer = 0;
    let initialized = false;
    let swipers: Swiper[] = [];
    const cleanups: Array<() => void> = [];

    const initialize = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        if (initialized) return;
        initialized = true;

        const travelSection = document.querySelector(".travel-slider")?.closest("section");
        const testimonialsSection = document.querySelector(".testimonials-slider2")?.closest("section");
        const blogSection = document.querySelector(".blog-slider")?.closest("section");

        swipers = [
          createSwiper(".travel-slider", {
            slidesPerView: 4,
            spaceBetween: 30,
            speed: 1800,
            loop: true,
            navigation: {
              nextEl: travelSection?.querySelector<HTMLElement>(".swiper-btn-next"),
              prevEl: travelSection?.querySelector<HTMLElement>(".swiper-btn-prev"),
            },
            pagination: {
              el: travelSection?.querySelector<HTMLElement>(".slider-dots2"),
              clickable: true,
            },
            breakpoints: {
              0: { slidesPerView: 1 },
              450: { slidesPerView: 1 },
              575: { slidesPerView: 2 },
              767: { slidesPerView: 2 },
              991: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
              1300: { slidesPerView: 4 },
            },
          }),
          createSwiper(".testimonials-slider2", {
            slidesPerView: 4,
            spaceBetween: 30,
            speed: 1200,
            loop: true,
            pagination: {
              el: testimonialsSection?.querySelector<HTMLElement>(".slider-dots"),
              clickable: true,
            },
            breakpoints: {
              0: { slidesPerView: 1 },
              450: { slidesPerView: 1 },
              575: { slidesPerView: 1, spaceBetween: 20 },
              767: { slidesPerView: 2 },
              991: { slidesPerView: 3, spaceBetween: 20 },
              1200: { slidesPerView: 4, spaceBetween: 10 },
              1400: { slidesPerView: 4 },
            },
          }),
          createSwiper(".blog-slider", {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 1800,
            loop: true,
            navigation: {
              nextEl: blogSection?.querySelector<HTMLElement>(".swiper-btn-next2"),
              prevEl: blogSection?.querySelector<HTMLElement>(".swiper-btn-prev2"),
            },
            breakpoints: {
              0: { slidesPerView: 1 },
              450: { slidesPerView: 1 },
              575: { slidesPerView: 2 },
              767: { slidesPerView: 2 },
              991: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
              1300: { slidesPerView: 3 },
            },
          }),
        ].filter((swiper): swiper is Swiper => swiper !== null);

        const searchArea = document.querySelector<HTMLElement>("#advance_search");
        const selects = Array.from(searchArea?.querySelectorAll<HTMLElement>(".custom-select") ?? []);
        const closeSelects = () => {
          selects.forEach((select) => {
            select.classList.remove("active");
            const options = select.querySelector<HTMLElement>(".custom-options");
            if (options) options.style.height = "0";
          });
        };

        const handleSearchClick = (event: MouseEvent) => {
          const target = event.target as Element;
          const select = target.closest<HTMLElement>(".custom-select");
          if (!select || !searchArea?.contains(select)) return;

          const trigger = target.closest<HTMLElement>(".custom-select-trigger");
          const option = target.closest<HTMLElement>(".option");
          if (!trigger && !option) return;

          event.stopPropagation();
          event.stopImmediatePropagation();

          const options = select.querySelector<HTMLElement>(".custom-options");
          if (!options) return;

          if (trigger) {
            const shouldOpen = !select.classList.contains("active");
            closeSelects();
            if (shouldOpen) {
              select.classList.add("active");
              options.style.height = "250px";
            }
            return;
          }

          const selectedOption = option;
          const selectedTrigger = select.querySelector<HTMLElement>(".custom-select-trigger");
          const hiddenInput = select.querySelector<HTMLInputElement>('input[type="hidden"]');
          if (!selectedOption || !selectedTrigger || !hiddenInput) return;

          selectedTrigger.textContent = selectedOption.textContent;
          hiddenInput.value = selectedOption.dataset.value ?? "";
          options.querySelectorAll(".option").forEach((item) => item.classList.remove("selected"));
          selectedOption.classList.add("selected");
          closeSelects();
        };

        searchArea?.addEventListener("click", handleSearchClick, true);
        cleanups.push(() => searchArea?.removeEventListener("click", handleSearchClick, true));

        document.addEventListener("click", closeSelects);
        cleanups.push(() => document.removeEventListener("click", closeSelects));
      }, 100);
    };

    const handleThemeReady = () => initialize();
    window.addEventListener("touriza:theme-ready", handleThemeReady);

    if (document.documentElement.dataset.tourizaThemeReady === "true") {
      initialize();
    } else {
      timer = window.setTimeout(initialize, 1500);
    }

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("touriza:theme-ready", handleThemeReady);
      cleanups.forEach((cleanup) => cleanup());
      swipers.forEach((swiper) => swiper.destroy(true, true));
    };
  }, []);

  return null;
}
