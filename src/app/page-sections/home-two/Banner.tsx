import Link from "next/link";
import type { CSSProperties } from "react";

export default function Banner() {
  return (
  <div className="rts-banner-area-two slider-banner">
    <div className="swiper-area">
      <div className="swiper banner-slider-active">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="rts-hero-banner bg" data-bg-src="/assets/images/banner/bg-04.webp" style={{ "backgroundImage": "url('/assets/images/banner/bg-04.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}></div>
          </div>
          <div className="swiper-slide">
            <div className="rts-hero-banner bg" data-bg-src="/assets/images/banner/bg-05.webp" style={{ "backgroundImage": "url('/assets/images/banner/bg-05.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}></div>
          </div>
          <div className="swiper-slide">
            <div className="rts-hero-banner bg" data-bg-src="/assets/images/banner/bg-06.webp" style={{ "backgroundImage": "url('/assets/images/banner/bg-06.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}></div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="rts-banner-content-area">
        <div className="row">
          <div className="col-lg-7">
            <div className="swiper banner-slider-active2">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="content-inner">
                    <p className="sub-title">
                      Travel Smart, Travel Better
                    </p>
                    <h1 className="section-title">
                      Adventure Starts Here
                    </h1>
                    <p className="desc">
                      Explore breathtaking destinations, handpicked tour packages, and seamless travel experiences — all in one place.
                    </p>
                    <div className="button-area">
                      <a href="#" className="rts-btn btn-primary">
                        Explore Tours
                      </a>
                      <Link href="/tour" className="rts-btn btn-primary btn-border">
                        Popular Tour
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="content-inner">
                    <p className="sub-title">
                      Travel Smart, Travel Better
                    </p>
                    <h1 className="section-title">
                      Adventure Starts Here
                    </h1>
                    <p className="desc">
                      Explore breathtaking destinations, handpicked tour packages, and seamless travel experiences — all in one place.
                    </p>
                    <div className="button-area">
                      <a href="#" className="rts-btn btn-primary">
                        Explore Tours
                      </a>
                      <Link href="/tour" className="rts-btn btn-primary btn-border">
                        Popular Tour
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
  );
}
