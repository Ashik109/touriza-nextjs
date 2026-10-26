import type { CSSProperties } from "react";
import type { DetailContent } from "@/data/details";

export default function Banner({ detailContent }: { detailContent: DetailContent }) {
  return (
  <div className="rts-banner-area-seven overflow-hidden">
    <div className="swiper banner-slider-active5 slider-drag-wrap">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="banner-wrapper after-none">
            <div className="image-area" style={{ "height": "100%" } as CSSProperties}>
              <img src={`/${detailContent.image.replace(/^\//, "")}`} alt="" style={{ "height": "100%", "objectFit": "cover" } as CSSProperties} />
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="banner-wrapper after-none">
            <div className="image-area">
              <img src="/assets/images/banner/bg-16.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="banner-wrapper after-none">
            <div className="image-area">
              <img src="/assets/images/banner/bg-15.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper-scrollbar"></div>
  </div>
  );
}
