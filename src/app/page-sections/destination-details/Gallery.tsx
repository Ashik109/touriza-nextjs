export default function Gallery() {
  return (
  <section className="rts-gallery-area rts-section-gap">
    <div className="container">
      <div className="section-top-area d-flex align-items-end justify-content-between">
        <div className="section-title-area" data-aos="fade-right" data-aos-delay="200">
          <p className="sub-title">
            Gallery
          </p>
          <h2 className="section-title mb-0">
            Experience Through Images
          </h2>
          <p className="desc">
            Discover some of our finest work captured through visuals
          </p>
        </div>
        <div className="right-btn-area" data-aos="fade-left" data-aos-delay="200">
          <div className="swiper-btn swiper-btn-prev4 radius-6">
            <i className="fa-regular fa-chevron-left"></i>
          </div>
          <div className="swiper-btn swiper-btn-next4 radius-6">
            <i className="fa-regular fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div className="section-inner mt--60" data-aos="fade-up" data-aos-delay="200">
      <div className="swiper gallery-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="gallery-wrapper image-transform radius-10">
              <a href="assets/images/gallery/01.webp" className="gallery-image">
                <img className="hover-image" src="/assets/images/gallery/01.webp" width="410" alt="" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-wrapper image-transform radius-10">
              <a href="assets/images/gallery/02.webp" className="gallery-image">
                <img className="hover-image" src="/assets/images/gallery/02.webp" width="410" alt="" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-wrapper image-transform radius-10">
              <a href="assets/images/gallery/03.webp" className="gallery-image">
                <img className="hover-image" src="/assets/images/gallery/03.webp" width="300" alt="" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-wrapper image-transform radius-10">
              <a href="assets/images/gallery/04.webp" className="gallery-image">
                <img className="hover-image" src="/assets/images/gallery/04.webp" width="520" alt="" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-wrapper image-transform radius-10">
              <a href="assets/images/gallery/05.webp" className="gallery-image">
                <img className="hover-image" src="/assets/images/gallery/05.webp" width="410" alt="" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-wrapper image-transform radius-10">
              <a href="assets/images/gallery/01.webp" className="gallery-image">
                <img className="hover-image" src="/assets/images/gallery/01.webp" width="410" alt="" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-wrapper image-transform radius-10">
              <a href="assets/images/gallery/02.webp" className="gallery-image">
                <img className="hover-image" src="/assets/images/gallery/02.webp" width="410" alt="" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-wrapper image-transform radius-10">
              <a href="assets/images/gallery/03.webp" className="gallery-image">
                <img className="hover-image" src="/assets/images/gallery/03.webp" width="300" alt="" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-wrapper image-transform radius-10">
              <a href="assets/images/gallery/04.webp" className="gallery-image">
                <img className="hover-image" src="/assets/images/gallery/04.webp" width="520" alt="" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-wrapper image-transform radius-10">
              <a href="assets/images/gallery/05.webp" className="gallery-image">
                <img className="hover-image" src="/assets/images/gallery/05.webp" width="410" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
