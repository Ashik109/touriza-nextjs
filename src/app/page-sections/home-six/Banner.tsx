import Link from "next/link";
import type { CSSProperties } from "react";

export default function Banner() {
  return (
  <div className="rts-banner-area-six overflow-hidden radius-10" data-bg-src="/assets/images/banner/bg-11.webp" style={{ "backgroundImage": "url('/assets/images/banner/bg-11.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}>
    <div className="container">
      <div className="rts-banner-wrapper">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="banner-wrapper-inner">
              <div className="banner-logo" data-aos="fade-up" data-aos-delay="200">
                <Link href="/">
                  <img src="/assets/images/logo/10.svg" alt="" />
                </Link>
              </div>
              <h1 className="banner-title" data-aos="fade-up" data-aos-delay="400">
                Gateway to Global Tours
              </h1>
              <p className="desc" data-aos="fade-up" data-aos-delay="600">
                Discover exclusive travel packages from trusted agents around the world. Compare, choose, and book – all in one platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
