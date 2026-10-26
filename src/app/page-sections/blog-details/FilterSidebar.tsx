import Link from "next/link";
import type { CSSProperties } from "react";

export default function FilterSidebar() {
  return (
  <div id="side-bar2" className="side-bar side-bar2">
    <div className="rts-sidebar-menu-desktop">
      <button className="close-icon-menu" aria-label="footer_Button">
        <i className="far fa-times"></i>
      </button>
      <div className="body d-none d-lg-block">
        <div className="about-us">
          <Link className="logo" href="/">
            <img src="/assets/images/logo/02.svg" alt="" />
          </Link>
          <p>
             Discover the World, 
            <br />
             Full Adventure at a Time! 
          </p>
        </div>
        <div className="gallery-image-area">
          <div className="gallery-wrapper with-icon">
            <a href="assets/images/gallery/06.webp" className="gallery-image image-transform">
              <img className="hover-image" src="/assets/images/gallery/06.webp" width="190" alt="" />
              <span className="icon">
                <img src="/assets/images/gallery/insta.svg" alt="" />
              </span>
            </a>
          </div>
          <div className="gallery-wrapper with-icon">
            <a href="assets/images/gallery/07.webp" className="gallery-image image-transform">
              <img className="hover-image" src="/assets/images/gallery/07.webp" width="190" alt="" />
              <span className="icon">
                <img src="/assets/images/gallery/insta.svg" alt="" />
              </span>
            </a>
          </div>
          <div className="gallery-wrapper with-icon">
            <a href="assets/images/gallery/08.webp" className="gallery-image image-transform">
              <img className="hover-image" src="/assets/images/gallery/08.webp" width="190" alt="" />
              <span className="icon">
                <img src="/assets/images/gallery/insta.svg" alt="" />
              </span>
            </a>
          </div>
          <div className="gallery-wrapper with-icon">
            <a href="assets/images/gallery/09.webp" className="gallery-image image-transform">
              <img className="hover-image" src="/assets/images/gallery/09.webp" width="190" alt="" />
              <span className="icon">
                <img src="/assets/images/gallery/insta.svg" alt="" />
              </span>
            </a>
          </div>
          <div className="gallery-wrapper with-icon">
            <a href="assets/images/gallery/10.webp" className="gallery-image image-transform">
              <img className="hover-image" src="/assets/images/gallery/10.webp" width="190" alt="" />
              <span className="icon">
                <img src="/assets/images/gallery/insta.svg" alt="" />
              </span>
            </a>
          </div>
          <div className="gallery-wrapper with-icon">
            <a href="assets/images/gallery/12.webp" className="gallery-image image-transform">
              <img className="hover-image" src="/assets/images/gallery/11.webp" width="190" alt="" />
              <span className="icon">
                <img src="/assets/images/gallery/insta.svg" alt="" />
              </span>
            </a>
          </div>
        </div>
        <div className="get-in-touch">
          <h4>
            Get In Touch
          </h4>
          <div className="wrapper">
            <div className="single">
              <i className="fas fa-phone-alt" style={{ "fontFamily": "\"Font Awesome 6 Pro\", Bangla867, sans-serif" } as CSSProperties}></i>
              <a href="#">
                +8801234566789
              </a>
            </div>
            <div className="single">
              <i className="fas fa-envelope" style={{ "fontFamily": "\"Font Awesome 6 Pro\", Bangla867, sans-serif" } as CSSProperties}></i>
              <a href="#">
                example@gmail.com
              </a>
            </div>
            <div className="single">
              <i className="fas fa-globe" style={{ "fontFamily": "\"Font Awesome 6 Pro\", Bangla867, sans-serif" } as CSSProperties}></i>
              <a href="#">
                www.webexample.com
              </a>
            </div>
            <div className="single">
              <i className="fas fa-map-marker-alt" style={{ "fontFamily": "\"Font Awesome 6 Pro\", Bangla867, sans-serif" } as CSSProperties}></i>
              <a href="#">
                13/A, New Pro State, NYC
              </a>
            </div>
          </div>
        </div>
        <div className="follow-us">
          <h4>
            Follow Us
          </h4>
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
  </div>
  );
}
