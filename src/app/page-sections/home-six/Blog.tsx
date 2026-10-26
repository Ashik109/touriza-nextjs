import Link from "next/link";

export default function Blog() {
  return (
  <section className="rts-blog-area rts-section-gap body-bg-one">
    <div className="container">
      <div className="section-top-area d-flex align-items-end justify-content-between">
        <div className="section-title-area" data-aos="fade-right" data-aos-delay="200">
          <h2 className="section-title mb-0 text-uppercase">
            Limited Time Travel Deals
          </h2>
        </div>
        <div className="button-area mb--15" data-aos="fade-left" data-aos-delay="200">
          <div className="swiper-btn swiper-btn-prev2">
            <i className="fa-regular fa-chevron-left"></i>
          </div>
          <div className="swiper-btn swiper-btn-next2">
            <i className="fa-regular fa-chevron-right"></i>
          </div>
        </div>
      </div>
      <div className="section-inner mt--60">
        <div className="swiper blog-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="blog-wrapper3 image-transform">
                <div className="image-area image-transform radius-10">
                  <Link href="/blog/top-5-sea-in-kayaking-destinations-you-must-explore">
                    <img className="hover-image" src="/assets/images/blog/09.webp" alt="" />
                  </Link>
                </div>
                <div className="content-area">
                  <p className="meta">
                    07 July, 2025
                  </p>
                  <h4 className="blog-title">
                    <Link className="f-p title-p-hover" href="/blog/top-5-sea-in-kayaking-destinations-you-must-explore">
                      Top 5 Sea In Kayaking Destinations You Must Explore
                    </Link>
                  </h4>
                  <Link href="/blog/top-5-sea-in-kayaking-destinations-you-must-explore" className="rts-btn text-btn with-arrow">
                    Read More 
                    <i className="fa-regular fa-arrow-up up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="blog-wrapper3 image-transform">
                <div className="image-area image-transform radius-10">
                  <Link href="/blog/why-sea-kayaking-is-the-ultimate-mind-body-adventure">
                    <img className="hover-image" src="/assets/images/blog/10.webp" alt="" />
                  </Link>
                </div>
                <div className="content-area">
                  <p className="meta">
                    07 July, 2025
                  </p>
                  <h4 className="blog-title">
                    <Link className="f-p title-p-hover" href="/blog/why-sea-kayaking-is-the-ultimate-mind-body-adventure">
                      Why Sea Kayaking is the Ultimate Mind-Body Adventure
                    </Link>
                  </h4>
                  <Link href="/blog/why-sea-kayaking-is-the-ultimate-mind-body-adventure" className="rts-btn text-btn with-arrow">
                    Read More 
                    <i className="fa-regular fa-arrow-up up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="blog-wrapper3 image-transform">
                <div className="image-area image-transform radius-10">
                  <Link href="/blog/5-mistakes-new-kayakers-make-and-how-to-avoid-them">
                    <img className="hover-image" src="/assets/images/blog/11.webp" alt="" />
                  </Link>
                </div>
                <div className="content-area">
                  <p className="meta">
                    07 July, 2025
                  </p>
                  <h4 className="blog-title">
                    <Link className="f-p title-p-hover" href="/blog/5-mistakes-new-kayakers-make-and-how-to-avoid-them">
                      5 Mistakes New Kayakers Make (And How to Avoid Them)”
                    </Link>
                  </h4>
                  <Link href="/blog/5-mistakes-new-kayakers-make-and-how-to-avoid-them" className="rts-btn text-btn with-arrow">
                    Read More 
                    <i className="fa-regular fa-arrow-up up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
