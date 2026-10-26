import Link from "next/link";
import type { CSSProperties } from "react";

export default function Tours() {
  return (
  <div className="rts-tour-area inner rts-section-gap">
    <div className="container">
      <div className="section-inner">
        <div className="row g-5">
          <div className="col-lg-12">
            <div className="filter-small-top-full mb--30">
              <div className="left-filter">
                <span>
                  15 tours found
                </span>
              </div>
              <div className="right-filter">
                <span className="filter">
                  Clear Filter
                </span>
                <div className="form-area">
                  <div className="custom-select">
                    <span className="dropdown-icon">
                      <i className="fa-solid fa-chevron-down"></i>
                    </span>
                    <div className="custom-select-trigger">
                      Short By
                    </div>
                    <ul className="custom-options" style={{ "height": "0px" } as CSSProperties}>
                      <li className="option selected" data-value="1">
                        Hiking
                      </li>
                      <li className="option" data-value="2">
                        Air Ballon
                      </li>
                      <li className="option" data-value="3">
                        Jungle Safari
                      </li>
                      <li className="option" data-value="4">
                        Paragliding
                      </li>
                      <li className="option" data-value="5">
                        SightSeeing
                      </li>
                      <li className="option" data-value="6">
                        Peak Climbing
                      </li>
                      <li className="option" data-value="7">
                        Scuba Diving
                      </li>
                      <li className="option" data-value="8">
                        Travel
                      </li>
                      <li className="option" data-value="9">
                        SightSeeing
                      </li>
                      <li className="option" data-value="10">
                        SightSeeing
                      </li>
                    </ul>
                    <input type="hidden" name="child" defaultValue="1" />
                  </div>
                </div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                      <i className="fa-light fa-grid-2"></i>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                      <i className="fa-light fa-list"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row g-5">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="tour-wrapper radius-10 image-transform border">
                      <div className="image-area radius-6">
                        <Link href="/tour/7-days-in-bali-paradise">
                          <img className="hover-image" src="/assets/images/trip/05.webp" alt="" />
                          <span className="tag">
                            $499/person
                          </span>
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/tour/7-days-in-bali-paradise">
                            7 Days in Bali Paradise
                          </Link>
                        </h6>
                        <ul className="meta-content">
                          <li>
                            <i className="fa-light fa-location-dot"></i>
                             Indonesia
                          </li>
                          <li>
                            <i className="fa-light fa-clock"></i>
                             7 Days/6 Nights
                          </li>
                        </ul>
                        <div className="star-rating-area">
                          <ul className="stars">
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-regular fa-star"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="desc">
                            (4.8/5 from 120 reviews)
                          </p>
                        </div>
                        <div className="button-area">
                          <Link href="/tour/7-days-in-bali-paradise" className="rts-btn btn-primary border">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="tour-wrapper radius-10 image-transform border">
                      <div className="image-area radius-6">
                        <Link href="/tour/luxury-beach-escape">
                          <img className="hover-image" src="/assets/images/trip/06.webp" alt="" />
                          <span className="tag">
                            $799/person
                          </span>
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/tour/luxury-beach-escape">
                            Luxury Beach Escape
                          </Link>
                        </h6>
                        <ul className="meta-content">
                          <li>
                            <i className="fa-light fa-location-dot"></i>
                             Maldives
                          </li>
                          <li>
                            <i className="fa-light fa-clock"></i>
                             5 Days/4 Nights
                          </li>
                        </ul>
                        <div className="star-rating-area">
                          <ul className="stars">
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-regular fa-star"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="desc">
                            (4.8/5 from 120 reviews)
                          </p>
                        </div>
                        <div className="button-area">
                          <Link href="/tour/luxury-beach-escape" className="rts-btn btn-primary border">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="tour-wrapper radius-10 image-transform border">
                      <div className="image-area radius-6">
                        <Link href="/tour/himalayan-cultural-tour">
                          <img className="hover-image" src="/assets/images/trip/07.webp" alt="" />
                          <span className="tag">
                            $420/person
                          </span>
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/tour/himalayan-cultural-tour">
                            Himalayan Cultural Tour
                          </Link>
                        </h6>
                        <ul className="meta-content">
                          <li>
                            <i className="fa-light fa-location-dot"></i>
                             Nepal
                          </li>
                          <li>
                            <i className="fa-light fa-clock"></i>
                             4 Days/3 Nights
                          </li>
                        </ul>
                        <div className="star-rating-area">
                          <ul className="stars">
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-regular fa-star"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="desc">
                            (4.8/5 from 120 reviews)
                          </p>
                        </div>
                        <div className="button-area">
                          <Link href="/tour/himalayan-cultural-tour" className="rts-btn btn-primary border">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="tour-wrapper radius-10 image-transform border">
                      <div className="image-area radius-6">
                        <Link href="/tour/white-walls-of-santorini">
                          <img className="hover-image" src="/assets/images/trip/08.webp" alt="" />
                          <span className="tag">
                            $1,250/person
                          </span>
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/tour/white-walls-of-santorini">
                            White Walls of Santorini
                          </Link>
                        </h6>
                        <ul className="meta-content">
                          <li>
                            <i className="fa-light fa-location-dot"></i>
                             Greece
                          </li>
                          <li>
                            <i className="fa-light fa-clock"></i>
                             6 Days / 5 Nights
                          </li>
                        </ul>
                        <div className="star-rating-area">
                          <ul className="stars">
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-regular fa-star"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="desc">
                            (4.8/5 from 120 reviews)
                          </p>
                        </div>
                        <div className="button-area">
                          <Link href="/tour/white-walls-of-santorini" className="rts-btn btn-primary border">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="tour-wrapper radius-10 image-transform border">
                      <div className="image-area radius-6">
                        <Link href="/tour/luxury-beach-escape">
                          <img className="hover-image" src="/assets/images/trip/06.webp" alt="" />
                          <span className="tag">
                            $799/person
                          </span>
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/tour/luxury-beach-escape">
                            Luxury Beach Escape
                          </Link>
                        </h6>
                        <ul className="meta-content">
                          <li>
                            <i className="fa-light fa-location-dot"></i>
                             Maldives
                          </li>
                          <li>
                            <i className="fa-light fa-clock"></i>
                             5 Days/4 Nights
                          </li>
                        </ul>
                        <div className="star-rating-area">
                          <ul className="stars">
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-regular fa-star"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="desc">
                            (4.8/5 from 120 reviews)
                          </p>
                        </div>
                        <div className="button-area">
                          <Link href="/tour/luxury-beach-escape" className="rts-btn btn-primary border">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="tour-wrapper radius-10 image-transform border">
                      <div className="image-area radius-6">
                        <Link href="/tour/himalayan-cultural-tour">
                          <img className="hover-image" src="/assets/images/trip/07.webp" alt="" />
                          <span className="tag">
                            $420/person
                          </span>
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/tour/himalayan-cultural-tour">
                            Himalayan Cultural Tour
                          </Link>
                        </h6>
                        <ul className="meta-content">
                          <li>
                            <i className="fa-light fa-location-dot"></i>
                             Nepal
                          </li>
                          <li>
                            <i className="fa-light fa-clock"></i>
                             4 Days/3 Nights
                          </li>
                        </ul>
                        <div className="star-rating-area">
                          <ul className="stars">
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-regular fa-star"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="desc">
                            (4.8/5 from 120 reviews)
                          </p>
                        </div>
                        <div className="button-area">
                          <Link href="/tour/himalayan-cultural-tour" className="rts-btn btn-primary border">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="tour-wrapper radius-10 image-transform border">
                      <div className="image-area radius-6">
                        <Link href="/tour/white-walls-of-santorini">
                          <img className="hover-image" src="/assets/images/trip/08.webp" alt="" />
                          <span className="tag">
                            $1,250/person
                          </span>
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/tour/white-walls-of-santorini">
                            White Walls of Santorini
                          </Link>
                        </h6>
                        <ul className="meta-content">
                          <li>
                            <i className="fa-light fa-location-dot"></i>
                             Greece
                          </li>
                          <li>
                            <i className="fa-light fa-clock"></i>
                             6 Days / 5 Nights
                          </li>
                        </ul>
                        <div className="star-rating-area">
                          <ul className="stars">
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-regular fa-star"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="desc">
                            (4.8/5 from 120 reviews)
                          </p>
                        </div>
                        <div className="button-area">
                          <Link href="/tour/white-walls-of-santorini" className="rts-btn btn-primary border">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="tour-wrapper radius-10 image-transform border">
                      <div className="image-area radius-6">
                        <Link href="/tour/white-walls-of-santorini">
                          <img className="hover-image" src="/assets/images/trip/08.webp" alt="" />
                          <span className="tag">
                            $1,250/person
                          </span>
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/tour/white-walls-of-santorini">
                            White Walls of Santorini
                          </Link>
                        </h6>
                        <ul className="meta-content">
                          <li>
                            <i className="fa-light fa-location-dot"></i>
                             Greece
                          </li>
                          <li>
                            <i className="fa-light fa-clock"></i>
                             6 Days / 5 Nights
                          </li>
                        </ul>
                        <div className="star-rating-area">
                          <ul className="stars">
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-regular fa-star"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="desc">
                            (4.8/5 from 120 reviews)
                          </p>
                        </div>
                        <div className="button-area">
                          <Link href="/tour/white-walls-of-santorini" className="rts-btn btn-primary border">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="tour-wrapper radius-10 image-transform border">
                      <div className="image-area radius-6">
                        <Link href="/tour/white-walls-of-santorini">
                          <img className="hover-image" src="/assets/images/trip/08.webp" alt="" />
                          <span className="tag">
                            $1,250/person
                          </span>
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/tour/white-walls-of-santorini">
                            White Walls of Santorini
                          </Link>
                        </h6>
                        <ul className="meta-content">
                          <li>
                            <i className="fa-light fa-location-dot"></i>
                             Greece
                          </li>
                          <li>
                            <i className="fa-light fa-clock"></i>
                             6 Days / 5 Nights
                          </li>
                        </ul>
                        <div className="star-rating-area">
                          <ul className="stars">
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-regular fa-star"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="desc">
                            (4.8/5 from 120 reviews)
                          </p>
                        </div>
                        <div className="button-area">
                          <Link href="/tour/white-walls-of-santorini" className="rts-btn btn-primary border">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="tour-wrapper radius-10 image-transform border">
                      <div className="image-area radius-6">
                        <Link href="/tour/white-walls-of-santorini">
                          <img className="hover-image" src="/assets/images/trip/08.webp" alt="" />
                          <span className="tag">
                            $1,250/person
                          </span>
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/tour/white-walls-of-santorini">
                            White Walls of Santorini
                          </Link>
                        </h6>
                        <ul className="meta-content">
                          <li>
                            <i className="fa-light fa-location-dot"></i>
                             Greece
                          </li>
                          <li>
                            <i className="fa-light fa-clock"></i>
                             6 Days / 5 Nights
                          </li>
                        </ul>
                        <div className="star-rating-area">
                          <ul className="stars">
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-regular fa-star"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="desc">
                            (4.8/5 from 120 reviews)
                          </p>
                        </div>
                        <div className="button-area">
                          <Link href="/tour/white-walls-of-santorini" className="rts-btn btn-primary border">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="tour-wrapper radius-10 image-transform border">
                      <div className="image-area radius-6">
                        <Link href="/tour/white-walls-of-santorini">
                          <img className="hover-image" src="/assets/images/trip/08.webp" alt="" />
                          <span className="tag">
                            $1,250/person
                          </span>
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/tour/white-walls-of-santorini">
                            White Walls of Santorini
                          </Link>
                        </h6>
                        <ul className="meta-content">
                          <li>
                            <i className="fa-light fa-location-dot"></i>
                             Greece
                          </li>
                          <li>
                            <i className="fa-light fa-clock"></i>
                             6 Days / 5 Nights
                          </li>
                        </ul>
                        <div className="star-rating-area">
                          <ul className="stars">
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-regular fa-star"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="desc">
                            (4.8/5 from 120 reviews)
                          </p>
                        </div>
                        <div className="button-area">
                          <Link href="/tour/white-walls-of-santorini" className="rts-btn btn-primary border">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="tour-wrapper radius-10 image-transform border">
                      <div className="image-area radius-6">
                        <Link href="/tour/white-walls-of-santorini">
                          <img className="hover-image" src="/assets/images/trip/08.webp" alt="" />
                          <span className="tag">
                            $1,250/person
                          </span>
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="/tour/white-walls-of-santorini">
                            White Walls of Santorini
                          </Link>
                        </h6>
                        <ul className="meta-content">
                          <li>
                            <i className="fa-light fa-location-dot"></i>
                             Greece
                          </li>
                          <li>
                            <i className="fa-light fa-clock"></i>
                             6 Days / 5 Nights
                          </li>
                        </ul>
                        <div className="star-rating-area">
                          <ul className="stars">
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-regular fa-star"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="desc">
                            (4.8/5 from 120 reviews)
                          </p>
                        </div>
                        <div className="button-area">
                          <Link href="/tour/white-walls-of-santorini" className="rts-btn btn-primary border">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="row g-5">
                  <div className="col-lg-12">
                    <div className="tour-list-area d-flex flex-column gap-5">
                      <div className="tour-wrapper-list radius-10 overflow-hidden image-transform border">
                        <div className="image-area radius-0 overflow-hidden">
                          <Link href="/tour/wonders-of-the-world-one-trip-at-a-time">
                            <img className="hover-image" src="/assets/images/trip/17.webp" width="300" alt="" />
                            <span className="tag">
                              $499/person
                            </span>
                          </Link>
                        </div>
                        <div className="content">
                          <div className="left">
                            <ul className="meta-content">
                              <li>
                                <i className="fa-light fa-location-dot"></i>
                                 Indonesia
                              </li>
                              <li>
                                <i className="fa-light fa-clock"></i>
                                 3 Days
                              </li>
                              <li>
                                <img src="/assets/images/trip/icon/01.svg" alt="" />
                                 0 - 4
                              </li>
                            </ul>
                            <h5 className="title">
                              <Link href="/tour/wonders-of-the-world-one-trip-at-a-time">
                                Wonders of the World, One Trip at a Time
                              </Link>
                            </h5>
                            <p className="desc">
                              Embark on a mesmerizing guided tour through the breathtaking blue ice caves of Vatnajökull Europe’s largest glacier.
                            </p>
                            <div className="star-rating-area">
                              <ul className="stars">
                                <li>
                                  <a href="#">
                                    <i className="fa-solid fa-star"></i>
                                  </a>
                                </li>
                              </ul>
                              <p className="desc">
                                5 (2 review)
                              </p>
                            </div>
                          </div>
                          <div className="button-area">
                            <div className="price-area">
                              <span className="current">
                                $1,200
                              </span>
                              <div className="previous">
                                $1,400
                              </div>
                            </div>
                            <Link href="/tour/wonders-of-the-world-one-trip-at-a-time" className="rts-btn btn-primary border">
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="tour-wrapper-list radius-10 overflow-hidden image-transform border">
                        <div className="image-area radius-0 overflow-hidden">
                          <Link href="/tour/the-luxury-island-hopper-experience-3-exotic-islands">
                            <img className="hover-image" src="/assets/images/trip/18.webp" width="300" alt="" />
                            <span className="tag">
                              $499/person
                            </span>
                          </Link>
                        </div>
                        <div className="content">
                          <div className="left">
                            <ul className="meta-content">
                              <li>
                                <i className="fa-light fa-location-dot"></i>
                                 Indonesia
                              </li>
                              <li>
                                <i className="fa-light fa-clock"></i>
                                 3 Days
                              </li>
                              <li>
                                <img src="/assets/images/trip/icon/01.svg" alt="" />
                                 0 - 4
                              </li>
                            </ul>
                            <h5 className="title">
                              <Link href="/tour/the-luxury-island-hopper-experience-3-exotic-islands">
                                The Luxury Island Hopper Experience 3 Exotic Islands.
                              </Link>
                            </h5>
                            <p className="desc">
                              Embark on a mesmerizing guided tour through the breathtaking blue ice caves of Vatnajökull Europe’s largest glacier.
                            </p>
                            <div className="star-rating-area">
                              <ul className="stars">
                                <li>
                                  <a href="#">
                                    <i className="fa-solid fa-star"></i>
                                  </a>
                                </li>
                              </ul>
                              <p className="desc">
                                5 (2 review)
                              </p>
                            </div>
                          </div>
                          <div className="button-area">
                            <div className="price-area">
                              <span className="current">
                                $1,200
                              </span>
                              <div className="previous">
                                $1,400
                              </div>
                            </div>
                            <Link href="/tour/the-luxury-island-hopper-experience-3-exotic-islands" className="rts-btn btn-primary border">
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="tour-wrapper-list radius-10 overflow-hidden image-transform border">
                        <div className="image-area radius-0 overflow-hidden">
                          <Link href="/tour/beginner-hike-through-vatnaj-kull-ice-caves">
                            <img className="hover-image" src="/assets/images/trip/19.webp" width="300" alt="" />
                            <span className="tag">
                              $499/person
                            </span>
                          </Link>
                        </div>
                        <div className="content">
                          <div className="left">
                            <ul className="meta-content">
                              <li>
                                <i className="fa-light fa-location-dot"></i>
                                 Indonesia
                              </li>
                              <li>
                                <i className="fa-light fa-clock"></i>
                                 3 Days
                              </li>
                              <li>
                                <img src="/assets/images/trip/icon/01.svg" alt="" />
                                 0 - 4
                              </li>
                            </ul>
                            <h5 className="title">
                              <Link href="/tour/beginner-hike-through-vatnaj-kull-ice-caves">
                                Beginner hike through Vatnajökull ice caves.
                              </Link>
                            </h5>
                            <p className="desc">
                              Embark on a mesmerizing guided tour through the breathtaking blue ice caves of Vatnajökull Europe’s largest glacier.
                            </p>
                            <div className="star-rating-area">
                              <ul className="stars">
                                <li>
                                  <a href="#">
                                    <i className="fa-solid fa-star"></i>
                                  </a>
                                </li>
                              </ul>
                              <p className="desc">
                                5 (2 review)
                              </p>
                            </div>
                          </div>
                          <div className="button-area">
                            <div className="price-area">
                              <span className="current">
                                $1,200
                              </span>
                              <div className="previous">
                                $1,400
                              </div>
                            </div>
                            <Link href="/tour/beginner-hike-through-vatnaj-kull-ice-caves" className="rts-btn btn-primary border">
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="tour-wrapper-list radius-10 overflow-hidden image-transform border">
                        <div className="image-area radius-0 overflow-hidden">
                          <Link href="/tour/travel-in-comfort-inside-our-hotel-lifestyle">
                            <img className="hover-image" src="/assets/images/trip/20.webp" width="300" alt="" />
                            <span className="tag">
                              $499/person
                            </span>
                          </Link>
                        </div>
                        <div className="content">
                          <div className="left">
                            <ul className="meta-content">
                              <li>
                                <i className="fa-light fa-location-dot"></i>
                                 Indonesia
                              </li>
                              <li>
                                <i className="fa-light fa-clock"></i>
                                 3 Days
                              </li>
                              <li>
                                <img src="/assets/images/trip/icon/01.svg" alt="" />
                                 0 - 4
                              </li>
                            </ul>
                            <h5 className="title">
                              <Link href="/tour/travel-in-comfort-inside-our-hotel-lifestyle">
                                Travel in Comfort: Inside Our Hotel Lifestyle
                              </Link>
                            </h5>
                            <p className="desc">
                              Embark on a mesmerizing guided tour through the breathtaking blue ice caves of Vatnajökull Europe’s largest glacier.
                            </p>
                            <div className="star-rating-area">
                              <ul className="stars">
                                <li>
                                  <a href="#">
                                    <i className="fa-solid fa-star"></i>
                                  </a>
                                </li>
                              </ul>
                              <p className="desc">
                                5 (2 review)
                              </p>
                            </div>
                          </div>
                          <div className="button-area">
                            <div className="price-area">
                              <span className="current">
                                $1,200
                              </span>
                              <div className="previous">
                                $1,400
                              </div>
                            </div>
                            <Link href="/tour/travel-in-comfort-inside-our-hotel-lifestyle" className="rts-btn btn-primary border">
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="tour-wrapper-list radius-10 overflow-hidden image-transform border">
                        <div className="image-area radius-0 overflow-hidden">
                          <Link href="/tour/hospitality-at-heart-stories-from-our-travel">
                            <img className="hover-image" src="/assets/images/trip/21.webp" width="300" alt="" />
                            <span className="tag">
                              $499/person
                            </span>
                          </Link>
                        </div>
                        <div className="content">
                          <div className="left">
                            <ul className="meta-content">
                              <li>
                                <i className="fa-light fa-location-dot"></i>
                                 Nepal
                              </li>
                              <li>
                                <i className="fa-light fa-clock"></i>
                                 3 Days
                              </li>
                              <li>
                                <img src="/assets/images/trip/icon/01.svg" alt="" />
                                 0 - 4
                              </li>
                            </ul>
                            <h5 className="title">
                              <Link href="/tour/hospitality-at-heart-stories-from-our-travel">
                                Hospitality at Heart Stories From Our Travel
                              </Link>
                            </h5>
                            <p className="desc">
                              Embark on a mesmerizing guided tour through the breathtaking blue ice caves of Vatnajökull Europe’s largest glacier.
                            </p>
                            <div className="star-rating-area">
                              <ul className="stars">
                                <li>
                                  <a href="#">
                                    <i className="fa-solid fa-star"></i>
                                  </a>
                                </li>
                              </ul>
                              <p className="desc">
                                5 (2 review)
                              </p>
                            </div>
                          </div>
                          <div className="button-area">
                            <div className="price-area">
                              <span className="current">
                                $1,200
                              </span>
                              <div className="previous">
                                $1,400
                              </div>
                            </div>
                            <Link href="/tour/hospitality-at-heart-stories-from-our-travel" className="rts-btn btn-primary border">
                              View Details
                            </Link>
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
        <div className="rts-course-pagination-area mt--50">
          <ul>
            <li>
              <button className="active">
                01
              </button>
            </li>
            <li>
              <button>
                02
              </button>
            </li>
            <li>
              <button>
                <i className="fa-regular fa-chevron-right"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}
