import Link from "next/link";

export default function Blog() {
  return (
  <section className="rts-blog-area rts-section-gapBottom wild">
    <div className="container">
      <div className="section-top-area d-flex align-items-end justify-content-between">
        <div className="section-title-area" data-aos="fade-right" data-aos-delay="200">
          <p className="sub-title d-flex align-items-center gap-2">
            <img src="/assets/images/banner/icon/03.svg" alt="" />
             Our Blog
          </p>
          <h2 className="section-title mb-0 text-uppercase">
            Adventure Stories 
            <br />
             &amp; Travel Tips
          </h2>
        </div>
        <div className="button-area mb--15" data-aos="fade-left" data-aos-delay="200">
          <p className="desc">
            Discover real stories, expert travel tips, and wild adventures shared by our guides and fellow travelers.
          </p>
          <Link href="/destination" className="rts-btn text-btn with-arrow radius-0">
            Explore All safari 
            <i className="fa-regular fa-arrow-up up-right"></i>
          </Link>
        </div>
      </div>
      <div className="section-inner mt--60">
        <div className="row g-5">
          <div className="col-xl-6 col-lg-12" data-aos="fade-right" data-aos-delay="200">
            <div className="blog-wrapper2 image-transform radius-10">
              <div className="image-area">
                <Link href="/blog/top-5-safaris-to-experience-before-you-die">
                  <img className="hover-image" src="/assets/images/blog/08.webp" alt="" />
                </Link>
              </div>
              <div className="content-area">
                <div className="blog-meta">
                  <p>
                    2 Min Read
                  </p>
                </div>
                <h4 className="blog-title">
                  <Link className="title-w-hover" href="/blog/top-5-safaris-to-experience-before-you-die">
                     Top 5 Safaris to Experience Before You Die
                  </Link>
                </h4>
                <ul className="author-area">
                  <li>
                    <div className="image">
                      <img src="/assets/images/blog/author/01.svg" alt="" />
                    </div>
                    <p className="text cw">
                      Logan Hall
                    </p>
                  </li>
                  <li className="mid bw"></li>
                  <li>
                    12 May, 2025
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12" data-aos="fade-left" data-aos-delay="200">
            <div className="small-post-area">
              <div className="blog-wrapper2 list-style image-transform">
                <div className="image-area">
                  <Link className="image-transform radius-6" href="/blog/wooden-canoe-floating-between-dense-mangrove-roots">
                    <img className="hover-image" src="/assets/images/blog/05.webp" width="150" alt="" />
                  </Link>
                </div>
                <div className="content-area">
                  <div className="blog-meta">
                    <p>
                      2 Min Read
                    </p>
                  </div>
                  <h5 className="blog-title">
                    <Link className="title-p-hover" href="/blog/wooden-canoe-floating-between-dense-mangrove-roots">
                       Wooden canoe floating between dense mangrove roots
                    </Link>
                  </h5>
                  <ul className="author-area">
                    <li>
                      <div className="image">
                        <img src="/assets/images/blog/author/01.svg" alt="" />
                      </div>
                      <p className="text">
                        Logan Hall
                      </p>
                    </li>
                    <li className="mid"></li>
                    <li>
                      12 May, 2025
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog-wrapper2 list-style image-transform">
                <div className="image-area">
                  <Link className="image-transform radius-6" href="/blog/backpack-laid-out-with-compass-boots-insect-repellent">
                    <img className="hover-image" src="/assets/images/blog/06.webp" width="150" alt="" />
                  </Link>
                </div>
                <div className="content-area">
                  <div className="blog-meta">
                    <p>
                      2 Min Read
                    </p>
                  </div>
                  <h5 className="blog-title">
                    <Link className="title-p-hover" href="/blog/backpack-laid-out-with-compass-boots-insect-repellent">
                       Backpack laid out with compass, boots, insect repellent
                    </Link>
                  </h5>
                  <ul className="author-area">
                    <li>
                      <div className="image">
                        <img src="/assets/images/blog/author/03.svg" alt="" />
                      </div>
                      <p className="text">
                        Aston Hall
                      </p>
                    </li>
                    <li className="mid"></li>
                    <li>
                      12 May, 2025
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog-wrapper2 list-style image-transform">
                <div className="image-area">
                  <Link className="image-transform radius-6" href="/blog/night-in-the-wild-camping-with-lions-roaring-nearby">
                    <img className="hover-image" src="/assets/images/blog/07.webp" width="150" alt="" />
                  </Link>
                </div>
                <div className="content-area">
                  <div className="blog-meta">
                    <p>
                      2 Min Read
                    </p>
                  </div>
                  <h5 className="blog-title">
                    <Link className="title-p-hover" href="/blog/night-in-the-wild-camping-with-lions-roaring-nearby">
                       Night in the Wild: Camping with Lions Roaring Nearby
                    </Link>
                  </h5>
                  <ul className="author-area">
                    <li>
                      <div className="image">
                        <img src="/assets/images/blog/author/02.svg" alt="" />
                      </div>
                      <p className="text">
                        Logan Hall
                      </p>
                    </li>
                    <li className="mid"></li>
                    <li>
                      12 May, 2025
                    </li>
                  </ul>
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
