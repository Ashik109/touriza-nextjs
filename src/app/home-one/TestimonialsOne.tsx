"use client";

import { useRef } from "react";
import type { SwiperOptions } from "swiper/types";
import useSwiper from "../hooks/useSwiper";

const sliderOptions: SwiperOptions = { slidesPerView: 1, speed: 1200, loop: true, navigation: { nextEl: ".swiper-btn-next5", prevEl: ".swiper-btn-prev5" }, pagination: { el: ".slider-dots-2", clickable: true }, breakpoints: { 0: { slidesPerView: 1 }, 767: { slidesPerView: 1, autoplay: true } } };

export default function TestimonialsOne() {
  const sliderRef = useRef<HTMLDivElement>(null);
  useSwiper(sliderRef, sliderOptions);

  return (
    <section className="rts-testimonials-area rts-section-gap body-bg-one">
      <div className="container">
        <div className="section-title-area center-style">
          <p className="sub-title" data-aos="fade-up" data-aos-delay="200">Testimonials</p>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="400">What Our Travelers Say</h2>
          <p className="desc" data-aos="fade-up" data-aos-delay="600">Hear from our happy travelers around the world.</p>
        </div>
        <div className="section-inner mt--60">
          <div className="swiper testimonials-slider" ref={sliderRef}>
            <div className="swiper-wrapper">
              {[0, 1].map((index) => (
                <div className="swiper-slide" key={index}>
                  <div className="testimonials-wrapper radius-10">
                    <div className="image-area" {...(index === 0 ? { "data-aos": "zoom-in", "data-aos-delay": "200" } : {})}>
                      <img className="radius-10" src="/assets/images/testimonials/01.webp" width="353" alt="" />
                    </div>
                    <div className="content-area">
                      <div className="quote"><img src="/assets/images/testimonials/quote.svg" alt="" /></div>
                      <p className="text">Absolutely incredible experience! We explored Bali stress-free, thanks to the amazing team at Travelex.</p>
                      <div className="author">
                        <h5>Sarah M</h5>
                        <p>Sydney, Australia</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="swiper-navigation">
            <div className="swiper-btn swiper-btn-prev5 radius-6"><i className="fa-regular fa-chevron-left"></i></div>
            <div className="swiper-btn swiper-btn-next5 radius-6"><i className="fa-regular fa-chevron-right"></i></div>
          </div>
        </div>
      </div>
    </section>
  );
}
