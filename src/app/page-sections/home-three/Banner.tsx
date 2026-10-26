import Link from "next/link";
import type { CSSProperties } from "react";

export default function Banner() {
  return (
  <div className="rts-banner-area-three slider-banner radius-10">
    <div className="swiper-area">
      <div className="swiper banner-slider-active3">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="rts-hero-banner bg" data-bg-src="/assets/images/banner/bg-07.webp" style={{ "backgroundImage": "url('/assets/images/banner/bg-07.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}>
              <div className="custom-container">
                <div className="section-inner">
                  <div className="row">
                    <div className="col-xl-7 col-lg-8 col-md-10">
                      <div className="content-inner">
                        <p className="sub-title">
                          <img src="/assets/images/banner/icon/01.svg" alt="" />
                          dream yacht trip today
                        </p>
                        <h1 className="section-title">
                          Unwind in Oceanic Luxury &amp; Adventure
                        </h1>
                        <div className="button-area">
                          <Link href="/contact" className="rts-btn btn-primary with-arrow">
                            Book Now 
                            <i className="fa-regular fa-arrow-up up-right"></i>
                          </Link>
                          <Link href="/about" className="rts-btn btn-primary with-arrow btn-border">
                            Explore Yachts 
                            <i className="fa-regular fa-arrow-up up-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="rts-hero-banner bg" data-bg-src="/assets/images/banner/bg-08.webp" style={{ "backgroundImage": "url('/assets/images/banner/bg-08.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}>
              <div className="custom-container">
                <div className="section-inner">
                  <div className="row">
                    <div className="col-xl-7 col-lg-8 col-md-10">
                      <div className="content-inner">
                        <p className="sub-title">
                          <img src="/assets/images/banner/icon/01.svg" alt="" />
                           dream yacht trip today
                        </p>
                        <h1 className="section-title">
                          Unwind in Oceanic Luxury &amp; Adventure
                        </h1>
                        <div className="button-area">
                          <Link href="/contact" className="rts-btn btn-primary with-arrow">
                            Book Now 
                            <i className="fa-regular fa-arrow-up up-right"></i>
                          </Link>
                          <Link href="/about" className="rts-btn btn-primary with-arrow btn-border">
                            Explore Yachts 
                            <i className="fa-regular fa-arrow-up up-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="rts-hero-banner bg" data-bg-src="/assets/images/banner/bg-09.webp" style={{ "backgroundImage": "url('/assets/images/banner/bg-09.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}>
              <div className="custom-container">
                <div className="section-inner">
                  <div className="row">
                    <div className="col-xl-7 col-lg-8 col-md-10">
                      <div className="content-inner">
                        <p className="sub-title">
                          <img src="/assets/images/banner/icon/01.svg" alt="" />
                           dream yacht trip today
                        </p>
                        <h1 className="section-title">
                          Unwind in Oceanic Luxury &amp; Adventure
                        </h1>
                        <div className="button-area">
                          <Link href="/contact" className="rts-btn btn-primary with-arrow">
                            Book Now 
                            <i className="fa-regular fa-arrow-up up-right"></i>
                          </Link>
                          <Link href="/about" className="rts-btn btn-primary with-arrow btn-border">
                            Explore Yachts 
                            <i className="fa-regular fa-arrow-up up-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper-pagination-vertical"></div>
    <div className="swiper-pagination-fraction">
      <span className="current">
        01
      </span>
      <span className="divider"></span>
      <span className="total">
        05
      </span>
    </div>
  </div>
  );
}
