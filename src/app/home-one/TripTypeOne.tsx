"use client";

import { useRef } from "react";
import Link from "next/link";
import type { SwiperOptions } from "swiper/types";
import useSwiper from "../hooks/useSwiper";

const trips = [["Beach Holiday (01)", "01.webp"], ["Adventure (04)", "02.webp"], ["Honeymoon (05)", "03.webp"], ["Trekking (03)", "04.webp"], ["Adventure (04)", "02.webp"], ["Honeymoon (05)", "03.webp"], ["Trekking (03)", "04.webp"]];

const sliderOptions: SwiperOptions = { slidesPerView: 4, spaceBetween: 30, speed: 1800, loop: false, mousewheel: { sensitivity: 1, releaseOnEdges: true }, navigation: { nextEl: ".swiper-btn-next", prevEl: ".swiper-btn-prev" }, pagination: { el: ".swiper-pagination", type: "progressbar" }, breakpoints: { 0: { slidesPerView: 1 }, 450: { slidesPerView: 2 }, 575: { slidesPerView: 2 }, 767: { slidesPerView: 3, mousewheel: false }, 991: { slidesPerView: 3 }, 1200: { slidesPerView: 4 }, 1300: { slidesPerView: 4 } } };

export default function TripTypeOne() {
  const sliderRef = useRef<HTMLDivElement>(null);
  useSwiper(sliderRef, sliderOptions);

  return <section className="rts-trip-type-area rts-section-gapBottom"><div className="container"><div className="section-title-area center-style"><p className="sub-title" data-aos="fade-up" data-aos-delay="200">Trip Type</p><h2 className="section-title" data-aos="fade-up" data-aos-delay="400">Pick Your Travel Mood</h2><p className="desc" data-aos="fade-up" data-aos-delay="600">Discover the most loved travel spots around the world.</p></div><div className="section-inner mt--60" data-aos="fade-up" data-aos-delay="200"><div className="swiper trip-slider" ref={sliderRef}><div className="swiper-wrapper">{trips.map(([title, image], index) => <div className="swiper-slide" key={`${title}-${index}`}><div className="trip-wrapper radius-10 image-transform"><div className="image-area"><img className="hover-image" src={`/assets/images/trip/${image}`} alt="" /></div><div className="content"><h5 className="title"><Link href="/tour">{title}</Link></h5></div></div></div>)}</div></div><div className="swiper-nav-pag-area"><div className="swiper-pagination" /><div className="swiper-navigation"><div className="swiper-btn swiper-btn-prev"><i className="fa-regular fa-chevron-left" /></div><div className="swiper-btn swiper-btn-next"><i className="fa-regular fa-chevron-right" /></div></div></div></div></div></section>;
}
