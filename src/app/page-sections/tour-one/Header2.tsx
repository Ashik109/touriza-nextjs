import Link from "next/link";

export default function Header2() {
  return (
  <div id="side-bar" className="side-bar header-two">
    <button className="close-icon-menu">
      <i className="fa-sharp fa-thin fa-xmark"></i>
    </button>
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
                  SEO Marketing
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/home-two">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/home-three">
                  Digital Agency
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/home-four">
                  Startup Agency
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/home-five">
                  Advertising Agency
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/home-six">
                  Web Design Agency
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/home-seven">
                  Social Media Agency
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
                  Our Team
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/faq">
                  FAQ's
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/book-a-demo">
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/free-audit">
                  Free Audit
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/pricing">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/404">
                  404 Page
                </Link>
              </li>
            </ul>
          </li>
          <li className="has-droupdown">
            <a href="#" className="main">
              Services
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <Link className="mobile-menu-link" href="/service">
                  Services
                </Link>
              </li>
              <li className="has-droupdown third-lvl">
                <a className="main" href="#">
                  Service Details
                </a>
                <ul className="submenu-third-lvl mm-collapse">
                  <li>
                    <Link href="/service-details"></Link>
                    Paid Search Marketing
                  </li>
                  <li>
                    <Link href="/email-marketing"></Link>
                    Email Marketing
                  </li>
                  <li>
                    <Link href="/social-media-marketing"></Link>
                    Social Media Marketing
                  </li>
                  <li>
                    <Link href="/influencer-marketing"></Link>
                    Influencer Marketing
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="has-droupdown">
            <a href="#" className="main">
              Work
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <Link className="mobile-menu-link" href="/case-studies">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/single-case-studies">
                  Case Studies Details
                </Link>
              </li>
            </ul>
          </li>
          <li className="has-droupdown">
            <a href="#" className="main">
              Blog
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <Link className="mobile-menu-link" href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/blog-left-sidebar">
                  Blog Left Sidebar
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/blog-grid">
                  Blog Grid
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/blog-grid-2">
                  Blog Grid Right Sidebar
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/blog-grid-3">
                  Blog Grid Left Sidebar
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href="/blog/top-10-essential-travel-tips-for-first-time-travelers">
                  Blog Details
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
      <ul className="social-area-one pl--20 mt--100">
        <li>
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
  );
}
