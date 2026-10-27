const bannerImages = [
  "/assets/images/banner/bg-15.webp",
  "/assets/images/banner/bg-16.webp",
  "/assets/images/banner/bg-16.webp",
  "/assets/images/banner/bg-15.webp",
  "/assets/images/banner/bg-16.webp",
  "/assets/images/banner/bg-16.webp",
];

export default function Banner() {
  return (
  <div className="rts-banner-area-seven overflow-hidden">
    <div className="swiper banner-slider-active5 slider-drag-wrap">
      <div className="swiper-wrapper">
        {bannerImages.map((image, index) => (
          <div className="swiper-slide" key={`${image}-${index}`}>
            <div className="banner-wrapper after-none">
              <div className="image-area">
                <img src={image} alt="" style={{ display: "block", width: "100%" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
