export default function Counter() {
  return (
  <div className="rts-counter-area rts-section-gapBottom">
    <div className="container">
      <div className="section-inner">
        <div className="counter-wrapper radius-10" data-aos="fade-up" data-aos-delay="100">
          <div className="icon">
            <img src="/assets/images/counter/01.svg" alt="" />
          </div>
          <div className="counter-area">
            <h2 className="title">
              <span className="odometer" data-count="71"></span>
              K+
            </h2>
            <span className="done">
              Happy Travelers
            </span>
          </div>
        </div>
        <div className="counter-wrapper radius-10" data-aos="fade-up" data-aos-delay="300">
          <div className="icon">
            <img src="/assets/images/counter/02.svg" alt="" />
          </div>
          <div className="counter-area">
            <h2 className="title">
              <span className="odometer" data-count="250"></span>
              +
            </h2>
            <span className="done">
              Tour Packages
            </span>
          </div>
        </div>
        <div className="counter-wrapper radius-10" data-aos="fade-up" data-aos-delay="500">
          <div className="icon">
            <img src="/assets/images/counter/03.svg" alt="" />
          </div>
          <div className="counter-area">
            <h2 className="title">
              <span className="odometer" data-count="50"></span>
              +
            </h2>
            <span className="done">
              Destinations Covered
            </span>
          </div>
        </div>
        <div className="counter-wrapper radius-10" data-aos="fade-up" data-aos-delay="700">
          <div className="icon">
            <img src="/assets/images/counter/04.svg" alt="" />
          </div>
          <div className="counter-area">
            <h2 className="title">
              <span className="odometer" data-count="10"></span>
              +
            </h2>
            <span className="done">
              Years of Experience
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
