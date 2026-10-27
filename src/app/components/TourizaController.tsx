"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Swiper from "swiper";
import {
  Autoplay,
  Controller,
  EffectCoverflow,
  EffectCreative,
  EffectFade,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import type { SwiperOptions } from "swiper/types";

type SwiperElement = HTMLElement & { swiper?: Swiper };

interface MagnificCollection {
  magnificPopup: (options: Record<string, unknown>) => void;
}

interface TourizaJQuery {
  (selector: string): MagnificCollection;
  fn?: { magnificPopup?: unknown };
  magnificPopup?: { close?: () => void };
}

declare global {
  interface Window {
    jQuery?: TourizaJQuery;
  }
}

const swiperModules = [
  Autoplay,
  Controller,
  EffectCoverflow,
  EffectCreative,
  EffectFade,
  Mousewheel,
  Navigation,
  Pagination,
];

function sliderScope(element: HTMLElement) {
  return element.closest<HTMLElement>("section, .rts-banner-area, .rts-testimonials-area") ?? document;
}

function scopedElement(element: HTMLElement, selector: string) {
  return sliderScope(element).querySelector<HTMLElement>(selector) ?? document.querySelector<HTMLElement>(selector);
}

function initializeSwipers() {
  const instances: Swiper[] = [];

  const create = (
    selector: string,
    options: SwiperOptions | ((element: HTMLElement) => SwiperOptions),
  ) => {
    document.querySelectorAll<SwiperElement>(selector).forEach((element) => {
      if (element.swiper || element.classList.contains("swiper-initialized")) return;

      const resolvedOptions = typeof options === "function" ? options(element) : options;
      instances.push(new Swiper(element, { modules: swiperModules, ...resolvedOptions }));
    });
  };

  create(".banner-slider-active", (element) => ({
    slidesPerView: 1,
    speed: 1200,
    effect: "fade",
    autoplay: { delay: 6000, disableOnInteraction: false },
    loop: true,
    pagination: { el: scopedElement(element, ".slider-dots"), clickable: true },
  }));

  create(".banner-slider-active2", (element) => ({
    slidesPerView: 1,
    speed: 1200,
    autoplay: { delay: 6000, disableOnInteraction: false },
    loop: true,
    pagination: { el: scopedElement(element, ".slider-dots"), clickable: true },
  }));

  create(".banner-slider-active3", (element) => {
    const updateFraction = (swiper: Swiper) => {
      const fraction = scopedElement(element, ".swiper-pagination-fraction");
      if (!fraction) return;

      const current = String(swiper.realIndex + 1).padStart(2, "0");
      const total = String(
        element.querySelectorAll(".swiper-wrapper > .swiper-slide:not(.swiper-slide-duplicate)").length,
      ).padStart(2, "0");
      fraction.innerHTML = `<span class="current">${current}</span><span class="divider"></span><span class="total">${total}</span>`;
    };

    return {
      slidesPerView: 1,
      loop: true,
      speed: 1500,
      spaceBetween: 0,
      autoplay: { delay: 4000, disableOnInteraction: false },
      navigation: {
        nextEl: scopedElement(element, ".swiper-btn-next"),
        prevEl: scopedElement(element, ".swiper-btn-prev"),
      },
      pagination: {
        el: scopedElement(element, ".swiper-pagination-vertical"),
        clickable: true,
        renderBullet: (index, className) =>
          `<span class="${className}">${String(index + 1).padStart(2, "0")}</span>`,
      },
      effect: "creative",
      creativeEffect: {
        prev: { scale: 1.1, opacity: 0, translate: [0, 0, 0] },
        next: { scale: 1.3, opacity: 0, translate: [0, 0, 0] },
      },
      on: { init: updateFraction, slideChange: updateFraction },
    };
  });

  create(".banner-slider-active4", {
    slidesPerView: 1.5,
    speed: 1200,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    breakpoints: { 0: { slidesPerView: 1 }, 767: { slidesPerView: 1 }, 1024: { slidesPerView: 1.5 } },
  });

  create(".banner-slider-active5", {
    slidesPerView: 2,
    speed: 2000,
    spaceBetween: 10,
    autoplay: { delay: 500, disableOnInteraction: false },
    loop: true,
    centeredSlides: true,
    breakpoints: { 0: { slidesPerView: 1 }, 767: { slidesPerView: 1 }, 992: { slidesPerView: 1.5 } },
  });

  create(".banner-slider-active9, .banner-slider-active10", {
    slidesPerView: 1,
    speed: 1200,
    effect: "fade",
    autoplay: { delay: 6000, disableOnInteraction: false },
    loop: true,
  });

  create(".banner-tour-pack-active", (element) => ({
    slidesPerView: 2,
    spaceBetween: 20,
    speed: 1200,
    loop: false,
    mousewheel: { sensitivity: 1, releaseOnEdges: true },
    navigation: {
      nextEl: scopedElement(element, ".swiper-btn-next"),
      prevEl: scopedElement(element, ".swiper-btn-prev"),
    },
    pagination: { el: scopedElement(element, ".swiper-pagination"), type: "progressbar" },
    breakpoints: { 0: { slidesPerView: 1 }, 767: { slidesPerView: 2, autoplay: true } },
  }));

  const progressSliderOptions = (
    element: HTMLElement,
    navigationSuffix = "",
    paginationSuffix = "",
  ): SwiperOptions => ({
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1800,
    loop: false,
    mousewheel: { sensitivity: 1, releaseOnEdges: true },
    navigation: {
      nextEl: scopedElement(element, `.swiper-btn-next${navigationSuffix}`),
      prevEl: scopedElement(element, `.swiper-btn-prev${navigationSuffix}`),
    },
    pagination: {
      el: scopedElement(element, `.swiper-pagination${paginationSuffix}`),
      type: "progressbar",
    },
    breakpoints: {
      0: { slidesPerView: 1, mousewheel: false },
      450: { slidesPerView: 1, mousewheel: false },
      575: { slidesPerView: 2, spaceBetween: 20 },
      767: { slidesPerView: 2, mousewheel: false },
      991: { slidesPerView: 3, spaceBetween: 20 },
      1200: { slidesPerView: 4 },
      1400: { slidesPerView: 4 },
    },
  });

  create(".trip-slider", (element) => ({
    ...progressSliderOptions(element),
    breakpoints: {
      0: { slidesPerView: 1 },
      450: { slidesPerView: 2 },
      575: { slidesPerView: 2 },
      767: { slidesPerView: 3, mousewheel: false },
      991: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1300: { slidesPerView: 4 },
    },
  }));

  create(".trip-slider-2", (element) => ({
    ...progressSliderOptions(element),
    simulateTouch: true,
    grabCursor: true,
    breakpoints: {
      0: { slidesPerView: 1 },
      575: { slidesPerView: 1 },
      767: { slidesPerView: 2, mousewheel: false },
      991: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1300: { slidesPerView: 4 },
    },
  }));

  create(".destination-slider", (element) => ({
    ...progressSliderOptions(element, "2", "2"),
    speed: 1200,
    breakpoints: {
      0: { slidesPerView: 1 },
      450: { slidesPerView: 1 },
      575: { slidesPerView: 2 },
      767: { slidesPerView: 2, centeredSlides: false, mousewheel: false },
      991: { slidesPerView: 3, centeredSlides: false },
      1300: { slidesPerView: 4 },
      1500: { slidesPerView: 4 },
    },
  }));

  create(".tour-slider", (element) => ({
    ...progressSliderOptions(element, "3", "3"),
    speed: 1200,
  }));

  create(".gallery-slider", (element) => ({
    slidesPerView: 5,
    spaceBetween: 30,
    speed: 1400,
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: scopedElement(element, ".swiper-btn-next4"),
      prevEl: scopedElement(element, ".swiper-btn-prev4"),
    },
    breakpoints: {
      0: { slidesPerView: 2 },
      450: { slidesPerView: 3 },
      575: { slidesPerView: 3 },
      767: { slidesPerView: 4, centeredSlides: false },
      991: { slidesPerView: 4, centeredSlides: false },
      1300: { slidesPerView: 4 },
      1500: { slidesPerView: 5 },
    },
  }));

  create(".gallery-slider-active", (element) => ({
    slidesPerView: 1,
    speed: 1200,
    effect: "fade",
    loop: true,
    autoplay: { delay: 6000, disableOnInteraction: false },
    pagination: { el: scopedElement(element, ".slider-dots"), clickable: true },
  }));

  create(".gallery-content-active", {
    slidesPerView: 1,
    speed: 1200,
    loop: true,
    autoplay: { delay: 6000, disableOnInteraction: false },
  });

  const gallerySlider = document.querySelector<SwiperElement>(".gallery-slider-active")?.swiper;
  const galleryContent = document.querySelector<SwiperElement>(".gallery-content-active")?.swiper;
  if (gallerySlider && galleryContent) {
    gallerySlider.controller.control = galleryContent;
    galleryContent.controller.control = gallerySlider;
  }

  create(".brand-slider", {
    slidesPerView: 5,
    spaceBetween: 30,
    speed: 1200,
    autoplay: true,
    loop: true,
    breakpoints: {
      0: { slidesPerView: 2 },
      450: { slidesPerView: 3 },
      575: { slidesPerView: 3 },
      767: { slidesPerView: 4, centeredSlides: false },
      991: { slidesPerView: 4, centeredSlides: false },
      1300: { slidesPerView: 4 },
      1500: { slidesPerView: 5 },
    },
  });

  create(".testimonials-slider:not(.testimonials-slider2):not(.testimonials-slider3)", (element) => ({
    slidesPerView: 1,
    speed: 1200,
    loop: true,
    navigation: {
      nextEl: scopedElement(element, ".swiper-btn-next5"),
      prevEl: scopedElement(element, ".swiper-btn-prev5"),
    },
    pagination: { el: scopedElement(element, ".slider-dots-2"), clickable: true },
    breakpoints: { 0: { slidesPerView: 1 }, 767: { slidesPerView: 1, autoplay: true } },
  }));

  create(".testimonials-slider2", (element) => ({
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1200,
    loop: true,
    navigation: {
      nextEl: scopedElement(element, ".swiper-btn-next3"),
      prevEl: scopedElement(element, ".swiper-btn-prev3"),
    },
    pagination: { el: scopedElement(element, ".slider-dots"), clickable: true },
    breakpoints: {
      0: { slidesPerView: 1 },
      450: { slidesPerView: 1, mousewheel: false },
      575: { slidesPerView: 1, spaceBetween: 20 },
      767: { slidesPerView: 2, mousewheel: false },
      991: { slidesPerView: 3, spaceBetween: 20 },
      1200: { slidesPerView: 4, spaceBetween: 10 },
      1400: { slidesPerView: 4 },
    },
  }));

  create(".trip-slider2", (element) => ({
    ...progressSliderOptions(element),
    breakpoints: {
      0: { slidesPerView: 1, mousewheel: false },
      450: { slidesPerView: 1 },
      575: { slidesPerView: 1 },
      767: { slidesPerView: 2, mousewheel: false },
      991: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1300: { slidesPerView: 4 },
    },
  }));

  create(".trip-slider3", (element) => ({
    ...progressSliderOptions(element, "3", "3"),
    breakpoints: {
      0: { slidesPerView: 1, mousewheel: false },
      450: { slidesPerView: 1 },
      600: { slidesPerView: 2 },
      767: { slidesPerView: 2, mousewheel: false },
      991: { slidesPerView: 3 },
      1300: { slidesPerView: 3 },
      1400: { slidesPerView: 4 },
    },
  }));

  create(".tour-slider-pack", {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1800,
    loop: true,
    autoplay: { delay: 2000 },
    mousewheel: { sensitivity: 1, releaseOnEdges: true },
    breakpoints: {
      0: { slidesPerView: 1 },
      767: { slidesPerView: 2 },
      911: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
  });

  create(".swiper-data", (element) => {
    const configuredOptions = element.dataset.swiper
      ? JSON.parse(element.dataset.swiper) as SwiperOptions
      : {};
    const navigation = configuredOptions.navigation;
    const pagination = configuredOptions.pagination;

    return {
      spaceBetween: 30,
      slidesPerView: 2,
      speed: 1800,
      mousewheel: { sensitivity: 1, releaseOnEdges: true },
      ...configuredOptions,
      navigation: navigation && typeof navigation !== "boolean" ? {
        ...navigation,
        nextEl: scopedElement(element, ".swiper-btn-next"),
        prevEl: scopedElement(element, ".swiper-btn-prev"),
      } : navigation,
      pagination: pagination && typeof pagination !== "boolean" ? {
        ...pagination,
        el: scopedElement(element, ".swiper-pagination"),
      } : pagination,
    };
  });

  create(".tour-slider-pack-two:not(.swiper-data)", (element) => ({
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1800,
    loop: true,
    navigation: {
      nextEl: scopedElement(element, ".tour-btn-next"),
      prevEl: scopedElement(element, ".tour-btn-prev"),
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      767: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
  }));

  create(".travel-slider", (element) => ({
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1800,
    loop: true,
    navigation: {
      nextEl: scopedElement(element, ".swiper-btn-next"),
      prevEl: scopedElement(element, ".swiper-btn-prev"),
    },
    pagination: { el: scopedElement(element, ".slider-dots2"), clickable: true },
    breakpoints: {
      0: { slidesPerView: 1 },
      450: { slidesPerView: 1 },
      575: { slidesPerView: 2 },
      767: { slidesPerView: 2, mousewheel: false },
      991: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1300: { slidesPerView: 4 },
    },
  }));

  create(".blog-slider", (element) => ({
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1800,
    loop: true,
    navigation: {
      nextEl: scopedElement(element, ".swiper-btn-next2"),
      prevEl: scopedElement(element, ".swiper-btn-prev2"),
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      450: { slidesPerView: 1 },
      575: { slidesPerView: 2 },
      767: { slidesPerView: 2, mousewheel: false },
      991: { slidesPerView: 3 },
      1200: { slidesPerView: 3 },
      1300: { slidesPerView: 3 },
    },
  }));

  create(".blog-slider2", (element) => ({
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1800,
    loop: true,
    navigation: {
      nextEl: scopedElement(element, ".swiper-btn-next2"),
      prevEl: scopedElement(element, ".swiper-btn-prev2"),
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      450: { slidesPerView: 1 },
      575: { slidesPerView: 2 },
      767: { slidesPerView: 2, mousewheel: false },
      991: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
  }));

  create(".testimonials-slider3", (element) => ({
    slidesPerView: 1,
    speed: 1200,
    loop: true,
    navigation: {
      nextEl: scopedElement(element, ".swiper-btn-next5"),
      prevEl: scopedElement(element, ".swiper-btn-prev5"),
    },
    pagination: { el: scopedElement(element, ".slider-dots-2"), clickable: true },
    breakpoints: { 0: { slidesPerView: 1 }, 767: { slidesPerView: 1, autoplay: true } },
  }));

  create(".testimonials-img-slider", {
    slidesPerView: 1,
    speed: 1200,
    effect: "fade",
    loop: true,
    breakpoints: { 0: { slidesPerView: 1 }, 767: { slidesPerView: 1, autoplay: true } },
  });

  const testimonialCards = (slidesPerView: number, autoplay = false) => (element: HTMLElement): SwiperOptions => ({
    slidesPerView,
    spaceBetween: 30,
    speed: 1200,
    loop: true,
    ...(autoplay ? { autoplay: { delay: 2500, disableOnInteraction: false } } : {}),
    navigation: {
      nextEl: scopedElement(element, ".swiper-btn-next3"),
      prevEl: scopedElement(element, ".swiper-btn-prev3"),
    },
    pagination: { el: scopedElement(element, ".slider-dots"), clickable: true },
    breakpoints: {
      0: { slidesPerView: 1 },
      450: { slidesPerView: 1, mousewheel: false },
      575: { slidesPerView: 1, spaceBetween: 20 },
      767: { slidesPerView: 2, mousewheel: false },
      991: { slidesPerView: 3, spaceBetween: 20 },
      1200: { slidesPerView: Math.min(slidesPerView, 4), spaceBetween: 10 },
      1400: { slidesPerView },
    },
  });

  create(".testimonials-slider4", testimonialCards(5, true));
  create(".testimonials-slider5", testimonialCards(4));

  create(".rts-card-slider", (element) => {
    const customOptions = element.dataset.sliderOptions
      ? JSON.parse(element.dataset.sliderOptions) as SwiperOptions
      : {};

    return {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      speed: 1000,
      autoplay: { delay: 6000, disableOnInteraction: false },
      effect: "coverflow",
      ...customOptions,
    };
  });

  const testimonialText = document.querySelector<SwiperElement>(".testimonials-slider3")?.swiper;
  const testimonialImage = document.querySelector<SwiperElement>(".testimonials-img-slider")?.swiper;
  if (testimonialText && testimonialImage) {
    testimonialText.controller.control = testimonialImage;
    testimonialImage.controller.control = testimonialText;
  }

  return instances;
}

function initializeMagnificPopup() {
  const $ = window.jQuery;
  if (!$ || !$.fn?.magnificPopup) return;

  document.querySelectorAll<HTMLAnchorElement>('.gallery-image[href^="assets/"]').forEach((anchor) => {
    anchor.setAttribute("href", `/${anchor.getAttribute("href")}`);
  });

  $(".gallery-image").magnificPopup({ type: "image", gallery: { enabled: true } });
  $(".popup-youtube, .popup-video").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
}

function closeCustomSelects() {
  document.querySelectorAll<HTMLElement>(".custom-select").forEach((select) => {
    select.classList.remove("active");
    const options = select.querySelector<HTMLElement>(".custom-options");
    if (options) options.style.height = "0";
  });
}

function closeOverlays() {
  document.querySelector(".search-input-area")?.classList.remove("show");
  document.querySelector("#side-bar")?.classList.remove("show");
  document.querySelector("#side-bar2")?.classList.remove("show");
  document.querySelector("#anywhere-home")?.classList.remove("bgshow");
}

function updatePriceRange() {
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
}

export default function TourizaController() {
  const pathname = usePathname();

  useEffect(() => {
    const swipers: Swiper[] = [];
    let initializeTimer = 0;
    let mutationTimer = 0;
    let countdownTimer = 0;
    let pluginRetryTimer = 0;
    let pluginRetryCount = 0;
    let pageReady = window.__tourizaPageReadyPath === pathname;

    const updateCountdowns = () => {
      document.querySelectorAll<HTMLElement>(".countDown").forEach((element) => {
        const source = element.dataset.countdown ?? element.textContent ?? "";
        const match = source.match(/(\d{1,2})\/(\d{1,2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2})/);
        if (!match) return;

        element.dataset.countdown = match[0];
        const end = new Date(
          Number(match[3]),
          Number(match[2]) - 1,
          Number(match[1]),
          Number(match[4]),
          Number(match[5]),
          Number(match[6]),
        );
        const difference = end.getTime() - Date.now();

        if (difference <= 0) {
          element.innerHTML = "<p class='end'>Sorry, your session has expired.</p>";
          return;
        }

        const totalSeconds = Math.floor(difference / 1000);
        const values = [
          Math.floor(totalSeconds / 86400),
          Math.floor((totalSeconds % 86400) / 3600),
          Math.floor((totalSeconds % 3600) / 60),
          totalSeconds % 60,
        ].map((value) => String(value).padStart(2, "0"));

        if (element.dataset.countdownReady !== "true") {
          element.innerHTML = values
            .map((value) => `<div class='container'><div class='a'><div>${value}</div></div></div>`)
            .join("");
          element.dataset.countdownReady = "true";
        } else {
          element.querySelectorAll<HTMLElement>("div.container div.a div").forEach((value, index) => {
            value.textContent = values[index];
          });
        }
      });
    };

    const initialize = () => {
      if (!pageReady) return;

      swipers.push(...initializeSwipers());
      initializeMagnificPopup();
      updatePriceRange();
      updateCountdowns();

      document.querySelectorAll<HTMLElement>("[data-bg-src]").forEach((element) => {
        const background = element.dataset.bgSrc;
        if (!background) return;
        element.style.backgroundImage = `url(${background})`;
        element.style.backgroundSize = "cover";
        element.style.backgroundPosition = "center center";
        element.style.backgroundRepeat = "no-repeat";
      });

      document.querySelectorAll<HTMLElement>(".odometer[data-count]").forEach((element) => {
        element.textContent = element.dataset.count ?? element.textContent;
        element.classList.add("odometer-triggered");
      });

      const savedDirection = window.localStorage.getItem("pageDirection") ?? "ltr";
      document.body.dir = savedDirection;
      document.querySelector(".rtl")?.classList.toggle("show", savedDirection === "ltr");
      document.querySelector(".ltr")?.classList.toggle("show", savedDirection === "rtl");
    };

    const handlePluginsReady = () => initialize();
    const handlePageReady = (event: Event) => {
      const readyPath = (event as CustomEvent<string>).detail;
      if (readyPath !== pathname) return;
      pageReady = true;
      window.clearTimeout(initializeTimer);
      initializeTimer = window.setTimeout(initialize, 0);
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element;
      const customSelect = target.closest<HTMLElement>(".custom-select");
      const customTrigger = target.closest<HTMLElement>(".custom-select-trigger");
      const customOption = target.closest<HTMLElement>(".custom-select .option");

      if (customSelect && (customTrigger || customOption)) {
        event.stopPropagation();
        const options = customSelect.querySelector<HTMLElement>(".custom-options");
        if (!options) return;

        if (customTrigger) {
          const shouldOpen = !customSelect.classList.contains("active");
          closeCustomSelects();
          customSelect.classList.toggle("active", shouldOpen);
          options.style.height = shouldOpen ? "250px" : "0";
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
        return;
      }

      if (target.closest("#close, .close-icon-menu, #anywhere-home")) {
        closeOverlays();
        return;
      }

      if (target.closest(".menu-btn-toggle2")) {
        document.querySelector("#side-bar2")?.classList.add("show");
        document.querySelector("#anywhere-home")?.classList.add("bgshow");
        return;
      }

      if (target.closest(".menu-btn-toggle") && window.innerWidth < 992) {
        document.querySelector("#side-bar")?.classList.add("show");
        document.querySelector("#anywhere-home")?.classList.add("bgshow");
        return;
      }

      const mobileTrigger = target.closest<HTMLAnchorElement>(".has-droupdown > a");
      if (mobileTrigger?.getAttribute("href") === "#") {
        event.preventDefault();
        const parent = mobileTrigger.parentElement;
        const submenu = parent?.querySelector<HTMLElement>(":scope > .submenu");
        if (!parent || !submenu) return;
        const shouldOpen = !parent.classList.contains("mm-active");
        parent.classList.toggle("mm-active", shouldOpen);
        submenu.classList.toggle("mm-show", shouldOpen);
        submenu.style.height = shouldOpen ? `${submenu.scrollHeight}px` : "0";
        mobileTrigger.setAttribute("aria-expanded", String(shouldOpen));
        return;
      }

      if (target.closest("#mobile-menu-active a[href]:not([href='#'])")) {
        closeOverlays();
      }

      const regionItem = target.closest<HTMLElement>(".region-area ul li[data-region]");
      if (regionItem) {
        const regionArea = regionItem.closest<HTMLElement>(".destination-area-wrapper") ?? document.body;
        const region = regionItem.dataset.region;
        regionArea.querySelectorAll(".region-area ul li").forEach((item) => item.classList.remove("active"));
        regionItem.classList.add("active");
        regionArea.querySelectorAll<HTMLElement>(".destlist").forEach((list) => {
          list.classList.toggle("active", list.dataset.region === region);
        });
      }

      const projectBlock = target.closest<HTMLElement>(".project-block-four");
      if (projectBlock) {
        document.querySelectorAll(".project-block-four").forEach((block) => block.classList.remove("active"));
        projectBlock.classList.add("active");
      }

      const itineraryTitle = target.closest<HTMLElement>(".itinerary-title");
      if (itineraryTitle) itineraryTitle.closest(".itinerary-item")?.classList.toggle("active");

      const filterButton = target.closest<HTMLButtonElement>(".filters-button-group button[data-filter]");
      if (filterButton) {
        const group = filterButton.closest<HTMLElement>(".filters-button-group");
        group?.querySelectorAll("button").forEach((button) => button.classList.remove("is-checked"));
        filterButton.classList.add("is-checked");
        const filter = filterButton.dataset.filter ?? "*";
        document.querySelectorAll<HTMLElement>(".main-isotop .element-item").forEach((item) => {
          item.style.display = filter === "*" || item.matches(filter) ? "" : "none";
        });
      }

      if (target.closest(".progress-wrap")) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      if (target.closest(".rtl-ltr-switcher-btn")) {
        const direction = document.body.dir === "rtl" ? "ltr" : "rtl";
        document.body.dir = direction;
        window.localStorage.setItem("pageDirection", direction);
        document.querySelector(".rtl")?.classList.toggle("show", direction === "ltr");
        document.querySelector(".ltr")?.classList.toggle("show", direction === "rtl");
      }
    };

    const handleChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (!target.matches("#expandAll, #expandAll2")) return;
      document.querySelectorAll(".itinerary-item").forEach((item) => {
        item.classList.toggle("active", target.checked);
      });
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

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeOverlays();
        window.jQuery?.magnificPopup?.close?.();
      }
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      document.querySelectorAll(".header--sticky").forEach((header) => {
        header.classList.toggle("sticky", scrollTop > 150);
      });

      document.querySelector(".progress-wrap")?.classList.toggle("active-progress", scrollTop > 50);
      document.querySelector(".rts-switcher")?.classList.toggle("btt__visible", scrollTop > 50);

      const path = document.querySelector<SVGPathElement>(".progress-wrap path");
      if (path) {
        const length = path.getTotalLength();
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = height > 0 ? length - (scrollTop * length) / height : length;
        path.style.strokeDasharray = `${length} ${length}`;
        path.style.strokeDashoffset = String(progress);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 992) closeOverlays();
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("change", handleChange);
    document.addEventListener("input", handleInput);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("touriza:plugins-ready", handlePluginsReady);
    window.addEventListener("touriza:page-ready", handlePageReady);

    pluginRetryTimer = window.setInterval(() => {
      pluginRetryCount += 1;
      initialize();
      if (pluginRetryCount >= 20) {
        window.clearInterval(pluginRetryTimer);
      }
    }, 100);

    countdownTimer = window.setInterval(updateCountdowns, 1000);

    const observer = new MutationObserver(() => {
      window.clearTimeout(mutationTimer);
      mutationTimer = window.setTimeout(initialize, 100);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    initializeTimer = window.setTimeout(() => {
      pageReady = window.__tourizaPageReadyPath === pathname;
      initialize();
      handleScroll();
    }, 500);

    return () => {
      observer.disconnect();
      window.clearTimeout(initializeTimer);
      window.clearTimeout(mutationTimer);
      window.clearInterval(countdownTimer);
      window.clearInterval(pluginRetryTimer);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("change", handleChange);
      document.removeEventListener("input", handleInput);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("touriza:plugins-ready", handlePluginsReady);
      window.removeEventListener("touriza:page-ready", handlePageReady);
      window.jQuery?.magnificPopup?.close?.();
      swipers.forEach((swiper) => swiper.destroy(true, true));
      closeOverlays();
    };
  }, [pathname]);

  return null;
}
