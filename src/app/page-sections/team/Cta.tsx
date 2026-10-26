import Link from "next/link";

export default function Cta() {
  return (
  <section className="rts-cta-area body-bg-one rts-section-gap">
    <div className="container">
      <div className="cta-section-inner after-none p-0 teams radius-10">
        <div className="content">
          <h3 className="title">
            Want to join our team
          </h3>
          <p className="desc">
            We’re always looking for passionate people 
            <br />
             — check out our latest vacancies.
          </p>
          <Link href="/contact" className="rts-btn btn-primary with-arrow">
            Join Us 
            <i className="fa-regular fa-arrow-up up-right"></i>
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
}
