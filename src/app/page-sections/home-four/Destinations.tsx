import Link from "next/link";

export default function Destinations() {
  return (
  <section className="rts-destination-area rts-section-gap body-bg-five">
    <div className="container">
      <div className="section-title-area center-style">
        <p className="sub-title" data-aos="fade-up" data-aos-delay="200">
          Destination
        </p>
        <h2 className="section-title text-uppercase" data-aos="fade-up" data-aos-delay="400">
          Top Wild Destinations
        </h2>
      </div>
      <div className="section-inner mt--60">
        <div className="outer-box overflow-hidden radius-10" data-aos="fade-up" data-aos-delay="400">
          <div className="project-block-four">
            <div className="image-area">
              <img src="/assets/images/destination/17.webp" width="630" alt="" />
            </div>
            <div className="content-area">
              <p>
                <i className="fa-light fa-location-dot"></i>
                 Morocco
              </p>
              <h4 className="title">
                <Link href="/destination/ouzoud-waterfalls">
                  Ouzoud Waterfalls
                </Link>
              </h4>
            </div>
          </div>
          <div className="project-block-four">
            <div className="image-area">
              <img src="/assets/images/destination/18.webp" width="630" alt="" />
            </div>
            <div className="content-area">
              <p>
                <i className="fa-light fa-location-dot"></i>
                 Kenya
              </p>
              <h4 className="title">
                <Link href="/destination/maasai-mara-national-reserve">
                  Maasai Mara National Reserve
                </Link>
              </h4>
            </div>
          </div>
          <div className="project-block-four">
            <div className="image-area">
              <img src="/assets/images/destination/19.webp" width="630" alt="" />
            </div>
            <div className="content-area">
              <p>
                <i className="fa-light fa-location-dot"></i>
                 Africa
              </p>
              <h4 className="title">
                <Link href="/destination/ranthambore-national-park">
                  Ranthambore National Park
                </Link>
              </h4>
            </div>
          </div>
          <div className="project-block-four active">
            <div className="image-area">
              <img src="/assets/images/destination/20.webp" width="630" alt="" />
            </div>
            <div className="content-area">
              <p>
                <i className="fa-light fa-location-dot"></i>
                 Tanzania
              </p>
              <h4 className="title">
                <Link href="/destination/serengeti-national-park">
                  Serengeti National Park
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
