import Link from "next/link";

export default function Destinations() {
  return (
  <section className="rts-destination-area rts-section-gapTop">
    <div className="container">
      <div className="section-title-area center-style">
        <p className="sub-title d-flex align-items-center justify-content-center gap-2" data-aos="fade-up" data-aos-delay="200">
          <img src="/assets/images/banner/icon/03.svg" alt="" />
          destination
        </p>
        <h2 className="section-title text-uppercase" data-aos="fade-up" data-aos-delay="400">
          Popular Destination
        </h2>
      </div>
      <div className="section-inner rts-section-gapBottom border-bottom mt--60">
        <div className="row g-5">
          <div className="col-lg-6 col-md-12">
            <div className="destination-wrapper-4 radius-10 image-transform" data-aos="fade-left" data-aos-delay="200">
              <div className="image-area image-transform">
                <Link href="/destination/playa-chinchorro">
                  <img className="hover-image" src="/assets/images/destination/21.webp" alt="" />
                </Link>
              </div>
              <div className="content-area">
                <p>
                  50 Tours
                </p>
                <h4 className="title text-uppercase">
                  <Link href="/destination/playa-chinchorro">
                    Playa Chinchorro
                  </Link>
                </h4>
                <Link href="/destination/playa-chinchorro" className="rts-btn text-btn with-arrow">
                  Explore Now 
                  <i className="fa-regular fa-arrow-up up-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="destination-wrapper-4 radius-10 image-transform" data-aos="fade-left" data-aos-delay="400">
              <div className="image-area image-transform">
                <Link href="/destination/tanzania">
                  <img className="hover-image" src="/assets/images/destination/22.webp" alt="" />
                </Link>
              </div>
              <div className="content-area">
                <p>
                  16 Tours
                </p>
                <h4 className="title text-uppercase">
                  <Link href="/destination/tanzania">
                    Tanzania
                  </Link>
                </h4>
                <Link href="/destination/tanzania" className="rts-btn text-btn with-arrow">
                  Explore Now 
                  <i className="fa-regular fa-arrow-up up-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="destination-wrapper-4 radius-10 image-transform" data-aos="fade-left" data-aos-delay="600">
              <div className="image-area image-transform">
                <Link href="/destination/morocco">
                  <img className="hover-image" src="/assets/images/destination/23.webp" alt="" />
                </Link>
              </div>
              <div className="content-area">
                <p>
                  10 Tours
                </p>
                <h4 className="title text-uppercase">
                  <Link href="/destination/morocco">
                    Morocco
                  </Link>
                </h4>
                <Link href="/destination/morocco" className="rts-btn text-btn with-arrow">
                  Explore Now 
                  <i className="fa-regular fa-arrow-up up-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="destination-wrapper-4 radius-10 image-transform" data-aos="fade-right" data-aos-delay="1200">
              <div className="image-area image-transform">
                <Link href="/destination/south-africa">
                  <img className="hover-image" src="/assets/images/destination/24.webp" alt="" />
                </Link>
              </div>
              <div className="content-area">
                <p>
                  40 Tours
                </p>
                <h4 className="title text-uppercase">
                  <Link href="/destination/south-africa">
                    South Africa
                  </Link>
                </h4>
                <Link href="/destination/south-africa" className="rts-btn text-btn with-arrow">
                  Explore Now 
                  <i className="fa-regular fa-arrow-up up-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-change">
            <div className="destination-wrapper-4 radius-10 image-transform" data-aos="fade-right" data-aos-delay="1000">
              <div className="image-area image-transform">
                <Link href="/destination/pyramids-of-giza-egypt">
                  <img className="hover-image" src="/assets/images/destination/25.webp" alt="" />
                </Link>
              </div>
              <div className="content-area">
                <p>
                  50 Tours
                </p>
                <h4 className="title text-uppercase">
                  <Link href="/destination/pyramids-of-giza-egypt">
                    Pyramids of Giza Egypt
                  </Link>
                </h4>
                <Link href="/destination/pyramids-of-giza-egypt" className="rts-btn text-btn with-arrow">
                  Explore Now 
                  <i className="fa-regular fa-arrow-up up-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="destination-wrapper-4 radius-10 image-transform" data-aos="fade-right" data-aos-delay="800">
              <div className="image-area image-transform">
                <Link href="/destination/uganda">
                  <img className="hover-image" src="/assets/images/destination/26.webp" alt="" />
                </Link>
              </div>
              <div className="content-area">
                <p>
                  25 Tours
                </p>
                <h4 className="title text-uppercase">
                  <Link href="/destination/uganda">
                    Uganda
                  </Link>
                </h4>
                <Link href="/destination/uganda" className="rts-btn text-btn with-arrow">
                  Explore Now 
                  <i className="fa-regular fa-arrow-up up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
