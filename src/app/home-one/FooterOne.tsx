import Link from "next/link";
import { destinationDetailPath } from "../../data/details";

const quickLinks = [
  ["Featured Tours", "/tour"],
  ["Destinations", "/destination"],
  ["About Us", "/about"],
  ["Travel Guiders", "/team"],
  ["Tour Type", "/tour"],
];

const popularLocations = ["New York", "Cape Town", "Gold Coast", "Fiji Islands", "Los Angeles"];

function ArrowIcon() {
  return (
    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 0L6.75 5L0.5 10V0Z" fill="#BA6827" />
    </svg>
  );
}

export default function FooterOne() {
  return (
    <div className="rts-footer-area-one pt--100 pb--30">
      <div className="container">
        <div className="footer-inner">
          <div className="left">
            <div className="single-footer-widget-one logo-area">
              <a href="#" className="logo">
                <img className="light" src="/assets/images/logo/02.svg" alt="logo" />
              </a>
              <p className="desc">We take care of every detail you can travel with confidence ease.</p>
              <div className="call-us">
                <div className="icon"><img src="/assets/images/others/01.svg" alt="" /></div>
                <div className="text">
                  <p>Call Us 24/7</p>
                  <h5><a href="call-to:25621452156">(+256) 2145 2156</a></h5>
                </div>
              </div>
              <ul className="social-area">
                <li>Follow Us -</li>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="mid d-flex justify-content-center">
            <div className="single-footer-widget-one essential-links">
              <h6 className="title">Quick Links</h6>
              <ul>
                {quickLinks.map(([label, href]) => (
                  <li key={label}><ArrowIcon /><Link href={href}>{label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="single-footer-widget-one essential-links">
              <h6 className="title">Popular Location</h6>
              <ul>
                {popularLocations.map((location) => (
                  <li key={location}><ArrowIcon /><Link href={destinationDetailPath(location)}>{location}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="footer-input-main-wrapper-one">
              <div className="single-footer-widget-one">
                <h6 className="title">Newsletter</h6>
                <p className="desc">Subscribe to our newsletter</p>
                <form action="#">
                  <input className="radius-6" type="email" placeholder="Email address.." required />
                  <button className="rts-btn btn-primary radius-6 border">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright-area-start">
              <p>Copyright © 2026 All Rights Reserved, Design by&nbsp;<span><Link href="/">Touriza</Link></span></p>
              <ul>
                {["01", "02", "03", "04"].map((payment) => (
                  <li key={payment}><a href="#"><img src={`/assets/images/others/payment-${payment}.svg`} alt="" /></a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
