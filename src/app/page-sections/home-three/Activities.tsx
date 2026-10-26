import Link from "next/link";

export default function Activities() {
  return (
  <section className="rts-activity-area rts-section-gap">
    <div className="container">
      <div className="section-title-area center-style">
        <p className="sub-title d-flex align-items-center justify-content-center gap-2" data-aos="fade-up" data-aos-delay="200">
          <img src="/assets/images/banner/icon/02.svg" alt="" />
          Yacht Activity
        </p>
        <h2 className="section-title text-uppercase" data-aos="fade-up" data-aos-delay="200">
          Popular Activities on a 
          <br />
           Yacht Trip
        </h2>
      </div>
      <div className="section-inner radius-10 overflow-hidden mt--60">
        <div className="row p-0">
          <div className="col-lg-3 col-md-6 col-sm-6 p-0" data-aos="fade-up" data-aos-delay="200">
            <div className="activity-wrapper image-transform">
              <div className="image-area">
                <img className="hover-image" src="/assets/images/activity/01.webp" alt="" />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/tour/snorkeling-and-scuba-diving-sea">
                    Snorkeling &amp; Scuba Diving Sea
                  </Link>
                </h5>
                <Link href="/contact" className="rts-btn btn-border">
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 p-0" data-aos="fade-up" data-aos-delay="500">
            <div className="activity-wrapper image-transform">
              <div className="image-area">
                <img className="hover-image" src="/assets/images/activity/02.webp" alt="" />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/tour/kayaking-paddleboarding">
                    Kayaking / Paddleboarding
                  </Link>
                </h5>
                <Link href="/contact" className="rts-btn btn-border">
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 p-0" data-aos="fade-up" data-aos-delay="800">
            <div className="activity-wrapper image-transform">
              <div className="image-area">
                <img className="hover-image" src="/assets/images/activity/03.webp" alt="" />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/tour/jet-ski-thrills-on-every-luxury-voyage">
                    Jet Ski Thrills on Every Luxury Voyage
                  </Link>
                </h5>
                <Link href="/contact" className="rts-btn btn-border">
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 p-0" data-aos="fade-up" data-aos-delay="1100">
            <div className="activity-wrapper image-transform">
              <div className="image-area">
                <img className="hover-image" src="/assets/images/activity/04.webp" alt="" />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/tour/fishing-deep-sea-fishing">
                    Fishing (Deep Sea Fishing)
                  </Link>
                </h5>
                <Link href="/contact" className="rts-btn btn-border">
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
