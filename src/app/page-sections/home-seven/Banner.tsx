import Link from "next/link";

const images = [
  "/assets/images/banner/bg-12.webp",
  "/assets/images/banner/bg-13.webp",
  "/assets/images/banner/bg-14.webp",
  "/assets/images/banner/bg-17.webp",
];

export default function Banner() {
  return (
    <div className="rts-banner-area-seven overflow-hidden">
      <div className="swiper banner-slider-active4 slider-drag-wrap">
        <div className="swiper-wrapper">
          {images.map(image => (
            <div key={image} className="swiper-slide">
              <div className="banner-wrapper">
                <div className="image-area">
                  <img src={image} alt="" />
                </div>
                <div className="content-area">
                  <p className="pre-title">Discover the World Without Limits</p>
                  <h2 className="banner-title">Escape to <span>Your Perfect</span> Summer!</h2>
                  <p className="desc">
                    Discover the joy of summer like never before! Whether you&apos;re dreaming of sunny beaches, mountain escapes.
                  </p>
                  <Link href="/contact" className="rts-btn btn-primary with-arrow">
                    Book Now <i className="fa-regular fa-arrow-up up-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="swiper-scrollbar" />
    </div>
  );
}
