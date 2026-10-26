import Link from "next/link";

export default function PopularPackages() {
  return (
  <section className="rts-popular-package-area rts-section-gap">
    <div className="container">
      <div className="section-title-area center-style">
        <p className="sub-title d-flex align-items-center justify-content-center gap-2" data-aos="fade-up" data-aos-delay="200">
          <img src="/assets/images/banner/icon/03.svg" alt="" />
          Tour Pack
        </p>
        <h2 className="section-title text-uppercase" data-aos="fade-up" data-aos-delay="400">
          Explore Popular Tours
        </h2>
      </div>
      <div className="section-inner position-relative mt--60">
        <div className="row g-5 pb--50">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="package-wrapper3 radius-10 image-transform" data-aos="fade-right" data-aos-delay="600">
              <div className="image-area image-transform">
                <Link href="/tour/discover-the-mysteries-of-ancient-egypt">
                  <img className="hover-image" src="/assets/images/package/09.webp" alt="" />
                </Link>
              </div>
              <a href="#" className="wishlist">
                <i className="fa-light fa-heart"></i>
              </a>
              <div className="content">
                <ul className="meta-content">
                  <li>
                    <i className="fa-light fa-location-dot"></i>
                     Egypt
                  </li>
                  <li>
                    <i className="fa-light fa-clock"></i>
                     3 Days - 2 Nights
                  </li>
                </ul>
                <h5 className="title text-uppercase">
                  <Link href="/tour/discover-the-mysteries-of-ancient-egypt">
                    Discover the Mysteries of Ancient Egypt
                  </Link>
                </h5>
                <p className="desc">
                  Step into an untouched paradise where nature thrives without human interruption.
                </p>
                <div className="bottom-meta">
                  <div className="star-rating-area">
                    <span>
                      <img src="/assets/images/package/icon/star-2.svg" alt="" />
                    </span>
                    <span>
                      5 of 1 review
                    </span>
                  </div>
                  <p className="price">
                    From $1,499
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="package-wrapper3 radius-10 image-transform" data-aos="fade-right" data-aos-delay="400">
              <div className="image-area image-transform">
                <Link href="/tour/wild-heart-of-africa-kenya-safari-tour">
                  <img className="hover-image" src="/assets/images/package/10.webp" alt="" />
                </Link>
              </div>
              <a href="#" className="wishlist">
                <i className="fa-light fa-heart"></i>
              </a>
              <div className="content">
                <ul className="meta-content">
                  <li>
                    <i className="fa-light fa-location-dot"></i>
                     Kenya
                  </li>
                  <li>
                    <i className="fa-light fa-clock"></i>
                     5 Days - 4 Nights
                  </li>
                </ul>
                <h5 className="title text-uppercase">
                  <Link href="/tour/wild-heart-of-africa-kenya-safari-tour">
                    Wild Heart of Africa: Kenya Safari Tour
                  </Link>
                </h5>
                <p className="desc">
                  Venture into one of the hottest and most surreal places on Earth where bubbling lava
                </p>
                <div className="bottom-meta">
                  <div className="star-rating-area">
                    <span>
                      <img src="/assets/images/package/icon/star-2.svg" alt="" />
                    </span>
                    <span>
                      5 of 1 review
                    </span>
                  </div>
                  <p className="price">
                    From $1,499
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="package-wrapper3 radius-10 image-transform" data-aos="fade-right" data-aos-delay="200">
              <div className="image-area image-transform">
                <Link href="/tour/colors-of-morocco-sahara-to-souks">
                  <img className="hover-image" src="/assets/images/package/11.webp" alt="" />
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
                     8 Days - 7 Nights
                  </li>
                </ul>
                <h5 className="title text-uppercase">
                  <Link href="/tour/colors-of-morocco-sahara-to-souks">
                    Colors of Morocco: Sahara to Souks
                  </Link>
                </h5>
                <p className="desc">
                  Discover nature’s beauty through immersive journeys into untamed lands.
                </p>
                <div className="bottom-meta">
                  <div className="star-rating-area">
                    <span>
                      <img src="/assets/images/package/icon/star-2.svg" alt="" />
                    </span>
                    <span>
                      5 of 1 review
                    </span>
                  </div>
                  <p className="price">
                    From $1,499
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="package-wrapper3 radius-10 image-transform" data-aos="fade-left" data-aos-delay="800">
              <div className="image-area image-transform">
                <Link href="/tour/kilimanjaro-and-zanzibar-paradise">
                  <img className="hover-image" src="/assets/images/package/12.webp" alt="" />
                </Link>
              </div>
              <a href="#" className="wishlist">
                <i className="fa-light fa-heart"></i>
              </a>
              <div className="content">
                <ul className="meta-content">
                  <li>
                    <i className="fa-light fa-location-dot"></i>
                     Tanzania
                  </li>
                  <li>
                    <i className="fa-light fa-clock"></i>
                     3 Days - 7 Days
                  </li>
                </ul>
                <h5 className="title text-uppercase">
                  <Link href="/tour/kilimanjaro-and-zanzibar-paradise">
                    Kilimanjaro &amp; Zanzibar Paradise
                  </Link>
                </h5>
                <p className="desc">
                  Travel back in time to a city buried in sand. Visit ancient libraries, explore deserted.
                </p>
                <div className="bottom-meta">
                  <div className="star-rating-area">
                    <span>
                      <img src="/assets/images/package/icon/star-2.svg" alt="" />
                    </span>
                    <span>
                      5 of 1 review
                    </span>
                  </div>
                  <p className="price">
                    From $1,499
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="package-wrapper3 radius-10 image-transform" data-aos="fade-left" data-aos-delay="1000">
              <div className="image-area image-transform">
                <Link href="/tour/cape-to-kruger-the-best-of-south-africa">
                  <img className="hover-image" src="/assets/images/package/13.webp" alt="" />
                </Link>
              </div>
              <a href="#" className="wishlist">
                <i className="fa-light fa-heart"></i>
              </a>
              <div className="content">
                <ul className="meta-content">
                  <li>
                    <i className="fa-light fa-location-dot"></i>
                     South Africa
                  </li>
                  <li>
                    <i className="fa-light fa-clock"></i>
                     6 Days / 5 Nights
                  </li>
                </ul>
                <h5 className="title text-uppercase">
                  <Link href="/tour/cape-to-kruger-the-best-of-south-africa">
                    Cape to Kruger: The Best of South Africa
                  </Link>
                </h5>
                <p className="desc">
                  Roam the quiet Art Deco streets of Asmara, a city frozen in time. With its Italian cafes.
                </p>
                <div className="bottom-meta">
                  <div className="star-rating-area">
                    <span>
                      <img src="/assets/images/package/icon/star-2.svg" alt="" />
                    </span>
                    <span>
                      5 of 1 review
                    </span>
                  </div>
                  <p className="price">
                    From $1,150
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="package-wrapper3 radius-10 image-transform" data-aos="fade-left" data-aos-delay="1200">
              <div className="image-area image-transform">
                <Link href="/tour/africa-s-hidden-wonders-strange-and-beautiful-africa">
                  <img className="hover-image" src="/assets/images/package/14.webp" alt="" />
                </Link>
              </div>
              <a href="#" className="wishlist">
                <i className="fa-light fa-heart"></i>
              </a>
              <div className="content">
                <ul className="meta-content">
                  <li>
                    <i className="fa-light fa-location-dot"></i>
                     Amazon
                  </li>
                  <li>
                    <i className="fa-light fa-clock"></i>
                     3 Days - 7 Days
                  </li>
                </ul>
                <h5 className="title text-uppercase">
                  <Link href="/tour/africa-s-hidden-wonders-strange-and-beautiful-africa">
                    Africa’s Hidden Wonders Strange &amp; Beautiful Africa
                  </Link>
                </h5>
                <p className="desc">
                  Descend to Africa’s lowest point and witness the shimmering salt flats and bright blue.
                </p>
                <div className="bottom-meta">
                  <div className="star-rating-area">
                    <span>
                      <img src="/assets/images/package/icon/star-2.svg" alt="" />
                    </span>
                    <span>
                      5 of 1 review
                    </span>
                  </div>
                  <p className="price">
                    From $1,499
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href="/tour" className="rts-btn btn-border m-auto">
          Explore More
        </Link>
      </div>
    </div>
  </section>
  );
}
