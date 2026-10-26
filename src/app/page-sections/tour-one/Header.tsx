import Link from "next/link";

export default function Header() {
  return (
  <header className="header-style-one header--sticky">
    <div className="row">
      <div className="col-lg-12">
        <div className="header-style-one-wrapper">
          <div className="left-area">
            <div className="logo-area">
              <Link href="/" className="logo">
                <img className="light" src="/assets/images/logo/01.svg" alt="logo" />
                <img className="dark" src="/assets/images/logo/02.svg" alt="logo" />
              </Link>
            </div>
            <nav className="main-nav-area">
              <ul className="list-unstyled rts-desktop-menu">
                <li className="menu-item rts-has-dropdown">
                  <a className="main-element rts-dropdown-main-element" href="#">
                    Home
                  </a>
                  <ul className="rts-submenu list-unstyled menu-home">
                    <li className="nav-item">
                      <Link className="nav-link page" href="/">
                        Travel Agency
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link page" href="/home-two">
                        Hiking Travel
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link page" href="/home-three">
                        Home Yacht
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link page" href="/home-four">
                        Wild Travel
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link page" href="/home-five">
                        Travel Africa
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link page" href="/home-six">
                        Tour Marketplace
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link page" href="/home-seven">
                        Summer Travel
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item rts-has-dropdown">
                  <a href="#" className="rts-dropdown-main-element">
                    Tours
                  </a>
                  <ul className="rts-submenu list-unstyled menu-home">
                    <li className="nav-item">
                      <Link className="nav-link page" href="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link page" href="/team">
                        Our Team
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link page" href="/faq">
                        FAQ's
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/book-a-demo">
                        Book a Demo
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/free-audit">
                        Free Audit
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/pricing">
                        Pricing Plans
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/404">
                        404 Page
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item rts-has-dropdown">
                  <a href="#" className="rts-dropdown-main-element">
                    Destinations
                  </a>
                  <ul className="rts-submenu list-unstyled menu-home">
                    <li className="nav-item">
                      <Link className="nav-link page" href="/service">
                        Service
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link page" href="/service-details">
                        Service Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item rts-has-dropdown">
                  <a href="#" className="rts-dropdown-main-element">
                    Pages
                  </a>
                  <ul className="rts-submenu list-unstyled menu-home">
                    <li className="nav-item">
                      <Link className="nav-link page" href="/case-studies">
                        Case Studies
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/single-case-studies">
                        Case Studies Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link className="main-element rts-dropdown-main-element" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="button-area-start">
            <Link href="/sign-in" className="rts-btn btn-primary btn-border border-0">
              Log In
            </Link>
            <Link href="/sign-up" className="rts-btn btn-primary">
              Sign Up
            </Link>
            <div className="menu-btn radius-6" id="menu-btn">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="14" width="20" height="2" fill="#FFFFFF"></rect>
                <rect y="7" width="20" height="2" fill="#FFFFFF"></rect>
                <rect width="20" height="2" fill="#FFFFFF"></rect>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
}
