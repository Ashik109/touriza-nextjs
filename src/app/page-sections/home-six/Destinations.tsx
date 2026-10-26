import Link from "next/link";

export default function Destinations() {
  return (
  <section className="rts-destination-area rts-section-gapBottom">
    <div className="container">
      <div className="section-title-area center-style">
        <h2 className="section-title text-uppercase" data-aos="fade-up" data-aos-delay="400">
          Top Destination
        </h2>
      </div>
      <div className="section-inner mt--60">
        <div className="destination-area-3">
          <div className="destination-wrapper-3 image-transform" data-aos="zoom-in" data-aos-delay="200">
            <div className="image-area" data-aos="zoom-in">
              <Link href="/destination/new-york">
                <img className="hover-image" src="/assets/images/destination/27.webp" width="150" alt="" />
              </Link>
            </div>
            <div className="content">
              <h6 className="title f-medium">
                <Link href="/destination/new-york">
                  New York 
                </Link>
              </h6>
            </div>
          </div>
          <div className="destination-wrapper-3 image-transform" data-aos="zoom-in" data-aos-delay="400">
            <div className="image-area" data-aos="zoom-in">
              <Link href="/destination/maldives">
                <img className="hover-image" src="/assets/images/destination/28.webp" width="150" alt="" />
              </Link>
            </div>
            <div className="content">
              <h6 className="title f-medium">
                <Link href="/destination/maldives">
                  Maldives
                </Link>
              </h6>
            </div>
          </div>
          <div className="destination-wrapper-3 image-transform" data-aos="zoom-in" data-aos-delay="600">
            <div className="image-area" data-aos="zoom-in">
              <Link href="/destination/greek-islands">
                <img className="hover-image" src="/assets/images/destination/29.webp" width="150" alt="" />
              </Link>
            </div>
            <div className="content">
              <h6 className="title f-medium">
                <Link href="/destination/greek-islands">
                  Greek Islands
                </Link>
              </h6>
            </div>
          </div>
          <div className="destination-wrapper-3 image-transform" data-aos="zoom-in" data-aos-delay="800">
            <div className="image-area" data-aos="zoom-in">
              <Link href="/destination/dubai-coastline">
                <img className="hover-image" src="/assets/images/destination/30.webp" width="150" alt="" />
              </Link>
            </div>
            <div className="content">
              <h6 className="title f-medium">
                <Link href="/destination/dubai-coastline">
                  Dubai Coastline
                </Link>
              </h6>
            </div>
          </div>
          <div className="destination-wrapper-3 image-transform" data-aos="zoom-in" data-aos-delay="1000">
            <div className="image-area" data-aos="zoom-in">
              <Link href="/destination/bali-indonesia">
                <img className="hover-image" src="/assets/images/destination/31.webp" width="150" alt="" />
              </Link>
            </div>
            <div className="content">
              <h6 className="title f-medium">
                <Link href="/destination/bali-indonesia">
                  Bali, Indonesia
                </Link>
              </h6>
            </div>
          </div>
          <div className="destination-wrapper-3 image-transform" data-aos="zoom-in" data-aos-delay="1200">
            <div className="image-area" data-aos="zoom-in">
              <Link href="/destination/croatia">
                <img className="hover-image" src="/assets/images/destination/32.webp" width="150" alt="" />
              </Link>
            </div>
            <div className="content">
              <h6 className="title f-medium">
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
