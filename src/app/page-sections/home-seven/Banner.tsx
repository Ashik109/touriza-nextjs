import Link from "next/link";

export default function Banner() {
  return (
  <div className="rts-banner-area-seven overflow-hidden">
    <div className="swiper banner-slider-active4 slider-drag-wrap">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="banner-wrapper">
            <div className="image-area">
              <img src="/assets/images/banner/bg-12.webp" alt="" />
            </div>
            <div className="content-area">
              <p className="pre-title">
                Discover the World Without Limits
              </p>
              <h2 className="banner-title">
                 Escape to 
                <span>
                  Your Perfect
                </span>
                 Summer! 
              </h2>
              <p className="desc">
                Discover the joy of summer like never before! Whether you're dreaming of sunny beaches, mountain escapes.
              </p>
              <Link href="/contact" className="rts-btn btn-primary with-arrow">
                Book Now 
                <i className="fa-regular fa-arrow-up up-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="banner-wrapper">
            <div className="image-area">
              <img src="/assets/images/banner/bg-13.webp" alt="" />
            </div>
            <div className="content-area">
              <p className="pre-title">
                Discover the World Without Limits
              </p>
              <h2 className="banner-title">
                 Escape to 
                <span>
                  Your Perfect
                </span>
                 Summer! 
              </h2>
              <p className="desc">
                Discover the joy of summer like never before! Whether you're dreaming of sunny beaches, mountain escapes.
              </p>
              <Link href="/contact" className="rts-btn btn-primary with-arrow">
                Book Now 
                <i className="fa-regular fa-arrow-up up-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="banner-wrapper">
            <div className="image-area">
              <img src="/assets/images/banner/bg-14.webp" alt="" />
            </div>
            <div className="content-area">
              <p className="pre-title">
                Discover the World Without Limits
              </p>
              <h2 className="banner-title">
                 Escape to 
                <span>
                  Your Perfect
                </span>
                 Summer! 
              </h2>
              <p className="desc">
                Discover the joy of summer like never before! Whether you're dreaming of sunny beaches, mountain escapes.
              </p>
              <Link href="/contact" className="rts-btn btn-primary with-arrow">
                Book Now 
                <i className="fa-regular fa-arrow-up up-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper-scrollbar"></div>
  </div>
  );
}
