import Link from "next/link";

export default function About() {
  return (
  <section className="rts-about-area rts-section-gapBottom">
    <div className="container">
      <div className="section-inner">
        <div className="row">
          <div className="col-xl-6 col-lg-7">
            <div className="about-image-area">
              <div className="image">
                <div className="rotate-image radius-10 rotateImg pt--80" data-aos-delay="200">
                  <img className="radius-6" src="/assets/images/about/01.webp" width="260" alt="" />
                </div>
                <div className="floating-image radius-10" data-aos="zoom-in" data-aos-delay="500">
                  <img className="radius-6" src="/assets/images/about/02.webp" width="282" alt="" />
                </div>
              </div>
              <div className="customer-review-area">
                <div className="client-img">
                  <img className="one" src="/assets/images/testimonials/avatar/01.svg" alt="svg-img" />
                  <img className="two" src="/assets/images/testimonials/avatar/02.svg" alt="svg-img" />
                  <img className="three" src="/assets/images/testimonials/avatar/03.svg" alt="svg-img" />
                  <img className="four" src="/assets/images/testimonials/avatar/04.svg" alt="svg-img" />
                </div>
                <p className="desc">
                  <span>
                    4.9/5
                  </span>
                  <span>
                    <img src="/assets/images/testimonials/star-02.svg" alt="" />
                  </span>
                  <br />
                  <span>
                    200+ Reviews
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-5">
            <div className="about-content-area wild">
              <div className="section-title-area">
                <div className="section-title-area">
                  <p className="sub-title">
                    Why Choose Us
                  </p>
                  <h2 className="section-title text-uppercase mb-0">
                    Crafting Journeys Into the Wil
                  </h2>
                </div>
                <ul className="feature-list">
                  <li>
                    <i className="fa-regular fa-check"></i>
                     Years of Experience
                  </li>
                  <li>
                    <i className="fa-regular fa-check"></i>
                     Local Expert Guides 
                  </li>
                  <li>
                    <i className="fa-regular fa-check"></i>
                     50+ Wild Tours 
                  </li>
                </ul>
                <p className="desc mb--20">
                  At Wild Trails, we believe that true adventure begins where the road ends. Our mission is to connect travelers with nature’s untouched beauty through carefully curated wild travel experiences.
                </p>
                <p className="desc">
                  With 12 years of experience in jungle expeditions, mountain trekking, and remote safari tours, we bring you face-to-face with the raw and real. Every journey is guided by local experts, ensuring safety, authenticity, and unforgettable memories.
                </p>
                <Link href="/contact" className="rts-btn btn-primary border">
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
