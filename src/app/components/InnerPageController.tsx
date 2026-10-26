"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";

type SwiperElement = HTMLElement & { swiper?: Swiper };

function createSwiper(selector: string, options: SwiperOptions) {
  const element = document.querySelector<SwiperElement>(selector);
  if (!element || element.swiper) return null;

  return new Swiper(element, {
    modules: [Autoplay, Mousewheel, Navigation, Pagination],
    ...options,
  });
}

export default function InnerPageController() {
  useEffect(() => {
    let timer = 0;
    let initialized = false;
    let swipers: Swiper[] = [];

    const closeCustomSelects = () => {
      document.querySelectorAll<HTMLElement>(".custom-select").forEach((select) => {
        select.classList.remove("active");
        const options = select.querySelector<HTMLElement>(".custom-options");
        if (options) options.style.height = "0";
      });
    };

    const closeOverlays = () => {
      document.querySelector(".search-input-area")?.classList.remove("show");
      document.querySelector("#side-bar")?.classList.remove("show");
      document.querySelector("#side-bar2")?.classList.remove("show");
      document.querySelector("#anywhere-home")?.classList.remove("bgshow");
    };

    const updatePriceRange = () => {
      const minRange = document.querySelector<HTMLInputElement>("#minRange");
      const maxRange = document.querySelector<HTMLInputElement>("#maxRange");
      const range = document.querySelector<HTMLElement>("#range");
      const minPrice = document.querySelector<HTMLElement>("#minPrice");
      const maxPrice = document.querySelector<HTMLElement>("#maxPrice");
      if (!minRange || !maxRange || !range || !minPrice || !maxPrice) return;

      const minValue = Number.parseInt(minRange.value, 10);
      const maxValue = Number.parseInt(maxRange.value, 10);
      range.style.left = `${minValue}%`;
      range.style.right = `${100 - maxValue}%`;
      minPrice.textContent = `$${Math.round((minValue / 100) * 5000)}`;
      maxPrice.textContent = `$${Math.round((maxValue / 100) * 5000)}`;
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element;
      const customSelect = target.closest<HTMLElement>(".custom-select");
      const customTrigger = target.closest<HTMLElement>(".custom-select-trigger");
      const customOption = target.closest<HTMLElement>(".custom-select .option");

      if (customSelect && (customTrigger || customOption)) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        const options = customSelect.querySelector<HTMLElement>(".custom-options");
        if (!options) return;

        if (customTrigger) {
          const shouldOpen = !customSelect.classList.contains("active");
          closeCustomSelects();
          if (shouldOpen) {
            customSelect.classList.add("active");
            options.style.height = "250px";
          }
          return;
        }

        const trigger = customSelect.querySelector<HTMLElement>(".custom-select-trigger");
        const input = customSelect.querySelector<HTMLInputElement>('input[type="hidden"]');
        if (!customOption || !trigger || !input) return;
        trigger.textContent = customOption.textContent;
        input.value = customOption.dataset.value ?? "";
        options.querySelectorAll(".option").forEach((option) => option.classList.remove("selected"));
        customOption.classList.add("selected");
        closeCustomSelects();
        return;
      }

      closeCustomSelects();

      if (target.closest("#search")) {
        document.querySelector(".search-input-area")?.classList.add("show");
        document.querySelector("#anywhere-home")?.classList.add("bgshow");
      }

      if (target.closest("#close, .close-icon-menu, #anywhere-home")) {
        closeOverlays();
      }

      if (target.closest(".menu-btn-toggle2")) {
        document.querySelector("#side-bar2")?.classList.add("show");
        document.querySelector("#anywhere-home")?.classList.add("bgshow");
      }

      if (target.closest(".menu-btn-toggle") && window.innerWidth < 992) {
        document.querySelector("#side-bar")?.classList.add("show");
        document.querySelector("#anywhere-home")?.classList.add("bgshow");
      }

      const regionItem = target.closest<HTMLElement>(".region-area ul li[data-region]");
      if (regionItem) {
        const region = regionItem.dataset.region;
        document.querySelectorAll(".region-area ul li").forEach((item) => item.classList.remove("active"));
        regionItem.classList.add("active");
        document.querySelectorAll<HTMLElement>(".destlist").forEach((list) => {
          list.classList.toggle("active", list.dataset.region === region);
        });
      }

      const projectBlock = target.closest<HTMLElement>(".project-block-four");
      if (projectBlock) {
        document.querySelectorAll(".project-block-four").forEach((block) => block.classList.remove("active"));
        projectBlock.classList.add("active");
      }

      const itineraryTitle = target.closest<HTMLElement>(".itinerary-title");
      if (itineraryTitle) {
        itineraryTitle.closest(".itinerary-item")?.classList.toggle("active");
      }

      const mobileParent = target.closest<HTMLElement>(".has-droupdown");
      const mobileTrigger = target.closest<HTMLElement>(".has-droupdown > a[href='#']");
      if (mobileParent && mobileTrigger) {
        event.preventDefault();
        mobileParent.classList.toggle("mm-active");
        mobileParent.querySelector(":scope > .submenu")?.classList.toggle("mm-show");
      }
    };

    const handleChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.matches("#expandAll, #expandAll2")) {
        document.querySelectorAll(".itinerary-item").forEach((item) => {
          item.classList.toggle("active", target.checked);
        });
      }
    };

    const handleInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const minRange = document.querySelector<HTMLInputElement>("#minRange");
      const maxRange = document.querySelector<HTMLInputElement>("#maxRange");
      if (!minRange || !maxRange || !target.matches("#minRange, #maxRange")) return;

      if (target.id === "minRange" && Number(minRange.value) > Number(maxRange.value) - 10) {
        minRange.value = String(Number(maxRange.value) - 10);
      }
      if (target.id === "maxRange" && Number(maxRange.value) < Number(minRange.value) + 10) {
        maxRange.value = String(Number(minRange.value) + 10);
      }
      updatePriceRange();
    };

    const handleResize = () => {
      if (window.innerWidth >= 992) closeOverlays();
    };

    const initialize = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        if (initialized) return;
        initialized = true;

        const tourSection = document.querySelector(".tour-slider")?.closest("section");
        const gallerySection = document.querySelector(".gallery-slider")?.closest("section");
        const testimonialsSection = document.querySelector(".testimonials-slider2")?.closest("section");

        swipers = [
          createSwiper(".banner-slider-active5", {
            slidesPerView: 1.5,
            speed: 2000,
            spaceBetween: 10,
            autoplay: { delay: 500, disableOnInteraction: false },
            loop: true,
            centeredSlides: true,
            breakpoints: {
              0: { slidesPerView: 1 },
              767: { slidesPerView: 1 },
              992: { slidesPerView: 1.5 },
            },
          }),
          createSwiper(".tour-slider", {
            slidesPerView: 4,
            spaceBetween: 30,
            speed: 1200,
            loop: false,
            mousewheel: { sensitivity: 1, releaseOnEdges: true },
            navigation: {
              nextEl: tourSection?.querySelector<HTMLElement>(".swiper-btn-next3"),
              prevEl: tourSection?.querySelector<HTMLElement>(".swiper-btn-prev3"),
            },
            pagination: {
              el: tourSection?.querySelector<HTMLElement>(".swiper-pagination3"),
              type: "progressbar",
            },
            breakpoints: {
              0: { slidesPerView: 1 },
              450: { slidesPerView: 1 },
              575: { slidesPerView: 2, spaceBetween: 20 },
              767: { slidesPerView: 2 },
              991: { slidesPerView: 3, spaceBetween: 20 },
              1200: { slidesPerView: 4, spaceBetween: 10 },
              1400: { slidesPerView: 4 },
            },
          }),
          createSwiper(".gallery-slider", {
            slidesPerView: 5,
            spaceBetween: 30,
            speed: 1400,
            autoplay: true,
            loop: true,
            navigation: {
              nextEl: gallerySection?.querySelector<HTMLElement>(".swiper-btn-next4"),
              prevEl: gallerySection?.querySelector<HTMLElement>(".swiper-btn-prev4"),
            },
            breakpoints: {
              0: { slidesPerView: 2 },
              450: { slidesPerView: 3 },
              575: { slidesPerView: 3 },
              767: { slidesPerView: 4 },
              991: { slidesPerView: 4 },
              1300: { slidesPerView: 4 },
              1500: { slidesPerView: 5 },
            },
          }),
          createSwiper(".testimonials-slider2", {
            slidesPerView: 4,
            spaceBetween: 30,
            speed: 1200,
            loop: true,
            navigation: {
              nextEl: testimonialsSection?.querySelector<HTMLElement>(".swiper-btn-next3"),
              prevEl: testimonialsSection?.querySelector<HTMLElement>(".swiper-btn-prev3"),
            },
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
        ].filter((swiper): swiper is Swiper => swiper !== null);

        updatePriceRange();
      }, 100);
    };

    const handleThemeReady = () => initialize();
    window.addEventListener("touriza:theme-ready", handleThemeReady);
    document.addEventListener("click", handleClick, true);
    document.addEventListener("change", handleChange, true);
    document.addEventListener("input", handleInput, true);
    window.addEventListener("resize", handleResize);

    if (document.documentElement.dataset.tourizaThemeReady === "true") {
      initialize();
    } else {
      timer = window.setTimeout(initialize, 1500);
    }

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("touriza:theme-ready", handleThemeReady);
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("change", handleChange, true);
      document.removeEventListener("input", handleInput, true);
      window.removeEventListener("resize", handleResize);
      swipers.forEach((swiper) => swiper.destroy(true, true));
    };
  }, []);

  return null;
}
