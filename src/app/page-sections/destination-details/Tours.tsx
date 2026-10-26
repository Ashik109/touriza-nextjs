import Link from "next/link";

export default function Tours() {
  return (
  <section className="rts-tour-area rts-section-gap body-bg-one">
    <div className="container">
      <div className="section-title-area center-style">
        <p className="sub-title" data-aos="fade-up" data-aos-delay="100">
          Featured Tours
        </p>
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="200">
          Discover Extraordinary 
          <br />
           Seasonal Specials
        </h2>
      </div>
      <div className="section-inner mt--60 position-relative pb--80" data-aos="fade-up" data-aos-delay="200">
        <div className="swiper tour-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="tour-wrapper radius-10 image-transform">
                <div className="image-area radius-6">
                  <Link href="/tour/7-days-in-bali-paradise">
                    <img className="hover-image" src="/assets/images/trip/05.webp" alt="" />
                    <span className="tag">
                      $499/person
                    </span>
                  </Link>
                </div>
                <div className="content">
                  <h6 className="title">
                    <Link href="/tour/7-days-in-bali-paradise">
                      7 Days in Bali Paradise
                    </Link>
                  </h6>
                  <ul className="meta-content">
                    <li>
                      <i className="fa-light fa-location-dot"></i>
                       Indonesia
                    </li>
                    <li>
                      <i className="fa-light fa-clock"></i>
                       7 Days/6 Nights
                    </li>
                  </ul>
                  <div className="star-rating-area">
                    <ul className="stars">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-star"></i>
                        </a>
                      </li>
                    </ul>
                    <p className="desc">
                      (4.8/5 from 120 reviews)
                    </p>
                  </div>
                  <div className="button-area">
                    <Link href="/tour/7-days-in-bali-paradise" className="rts-btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tour-wrapper radius-10 image-transform">
                <div className="image-area radius-6">
                  <Link href="/tour/luxury-beach-escape">
                    <img className="hover-image" src="/assets/images/trip/06.webp" alt="" />
                    <span className="tag">
                      $799/person
                    </span>
                  </Link>
                </div>
                <div className="content">
                  <h6 className="title">
                    <Link href="/tour/luxury-beach-escape">
                      Luxury Beach Escape
                    </Link>
                  </h6>
                  <ul className="meta-content">
                    <li>
                      <i className="fa-light fa-location-dot"></i>
                       Maldives
                    </li>
                    <li>
                      <i className="fa-light fa-clock"></i>
                       5 Days/4 Nights
                    </li>
                  </ul>
                  <div className="star-rating-area">
                    <ul className="stars">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-star"></i>
                        </a>
                      </li>
                    </ul>
                    <p className="desc">
                      (4.8/5 from 120 reviews)
                    </p>
                  </div>
                  <div className="button-area">
                    <Link href="/tour/luxury-beach-escape" className="rts-btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tour-wrapper radius-10 image-transform">
                <div className="image-area radius-6">
                  <Link href="/tour/himalayan-cultural-tour">
                    <img className="hover-image" src="/assets/images/trip/07.webp" alt="" />
                    <span className="tag">
                      $420/person
                    </span>
                  </Link>
                </div>
                <div className="content">
                  <h6 className="title">
                    <Link href="/tour/himalayan-cultural-tour">
                      Himalayan Cultural Tour
                    </Link>
                  </h6>
                  <ul className="meta-content">
                    <li>
                      <i className="fa-light fa-location-dot"></i>
                       Nepal
                    </li>
                    <li>
                      <i className="fa-light fa-clock"></i>
                       4 Days/3 Nights
                    </li>
                  </ul>
                  <div className="star-rating-area">
                    <ul className="stars">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-star"></i>
                        </a>
                      </li>
                    </ul>
                    <p className="desc">
                      (4.8/5 from 120 reviews)
                    </p>
                  </div>
                  <div className="button-area">
                    <Link href="/tour/himalayan-cultural-tour" className="rts-btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tour-wrapper radius-10 image-transform">
                <div className="image-area radius-6">
                  <Link href="/tour/white-walls-of-santorini">
                    <img className="hover-image" src="/assets/images/trip/08.webp" alt="" />
                    <span className="tag">
                      $1,250/person
                    </span>
                  </Link>
                </div>
                <div className="content">
                  <h6 className="title">
                    <Link href="/tour/white-walls-of-santorini">
                      White Walls of Santorini
                    </Link>
                  </h6>
                  <ul className="meta-content">
                    <li>
                      <i className="fa-light fa-location-dot"></i>
                       Greece
                    </li>
                    <li>
                      <i className="fa-light fa-clock"></i>
                       6 Days / 5 Nights
                    </li>
                  </ul>
                  <div className="star-rating-area">
                    <ul className="stars">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-star"></i>
                        </a>
                      </li>
                    </ul>
                    <p className="desc">
                      (4.8/5 from 120 reviews)
                    </p>
                  </div>
                  <div className="button-area">
                    <Link href="/tour/white-walls-of-santorini" className="rts-btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tour-wrapper radius-10 image-transform">
                <div className="image-area radius-6">
                  <Link href="/tour/luxury-beach-escape">
                    <img className="hover-image" src="/assets/images/trip/06.webp" alt="" />
                    <span className="tag">
                      $799/person
                    </span>
                  </Link>
                </div>
                <div className="content">
                  <h6 className="title">
                    <Link href="/tour/luxury-beach-escape">
                      Luxury Beach Escape
                    </Link>
                  </h6>
                  <ul className="meta-content">
                    <li>
                      <i className="fa-light fa-location-dot"></i>
                       Maldives
                    </li>
                    <li>
                      <i className="fa-light fa-clock"></i>
                       5 Days/4 Nights
                    </li>
                  </ul>
                  <div className="star-rating-area">
                    <ul className="stars">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-star"></i>
                        </a>
                      </li>
                    </ul>
                    <p className="desc">
                      (4.8/5 from 120 reviews)
                    </p>
                  </div>
                  <div className="button-area">
                    <Link href="/tour/luxury-beach-escape" className="rts-btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tour-wrapper radius-10 image-transform">
                <div className="image-area radius-6">
                  <Link href="/tour/himalayan-cultural-tour">
                    <img className="hover-image" src="/assets/images/trip/07.webp" alt="" />
                    <span className="tag">
                      $420/person
                    </span>
                  </Link>
                </div>
                <div className="content">
                  <h6 className="title">
                    <Link href="/tour/himalayan-cultural-tour">
                      Himalayan Cultural Tour
                    </Link>
                  </h6>
                  <ul className="meta-content">
                    <li>
                      <i className="fa-light fa-location-dot"></i>
                       Nepal
                    </li>
                    <li>
                      <i className="fa-light fa-clock"></i>
                       4 Days/3 Nights
                    </li>
                  </ul>
                  <div className="star-rating-area">
                    <ul className="stars">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-star"></i>
                        </a>
                      </li>
                    </ul>
                    <p className="desc">
                      (4.8/5 from 120 reviews)
                    </p>
                  </div>
                  <div className="button-area">
                    <Link href="/tour/himalayan-cultural-tour" className="rts-btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tour-wrapper radius-10 image-transform">
                <div className="image-area radius-6">
                  <Link href="/tour/white-walls-of-santorini">
                    <img className="hover-image" src="/assets/images/trip/08.webp" alt="" />
                    <span className="tag">
                      $1,250/person
                    </span>
                  </Link>
                </div>
                <div className="content">
                  <h6 className="title">
                    <Link href="/tour/white-walls-of-santorini">
                      White Walls of Santorini
                    </Link>
                  </h6>
                  <ul className="meta-content">
                    <li>
                      <i className="fa-light fa-location-dot"></i>
                       Greece
                    </li>
                    <li>
                      <i className="fa-light fa-clock"></i>
                       6 Days / 5 Nights
                    </li>
                  </ul>
                  <div className="star-rating-area">
                    <ul className="stars">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-star"></i>
                        </a>
                      </li>
                    </ul>
                    <p className="desc">
                      (4.8/5 from 120 reviews)
                    </p>
                  </div>
                  <div className="button-area">
                    <Link href="/tour/white-walls-of-santorini" className="rts-btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-nav-pag-area">
          <div className="swiper-pagination3"></div>
          <div className="swiper-navigation">
            <div className="swiper-btn swiper-btn-prev3">
              <i className="fa-regular fa-chevron-left"></i>
            </div>
            <div className="swiper-btn swiper-btn-next3">
              <i className="fa-regular fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
