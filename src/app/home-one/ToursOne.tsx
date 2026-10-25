"use client";

import { useRef } from "react";
import Link from "next/link";
import type { SwiperOptions } from "swiper/types";
import useSwiper from "../hooks/useSwiper";

const tours = [
  ["05.webp", "$499/person", "7 Days in Bali Paradise", "Indonesia", "7 Days/6 Nights"],
  ["06.webp", "$799/person", "Luxury Beach Escape", "Maldives", "5 Days/4 Nights"],
  ["07.webp", "$420/person", "Himalayan Cultural Tour", "Nepal", "4 Days/3 Nights"],
  ["08.webp", "$1,250/person", "White Walls of Santorini", "Greece", "6 Days / 5 Nights"],
  ["06.webp", "$799/person", "Luxury Beach Escape", "Maldives", "5 Days/4 Nights"],
  ["07.webp", "$420/person", "Himalayan Cultural Tour", "Nepal", "4 Days/3 Nights"],
  ["08.webp", "$1,250/person", "White Walls of Santorini", "Greece", "6 Days / 5 Nights"],
];

const sliderOptions: SwiperOptions = { slidesPerView: 4, spaceBetween: 30, speed: 1200, loop: false, mousewheel: { sensitivity: 1, releaseOnEdges: true }, navigation: { nextEl: ".swiper-btn-next3", prevEl: ".swiper-btn-prev3" }, pagination: { el: ".swiper-pagination3", type: "progressbar" }, breakpoints: { 0: { slidesPerView: 1 }, 450: { slidesPerView: 1, mousewheel: false }, 575: { slidesPerView: 2, spaceBetween: 20 }, 767: { slidesPerView: 2, mousewheel: false }, 991: { slidesPerView: 3, spaceBetween: 20 }, 1200: { slidesPerView: 4, spaceBetween: 10 }, 1400: { slidesPerView: 4 } } };

export default function ToursOne() {
  const sliderRef = useRef<HTMLDivElement>(null);
  useSwiper(sliderRef, sliderOptions);

  return (
    <section className="rts-tour-area rts-section-gap body-bg-one">
      <div className="container">
        <div className="section-title-area center-style">
          <p className="sub-title" data-aos="fade-up" data-aos-delay="100">Featured Tours</p>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="200">Discover Extraordinary <br /> Seasonal Specials</h2>
        </div>
        <div className="section-inner mt--60 position-relative pb--80" data-aos="fade-up" data-aos-delay="200">
          <div className="swiper tour-slider" ref={sliderRef}>
            <div className="swiper-wrapper">
              {tours.map(([image, price, title, location, duration], index) => (
                <div className="swiper-slide" key={`${title}-${index}`}>
                  <div className="tour-wrapper radius-10 image-transform">
                    <div className="image-area radius-6">
                      <Link href="/tour-details">
                        <img className="hover-image" src={`/assets/images/trip/${image}`} alt="" />
                        <span className="tag">{price}</span>
                      </Link>
                    </div>
                    <div className="content">
                      <h6 className="title"><Link href="/tour-details">{title}</Link></h6>
                      <ul className="meta-content">
                        <li><i className="fa-light fa-location-dot"></i> {location}</li>
                        <li><i className="fa-light fa-clock"></i> {duration}</li>
                      </ul>
                      <div className="star-rating-area">
                        <ul className="stars">
                          {[0, 1, 2, 3].map((star) => <li key={star}><a href="#"><i className="fa-solid fa-star"></i></a></li>)}
                          <li><a href="#"><i className="fa-regular fa-star"></i></a></li>
                        </ul>
                        <p className="desc">(4.8/5 from 120 reviews)</p>
                      </div>
                      <div className="button-area">
                        <Link href="/tour-details" className="rts-btn btn-primary">View Details</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="swiper-nav-pag-area">
            <div className="swiper-pagination3"></div>
            <div className="swiper-navigation">
              <div className="swiper-btn swiper-btn-prev3"><i className="fa-regular fa-chevron-left"></i></div>
              <div className="swiper-btn swiper-btn-next3"><i className="fa-regular fa-chevron-right"></i></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
