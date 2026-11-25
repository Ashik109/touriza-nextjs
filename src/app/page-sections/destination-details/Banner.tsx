import type { DetailContent } from "@/data/details";

const templateSlides = [
  "/assets/images/banner/bg-17.webp",
  "/assets/images/banner/bg-16.webp",
  "/assets/images/banner/bg-15.webp",
];

export default function Banner({ detailContent }: { detailContent: DetailContent }) {
  const cover = `/${detailContent.image.replace(/^\/+/, "")}`;
  const slides = ["maldives", "maldives-asia"].includes(detailContent.slug)
    ? templateSlides
    : [cover, ...templateSlides.filter(image => image !== cover)].slice(0, 3);
  // The centered desktop loop needs slides on both sides of the active image.
  const images = [...slides, ...slides];

  return (
    <section className="rts-banner-area-seven destination-banner overflow-hidden" aria-label={`${detailContent.title} banner`}>
      <div className="swiper banner-slider-active5 slider-drag-wrap">
        <div className="swiper-wrapper">
          {images.map((image, index) => (
            <div key={`${image}-${index}`} className="swiper-slide">
              <div className="banner-wrapper after-none">
                <div className="image-area">
                  <img
                    className="destination-banner-photo"
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
      <div className="swiper-scrollbar destination-banner-scrollbar" />
    </section>
  );
}
