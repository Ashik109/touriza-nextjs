import Link from "next/link";

export default function Header() {
  return (
  <header className="header-style-one header--sticky header-seven p-0">
    <div className="header-top">
      <p className="desc">
         Best in Travel is here! 
        <a href="#">
          Discover 2025’s Destinations
        </a>
      </p>
    </div>
    <div className="header-mid">
      <div className="container">
        <div className="inner">
          <form className="form-area">
            <input type="search" name="search" placeholder="Search..." />
            <button type="submit" aria-label="Submit search">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4569 13.1588L11.6066 10.3074C13.7393 7.45732 13.1578 3.41797 10.3078 1.28526C7.45776 -0.847448 3.41844 -0.265928 1.28574 2.58412C-0.846955 5.43416 -0.265438 9.4735 2.58459 11.6062C4.87397 13.3194 8.01838 13.3194 10.3078 11.6062L13.1592 14.4577C13.5176 14.816 14.0986 14.816 14.4569 14.4577C14.8152 14.0994 14.8152 13.5184 14.4569 13.1601L14.4569 13.1588ZM6.46995 11.0559C3.93698 11.0559 1.88363 9.00249 1.88363 6.4695C1.88363 3.93652 3.93698 1.88315 6.46995 1.88315C9.00292 1.88315 11.0563 3.93652 11.0563 6.4695C11.0536 9.00134 9.0018 11.0532 6.46995 11.0559Z" fill="#797979"></path>
              </svg>
            </button>
          </form>
          <div className="logo">
            <Link href="/">
              <img src="/assets/images/logo/11.svg" alt="" />
            </Link>
          </div>
          <div className="right-button-area">
            <div className="right-information">
              <ul className="rts-dropdown-menu switcher-language">
                <li className="has-child-menu">
                  <a href="#">
                    <span className="menu-item">
                      English
                    </span>
                    <i className="fa-regular fa-chevron-down"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">
                        <span className="menu-item">
                          Deutsch
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="menu-item">
                          Portuguese
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="menu-item">
                          Russian
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="rts-dropdown-menu switcher-currency">
                <li className="has-child-menu">
                  <a href="#">
                    <span className="menu-item">
                      USD
                    </span>
                    <i className="fa-regular fa-chevron-down"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">
                        <span className="menu-item">
                          Euro
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="menu-item">
                          Real
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="menu-item">
                          Ruble
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="header-inner">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-style-one-wrapper">
              <div className="left-area">
                <div className="logo-area">
                  <Link href="/" className="logo">
                    <img className="light" src="/assets/images/logo/11.svg" alt="logo" />
                    <img className="dark" src="/assets/images/logo/11.svg" alt="logo" />
                  </Link>
                </div>
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
                      <li className="nav-item">
                        <Link className="nav-link page" href="/home-eight">
                          Travel Agency Two
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link page" href="/home-nine">
                          Kayaking
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link page" href="/home-ten">
                          Car Camping
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
                        <Link className="nav-link page" href="/tour">
                          Tour One
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link page" href="/tour-two">
                          Tour Two
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link page" href="/tour-three">
                          Tour Three
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link page" href="/tour-four">
                          Tour Four
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link page" href="/tour-five">
                          Tour Five
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link page" href="/tour/the-luxury-island-hopper">
                          Tour Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item rts-has-dropdown">
                    <a href="#" className="rts-dropdown-main-element">
                      Destinations
                    </a>
                    <ul className="rts-submenu list-unstyled menu-home mega-menu">
                      <li>
                        <div className="row p-0">
                          <div className="col-lg-8">
                            <div className="inner">
                              <h4>
                                Explore Our Destination
                              </h4>
                              <div className="destination-area-wrapper">
                                <div className="region-area">
                                  <ul>
                                    <li data-region="europe" className="active">
                                      Europe
                                    </li>
                                    <li data-region="asia">
                                      Asia
                                    </li>
                                    <li data-region="africa">
                                      Africa
                                    </li>
                                    <li data-region="oceania">
                                      Oceania
                                    </li>
                                    <li data-region="middleeast">
                                      Middle East
                                    </li>
                                    <li data-region="america">
                                      America
                                    </li>
                                  </ul>
                                  <Link href="/destination" className="view-all-btn">
                                    View All
                                  </Link>
                                </div>
                                <div className="destinations">
                                  <div className="destlist active" data-region="europe">
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/paris">
                                          <img className="hover-image" src="/assets/images/destination/11.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/paris">
                                            Paris 
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/santorini">
                                          <img className="hover-image" src="/assets/images/destination/12.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/santorini">
                                            Santorini
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/venice">
                                          <img className="hover-image" src="/assets/images/destination/13.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/venice">
                                            Venice
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/london">
                                          <img className="hover-image" src="/assets/images/destination/14.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/london">
                                            London
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="destlist" data-region="asia">
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/tokyo">
                                          <img className="hover-image" src="/assets/images/destination/15.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/tokyo">
                                            Tokyo 
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/bali">
                                          <img className="hover-image" src="/assets/images/destination/16.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/bali">
                                            Bali
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/bangkok">
                                          <img className="hover-image" src="/assets/images/destination/17.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/bangkok">
                                            Bangkok
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/seoul">
                                          <img className="hover-image" src="/assets/images/destination/18.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/seoul">
                                            Seoul
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="destlist" data-region="africa">
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/cape-town">
                                          <img className="hover-image" src="/assets/images/destination/19.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/cape-town">
                                            Cape Town 
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/marakkes">
                                          <img className="hover-image" src="/assets/images/destination/20.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/marakkes">
                                            Marakkes
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/nairobi">
                                          <img className="hover-image" src="/assets/images/destination/21.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/nairobi">
                                            Nairobi
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/cairo">
                                          <img className="hover-image" src="/assets/images/destination/22.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/cairo">
                                            Cairo
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="destlist" data-region="oceania">
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/sydney">
                                          <img className="hover-image" src="/assets/images/destination/23.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/sydney">
                                            Sydney 
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/aukland">
                                          <img className="hover-image" src="/assets/images/destination/24.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/aukland">
                                            Aukland
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/fiji-islands">
                                          <img className="hover-image" src="/assets/images/destination/25.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/fiji-islands">
                                            Fiji Islands
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/gold-coast">
                                          <img className="hover-image" src="/assets/images/destination/26.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/gold-coast">
                                            Gold Coast
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="destlist" data-region="middleeast">
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/dubai">
                                          <img className="hover-image" src="/assets/images/destination/27.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/dubai">
                                            Dubai 
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/doha">
                                          <img className="hover-image" src="/assets/images/destination/28.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/doha">
                                            Doha
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/muscat">
                                          <img className="hover-image" src="/assets/images/destination/29.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/muscat">
                                            Muscat
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/istanbul">
                                          <img className="hover-image" src="/assets/images/destination/30.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/istanbul">
                                            Istanbul
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="destlist" data-region="america">
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/new-york">
                                          <img className="hover-image" src="/assets/images/destination/31.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/new-york">
                                            New York 
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/toronto">
                                          <img className="hover-image" src="/assets/images/destination/32.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/toronto">
                                            Toronto
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/los-angeles">
                                          <img className="hover-image" src="/assets/images/destination/25.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/los-angeles">
                                            Los Angeles
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="destination-wrapper-3 radius-10 image-transform">
                                      <div className="image-area">
                                        <Link href="/destination/rio-de-janairo">
                                          <img className="hover-image" src="/assets/images/destination/26.webp" alt="" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h6 className="title">
                                          <Link href="/destination/rio-de-janairo">
                                            Rio De Janairo
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                  <Link href="/destination" className="view-all-btn">
                                    View All Destination
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 p-0">
                            <div className="ad-image">
                              <img src="/assets/images/destination/25.webp" alt="" />
                              <div className="ad-content">
                                <h5 className="ad-title">
                                  Escape the Ordinary — Discover the World!
                                </h5>
                                <Link className="rts-btn btn-primary with-arrow" href="/destination">
                                  Discover More 
                                  <i className="fa-regular fa-arrow-up up-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item rts-has-dropdown">
                    <a href="#" className="rts-dropdown-main-element">
                      Pages
                    </a>
                    <ul className="rts-submenu list-unstyled menu-home">
                      <li className="nav-item">
                        <Link className="nav-link page" href="/about">
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/team">
                          Teams
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/blog">
                          Blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/blog/top-10-essential-travel-tips-for-first-time-travelers">
                          Blog Details
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/sign-in">
                          Log In
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/sign-up">
                          Sign Up
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
              <div className="button-area-start">
                <Link href="/sign-in" className="rts-btn btn-primary btn-border border-primary">
                  Login
                </Link>
                <Link href="/sign-up" className="rts-btn btn-primary border-primary">
                  Sing Up
                </Link>
                <div className="menu-btn menu-btn-toggle radius-6" id="menu-btn">
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
      </div>
    </div>
  </header>
  );
}
