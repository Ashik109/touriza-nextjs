import Link from "next/link";
import type { CSSProperties } from "react";

export default function Offers() {
  return (
  <div className="rts-offer-area rts-section-gap">
    <div className="container">
      <div className="section-inner">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="offer-wrapper-2 radius-10" data-bg-src="/assets/images/offer/05.webp" data-aos="fade-left" data-aos-delay="200" style={{ "backgroundImage": "url('/assets/images/offer/05.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}>
              <p className="sub-title">
                Book Today
              </p>
              <h4 className="title">
                Dubai Skyline 
                <br />
                 Cruise Limited Time
              </h4>
              <Link href="/contact" className="rts-btn btn-primary with-arrow btn-border">
                Book Now
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="offer-wrapper-2 radius-10 mid" data-bg-src="/assets/images/offer/06.webp" data-aos="fade-left" data-aos-delay="400" style={{ "backgroundImage": "url('/assets/images/offer/06.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}>
              <p className="sub-title">
                Book Today
              </p>
              <h4 className="title">
                Maldives Luxury 
                <br />
                 30% OFF
              </h4>
              <Link href="/contact" className="rts-btn btn-primary with-arrow btn-border">
                Explore Flights
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="offer-wrapper-2 radius-10" data-bg-src="/assets/images/offer/07.webp" data-aos="fade-left" data-aos-delay="600" style={{ "backgroundImage": "url('/assets/images/offer/07.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}>
              <p className="sub-title">
                Book Today
              </p>
              <h4 className="title">
                Early Bird Deal 
                <br />
                 Save $1000
              </h4>
              <Link href="/contact" className="rts-btn btn-primary with-arrow btn-border">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
