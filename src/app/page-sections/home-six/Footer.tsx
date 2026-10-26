import Link from "next/link";

export default function Footer() {
  return (
  <div className="rts-footer-area-one tour-marketplace pt--100 pb--30">
    <div className="container">
      <div className="footer-inner">
        <div className="left">
          <div className="single-footer-widget-one logo-area">
            <a href="#" className="logo">
              <img className="light" src="/assets/images/logo/09.svg" alt="logo" />
            </a>
            <p className="desc">
              We take care of every detail you can travel with confidence ease.
            </p>
            <div className="get-btn-area d-flex flex-column gap-2">
              <a href="#">
                <img src="/assets/images/footer/app-01.svg" alt="" />
              </a>
              <a href="#">
                <img src="/assets/images/footer/app-02.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="mid d-flex justify-content-center">
          <div className="single-footer-widget-one essential-links">
            <h6 className="title">
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
            <h6 className="title">
              Popular Location
            </h6>
            <ul>
              <li>
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#BA6827"></path>
                </svg>
                <Link href="/destination/new-york">
                  New York
                </Link>
              </li>
              <li>
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#BA6827"></path>
                </svg>
                <Link href="/destination/cape-town">
                  Cape Town
                </Link>
              </li>
              <li>
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#BA6827"></path>
                </svg>
                <Link href="/destination/gold-coast">
                  Gold Coast
                </Link>
              </li>
              <li>
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#BA6827"></path>
                </svg>
                <Link href="/destination/fiji-islands">
                  Fiji Islands
                </Link>
              </li>
              <li>
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#BA6827"></path>
                </svg>
                <Link href="/destination/los-angeles">
                  Los Angeles
                </Link>
              </li>
            </ul>
          </div>
          <div className="single-footer-widget-one essential-links">
            <h6 className="title">
              Support
            </h6>
            <ul>
              <li>
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#119CE6"></path>
                </svg>
                <Link href="/contact">
                  Help Center
                </Link>
              </li>
              <li>
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#119CE6"></path>
                </svg>
                <Link href="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#119CE6"></path>
                </svg>
                <Link href="/contact">
                  Booking Guide
                </Link>
              </li>
              <li>
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#119CE6"></path>
                </svg>
                <Link href="/contact">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#119CE6"></path>
                </svg>
                <Link href="/contact">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="footer-input-main-wrapper-one">
            <div className="single-footer-widget-one">
              <h6 className="title">
                Newsletter
              </h6>
              <p className="desc">
                Subscribe to our newsletter
              </p>
              <form action="#">
                <input type="email" placeholder="Email address.." required />
                <button className="rts-btn btn-primary border">
                  Subscribe
                </button>
              </form>
            </div>
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
