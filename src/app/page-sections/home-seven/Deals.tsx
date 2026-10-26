import Link from "next/link";

export default function Deals() {
  return (
  <section className="rts-tour-deal-area rts-section-gap">
    <div className="container">
      <div className="section-top-area d-flex align-items-end justify-content-between">
        <div className="section-title-area" data-aos="fade-right" data-aos-delay="200">
          <p className="sub-title c-p d-flex align-items-center gap-2">
            <img src="/assets/images/banner/icon/04.svg" alt="" />
            Tours Deal
          </p>
          <h2 className="section-title f-medium">
            New Tours
          </h2>
        </div>
        <div className="button-area">
          <Link href="/tour" className="rts-btn btn-primary btn-border border-primary with-arrow">
             View All 
            <i className="fa-regular fa-arrow-up up-right"></i>
          </Link>
        </div>
      </div>
      <div className="section-inner mt--60">
        <div className="row g-5">
          <div className="col-xl-4">
            <div className="left-area">
              <div className="offer-wrapper new overflow-hidden radius-10" data-aos="fade-left" data-aos-delay="200">
                <div className="image-area">
                  <img src="/assets/images/offer/10.webp" alt="" />
                </div>
                <div className="content">
                  <p className="sub-title">
                    Summer Vacation
                  </p>
                  <h4 className="title">
                    Get Flat 30% Off on 
                    <span>
                      Summer Vacation
                    </span>
                     Packages!
                  </h4>
                  <p className="desc">
                    Now and save big on top destinations beaches. Limited-time offer only!
                  </p>
                  <Link href="/contact" className="rts-btn btn-primary with-arrow">
                    Book Now 
                    <i className="fa-regular fa-arrow-up up-right"></i>
                  </Link>
                </div>
              </div>
              <div className="count-down-area body-bg-one mt--30">
                <p className="sub-title">
                  Offer Countdown
                </p>
                <h4 className="title">
                  Limited Time Summer Escape Offer Save 
                  <span>
                    Up to 30%!
                  </span>
                </h4>
                <div className="countdown">
                  <div className="countDown">
                    10/12/2025 10:20:00
                  </div>
                </div>
                <Link href="/contact" className="rts-btn btn-primary with-arrow">
                  Grab The Deal Now 
                  <i className="fa-regular fa-arrow-up up-right"></i>
                </Link>
                <p className="desc">
                  Timer should auto-decrease in real-time
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="right-area">
              <div className="row g-5">
                <div className="col-lg-6">
                  <div className="package-wrapper5 radius-10 image-transform">
                    <div className="image-area image-transform">
                      <Link href="/tour/ultimate-tropical-paradise-escape-relax-refresh-reimagine">
                        <img className="hover-image" src="/assets/images/package/23.webp" alt="" />
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
                      <h5 className="title">
                        <Link href="/tour/ultimate-tropical-paradise-escape-relax-refresh-reimagine">
                          Ultimate Tropical Paradise Escape Relax. Refresh. Reimagine.
                        </Link>
                      </h5>
                      <p className="desc">
                        Step into an untouched paradise where nature thrives without human interruption.
                      </p>
                      <div className="bottom-meta">
                        <div className="star-rating-area">
                          <span>
                            <img src="/assets/images/package/icon/star-4.svg" alt="" />
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
                <div className="col-lg-6">
                  <div className="package-wrapper5 radius-10 image-transform">
                    <div className="image-area image-transform">
                      <Link href="/tour/the-luxury-island-hopper-experience-3-exotic-islands">
                        <img className="hover-image" src="/assets/images/package/25.webp" alt="" />
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
                      <h5 className="title">
                        <Link href="/tour/the-luxury-island-hopper-experience-3-exotic-islands">
                          The Luxury Island Hopper Experience 3 Exotic Islands.
                        </Link>
                      </h5>
                      <p className="desc">
                        Step into an untouched paradise where nature thrives without human interruption.
                      </p>
                      <div className="bottom-meta">
                        <div className="star-rating-area">
                          <span>
                            <img src="/assets/images/package/icon/star-4.svg" alt="" />
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
                <div className="col-lg-6">
                  <div className="package-wrapper5 radius-10 image-transform">
                    <div className="image-area image-transform">
                      <Link href="/tour/breathe-in-the-wild-a-majestic-mountain-retreat-to-recharge">
                        <img className="hover-image" src="/assets/images/package/24.webp" alt="" />
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
                      <h5 className="title">
                        <Link href="/tour/breathe-in-the-wild-a-majestic-mountain-retreat-to-recharge">
                          Breathe in the Wild A Majestic Mountain Retreat to Recharge.
                        </Link>
                      </h5>
                      <p className="desc">
                        Step into an untouched paradise where nature thrives without human interruption.
                      </p>
                      <div className="bottom-meta">
                        <div className="star-rating-area">
                          <span>
                            <img src="/assets/images/package/icon/star-4.svg" alt="" />
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
                <div className="col-lg-6">
                  <div className="package-wrapper5 radius-10 image-transform">
                    <div className="image-area image-transform">
                      <Link href="/tour/tropical-wave-rush-an-unforgettable-surfing-adventure">
                        <img className="hover-image" src="/assets/images/package/26.webp" alt="" />
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
                      <h5 className="title">
                        <Link href="/tour/tropical-wave-rush-an-unforgettable-surfing-adventure">
                          Tropical Wave Rush – An Unforgettable Surfing Adventure
                        </Link>
                      </h5>
                      <p className="desc">
                        Step into an untouched paradise where nature thrives without human interruption.
                      </p>
                      <div className="bottom-meta">
                        <div className="star-rating-area">
                          <span>
                            <img src="/assets/images/package/icon/star-4.svg" alt="" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
