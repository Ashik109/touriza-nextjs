"use client";

import { useRef } from "react";
import type { SwiperOptions } from "swiper/types";
import useSwiper from "../hooks/useSwiper";

const brands = ["01.svg", "02.svg", "03.svg", "04.svg", "05.svg"];

const sliderOptions: SwiperOptions = { slidesPerView: 5, spaceBetween: 30, speed: 1200, autoplay: true, loop: true, breakpoints: { 0: { slidesPerView: 2 }, 450: { slidesPerView: 3 }, 575: { slidesPerView: 3 }, 767: { slidesPerView: 4, centeredSlides: false }, 991: { slidesPerView: 4, centeredSlides: false }, 1300: { slidesPerView: 4 }, 1500: { slidesPerView: 5 } } };

export default function BrandOne() {
  const sliderRef = useRef<HTMLDivElement>(null);
  useSwiper(sliderRef, sliderOptions);

  return (
    <div className="rts-brand-area rts-section-gapBottom" data-aos="fade-up" data-aos-delay="200">
      <div className="container">
        <div className="swiper brand-slider" ref={sliderRef}>
          <div className="swiper-wrapper">
            {brands.map((brand) => (
              <div className="swiper-slide" key={brand}>
                <div className="image-area">
                  <a href="#"><img src={`/assets/images/brand/${brand}`} alt="" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
