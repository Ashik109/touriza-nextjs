import { tourSearchDetails } from "@/data/tour-search";
import TourEnquiryForm from "@/app/components/TourEnquiryForm";
import type { DetailContent } from "@/data/details";

export default function TourDetails({ detailContent }: { detailContent: DetailContent }) {
  const tour = tourSearchDetails[detailContent.slug];
  const photo = `/${detailContent.image.replace(/^\/+/, "")}`;
  const price = tour && new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(tour.price);
  return (
  <div className="rts-tour-details-area pt--60 rts-section-gapBottom bg-white">
    <div className="container">
      <div className="top-image-area">
        <div className="row g-5">
          <div className="col-lg-6">
            <a className="gallery-image image image-transform radius-10 overflow-hidden d-block h-100" href={photo} aria-label={`Enlarge photo of ${detailContent.title}`}>
              <img className="hover-image" src={photo} alt={detailContent.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </a>
          </div>
          <div className="col-lg-6">
            <div className="tour-overview-panel border radius-10 h-100">
              <h2>{detailContent.title}</h2>
              <p>Review the trip outline, then request availability for your preferred dates and group size.</p>
              {tour && <p>{tour.location} · {tour.days} days · {price} per person</p>}
              <a href="#contact-form" className="rts-btn btn-primary">Request Availability</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-content-area g-5 mt--50">
        <div className="left">
          <div className="content-box tour-details-tab-area radius-10 border overflow-hidden">
            <ul className="nav nav-tabs border-bottom" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="overview" aria-selected="true">
                   Overview 
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="itinerary-tab" data-bs-toggle="tab" data-bs-target="#itinerary" type="button" role="tab" aria-controls="itinerary" aria-selected="false">
                   Itinerary 
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="cost-tab" data-bs-toggle="tab" data-bs-target="#cost" type="button" role="tab" aria-controls="cost" aria-selected="false">
                   Cost 
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="faq-tab" data-bs-toggle="tab" data-bs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false">
                   FAQs 
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="map-tab" data-bs-toggle="tab" data-bs-target="#map" type="button" role="tab" aria-controls="map" aria-selected="false">
                   Location 
                </button>
              </li>
            </ul>
            <div className="tour-details-tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                <div className="tab-content-inner">
                  <div className="overview-area mb--60">
                    <h5 className="title mb--15">
                      Overview
                    </h5>
                    <p className="desc">
                      Explore the trip outline for {detailContent.title}. The operator can confirm the full route, meeting point, and inclusions for your dates.
                    </p>
                  </div>
                  <div className="highlight-area">
                    <h5 className="title">Before you book</h5>
                    <ul>
                      {tour && <li><i className="fa-regular fa-check"></i> {tour.days} days in {tour.location}</li>}
                      <li><i className="fa-regular fa-check"></i> Confirm departure dates and the minimum group size.</li>
                      <li><i className="fa-regular fa-check"></i> Ask about transfers, equipment, and accessibility needs.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="itinerary" role="tabpanel" aria-labelledby="itinerary-tab">
                <div className="tab-content-inner">
                  <div className="itinerary-area">
                    <div className="itinerary-header">
                      <h2>
                        Itinerary
                      </h2>
                      <div className="expand-toggle">
                        <span>
                          Expand all
                        </span>
                        <label className="switch">
                          <input type="checkbox" id="expandAll" aria-label="Expand all itinerary items" />
                          <span className="slider"></span>
                        </label>
                      </div>
                    </div>
                    <div className="itinerary-list">
                      {[
                        [
                          "Arrival and briefing",
                          "Meet your operator at the confirmed meeting point and review the schedule, equipment, and any local conditions that may affect the trip."
                        ],
                        [
                          "Main activities",
                          "Follow the activities confirmed with your operator. Timing may change with weather, transport, or the needs of the group."
                        ],
                        [
                          "Return and departure",
                          "Confirm the end point and onward transport before departure. Allow time between the end of the tour and any separate connections."
                        ]
                      ].map(([heading, body]) => (
                        <div className="itinerary-item" key={heading}>
                          <button type="button" className="itinerary-title" aria-expanded="false">{heading}</button>
                          <div className="itinerary-content"><p>{body}</p></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="cost" role="tabpanel" aria-labelledby="cost-tab">
                <div className="tab-content-inner">
                  <div className="highlight-area">
                    <h5 className="title">
                      Trip Cost Breakdown
                    </h5>
                    <p>{price ? `The demo listing shows ${price} per person. ` : ""}Ask for a quote with taxes, optional activities, and transfers itemized before booking.</p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                <div className="tab-content-inner">
                  <div className="itinerary-area faq">
                    <div className="itinerary-header">
                      <h2>
                        Frequently Asked Questions
                      </h2>
                      <div className="expand-toggle">
                        <span>
                          Expand all
                        </span>
                        <label className="switch">
                          <input type="checkbox" id="expandAll2" aria-label="Expand all frequently asked questions" />
                          <span className="slider"></span>
                        </label>
                      </div>
                    </div>
                    <div className="itinerary-list">
                      {[
                        [
                          "When should I book?",
                          "Use the enquiry form with your preferred dates and number of travelers. The operator can confirm space and the booking terms."
                        ],
                        [
                          "Do I need insurance?",
                          "Check the operator's terms and choose coverage for your destination and planned activities."
                        ],
                        [
                          "How do I confirm equipment and meals?",
                          "Ask the operator for a list of what is included and tell them about any dietary or accessibility requirements in advance."
                        ]
                      ].map(([heading, body]) => (
                        <div className="itinerary-item" key={heading}>
                          <button type="button" className="itinerary-title" aria-expanded="false">{heading}</button>
                          <div className="itinerary-content"><p>{body}</p></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="map" role="tabpanel" aria-labelledby="map-tab">
                <div className="tab-content-inner">
                  <div className="highlight-area">
                    <h5 className="title">
                      Tour Map
                    </h5>
                    {tour ? (
                      <div className="map-area overflow-hidden radius-10">
                        <iframe title={`Map of ${tour.location}`} className="radius-10" src={`https://maps.google.com/maps?q=${encodeURIComponent(tour.location)}&output=embed`} width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                      </div>
                    ) : <p>Request the meeting point and transfer details using the form below.</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-area content-box radius-10 border overflow-hidden">
            <h5 className="title mb--30">
              You can send your enquiry via the form below.
            </h5>
            <TourEnquiryForm title={detailContent.title}>
              <div className="input-div">
                <div className="row g-24">
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input type="text" name="firstName" placeholder="Enter your first name*" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input type="text" name="lastName" placeholder="Enter your last name*" required />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="single-input">
                      <input type="email" name="email" placeholder="Enter your email address..." required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input type="text" name="country" placeholder="Choose a country*" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input type="tel" name="phone" placeholder="Enter your contact number*" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input type="number" name="adults" min={1} placeholder="Number of adults*" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input type="number" name="children" min={0} placeholder="Number of children" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="single-input">
                      <textarea name="message" id="message" placeholder="Enter your message*" required></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="rts-btn btn-primary border">
                      Send Mail
                    </button>
                  </div>
                </div>
              </div>
            </TourEnquiryForm>
          </div>
        </div>
        <div className="right">
          <div className="sticky-top">
            <div className="content-box radius-10 border overflow-hidden pricing-box">
              <div className="tour-overview-panel">
                <h5>{price ? `${price} / person` : "Request a Quote"}</h5>
                <p>Confirm dates and the final price with the operator.</p>
              </div>
              <a href="#contact-form" className="rts-btn btn-primary m-w-100 text-center border">
                Request Availability
              </a>
              <p className="desc">
                Need help with booking? 
                <a href="#contact-form">
                  Send Us A Message
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
