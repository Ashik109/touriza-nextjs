import Link from "next/link";
import type { CSSProperties } from "react";

export default function Breadcrumb() {
  return (
  <div className="rts-breadcrumb-area one" data-bg-src="/assets/images/breadcrumb/07.webp" style={{ "backgroundImage": "url('/assets/images/breadcrumb/07.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}>
    <div className="container h-100">
      <div className="breadcrumb-area-wrapper">
        <div className="nav-bread-crumb">
          <Link href="/">
            Home
          </Link>
          <span>
            <i className="fa-regular fa-chevron-right"></i>
          </span>
          <a href="#" className="current">
            Our Team
          </a>
        </div>
        <h1 className="title">
          Our Team
        </h1>
      </div>
    </div>
  </div>
  );
}
