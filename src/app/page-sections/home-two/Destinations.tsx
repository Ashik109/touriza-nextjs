import Link from "next/link";

export default function Destinations() {
  return (
  <section className="rts-destination-area rts-section-gap">
    <div className="container">
      <div className="section-title-area center-style">
        <p className="sub-title" data-aos="fade-up" data-aos-delay="200">
          Destinations
        </p>
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="400">
          Top Ice Hiking Destinations
        </h2>
      </div>
      <div className="section-inner mt--60">
        <div className="row g-5">
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <div className="destination-wrapper-2 image-transform" data-aos="zoom-in" data-aos-delay="200">
              <div className="image-area" data-aos="zoom-in">
                <Link href="/destination/nepal">
                  <img className="hover-image" src="/assets/images/destination/05.webp" alt="" />
                </Link>
              </div>
              <div className="content">
                <h6 className="title">
                  <Link href="/destination/nepal">
                    Nepal
                  </Link>
                </h6>
                <p className="desc">
                  1,147 Tours
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <div className="destination-wrapper-2 image-transform" data-aos="zoom-in" data-aos-delay="400">
              <div className="image-area" data-aos="zoom-in">
                <Link href="/destination/switzerland">
                  <img className="hover-image" src="/assets/images/destination/06.webp" alt="" />
                </Link>
              </div>
              <div className="content">
                <h6 className="title">
                  <Link href="/destination/switzerland">
                    Switzerland
                  </Link>
                </h6>
                <p className="desc">
                  1,482 Tours
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <div className="destination-wrapper-2 image-transform" data-aos="zoom-in" data-aos-delay="600">
              <div className="image-area" data-aos="zoom-in">
                <Link href="/destination/south-america">
                  <img className="hover-image" src="/assets/images/destination/07.webp" alt="" />
                </Link>
              </div>
              <div className="content">
                <h6 className="title">
                  <Link href="/destination/south-america">
                    South America
                  </Link>
                </h6>
                <p className="desc">
                  1,547 Tours
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <div className="destination-wrapper-2 image-transform" data-aos="zoom-in" data-aos-delay="800">
              <div className="image-area" data-aos="zoom-in">
                <Link href="/destination/norway">
                  <img className="hover-image" src="/assets/images/destination/08.webp" alt="" />
                </Link>
              </div>
              <div className="content">
                <h6 className="title">
                  <Link href="/destination/norway">
                    Norway
                  </Link>
                </h6>
                <p className="desc">
                  1,741 Tours
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <div className="destination-wrapper-2 image-transform" data-aos="zoom-in" data-aos-delay="1000">
              <div className="image-area" data-aos="zoom-in">
                <Link href="/destination/iceland">
                  <img className="hover-image" src="/assets/images/destination/09.webp" alt="" />
                </Link>
              </div>
              <div className="content">
                <h6 className="title">
                  <Link href="/destination/iceland">
                    Iceland
                  </Link>
                </h6>
                <p className="desc">
                  1,468 Tours
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <div className="destination-wrapper-2 image-transform" data-aos="zoom-in" data-aos-delay="1200">
              <div className="image-area" data-aos="zoom-in">
                <Link href="/destination/japan">
                  <img className="hover-image" src="/assets/images/destination/10.webp" alt="" />
                </Link>
              </div>
              <div className="content">
                <h6 className="title">
                  <Link href="/destination/japan">
                    Japan
                  </Link>
                </h6>
                <p className="desc">
                  1,358 Tours
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
