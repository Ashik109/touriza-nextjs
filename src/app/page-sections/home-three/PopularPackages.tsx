import Link from "next/link";

export default function PopularPackages() {
  return (
  <section className="rts-popular-package-area rts-section-gap">
    <div className="container">
      <div className="section-top-area d-flex align-items-end justify-content-between">
        <div className="section-title-area" data-aos="fade-right" data-aos-delay="200">
          <p className="sub-title d-flex align-items-center gap-2">
            <img src="/assets/images/banner/icon/02.svg" alt="" />
            Yacht Pack
          </p>
          <h2 className="section-title mb-0 text-uppercase">
            Popular Packages
          </h2>
        </div>
        <div className="button-area mb--15" data-aos="fade-left" data-aos-delay="200">
          <Link href="/tour" className="rts-btn text-btn with-arrow">
            Explore More 
            <i className="fa-regular fa-arrow-up up-right"></i>
          </Link>
        </div>
      </div>
      <div className="section-inner mt--60">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="package-wrapper radius-10 image-transform" data-aos="fade-left" data-aos-delay="200">
              <div className="image-area">
                <img className="hover-image" src="/assets/images/package/01.webp" alt="" />
              </div>
              <a href="#" className="wishlist">
                <i className="fa-light fa-heart"></i>
              </a>
              <div className="content">
                <ul className="meta-content">
                  <li>
                    <i className="fa-light fa-location-dot"></i>
                     Iceland
                  </li>
                  <li>
                    <i className="fa-light fa-clock"></i>
                     3 Days
                  </li>
                </ul>
                <h5 className="title">
                  <Link href="/tour/maldives-luxury-cruise">
                    Maldives Luxury Cruise
                  </Link>
                </h5>
                <p className="price">
                  From - $1200
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="package-wrapper radius-10 image-transform" data-aos="fade-left" data-aos-delay="400">
              <div className="image-area">
                <img className="hover-image" src="/assets/images/package/02.webp" alt="" />
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
                     3 Days
                  </li>
                </ul>
                <h5 className="title">
                  <Link href="/tour/bali-private-charter">
                    Bali Private Charter
                  </Link>
                </h5>
                <p className="price">
                  From - $1100
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="package-wrapper radius-10 image-transform" data-aos="fade-left" data-aos-delay="600">
              <div className="image-area">
                <img className="hover-image" src="/assets/images/package/03.webp" alt="" />
              </div>
              <a href="#" className="wishlist">
                <i className="fa-light fa-heart"></i>
              </a>
              <div className="content">
                <ul className="meta-content">
                  <li>
                    <i className="fa-light fa-location-dot"></i>
                     UAE
                  </li>
                  <li>
                    <i className="fa-light fa-clock"></i>
                     3 Days
                  </li>
                </ul>
                <h5 className="title">
                  <Link href="/tour/dubai-skyline-cruise">
                    Dubai Skyline Cruise
                  </Link>
                </h5>
                <p className="price">
                  From - $1800
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="package-wrapper radius-10 image-transform" data-aos="fade-left" data-aos-delay="800">
              <div className="image-area">
                <img className="hover-image" src="/assets/images/package/04.webp" alt="" />
              </div>
              <a href="#" className="wishlist">
                <i className="fa-light fa-heart"></i>
              </a>
              <div className="content">
                <ul className="meta-content">
                  <li>
                    <i className="fa-light fa-location-dot"></i>
                     Greek
                  </li>
                  <li>
                    <i className="fa-light fa-clock"></i>
                     3 Days
                  </li>
                </ul>
                <h5 className="title">
                  <Link href="/tour/greek-island-hopping">
                    Greek Island Hopping
                  </Link>
                </h5>
                <p className="price">
                  From - $1200
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
