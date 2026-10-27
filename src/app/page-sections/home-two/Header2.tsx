import Link from "next/link";
import type { CSSProperties } from "react";

export default function Header2() {
  return (
  <div id="side-bar" className="side-bar header-two">
    <button className="close-icon-menu">
      <i className="fa-sharp fa-thin fa-xmark"></i>
    </button>
    <Link className="logo" href="/">
      <img src="/assets/images/logo/04.svg" alt="" />
    </Link>
    <div className="mobile-menu-main">
      <nav className="nav-main mainmenu-nav mt--30">
        <ul className="mainmenu metismenu" id="mobile-menu-active">
          <li className="has-droupdown">
            <a href="#" className="main">
              Home
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <Link className="mobile-menu-link" href="/">
                  Travel Agency
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/home-two">
                  Hiking Travel
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/home-three">
                  Home Yacht
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/home-four">
                  Wild Travel
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/home-five">
                  Travel Africa
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/home-six">
                  Tour Marketplace
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/home-seven">
                  Summer Travel
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/home-eight">
                  Travel Agency Two
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/home-nine">
                  Kayaking
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/home-ten">
                  Car Camping
                </Link>
              </li>
            </ul>
          </li>
          <li className="has-droupdown">
            <a href="#" className="main">
              Tour
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <Link className="mobile-menu-link" href="/tour">
                  Tour One
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/tour-two">
                  Tour Two
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/tour-three">
                  Tour Three
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/tour-four">
                  Tour Four
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/tour-five">
                  Tour Five
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/tour/the-luxury-island-hopper">
                  Tour Details
                </Link>
              </li>
            </ul>
          </li>
          <li className="has-droupdown">
            <a href="#" className="main">
              Destinations
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <Link className="mobile-menu-link" href="/destination">
                  Destinations
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/destination/maldives">
                  Destinations Details
                </Link>
              </li>
            </ul>
          </li>
          <li className="has-droupdown">
            <a href="#" className="main">
              Pages
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <Link className="mobile-menu-link" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/team">
                  Teams
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/sign-in">
                  Log In
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/sign-up">
                  Sign Up
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact" className="main">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <div className="follow-us">
        <ul>
          <li>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f" style={{ "fontFamily": "\"Font Awesome 6 Brands\", Bangla867, sans-serif" } as CSSProperties}></i>
            </a>
          </li>
          <li>
            <a href="#" aria-label="twitter">
              <i className="fab fa-twitter" style={{ "fontFamily": "\"Font Awesome 6 Brands\", Bangla867, sans-serif" } as CSSProperties}></i>
            </a>
          </li>
          <li>
            <a href="#" aria-label="instagram">
              <i className="fab fa-instagram" style={{ "fontFamily": "\"Font Awesome 6 Brands\", Bangla867, sans-serif" } as CSSProperties}></i>
            </a>
          </li>
          <li>
            <a href="#" aria-label="linkdin">
              <i className="fa-brands fa-linkedin-in" style={{ "fontFamily": "\"Font Awesome 6 Brands\", Bangla867, sans-serif" } as CSSProperties}></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
}
