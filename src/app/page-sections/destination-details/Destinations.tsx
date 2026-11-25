import { getDestinationIntro } from "@/data/editorial-content";
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
           {getDestinationIntro(detailContent)}
        </p>
      </div>
      <div className="section-inner mt--60">
        <ul className="feature-list">
          <li className="" data-aos="zoom-in" data-aos-delay="200">
            <div className="image">
              <img src="/assets/images/feature/01.svg" alt="" />
            </div>
            <h5>
              Things to Do
            </h5>
          </li>
          <li className="" data-aos="zoom-in" data-aos-delay="400">
            <div className="image">
              <img src="/assets/images/feature/02.svg" alt="" />
            </div>
            <h5>
              Places to Stay
            </h5>
          </li>
          <li className="" data-aos="zoom-in" data-aos-delay="600">
            <div className="image">
              <img src="/assets/images/feature/03.svg" alt="" />
            </div>
            <h5>
              Entry Requirements
            </h5>
          </li>
          <li className="" data-aos="zoom-in" data-aos-delay="800">
            <div className="image">
              <img src="/assets/images/feature/04.svg" alt="" />
            </div>
            <h5>
              Local Guides
            </h5>
          </li>
          <li className="" data-aos="zoom-in" data-aos-delay="1000">
            <div className="image">
              <img src="/assets/images/feature/05.svg" alt="" />
            </div>
            <h5>
              Best Time to Travel
            </h5>
          </li>
        </ul>
      </div>
    </div>
  </section>
  );
}
