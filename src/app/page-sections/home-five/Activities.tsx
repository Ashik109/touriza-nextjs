import Link from "next/link";

export default function Activities() {
  return (
  <section className="rts-activities-area rts-section-gapTop">
    <div className="container">
      <div className="section-title-area center-style">
        <p className="sub-title d-flex align-items-center justify-content-center gap-2" data-aos="fade-up" data-aos-delay="200">
          <img src="/assets/images/banner/icon/03.svg" alt="" />
          Activities
        </p>
        <h2 className="section-title text-uppercase" data-aos="fade-up" data-aos-delay="400">
          Wild Activities
        </h2>
      </div>
      <div className="section-inner rts-section-gapBottom border-bottom mt--60">
        <div className="row g-5">
          <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
            <div className="activity-wrapper2" data-aos="fade-left" data-aos-delay="200">
              <div className="image-area radius-10 image-transform">
                <Link href="/tour/jungle-trekking">
                  <img className="hover-image" src="/assets/images/activity/05.webp" alt="" />
                </Link>
              </div>
              <div className="content">
                <h6 className="title">
                  <Link href="/tour/jungle-trekking">
                    Jungle Trekking
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
            <div className="activity-wrapper2" data-aos="fade-left" data-aos-delay="400">
              <div className="image-area radius-10 image-transform">
                <Link href="/tour/desert-camping">
                  <img className="hover-image" src="/assets/images/activity/06.webp" alt="" />
                </Link>
              </div>
              <div className="content">
                <h6 className="title">
                  <Link href="/tour/desert-camping">
                    Desert Camping
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
            <div className="activity-wrapper2" data-aos="fade-left" data-aos-delay="600">
              <div className="image-area radius-10 image-transform">
                <Link href="/tour/photography">
                  <img className="hover-image" src="/assets/images/activity/07.webp" alt="" />
                </Link>
              </div>
              <div className="content">
                <h6 className="title">
                  <Link href="/tour/photography">
                     Photography
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
            <div className="activity-wrapper2" data-aos="fade-left" data-aos-delay="800">
              <div className="image-area radius-10 image-transform">
                <Link href="/tour/zip-lining">
                  <img className="hover-image" src="/assets/images/activity/08.webp" alt="" />
                </Link>
              </div>
              <div className="content">
                <h6 className="title">
                  <Link href="/tour/zip-lining">
                    Zip-lining
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
            <div className="activity-wrapper2" data-aos="fade-left" data-aos-delay="1000">
              <div className="image-area radius-10 image-transform">
                <Link href="/tour/jungle-trekking">
                  <img className="hover-image" src="/assets/images/activity/09.webp" alt="" />
                </Link>
              </div>
              <div className="content">
                <h6 className="title">
                  <Link href="/tour/jungle-trekking">
                    Jungle Trekking
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
            <div className="activity-wrapper2" data-aos="fade-left" data-aos-delay="1200">
              <div className="image-area radius-10 image-transform">
                <Link href="/tour/camping-in-the-wild">
                  <img className="hover-image" src="/assets/images/activity/10.webp" alt="" />
                </Link>
              </div>
              <div className="content">
                <h6 className="title">
                  <Link href="/tour/camping-in-the-wild">
                    Camping in the Wild
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
