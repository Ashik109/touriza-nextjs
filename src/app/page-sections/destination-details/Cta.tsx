import type { CSSProperties } from "react";

export default function Cta() {
  return (
  <section className="rts-cta-area rts-section-gap">
    <div className="container">
      <div className="cta-section-inner hiking" data-bg-src="/assets/images/cta/bg-02.webp" style={{ "backgroundImage": "url('/assets/images/cta/bg-02.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}>
        <div className="row">
          <div className="col-lg-5"></div>
          <div className="col-lg-7">
            <div className="cta-content-area">
              <p className="sub-title" data-aos="fade-up" data-aos-delay="200">
                Book Today
              </p>
              <h2 className="section-title" data-aos="fade-up" data-aos-delay="400">
                Adventure Just Got Cheaper 
                <span>
                  30% OFF!
                </span>
              </h2>
              <a href="#" className="rts-btn btn-primary with-arrow" data-aos="fade-up" data-aos-delay="600">
                Book Now 
                <i className="fa-regular fa-arrow-up up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
