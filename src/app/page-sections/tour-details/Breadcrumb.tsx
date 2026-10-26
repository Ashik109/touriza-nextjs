import Link from "next/link";
import type { CSSProperties } from "react";
import type { DetailContent } from "@/data/details";

export default function Breadcrumb({ detailContent }: { detailContent: DetailContent }) {
  return (
  <div className="rts-breadcrumb-area four" data-bg-src="/assets/images/breadcrumb/06.webp" style={{ "backgroundImage": "url('/assets/images/breadcrumb/06.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}>
    <div className="container">
      <div className="nav-bread-crumb">
        <Link href="/">
          Home
        </Link>
        <span>
          <i className="fa-regular fa-chevron-right"></i>
        </span>
        <a href="#" className="current">
          Destination
        </a>
        <span>
          <i className="fa-regular fa-chevron-right"></i>
        </span>
        <a href="#" className="current">
          Nepal
        </a>
        <span>
          <i className="fa-regular fa-chevron-right"></i>
        </span>
        <a href="#" className="current">
          {detailContent.title}
        </a>
      </div>
      <h1 className="title">
        {detailContent.title}
      </h1>
    </div>
  </div>
  );
}
