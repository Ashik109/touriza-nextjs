export default function Newsletter() {
  return (
  <section className="rts-newsletter-area">
    <div className="container">
      <div className="newsletter-inner radius-10">
        <div className="image">
          <img src="/assets/images/cta/01.webp" width="520" alt="" />
        </div>
        <div className="content-area">
          <div className="content-inner">
            <h3 className="title text-uppercase">
               Yacht Deals &amp; Updates from Touriza
            </h3>
            <p className="desc">
              Subscribe to receive exclusive yacht deals, travel and the latest updates straight to your inbox.
            </p>
            <form className="newsletter-form" action="#">
              <input type="email" name="email" placeholder="Email Address" required />
              <button type="submit" className="rts-btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
          <div className="map">
            <img src="/assets/images/cta/map.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
