import Link from "next/link";
import type { CSSProperties } from "react";
import type { DetailContent } from "@/data/details";

export default function Breadcrumb({ detailContent }: { detailContent: DetailContent }) {
  return (
  <div className="rts-breadcrumb-area one" data-bg-src="/assets/images/breadcrumb/01.webp" style={{ "backgroundImage": "url('/assets/images/breadcrumb/01.webp')", "backgroundSize": "cover", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat" } as CSSProperties}>
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
            Blog
          </a>
        </div>
        <h1 className="title">
          {detailContent.title}
        </h1>
      </div>
    </div>
  </div>
  );
}
