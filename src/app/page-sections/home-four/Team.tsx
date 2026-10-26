import Link from "next/link";

export default function Team() {
  return (
  <section className="rts-team-area rts-section-gap body-bg-five">
    <div className="container">
      <div className="section-title-area center-style">
        <p className="sub-title" data-aos="fade-up" data-aos-delay="200">
          Team
        </p>
        <h2 className="section-title text-uppercase" data-aos="fade-up" data-aos-delay="400">
          Trusted Guides. True 
          <br />
           Explorers.
        </h2>
      </div>
      <div className="section-inner mt--60">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-wrapper image-transform radius-10" data-aos="fade-left" data-aos-delay="400">
              <div className="image-area image-transform radius-6">
                <Link href="/team">
                  <img className="hover-image" src="/assets/images/team/01.webp" alt="" />
                </Link>
                <ul className="social-wrapper">
                  <li>
                    <a href="#">
                      <img src="/assets/images/team/icon/01.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/team/icon/02.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/team/icon/03.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/team/icon/04.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="content">
                <h6>
                  <Link href="/team">
                    Nadia Singh
                  </Link>
                </h6>
                <p>
                  Lead Wildlife
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-wrapper image-transform radius-10" data-aos="fade-left" data-aos-delay="600">
              <div className="image-area image-transform radius-6">
                <Link href="/team">
                  <img className="hover-image" src="/assets/images/team/02.webp" alt="" />
                </Link>
                <ul className="social-wrapper">
                  <li>
                    <a href="#">
                      <img src="/assets/images/team/icon/01.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/team/icon/02.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/team/icon/03.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/team/icon/04.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="content">
                <h6>
                  <Link href="/team">
                    Carlos Mendes
                  </Link>
                </h6>
                <p>
                  Jungle Expedition
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-wrapper image-transform radius-10" data-aos="fade-left" data-aos-delay="800">
              <div className="image-area image-transform radius-6">
                <Link href="/team">
                  <img className="hover-image" src="/assets/images/team/03.webp" alt="" />
                </Link>
                <ul className="social-wrapper">
                  <li>
                    <a href="#">
                      <img src="/assets/images/team/icon/01.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/team/icon/02.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/team/icon/03.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/team/icon/04.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="content">
                <h6>
                  <Link href="/team">
                    Tenzing Dorje
                  </Link>
                </h6>
                <p>
                  Mountain Trek
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-wrapper image-transform radius-10" data-aos="fade-left" data-aos-delay="1000">
              <div className="image-area image-transform radius-6">
                <Link href="/team">
                  <img className="hover-image" src="/assets/images/team/04.webp" alt="" />
                </Link>
                <ul className="social-wrapper">
                  <li>
                    <a href="#">
                      <img src="/assets/images/team/icon/01.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/team/icon/02.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/team/icon/03.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/team/icon/04.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="content">
                <h6>
                  <Link href="/team">
                    Jackson Reed
                  </Link>
                </h6>
                <p>
                  Lead Wildlife
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
