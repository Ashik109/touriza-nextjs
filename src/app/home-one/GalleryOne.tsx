"use client";

import { useRef } from "react";
import type { SwiperOptions } from "swiper/types";
import useSwiper from "../hooks/useSwiper";

const gallery = [
  ["01.webp", 410],
  ["02.webp", 410],
  ["03.webp", 300],
  ["04.webp", 520],
  ["05.webp", 410],
  ["01.webp", 410],
  ["02.webp", 410],
  ["03.webp", 300],
  ["04.webp", 520],
  ["05.webp", 410],
] as const;

const sliderOptions: SwiperOptions = { slidesPerView: 5, spaceBetween: 30, speed: 1400, autoplay: true, loop: true, navigation: { nextEl: ".swiper-btn-next4", prevEl: ".swiper-btn-prev4" }, breakpoints: { 0: { slidesPerView: 2 }, 450: { slidesPerView: 3 }, 575: { slidesPerView: 3 }, 767: { slidesPerView: 4, centeredSlides: false }, 991: { slidesPerView: 4, centeredSlides: false }, 1300: { slidesPerView: 4 }, 1500: { slidesPerView: 5 } } };

export default function GalleryOne() {
  const sliderRef = useRef<HTMLDivElement>(null);
  useSwiper(sliderRef, sliderOptions);

  return (
    <section className="rts-gallery-area rts-section-gap">
      <div className="container">
        <div className="section-top-area d-flex align-items-end justify-content-between">
          <div className="section-title-area" data-aos="fade-right" data-aos-delay="200">
            <p className="sub-title">Gallery</p>
            <h2 className="section-title mb-0">Experience Through Images</h2>
            <p className="desc">Discover some of our finest work captured through visuals</p>
          </div>
          <div className="right-btn-area" data-aos="fade-left" data-aos-delay="200">
            <div className="swiper-btn swiper-btn-prev4 radius-6"><i className="fa-regular fa-chevron-left"></i></div>
            <div className="swiper-btn swiper-btn-next4 radius-6"><i className="fa-regular fa-chevron-right"></i></div>
          </div>
        </div>
      </div>
      <div className="section-inner mt--60" data-aos="fade-up" data-aos-delay="200">
        <div className="swiper gallery-slider" ref={sliderRef}>
          <div className="swiper-wrapper">
            {gallery.map(([image, width], index) => (
              <div className="swiper-slide" key={`${image}-${index}`}>
                <div className="gallery-wrapper image-transform radius-10">
                  <a href={`/assets/images/gallery/${image}`} className="gallery-image">
                    <img className="hover-image" src={`/assets/images/gallery/${image}`} width={width} alt="" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
