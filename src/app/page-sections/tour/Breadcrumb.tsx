import Link from "next/link";
import type { CSSProperties } from "react";

export default function Breadcrumb() {
  return (
  <div className="rts-breadcrumb-area two" data-bg-src="/assets/images/breadcrumb/03.webp" style={{ "backgroundImage": "url('/assets/images/breadcrumb/03.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}>
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
            Tours
          </a>
          <span>
            <i className="fa-regular fa-chevron-right"></i>
          </span>
          <a href="#" className="current">
            Nature Friendly
          </a>
        </div>
        <h1 className="title">
          Adventure &amp; Nature
        </h1>
      </div>
    </div>
  </div>
  );
}
