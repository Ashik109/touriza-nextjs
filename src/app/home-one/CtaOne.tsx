export default function CtaOne() {
  return (
    <section className="rts-cta-area">
      <div className="container">
        <div className="cta-section-inner radius-10" data-bg-src="/assets/images/cta/bg-01.webp" style={{ backgroundImage: "url('/assets/images/cta/bg-01.webp')", backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
          <div className="content">
            <h3 className="title">Our App &amp; Travel Smarter</h3>
            <p className="desc">Book tours, track your itinerary, and get instant updates all from your phone.</p>
          </div>
          <div className="button-area">
            <a href="#" className="img-btn one"><img src="/assets/images/cta/01.svg" alt="" /></a>
            <a href="#" className="img-btn two"><img src="/assets/images/cta/02.svg" alt="" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
