import Link from "next/link";

export default function Blog() {
  return (
  <section className="rts-blog-area rts-section-gap body-bg-one">
    <div className="container">
      <div className="section-top-area d-flex align-items-end justify-content-between">
        <div className="section-title-area" data-aos="fade-right" data-aos-delay="200">
          <p className="sub-title d-flex align-items-center gap-2" data-aos="fade-up" data-aos-delay="200">
            <img src="/assets/images/banner/icon/04.svg" alt="" />
             Our Blog
          </p>
          <h2 className="section-title mb-0">
            Travel Stories &amp; Guides
          </h2>
        </div>
        <div className="button-area mb--15" data-aos="fade-left" data-aos-delay="200">
          <Link href="/team" className="rts-btn btn-primary btn-border with-arrow border-primary">
            View All 
            <i className="fa-regular fa-arrow-up up-right"></i>
          </Link>
        </div>
      </div>
      <div className="section-inner mt--60">
        <div className="row g-5">
          <div className="col-lg-4" data-aos="fade-left" data-aos-delay="200">
            <div className="blog-wrapper image-transform radius-10">
              <div className="image-area">
                <Link href="/blog/top-10-essential-travel-tips-for-first-time-travelers">
                  <img className="hover-image" src="/assets/images/blog/12.webp" alt="" />
                </Link>
              </div>
              <div className="author-area">
                <div className="image">
                  <img src="/assets/images/blog/author/01.svg" alt="" />
                </div>
                <p className="text">
                  Post By 
                  <br />
                  <span>
                    Reacthemes
                  </span>
                </p>
              </div>
              <div className="content-area">
                <div className="blog-meta">
                  <ul>
                    <li>
                      12 May, 2025
                    </li>
                    <li className="mid"></li>
                    <li>
                      2 Min Read
                    </li>
                  </ul>
                </div>
                <h5 className="blog-title">
                  <Link className="title-w-hover" href="/blog/top-10-essential-travel-tips-for-first-time-travelers">
                     Top 10 Essential Travel Tips for First-Time Travelers
                  </Link>
                </h5>
                <ul className="tags">
                  <li>
                    <Link href="/blog/top-10-essential-travel-tips-for-first-time-travelers">
                      Train Journey
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/top-10-essential-travel-tips-for-first-time-travelers">
                      Railway
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-left" data-aos-delay="500">
            <div className="blog-wrapper image-transform radius-10">
              <div className="image-area">
                <Link href="/blog/international-travel-checklist-what-you-must-not-forget">
                  <img className="hover-image" src="/assets/images/blog/13.webp" alt="" />
                </Link>
              </div>
              <div className="author-area">
                <div className="image">
                  <img src="/assets/images/blog/author/02.svg" alt="" />
                </div>
                <p className="text">
                  Post By 
                  <br />
                  <span>
                    Reacthemes
                  </span>
                </p>
              </div>
              <div className="content-area">
                <div className="blog-meta">
                  <ul>
                    <li>
                      17 May, 2025
                    </li>
                    <li className="mid"></li>
                    <li>
                      2 Min Read
                    </li>
                  </ul>
                </div>
                <h5 className="blog-title">
                  <Link className="title-w-hover" href="/blog/international-travel-checklist-what-you-must-not-forget">
                     International Travel Checklist: What You Must Not Forget
                  </Link>
                </h5>
                <ul className="tags">
                  <li>
                    <Link href="/blog/international-travel-checklist-what-you-must-not-forget">
                      Mountain
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/international-travel-checklist-what-you-must-not-forget">
                      Travel
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-left" data-aos-delay="800">
            <div className="blog-wrapper image-transform radius-10">
              <div className="image-area">
                <Link href="/blog/budget-travel-tips-how-to-explore-more-by-spending-less">
                  <img className="hover-image" src="/assets/images/blog/14.webp" alt="" />
                </Link>
              </div>
              <div className="author-area">
                <div className="image">
                  <img src="/assets/images/blog/author/03.svg" alt="" />
                </div>
                <p className="text">
                  Post By 
                  <br />
                  <span>
                    Reacthemes
                  </span>
                </p>
              </div>
              <div className="content-area">
                <div className="blog-meta">
                  <ul>
                    <li>
                      12 May, 2025
                    </li>
                    <li className="mid"></li>
                    <li>
                      2 Min Read
                    </li>
                  </ul>
                </div>
                <h5 className="blog-title">
                  <Link className="title-w-hover" href="/blog/budget-travel-tips-how-to-explore-more-by-spending-less">
                     Budget Travel Tips: How to Explore More by Spending Less
                  </Link>
                </h5>
                <ul className="tags">
                  <li>
                    <Link href="/blog/budget-travel-tips-how-to-explore-more-by-spending-less">
                      Train Journey
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/budget-travel-tips-how-to-explore-more-by-spending-less">
                      Railway
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
