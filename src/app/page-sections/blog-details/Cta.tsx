import type { CSSProperties } from "react";

export default function Cta() {
  return (
  <section className="rts-cta-area">
    <div className="container">
      <div className="cta-section-inner radius-10" data-bg-src="/assets/images/cta/bg-01.webp" style={{ "backgroundImage": "url('/assets/images/cta/bg-01.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}>
        <div className="content">
          <h3 className="title">
            Plan Your Next Trip
          </h3>
          <p className="desc">
            Browse available tours and find the right trip for your travel plans.
          </p>
        </div>
        <div className="button-area">
          <a href="/tour" className="rts-btn btn-primary">Browse Tours</a>
        </div>
      </div>
    </div>
  </section>
  );
}
