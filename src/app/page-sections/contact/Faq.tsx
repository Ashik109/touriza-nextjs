export default function Faq() {
  return (
  <section id="faq" className="rts-faq-area rts-section-gapTop">
    <div className="container">
      <div className="section-inner">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="image-area overflow-hidden radius-10" data-aos="zoom-in" data-aos-delay="400">
              <img className="" src="/assets/images/about/03.webp" alt="" data-aos="zoom-in" data-aos-delay="400" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="faq-content">
              <div className="section-title-area">
                <h2 className="section-title mb-0">
                  Have questions?
                </h2>
              </div>
              <div className="accordion-faq-one mt--60">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         Do I need any kayaking experience? 
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                         Introductory kayaking trips include a safety briefing and basic paddling instruction. Check the tour description for its experience requirements.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                         Is kayaking safe for non-swimmers? 
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                         Tell your guide if you cannot swim before booking. Ask whether the route is suitable for you and what flotation equipment is provided.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                         What should I bring on a kayaking trip? 
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                         Bring quick-drying clothes, water, sun protection and a dry bag for essentials. Your trip guide can confirm what equipment is included.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                         What happens if the weather is bad? 
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                         Guides check conditions before departure. If a trip cannot run safely, contact the operator about rescheduling and the cancellation terms.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
