import Link from "next/link";
import type { CSSProperties } from "react";

export default function Banner() {
  return (
  <div className="rts-banner-area-four" data-bg-src="/assets/images/banner/bg-10.webp" style={{ "backgroundImage": "url('/assets/images/banner/bg-10.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}>
    <div className="container">
      <div className="rts-banner-wrapper">
        <h1 className="title move-right">
           ADVENTURE 
        </h1>
        <div className="video-content-area" data-aos="fade-up" data-aos-delay="400">
          <div className="vedio-icone">
            <a className="video-play-button play-video popup-video" href="https://www.youtube.com/watch?v=vZE0j_WCRvI">
              <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25 18.0001C1.05109 18.0001 0.860322 17.921 0.71967 17.7804C0.579018 17.6397 0.5 17.449 0.5 17.2501V0.750056C0.49999 0.619719 0.533947 0.49163 0.598521 0.378415C0.663096 0.2652 0.75606 0.170767 0.868249 0.104426C0.980438 0.0380846 1.10798 0.00212461 1.2383 9.12923e-05C1.36862 -0.00194202 1.49722 0.0300215 1.61143 0.0928306L16.6114 8.34283C16.7291 8.40755 16.8273 8.50267 16.8956 8.61827C16.964 8.73388 17 8.86572 17 9.00002C17 9.13432 16.964 9.26616 16.8956 9.38176C16.8273 9.49736 16.7291 9.59249 16.6114 9.65721L1.61143 17.9072C1.50069 17.9681 1.37637 18 1.25 18.0001Z" fill="white"></path>
              </svg>
            </a>
            <div className="video-overlay">
              <a href="#section1" className="video-overlay-close">
                ×
              </a>
            </div>
          </div>
          <p className="desc">
            Discover nature’s beauty through immersive journeys into untamed lands. From dense rainforests to open savannahs.
          </p>
          <Link href="/tour" className="rts-btn btn-primary">
            View Tour
          </Link>
        </div>
      </div>
    </div>
    <div className="banner-hero">
      <img className="" src="/assets/images/banner/hero-01.webp" width="411" alt="" data-aos="zoom-in" data-aos-delay="1200" />
    </div>
    <a href="#advance_search" className="jump-to-down">
      <img src="/assets/images/banner/icon/mouse.svg" alt="" />
    </a>
    <div className="social-area">
      <ul>
        <li>
           Follow Us - 
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
  );
}
