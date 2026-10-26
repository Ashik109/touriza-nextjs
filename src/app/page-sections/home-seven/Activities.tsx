import Link from "next/link";

export default function Activities() {
  return (
  <section className="rts-activity-area">
    <div className="container">
      <div className="section-title-area center-style">
        <p className="sub-title d-flex align-items-center justify-content-center gap-2" data-aos="fade-up" data-aos-delay="200">
          <img src="/assets/images/banner/icon/04.svg" alt="" />
           Activities
        </p>
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="200">
          Popular Summer Activities
        </h2>
      </div>
      <div className="section-inner radius-10 overflow-hidden mt--60">
        <div className="row p-0">
          <div className="col-lg-3 col-md-6 col-sm-6 p-0" data-aos="fade-up" data-aos-delay="200">
            <div className="activity-wrapper3 image-transform">
              <div className="image-area">
                <img className="hover-image" src="/assets/images/activity/15.webp" alt="" />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/tour/sunbathing-swimming-chilling-at-the-beach">
                    Sunbathing, swimming, chilling at the beach
                  </Link>
                </h5>
                <Link href="/tour/sunbathing-swimming-chilling-at-the-beach" className="rts-btn btn-border">
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 p-0" data-aos="fade-up" data-aos-delay="500">
            <div className="activity-wrapper3 image-transform">
              <div className="image-area">
                <img className="hover-image" src="/assets/images/activity/16.webp" alt="" />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/tour/wave-surfing-in-tropical-locations">
                    Wave surfing in tropical locations
                  </Link>
                </h5>
                <Link href="/tour/wave-surfing-in-tropical-locations" className="rts-btn btn-border">
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 p-0" data-aos="fade-up" data-aos-delay="800">
            <div className="activity-wrapper3 image-transform">
              <div className="image-area">
                <img className="hover-image" src="/assets/images/activity/17.webp" alt="" />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/tour/sea-tours-sunset-cruises">
                    Sea tours, sunset cruises
                  </Link>
                </h5>
                <Link href="/tour/sea-tours-sunset-cruises" className="rts-btn btn-border">
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 p-0" data-aos="fade-up" data-aos-delay="1100">
            <div className="activity-wrapper3 image-transform">
              <div className="image-area">
                <img className="hover-image" src="/assets/images/activity/18.webp" alt="" />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/tour/fishing-deep-sea-fishing">
                    Fishing (Deep Sea Fishing)
                  </Link>
                </h5>
                <Link href="/tour/fishing-deep-sea-fishing" className="rts-btn btn-border">
                  Explore Now
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
