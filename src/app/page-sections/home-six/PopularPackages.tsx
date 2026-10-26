import Link from "next/link";

export default function PopularPackages() {
  return (
  <section className="rts-popular-package-area rts-section-gap body-bg-one">
    <div className="container">
      <div className="section-top-area d-flex align-items-end justify-content-between">
        <div className="section-title-area" data-aos="fade-right" data-aos-delay="200">
          <h2 className="section-title mb-0 text-uppercase">
            Popular Tour Packages
          </h2>
        </div>
        <div className="button-area mb--15" data-aos="fade-left" data-aos-delay="200">
          <Link href="/contact" className="rts-btn text-btn with-arrow border-bottom-p radius-0 pb--10">
            Book Now 
            <i className="fa-regular fa-arrow-up up-right"></i>
          </Link>
        </div>
      </div>
      <div className="section-inner position-relative mt--60" data-aos="fade-up" data-aos-delay="200">
        <div className="main-isotop">
          <div className="button-group filters-button-group">
            <button className="button is-checked" data-filter="*">
              <img src="/assets/images/package/icon/01.svg" alt="" />
              For All
            </button>
            <button className="button" data-filter=".weekend">
              <img src="/assets/images/package/icon/02.svg" alt="" />
              Weekend 
            </button>
            <button className="button" data-filter=".hiking">
              <img src="/assets/images/package/icon/03.svg" alt="" />
              Hiking
            </button>
            <button className="button" data-filter=".car-camp">
              <img src="/assets/images/package/icon/04.svg" alt="" />
              Car Camp
            </button>
            <button className="button" data-filter=".yacht">
              <img src="/assets/images/package/icon/05.svg" alt="" />
              Yacht
            </button>
            <button className="button" data-filter=".couple">
              <img src="/assets/images/package/icon/06.svg" alt="" />
              Couple
            </button>
            <button className="button" data-filter=".multi-city">
              <img src="/assets/images/package/icon/07.svg" alt="" />
              Multi City
            </button>
            <button className="button" data-filter=".beach">
              <img src="/assets/images/package/icon/08.svg" alt="" />
              Beach
            </button>
            <button className="button" data-filter=".safari">
              <img src="/assets/images/package/icon/09.svg" alt="" />
              Safari
            </button>
            <button className="button" data-filter=".kayaking">
              <img src="/assets/images/package/icon/10.svg" alt="" />
              Kayaking
            </button>
          </div>
          <div className="portfolio_wrap">
            <div className="filter row g-5 portfolio-feed personal">
              <div className="flash grid-item-p element-item transition weekend couple beach col-xl-3 col-lg-4 col-md-6 col-sm-6" data-category="transition">
                <div className="package-wrapper4 radius-10 image-transform">
                  <div className="image-area image-transform">
                    <Link href="/tour/perfect-for-quick-nature-breaks">
                      <img className="hover-image" src="/assets/images/package/15.webp" alt="" />
                    </Link>
                  </div>
                  <a href="#" className="wishlist">
                    <i className="fa-light fa-heart"></i>
                  </a>
                  <div className="content">
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
                    <h5 className="title text-uppercase">
                      <Link className="f-p" href="/tour/perfect-for-quick-nature-breaks">
                        Perfect for quick nature breaks
                      </Link>
                    </h5>
                    <p className="desc">
                      Descend to Africa’s lowest point witness and bright blue.
                    </p>
                    <div className="bottom-meta">
                      <div className="star-rating-area">
                        <span>
                          <img src="/assets/images/package/icon/star-3.svg" alt="" />
                        </span>
                        <span>
                          5 (2 review)
                        </span>
                      </div>
                      <p className="price">
                        <span>
                          $1,499
                        </span>
                        <span className="previous">
                          $1799
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flash grid-item-p element-item transition hiking kayaking multi-city col-xl-3 col-lg-4 col-md-6 col-sm-6" data-category="transition">
                <div className="package-wrapper4 radius-10 image-transform">
                  <div className="image-area image-transform">
                    <Link href="/tour/luxury-beach-escape-collection">
                      <img className="hover-image" src="/assets/images/package/16.webp" alt="" />
                    </Link>
                  </div>
                  <a href="#" className="wishlist">
                    <i className="fa-light fa-heart"></i>
                  </a>
                  <div className="content">
                    <ul className="meta-content">
                      <li>
                        <i className="fa-light fa-location-dot"></i>
                         Thailand
                      </li>
                      <li>
                        <i className="fa-light fa-clock"></i>
                         7 Days/6 Nights
                      </li>
                    </ul>
                    <h5 className="title text-uppercase">
                      <Link className="f-p" href="/tour/luxury-beach-escape-collection">
                        Luxury Beach Escape Collection
                      </Link>
                    </h5>
                    <p className="desc">
                      Descend to Africa’s lowest point witness and bright blue.
                    </p>
                    <div className="bottom-meta">
                      <div className="star-rating-area">
                        <span>
                          <img src="/assets/images/package/icon/star-3.svg" alt="" />
                        </span>
                        <span>
                          5 (2 review)
                        </span>
                      </div>
                      <p className="price">
                        <span>
                          $1,499
                        </span>
                        <span className="previous">
                          $1799
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flash grid-item-p element-item transition car-camp beach col-xl-3 col-lg-4 col-md-6 col-sm-6" data-category="transition">
                <div className="package-wrapper4 radius-10 image-transform">
                  <div className="image-area image-transform">
                    <Link href="/tour/himalayan-cultural-experience">
                      <img className="hover-image" src="/assets/images/package/17.webp" alt="" />
                    </Link>
                  </div>
                  <a href="#" className="wishlist">
                    <i className="fa-light fa-heart"></i>
                  </a>
                  <div className="content">
                    <ul className="meta-content">
                      <li>
                        <i className="fa-light fa-location-dot"></i>
                         Nepal
                      </li>
                      <li>
                        <i className="fa-light fa-clock"></i>
                         7 Days/6 Nights
                      </li>
                    </ul>
                    <h5 className="title text-uppercase">
                      <Link className="f-p" href="/tour/himalayan-cultural-experience">
                        Himalayan Cultural Experience
                      </Link>
                    </h5>
                    <p className="desc">
                      Descend to Africa’s lowest point witness and bright blue.
                    </p>
                    <div className="bottom-meta">
                      <div className="star-rating-area">
                        <span>
                          <img src="/assets/images/package/icon/star-3.svg" alt="" />
                        </span>
                        <span>
                          5 (2 review)
                        </span>
                      </div>
                      <p className="price">
                        <span>
                          $1,499
                        </span>
                        <span className="previous">
                          $1799
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flash grid-item-p element-item transition yacht safari col-xl-3 col-lg-4 col-md-6 col-sm-6" data-category="transition">
                <div className="package-wrapper4 radius-10 image-transform">
                  <div className="image-area image-transform">
                    <Link href="/tour/africa-s-hidden-wonders-strange">
                      <img className="hover-image" src="/assets/images/package/18.webp" alt="" />
                    </Link>
                  </div>
                  <a href="#" className="wishlist">
                    <i className="fa-light fa-heart"></i>
                  </a>
                  <div className="content">
                    <ul className="meta-content">
                      <li>
                        <i className="fa-light fa-location-dot"></i>
                         Africa
                      </li>
                      <li>
                        <i className="fa-light fa-clock"></i>
                         7 Days/6 Nights
                      </li>
                    </ul>
                    <h5 className="title text-uppercase">
                      <Link className="f-p" href="/tour/africa-s-hidden-wonders-strange">
                        Africa’s Hidden Wonders Strange
                      </Link>
                    </h5>
                    <p className="desc">
                      Descend to Africa’s lowest point witness and bright blue.
                    </p>
                    <div className="bottom-meta">
                      <div className="star-rating-area">
                        <span>
                          <img src="/assets/images/package/icon/star-3.svg" alt="" />
                        </span>
                        <span>
                          5 (2 review)
                        </span>
                      </div>
                      <p className="price">
                        <span>
                          $1,499
                        </span>
                        <span className="previous">
                          $1799
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flash grid-item-p element-item transition weekend couple kayaking col-xl-3 col-lg-4 col-md-6 col-sm-6" data-category="transition">
                <div className="package-wrapper4 radius-10 image-transform">
                  <div className="image-area image-transform">
                    <Link href="/tour/luxury-beach-escape-experience">
                      <img className="hover-image" src="/assets/images/package/19.webp" alt="" />
                    </Link>
                  </div>
                  <a href="#" className="wishlist">
                    <i className="fa-light fa-heart"></i>
                  </a>
                  <div className="content">
                    <ul className="meta-content">
                      <li>
                        <i className="fa-light fa-location-dot"></i>
                         Maldives
                      </li>
                      <li>
                        <i className="fa-light fa-clock"></i>
                         4 Days/3 Nights
                      </li>
                    </ul>
                    <h5 className="title text-uppercase">
                      <Link className="f-p" href="/tour/luxury-beach-escape-experience">
                        Luxury Beach Escape Experience
                      </Link>
                    </h5>
                    <p className="desc">
                      Descend to Africa’s lowest point witness and bright blue.
                    </p>
                    <div className="bottom-meta">
                      <div className="star-rating-area">
                        <span>
                          <img src="/assets/images/package/icon/star-3.svg" alt="" />
                        </span>
                        <span>
                          5 (2 review)
                        </span>
                      </div>
                      <p className="price">
                        <span>
                          $1,499
                        </span>
                        <span className="previous">
                          $1799
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flash grid-item-p element-item transition hiking multi-city col-xl-3 col-lg-4 col-md-6 col-sm-6" data-category="transition">
                <div className="package-wrapper4 radius-10 image-transform">
                  <div className="image-area image-transform">
                    <Link href="/tour/colors-of-morocco-sahara-souks">
                      <img className="hover-image" src="/assets/images/package/20.webp" alt="" />
                    </Link>
                  </div>
                  <a href="#" className="wishlist">
                    <i className="fa-light fa-heart"></i>
                  </a>
                  <div className="content">
                    <ul className="meta-content">
                      <li>
                        <i className="fa-light fa-location-dot"></i>
                         Morocco
                      </li>
                      <li>
                        <i className="fa-light fa-clock"></i>
                         7 Days/6 Nights
                      </li>
                    </ul>
                    <h5 className="title text-uppercase">
                      <Link className="f-p" href="/tour/colors-of-morocco-sahara-souks">
                        Colors of Morocco Sahara Souks
                      </Link>
                    </h5>
                    <p className="desc">
                      Descend to Africa’s lowest point witness and bright blue.
                    </p>
                    <div className="bottom-meta">
                      <div className="star-rating-area">
                        <span>
                          <img src="/assets/images/package/icon/star-3.svg" alt="" />
                        </span>
                        <span>
                          5 (2 review)
                        </span>
                      </div>
                      <p className="price">
                        <span>
                          $1,499
                        </span>
                        <span className="previous">
                          $1799
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flash grid-item-p element-item transition car-camp beach kayaking col-xl-3 col-lg-4 col-md-6 col-sm-6" data-category="transition">
                <div className="package-wrapper4 radius-10 image-transform">
                  <div className="image-area image-transform">
                    <Link href="/tour/wild-heart-of-africa-kenya-safari">
                      <img className="hover-image" src="/assets/images/package/21.webp" alt="" />
                    </Link>
                  </div>
                  <a href="#" className="wishlist">
                    <i className="fa-light fa-heart"></i>
                  </a>
                  <div className="content">
                    <ul className="meta-content">
                      <li>
                        <i className="fa-light fa-location-dot"></i>
                         Africa
                      </li>
                      <li>
                        <i className="fa-light fa-clock"></i>
                         7 Days/6 Nights
                      </li>
                    </ul>
                    <h5 className="title text-uppercase">
                      <Link className="f-p" href="/tour/wild-heart-of-africa-kenya-safari">
                        Wild Heart of Africa: Kenya Safari
                      </Link>
                    </h5>
                    <p className="desc">
                      Descend to Africa’s lowest point witness and bright blue.
                    </p>
                    <div className="bottom-meta">
                      <div className="star-rating-area">
                        <span>
                          <img src="/assets/images/package/icon/star-3.svg" alt="" />
                        </span>
                        <span>
                          5 (2 review)
                        </span>
                      </div>
                      <p className="price">
                        <span>
                          $1,499
                        </span>
                        <span className="previous">
                          $1799
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flash grid-item-p element-item transition yacht safari col-xl-3 col-lg-4 col-md-6 col-sm-6" data-category="transition">
                <div className="package-wrapper4 radius-10 image-transform">
                  <div className="image-area image-transform">
                    <a href="#">
                      <img className="hover-image" src="/assets/images/package/22.webp" alt="" />
                    </a>
                  </div>
                  <Link href="/tour/greek-island-hopping-sail" className="wishlist">
                    <i className="fa-light fa-heart"></i>
                  </Link>
                  <div className="content">
                    <ul className="meta-content">
                      <li>
                        <i className="fa-light fa-location-dot"></i>
                         Greek
                      </li>
                      <li>
                        <i className="fa-light fa-clock"></i>
                         3 Days/2 Nights
                      </li>
                    </ul>
                    <h5 className="title text-uppercase">
                      <Link className="f-p" href="/tour/greek-island-hopping-sail">
                        Greek Island Hopping Sail 
                      </Link>
                    </h5>
                    <p className="desc">
                      Descend to Africa’s lowest point witness and bright blue.
                    </p>
                    <div className="bottom-meta">
                      <div className="star-rating-area">
                        <span>
                          <img src="/assets/images/package/icon/star-3.svg" alt="" />
                        </span>
                        <span>
                          5 (2 review)
                        </span>
                      </div>
                      <p className="price">
                        <span>
                          $1,499
                        </span>
                        <span className="previous">
                          $1799
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
