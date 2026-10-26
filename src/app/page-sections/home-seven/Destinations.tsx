import Link from "next/link";

export default function Destinations() {
  return (
  <section className="rts-destination-area summer-travel">
    <div className="container">
      <div className="section-inner">
        <div className="row g-5">
          <div className="col-lg-4 col-md-7 col-sm-9">
            <div className="left-content-area">
              <div className="section-title-area">
                <p className="sub-title c-p d-flex align-items-center gap-2" data-aos="fade-up" data-aos-delay="200">
                  <img src="/assets/images/banner/icon/04.svg" alt="" />
                  Destination
                </p>
                <h2 className="section-title f-medium" data-aos="fade-up" data-aos-delay="400">
                  Top Destination
                </h2>
              </div>
              <p className="desc">
                Discover breathtaking summer destinations handpicked just for you! Whether you're craving.
              </p>
              <div className="slider-btn-area">
                <div className="swiper-btn swiper-btn-prev2">
                  <i className="fa-regular fa-chevron-left"></i>
                </div>
                <div className="swiper-btn swiper-btn-next2">
                  <i className="fa-regular fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="slider-inner">
              <div className="swiper destination-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="activity-wrapper2">
                      <div className="image-area radius-10 image-transform">
                        <Link href="/destination/phuket-1147">
                          <img className="hover-image" src="/assets/images/activity/11.webp" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/destination/phuket-1147">
                            Phuket (1147)
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="activity-wrapper2">
                      <div className="image-area radius-10 image-transform">
                        <Link href="/destination/barcelona-129">
                          <img className="hover-image" src="/assets/images/activity/12.webp" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/destination/barcelona-129">
                            Barcelona (129) 
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="activity-wrapper2">
                      <div className="image-area radius-10 image-transform">
                        <Link href="/destination/jungle-trekking-85">
                          <img className="hover-image" src="/assets/images/activity/13.webp" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/destination/jungle-trekking-85">
                            Jungle Trekking (85)
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="activity-wrapper2">
                      <div className="image-area radius-10 image-transform">
                        <Link href="/destination/hawaii-usa-47">
                          <img className="hover-image" src="/assets/images/activity/14.webp" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/destination/hawaii-usa-47">
                            Hawaii (USA) (47)
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="activity-wrapper2">
                      <div className="image-area radius-10 image-transform">
                        <Link href="/destination/jungle-trekking">
                          <img className="hover-image" src="/assets/images/activity/11.webp" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/destination/jungle-trekking">
                            Jungle Trekking
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="activity-wrapper2">
                      <div className="image-area radius-10 image-transform">
                        <Link href="/destination/jungle-trekking">
                          <img className="hover-image" src="/assets/images/activity/12.webp" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/destination/jungle-trekking">
                            Jungle Trekking
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="activity-wrapper2">
                      <div className="image-area radius-10 image-transform">
                        <Link href="/destination/jungle-trekking">
                          <img className="hover-image" src="/assets/images/activity/13.webp" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/destination/jungle-trekking">
                            Jungle Trekking
                          </Link>
                        </h6>
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
