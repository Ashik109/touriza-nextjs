"use client";

import { useRef } from "react";
import Link from "next/link";
import type { SwiperOptions } from "swiper/types";
import useSwiper from "../hooks/useSwiper";

const destinations = [["Bali, Indonesia", "01.webp", "12"], ["Maldives, Asia", "02.webp", "07"], ["Santorini, Greece", "03.webp", "02"], ["Bali, Indonesia", "04.webp", "09"], ["Bali, Indonesia", "01.webp", "12"], ["Maldives, Asia", "02.webp", "07"], ["Santorini, Greece", "03.webp", "02"]];

const sliderOptions: SwiperOptions = { slidesPerView: 4, spaceBetween: 30, speed: 1200, loop: false, mousewheel: { sensitivity: 1, releaseOnEdges: true }, navigation: { nextEl: ".swiper-btn-next2", prevEl: ".swiper-btn-prev2" }, pagination: { el: ".swiper-pagination2", type: "progressbar" }, breakpoints: { 0: { slidesPerView: 1 }, 450: { slidesPerView: 1 }, 575: { slidesPerView: 2 }, 767: { slidesPerView: 2, centeredSlides: false, mousewheel: false }, 991: { slidesPerView: 3, centeredSlides: false }, 1300: { slidesPerView: 4 }, 1500: { slidesPerView: 4 } } };

export default function DestinationsOne() {
  const sliderRef = useRef<HTMLDivElement>(null);
  useSwiper(sliderRef, sliderOptions);

  return <section className="rts-destination-area rts-section-gap body-bg-one" data-bg-src="/assets/images/destination/map-bg.svg" style={{ backgroundImage: "url(/assets/images/destination/map-bg.svg)", backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}><div className="container"><div className="section-top-area d-flex align-items-end justify-content-between"><div className="section-title-area" data-aos="fade-right" data-aos-delay="200"><p className="sub-title">Destinations</p><h2 className="section-title mb-0">Popular Destination</h2></div><div className="button-area mb--15 mb_sm--0" data-aos="fade-left" data-aos-delay="200"><Link href="/destination" className="rts-btn btn-primary btn-border with-arrow">View All <i className="fa-regular fa-arrow-up up-right" /></Link></div></div><div className="section-inner mt--60 mt_sm--30 position-relative pb--80" data-aos="fade-up" data-aos-delay="200"><div className="swiper destination-slider" ref={sliderRef}><div className="swiper-wrapper">{destinations.map(([title, image, count], index) => <div className="swiper-slide" key={`${title}-${index}`}><div className="destination-wrapper radius-10 image-transform"><div className="image-area"><Link href="/destination-details"><img className="hover-image" src={`/assets/images/destination/${image}`} alt="" /></Link></div><div className="content"><h5 className="title"><Link href="/destination-details">{title}</Link></h5><p className="tag"><img src="/assets/images/destination/icon/01.svg" alt="" /> {count} Packages Available</p></div></div></div>)}</div></div><div className="swiper-nav-pag-area"><div className="swiper-pagination2" /><div className="swiper-navigation"><div className="swiper-btn swiper-btn-prev2"><i className="fa-regular fa-chevron-left" /></div><div className="swiper-btn swiper-btn-next2"><i className="fa-regular fa-chevron-right" /></div></div></div></div></div></section>;
}
