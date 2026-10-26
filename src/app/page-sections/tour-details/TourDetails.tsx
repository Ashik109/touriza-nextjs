import type { CSSProperties } from "react";
import type { DetailContent } from "@/data/details";

export default function TourDetails({ detailContent }: { detailContent: DetailContent }) {
  return (
  <div className="rts-tour-details-area pt--60 rts-section-gapBottom bg-white">
    <div className="container">
      <div className="top-image-area">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="image image-transform radius-10 overflow-hidden" style={{ "height": "100%" } as CSSProperties}>
              <img className="hover-image" src={`/${detailContent.image.replace(/^\//, "")}`} alt="" style={{ "height": "100%", "objectFit": "cover" } as CSSProperties} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-image">
              <div className="row g-5">
                <div className="col-lg-12">
                  <div className="image image-transform radius-10 overflow-hidden">
                    <img className="hover-image" src="/assets/images/trip/23.webp" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="image image-transform radius-10 overflow-hidden">
                    <img className="hover-image" src="/assets/images/trip/24.webp" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="image image-transform radius-10 overflow-hidden">
                    <img className="hover-image" src="/assets/images/trip/25.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-content-area g-5 mt--50">
        <div className="left">
          <div className="tour-details-wrapper content-box radius-10 border overflow-hidden">
            <div className="tour-content">
              <div className="left-content">
                <h4 className="title">
                  {detailContent.title}
                </h4>
                <ul className="meta-area">
                  <li>
                    <i className="fa-solid fa-star-sharp"></i>
                     5 (2 review)
                  </li>
                  <li>
                    <i className="fa-regular fa-location-dot"></i>
                     Maldives
                  </li>
                </ul>
              </div>
              <div className="right-content">
                <div className="day-left">
                  <h4>
                    07
                  </h4>
                  <p>
                    days
                  </p>
                </div>
              </div>
            </div>
            <ul className="feature-list-area">
              <li>
                <div className="icon">
                  <img src="/assets/images/trip/icon/03.svg" alt="" />
                </div>
                <div className="text">
                  <p>
                    Transportation
                  </p>
                  <h6>
                    Bus, Airlines
                  </h6>
                </div>
              </li>
              <li>
                <div className="icon">
                  <img src="/assets/images/trip/icon/04.svg" alt="" />
                </div>
                <div className="text">
                  <p>
                    Accommodation
                  </p>
                  <h6>
                    5 Stars Hotels
                  </h6>
                </div>
              </li>
              <li>
                <div className="icon">
                  <img src="/assets/images/trip/icon/05.svg" alt="" />
                </div>
                <div className="text">
                  <p>
                    Maximum Altitude
                  </p>
                  <h6>
                    5,416 metres
                  </h6>
                </div>
              </li>
              <li>
                <div className="icon">
                  <img src="/assets/images/trip/icon/06.svg" alt="" />
                </div>
                <div className="text">
                  <p>
                    Departure from
                  </p>
                  <h6>
                    Bus, Airlines
                  </h6>
                </div>
              </li>
              <li>
                <div className="icon">
                  <img src="/assets/images/trip/icon/07.svg" alt="" />
                </div>
                <div className="text">
                  <p>
                    Best season
                  </p>
                  <h6>
                    Feb To May
                  </h6>
                </div>
              </li>
              <li>
                <div className="icon">
                  <img src="/assets/images/trip/icon/08.svg" alt="" />
                </div>
                <div className="text">
                  <p>
                    Tour type
                  </p>
                  <h6>
                    Eco-Tour, Hiking
                  </h6>
                </div>
              </li>
              <li>
                <div className="icon">
                  <img src="/assets/images/trip/icon/09.svg" alt="" />
                </div>
                <div className="text">
                  <p>
                    Meals
                  </p>
                  <h6>
                    Meals Included
                  </h6>
                </div>
              </li>
              <li>
                <div className="icon">
                  <img src="/assets/images/trip/icon/10.svg" alt="" />
                </div>
                <div className="text">
                  <p>
                    Language
                  </p>
                  <h6>
                    EN, ES, FR, CN
                  </h6>
                </div>
              </li>
              <li>
                <div className="icon">
                  <img src="/assets/images/trip/icon/11.svg" alt="" />
                </div>
                <div className="text">
                  <p>
                    Fitness level
                  </p>
                  <h6>
                    Feb To May
                  </h6>
                </div>
              </li>
              <li>
                <div className="icon">
                  <img src="/assets/images/trip/icon/12.svg" alt="" />
                </div>
                <div className="text">
                  <p>
                    Group Size
                  </p>
                  <h6>
                    7 - 14
                  </h6>
                </div>
              </li>
              <li>
                <div className="icon">
                  <img src="/assets/images/trip/icon/13.svg" alt="" />
                </div>
                <div className="text">
                  <p>
                    Minimum Age
                  </p>
                  <h6>
                    14
                  </h6>
                </div>
              </li>
              <li>
                <div className="icon">
                  <img src="/assets/images/trip/icon/13.svg" alt="" />
                </div>
                <div className="text">
                  <p>
                    Maximus Age
                  </p>
                  <h6>
                    60
                  </h6>
                </div>
              </li>
            </ul>
          </div>
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
                      Join us on an unforgettable journey through majestic mountain trails, alpine forests, and glacial paths. This guided hiking expedition offers a mix of scenic beauty, cultural encounters, and a rewarding physical challenge. Whether you're an adventurer or a nature lover, this trek promises memories for a lifetime.
                    </p>
                  </div>
                  <div className="highlight-area">
                    <h5 className="title">
                      Highlights:
                    </h5>
                    <ul>
                      <li>
                        <i className="fa-regular fa-check"></i>
                         Duration: 10 Days / 9 Nights
                      </li>
                      <li>
                        <i className="fa-regular fa-check"></i>
                         Difficulty: Moderate to High
                      </li>
                      <li>
                        <i className="fa-regular fa-check"></i>
                         Max Altitude: 5,364m (Everest Base Camp example)
                      </li>
                      <li>
                        <i className="fa-regular fa-check"></i>
                         Group Size: 8–15 people
                      </li>
                      <li>
                        <i className="fa-regular fa-check"></i>
                         Guide: Professional Local Guide Included
                      </li>
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
                          <input type="checkbox" id="expandAll" />
                          <span className="slider"></span>
                        </label>
                      </div>
                    </div>
                    <div className="itinerary-list">
                      <div className="itinerary-item">
                        <button className="itinerary-title">
                          <span className="icon">
                            <img src="/assets/images/trip/icon/14.svg" alt="" />
                          </span>
                           Day 1 – Arrival In Kathmandu
                        </button>
                        <div className="itinerary-content">
                          <p>
                            Arrive at Tribhuvan International Airport. Meet your guide, transfer to hotel. Evening briefing session.
                          </p>
                        </div>
                      </div>
                      <div className="itinerary-item">
                        <button className="itinerary-title">
                          Day 2 – Fly To Lukla (2,860m) &amp; Trek To Phakding (2,610m)
                        </button>
                        <div className="itinerary-content">
                          <p>
                            Fly to Lukla and trek to Phakding through scenic mountain trails.
                          </p>
                        </div>
                      </div>
                      <div className="itinerary-item">
                        <button className="itinerary-title">
                          Day 3 – Trek To Namche Bazaar (3,440m)
                        </button>
                        <div className="itinerary-content">
                          <p>
                            Trek through pine forests and cross suspension bridges to reach Namche Bazaar.
                          </p>
                        </div>
                      </div>
                      <div className="itinerary-item">
                        <button className="itinerary-title">
                          Day 4 – Acclimatization At Namche Bazaar
                        </button>
                        <div className="itinerary-content">
                          <p>
                            Spend the day acclimatizing, exploring local markets, and enjoying the views.
                          </p>
                        </div>
                      </div>
                      <div className="itinerary-item">
                        <button className="itinerary-title">
                          Day 5 – Trek To Tengboche (3,870m)
                        </button>
                        <div className="itinerary-content">
                          <p>
                            Hike to Tengboche Monastery with panoramic views of Everest and Ama Dablam.
                          </p>
                        </div>
                      </div>
                      <div className="itinerary-item">
                        <button className="itinerary-title">
                          Day 6 – Trek To Dingboche (4,410m)
                        </button>
                        <div className="itinerary-content">
                          <p>
                            Trek to Dingboche through beautiful valleys and alpine landscapes.
                          </p>
                        </div>
                      </div>
                      <div className="itinerary-item">
                        <button className="itinerary-title">
                          <span className="icon-2">
                            <img src="/assets/images/trip/icon/15.svg" alt="" />
                          </span>
                          Day 7 – Trek To Lobuche (4,940m)
                        </button>
                        <div className="itinerary-content">
                          <p>
                            Continue your ascent with breathtaking views on the way to Lobuche.
                          </p>
                        </div>
                      </div>
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
                    <ul className="mb--30">
                      <li className="tag mb--10 c-p">
                        Included:
                      </li>
                      <li>
                        <i className="fa-regular fa-check"></i>
                         Duration: 10 Days / 9 Nights
                      </li>
                      <li>
                        <i className="fa-regular fa-check"></i>
                         Difficulty: Moderate to High
                      </li>
                      <li>
                        <i className="fa-regular fa-check"></i>
                         Max Altitude: 5,364m (Everest Base Camp example)
                      </li>
                      <li>
                        <i className="fa-regular fa-check"></i>
                         Group Size: 8–15 people
                      </li>
                      <li>
                        <i className="fa-regular fa-check"></i>
                         Guide: Professional Local Guide Included
                      </li>
                    </ul>
                    <ul>
                      <li className="tag mb--10 c-p">
                        Not Included:
                      </li>
                      <li>
                        <i className="fa-regular fa-check"></i>
                         Duration: 10 Days / 9 Nights
                      </li>
                      <li>
                        <i className="fa-regular fa-check"></i>
                         Difficulty: Moderate to High
                      </li>
                      <li>
                        <i className="fa-regular fa-check"></i>
                         Max Altitude: 5,364m (Everest Base Camp example)
                      </li>
                      <li>
                        <i className="fa-regular fa-check"></i>
                         Group Size: 8–15 people
                      </li>
                      <li>
                        <i className="fa-regular fa-check"></i>
                         Guide: Professional Local Guide Included
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                <div className="tab-content-inner">
                  <div className="itinerary-area faq">
                    <div className="itinerary-header">
                      <h2>
                        Frequently Ask Questions
                      </h2>
                      <div className="expand-toggle">
                        <span>
                          Expand all
                        </span>
                        <label className="switch">
                          <input type="checkbox" id="expandAll2" />
                          <span className="slider"></span>
                        </label>
                      </div>
                    </div>
                    <div className="itinerary-list">
                      <div className="itinerary-item">
                        <button className="itinerary-title">
                          <span className="icon">
                            <img src="/assets/images/trip/icon/14.svg" alt="" />
                          </span>
                           What is the difficulty level?
                        </button>
                        <div className="itinerary-content">
                          <p>
                            Arrive at Tribhuvan International Airport. Meet your guide, transfer to hotel. Evening briefing session.
                          </p>
                        </div>
                      </div>
                      <div className="itinerary-item">
                        <button className="itinerary-title">
                          Do I need travel insurance?
                        </button>
                        <div className="itinerary-content">
                          <p>
                            Fly to Lukla and trek to Phakding through scenic mountain trails.
                          </p>
                        </div>
                      </div>
                      <div className="itinerary-item">
                        <button className="itinerary-title">
                          Can I rent gear locally?
                        </button>
                        <div className="itinerary-content">
                          <p>
                            Trek through pine forests and cross suspension bridges to reach Namche Bazaar.
                          </p>
                        </div>
                      </div>
                      <div className="itinerary-item">
                        <button className="itinerary-title">
                          Is altitude sickness a concern?
                        </button>
                        <div className="itinerary-content">
                          <p>
                            Spend the day acclimatizing, exploring local markets, and enjoying the views.
                          </p>
                        </div>
                      </div>
                      <div className="itinerary-item">
                        <button className="itinerary-title">
                          Are meals included?
                        </button>
                        <div className="itinerary-content">
                          <p>
                            Hike to Tengboche Monastery with panoramic views of Everest and Ama Dablam.
                          </p>
                        </div>
                      </div>
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
                    <div className="map-area overflow-hidden radius-10">
                      <iframe className="radius-10" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14881.10813512346!2d92.05130130003461!3d21.28584316293776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1761018831728!5m2!1sen!2sbd" width="600" height="450" style={{ "border": "0" } as CSSProperties} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-area content-box radius-10 border overflow-hidden">
            <h5 className="title mb--30">
              You can send your enquiry via the form below.
            </h5>
            <form id="contact-form" action="#" className="contact-form border radius-10 ">
              <div className="input-div">
                <div className="row g-24">
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input type="text" name="text" placeholder="Enter your first name*" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input type="text" name="text" placeholder="Enter your last name*" required />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="single-input">
                      <input type="email" name="email" placeholder="Enter your email address..." required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input type="text" name="text" placeholder="Choose a country*" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input type="text" name="text" placeholder="Enter your contact number*" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input type="number" name="number" placeholder="Enter numbers of adults*" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input type="number" name="number" placeholder="Enter number of children" required />
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
            </form>
          </div>
        </div>
        <div className="right">
          <div className="sticky-top">
            <div className="content-box radius-10 border overflow-hidden pricing-box">
              <p className="tag">
                20% OFF
              </p>
              <div className="price-area">
                <div className="price">
                  <div className="prev">
                    <h6>
                      From 
                      <span>
                        $699
                      </span>
                    </h6>
                  </div>
                  <div className="current">
                    <h5>
                      $499 
                      <span>
                        / Adult
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="price">
                  <div className="prev">
                    <h6>
                      From 
                      <span>
                        $699
                      </span>
                    </h6>
                  </div>
                  <div className="current">
                    <h5>
                      $499 
                      <span>
                        / Child
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="mid-area">
                <ul>
                  <li>
                    <i className="fa-regular fa-check"></i>
                     Best Price Guaranteed
                  </li>
                  <li>
                    <i className="fa-regular fa-check"></i>
                     Emergency Support
                  </li>
                  <li>
                    <i className="fa-regular fa-check"></i>
                     No Booking Fees
                  </li>
                  <li>
                    <i className="fa-regular fa-check"></i>
                     Professional Local Guide
                  </li>
                </ul>
              </div>
              <a href="#" className="rts-btn btn-primary m-w-100 text-center border">
                Check Availability
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
