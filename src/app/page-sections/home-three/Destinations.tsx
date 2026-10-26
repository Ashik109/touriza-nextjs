import Link from "next/link";

export default function Destinations() {
  return (
  <section className="rts-destination-area">
    <div className="container">
      <div className="section-top-area d-flex align-items-end justify-content-between">
        <div className="section-title-area" data-aos="fade-right" data-aos-delay="200">
          <h2 className="section-title mb-0 text-uppercase">
            Top Destination
          </h2>
        </div>
        <div className="button-area mb--15" data-aos="fade-left" data-aos-delay="200">
          <a href="#" className="rts-btn text-btn with-arrow">
            Explore More 
            <i className="fa-regular fa-arrow-up up-right"></i>
          </a>
        </div>
      </div>
      <div className="section-inner mt--60">
        <div className="destination-area-3">
          <div className="destination-wrapper-3 image-transform" data-aos="zoom-in" data-aos-delay="200">
            <div className="image-area" data-aos="zoom-in">
              <Link href="/destination/new-york">
                <img className="hover-image" src="/assets/images/destination/11.webp" width="150" alt="" />
              </Link>
            </div>
            <div className="content">
              <h6 className="title">
                <Link href="/destination/new-york">
                  New York 
                </Link>
              </h6>
            </div>
          </div>
          <div className="destination-wrapper-3 image-transform" data-aos="zoom-in" data-aos-delay="400">
            <div className="image-area" data-aos="zoom-in">
              <Link href="/destination/maldives">
                <img className="hover-image" src="/assets/images/destination/12.webp" width="150" alt="" />
              </Link>
            </div>
            <div className="content">
              <h6 className="title">
                <Link href="/destination/maldives">
                  Maldives
                </Link>
              </h6>
            </div>
          </div>
          <div className="destination-wrapper-3 image-transform" data-aos="zoom-in" data-aos-delay="600">
            <div className="image-area" data-aos="zoom-in">
              <Link href="/destination/greek-islands">
                <img className="hover-image" src="/assets/images/destination/13.webp" width="150" alt="" />
              </Link>
            </div>
            <div className="content">
              <h6 className="title">
                <Link href="/destination/greek-islands">
                  Greek Islands
                </Link>
              </h6>
            </div>
          </div>
          <div className="destination-wrapper-3 image-transform" data-aos="zoom-in" data-aos-delay="800">
            <div className="image-area" data-aos="zoom-in">
              <Link href="/destination/dubai-coastline">
                <img className="hover-image" src="/assets/images/destination/14.webp" width="150" alt="" />
              </Link>
            </div>
            <div className="content">
              <h6 className="title">
                <Link href="/destination/dubai-coastline">
                  Dubai Coastline
                </Link>
              </h6>
            </div>
          </div>
          <div className="destination-wrapper-3 image-transform" data-aos="zoom-in" data-aos-delay="1000">
            <div className="image-area" data-aos="zoom-in">
              <Link href="/destination/bali-indonesia">
                <img className="hover-image" src="/assets/images/destination/15.webp" width="150" alt="" />
              </Link>
            </div>
            <div className="content">
              <h6 className="title">
                <Link href="/destination/bali-indonesia">
                  Bali, Indonesia
                </Link>
              </h6>
            </div>
          </div>
          <div className="destination-wrapper-3 image-transform" data-aos="zoom-in" data-aos-delay="1200">
            <div className="image-area" data-aos="zoom-in">
              <Link href="/destination/croatia">
                <img className="hover-image" src="/assets/images/destination/16.webp" width="150" alt="" />
              </Link>
            </div>
            <div className="content">
              <h6 className="title">
                <Link href="/destination/croatia">
                  Croatia
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
