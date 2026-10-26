export default function Testimonials() {
  return (
  <section className="rts-testimonials-area rts-section-gap">
    <div className="container">
      <div className="section-title-area center-style">
        <p className="sub-title" data-aos="fade-up" data-aos-delay="200">
          Testimonials
        </p>
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="400">
          What Our Travelers Say
        </h2>
        <p className="desc" data-aos="fade-up" data-aos-delay="600">
          Hear from our happy travelers around the world.
        </p>
      </div>
      <div className="section-inner mt--60">
        <div className="swiper testimonials-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonials-wrapper-four radius-10 body-bg-five">
                <div className="image-area" data-aos="zoom-in" data-aos-delay="200">
                  <img className="radius-6" src="/assets/images/testimonials/01.webp" width="353" alt="" />
                </div>
                <div className="content-area">
                  <div className="quote">
                    <img src="/assets/images/testimonials/quote.svg" alt="" />
                  </div>
                  <p className="text text-uppercase">
                    Absolutely incredible experience! We explored Bali stress-free, thanks to the amazing team at Travelex.
                  </p>
                  <div className="author">
                    <h5 className="text-uppercase">
                      Sarah M
                    </h5>
                    <p>
                      Sydney, Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonials-wrapper-four radius-10 body-bg-five">
                <div className="image-area">
                  <img className="radius-6" src="/assets/images/testimonials/01.webp" width="353" alt="" />
                </div>
                <div className="content-area">
                  <div className="quote">
                    <img src="/assets/images/testimonials/quote.svg" alt="" />
                  </div>
                  <p className="text text-uppercase">
                    Absolutely incredible experience! We explored Bali stress-free, thanks to the amazing team at Travelex.
                  </p>
                  <div className="author">
                    <h5 className="text-uppercase">
                      Sarah M
                    </h5>
                    <p>
                      Sydney, Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-navigation">
          <div className="swiper-btn swiper-btn-prev5 radius-6">
            <i className="fa-regular fa-chevron-left"></i>
          </div>
          <div className="swiper-btn swiper-btn-next5 radius-6">
            <i className="fa-regular fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
