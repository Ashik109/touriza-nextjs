import type { DetailContent } from "@/data/details";

export default function Destinations({ detailContent }: { detailContent: DetailContent }) {
  return (
  <section className="rts-features-area destination rts-section-gapTop">
    <div className="container">
      <div className="section-title-area center-style">
        <h1 className="section-title">
          {detailContent.title}
        </h1>
        <p className="desc">
           Embark on an unforgettable journey from the vibrant city of Cape Town to the wild heart of Kruger National Park. This destination offers the perfect blend of scenic landscapes, rich cultural experiences, and thrilling wildlife adventures. From iconic Table Mountain and golden beaches to Big Five safaris and starlit bush dinners, this route captures the very essence of South Africa’s diverse beauty. 
        </p>
      </div>
      <div className="section-inner mt--60">
        <ul className="feature-list">
          <li className="" data-aos="zoom-in" data-aos-delay="200">
            <div className="image">
              <img src="/assets/images/feature/01.svg" alt="" />
            </div>
            <h5>
              World-Class 
              <br />
               Overwater Villas
            </h5>
          </li>
          <li className="" data-aos="zoom-in" data-aos-delay="400">
            <div className="image">
              <img src="/assets/images/feature/02.svg" alt="" />
            </div>
            <h5>
              Romantic &amp; 
              <br />
               Honeymoon Paradise
            </h5>
          </li>
          <li className="" data-aos="zoom-in" data-aos-delay="600">
            <div className="image">
              <img src="/assets/images/feature/03.svg" alt="" />
            </div>
            <h5>
              Visa-Friendly 
              <br />
               Destination
            </h5>
          </li>
          <li className="" data-aos="zoom-in" data-aos-delay="800">
            <div className="image">
              <img src="/assets/images/feature/04.svg" alt="" />
            </div>
            <h5>
              English 
              <br />
               Language
            </h5>
          </li>
          <li className="" data-aos="zoom-in" data-aos-delay="1000">
            <div className="image">
              <img src="/assets/images/feature/05.svg" alt="" />
            </div>
            <h5>
              Greenwich Mean 
              <br />
               Time (GMT)
            </h5>
          </li>
        </ul>
      </div>
    </div>
  </section>
  );
}
