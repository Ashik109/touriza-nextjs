import type { DetailContent } from "@/data/details";

const maldivesSlides = [
  "/assets/images/banner/bg-17.webp",
  "/assets/images/banner/bg-16.webp",
  "/assets/images/banner/bg-15.webp",
];

export default function Banner({ detailContent }: { detailContent: DetailContent }) {
  const images = ["maldives", "maldives-asia"].includes(detailContent.slug)
    // The centered desktop loop needs slides on both sides of the active image.
    ? [...maldivesSlides, ...maldivesSlides]
    : [`/${detailContent.image.replace(/^\/+/, "")}`];

  return (
    <section className="rts-banner-area-seven destination-banner overflow-hidden" aria-label={`${detailContent.title} photos`}>
      <div className={images.length > 1 ? "swiper banner-slider-active5 slider-drag-wrap" : undefined}>
        <div className={images.length > 1 ? "swiper-wrapper" : undefined}>
          {images.map((image, index) => (
            <div key={`${image}-${index}`} className={images.length > 1 ? "swiper-slide" : undefined}>
              <div className="banner-wrapper after-none">
                <div className="image-area">
                  <img
                    className={images.length === 1 ? "destination-cover" : "destination-banner-photo"}
                    src={image}
                    alt={index === 0 ? detailContent.title : ""}
                    fetchPriority={index === 0 ? "high" : undefined}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && <div className="swiper-scrollbar destination-banner-scrollbar" />}
    </section>
  );
}
