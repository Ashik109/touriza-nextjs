import Link from "next/link";

export default function Footer() {
  return (
  <div className="rts-footer-area-one yacht bg-dark pt--100 pb--30">
    <div className="container">
      <div className="footer-inner">
        <div className="left">
          <div className="single-footer-widget-one logo-area">
            <Link href="/" className="logo">
              <img className="light" src="/assets//images/logo/06.svg" alt="logo" />
            </Link>
            <p className="desc">
              Touriza Yachting &amp; Travel Co. 
              <br />
               Level 5, Marina Business Tower.
            </p>
            <ul className="get-in-touch">
              <li>
                <a href="#">
                  Phone: +971 55 123 4567
                </a>
              </li>
              <li>
                Monday – Saturday: 9:00 AM – 8:00 PM
              </li>
              <li>
                Sunday: Closed
              </li>
            </ul>
          </div>
        </div>
        <div className="single-footer-widget-one essential-links">
          <h6 className="title text-uppercase">
            Quick Links
          </h6>
          <ul>
            <li>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#BA6827"></path>
              </svg>
              <Link href="/tour">
                Featured Tours
              </Link>
            </li>
            <li>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#BA6827"></path>
              </svg>
              <Link href="/destination">
                Destinations
              </Link>
            </li>
            <li>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#BA6827"></path>
              </svg>
              <Link href="/about">
                About Us
              </Link>
            </li>
            <li>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#BA6827"></path>
              </svg>
              <Link href="/team">
                Travel Guiders
              </Link>
            </li>
            <li>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#BA6827"></path>
              </svg>
              <Link href="/tour">
                Tour Type
              </Link>
            </li>
          </ul>
        </div>
        <div className="single-footer-widget-one essential-links">
          <h6 className="title text-uppercase">
            Destination
          </h6>
          <ul>
            <li>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#119CE6"></path>
              </svg>
              <Link href="/destination/maldives">
                Maldives
              </Link>
            </li>
            <li>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#119CE6"></path>
              </svg>
              <Link href="/destination/greek-islands">
                Greek Islands
              </Link>
            </li>
            <li>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#119CE6"></path>
              </svg>
              <Link href="/destination/bali-indonesia">
                Bali, Indonesia
              </Link>
            </li>
            <li>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#119CE6"></path>
              </svg>
              <Link href="/destination/dubai-coastline">
                Dubai Coastline
              </Link>
            </li>
            <li>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#119CE6"></path>
              </svg>
              <Link href="/destination/new-york">
                New York
              </Link>
            </li>
          </ul>
        </div>
        <div className="single-footer-widget-one essential-links">
          <h6 className="title text-uppercase">
            Support
          </h6>
          <ul>
            <li>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#FFFFFF"></path>
              </svg>
              <Link href="/contact">
                Help Center
              </Link>
            </li>
            <li>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#FFFFFF"></path>
              </svg>
              <Link href="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#FFFFFF"></path>
              </svg>
              <Link href="/contact">
                Booking Guide
              </Link>
            </li>
            <li>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#FFFFFF"></path>
              </svg>
              <Link href="/contact">
                Privacy Policy
              </Link>
            </li>
            <li>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#FFFFFF"></path>
              </svg>
              <Link href="/contact">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div className="single-footer-widget-one get-app">
          <h6 className="title text-uppercase">
            Get App
          </h6>
          <div className="get-btn-area">
            <a href="#">
              <img src="/assets/images/footer/app-01.svg" alt="" />
            </a>
            <a href="#">
              <img src="/assets/images/footer/app-02.svg" alt="" />
            </a>
          </div>
          <div className="review-area">
            <ul>
              <li>
                <img src="/assets/images/footer/trust-02.svg" alt="" />
              </li>
              <li>
                <img src="/assets/images/footer/star-01.svg" alt="" />
              </li>
              <li>
                <p>
                  Based on 167 review
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="copyright-area-start">
            <p>
              Copyright © 2026 All Rights Reserved, Design by 
              <span>
                <Link href="/">
                  Touriza
                </Link>
              </span>
            </p>
            <ul>
              <li>
                <a href="#">
                  <img src="/assets/images/others/payment-01.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/images/others/payment-02.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/images/others/payment-03.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/images/others/payment-04.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
