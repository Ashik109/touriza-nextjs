import type { DetailContent } from "@/data/details";

export default function Banner({ detailContent }: { detailContent: DetailContent }) {
  return (
  <div className="rts-banner-area-seven overflow-hidden">
    <div className="banner-wrapper after-none">
      <div className="image-area">
        <img className="destination-cover" src={`/${detailContent.image.replace(/^\/+/, "")}`} alt={detailContent.title} />
      </div>
    </div>
  </div>
  );
}
