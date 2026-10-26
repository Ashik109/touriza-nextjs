import Link from "next/link";
import type { CSSProperties } from "react";

export default function Offers() {
  return (
  <div className="rts-offer-area rts-section-gap">
    <div className="container">
      <div className="section-inner">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="offer-wrapper tour-marketplace radius-10" data-bg-src="/assets/images/offer/08.webp" data-aos="fade-left" data-aos-delay="200" style={{ "backgroundImage": "url('/assets/images/offer/08.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}>
              <p className="sub-title">
                Book Today
              </p>
              <h4 className="title">
                Save Up to 30% on Next Adventure!
              </h4>
              <Link href="/contact" className="rts-btn btn-primary with-arrow">
                Book Now 
                <i className="fa-regular fa-arrow-up up-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="offer-wrapper tour-marketplace radius-10 mid-2" data-aos="fade-left" data-aos-delay="400">
              <p className="sub-title">
                Book Today
              </p>
              <h4 className="title ch">
                Fly High 
                <span>
                  30% OFF
                </span>
                 on Air Tickets!
              </h4>
              <Link href="/contact" className="rts-btn btn-primary with-arrow">
                Explore Flights 
                <i className="fa-regular fa-arrow-up up-right"></i>
              </Link>
              <div className="person" data-aos="fade-up" data-aos-delay="700">
                <img src="/assets/images/offer/04.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="offer-wrapper tour-marketplace radius-10" data-bg-src="/assets/images/offer/09.webp" data-aos="fade-left" data-aos-delay="600" style={{ "backgroundImage": "url('/assets/images/offer/09.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}>
              <p className="sub-title">
                Book Today
              </p>
              <h4 className="title">
                Explore the World with 20% OFF
              </h4>
              <Link href="/contact" className="rts-btn btn-primary with-arrow">
                Book Now 
                <i className="fa-regular fa-arrow-up up-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
