import Link from "next/link";

export default function Blog() {
  return (
  <section className="rts-blog-area rts-section-gapBottom">
    <div className="container">
      <div className="section-top-area d-flex align-items-end justify-content-between">
        <div className="section-title-area" data-aos="fade-right" data-aos-delay="200">
          <p className="sub-title">
            Our Blog
          </p>
          <h2 className="section-title mb-0">
            Travel Stories &amp; Guides
          </h2>
          <p className="desc">
            Read exciting travel stories, expert guides, and helpful tips.
          </p>
        </div>
        <div className="button-area mb--15" data-aos="fade-left" data-aos-delay="200">
          <a href="#" className="rts-btn btn-primary btn-border with-arrow">
            View All 
            <i className="fa-regular fa-arrow-up up-right"></i>
          </a>
        </div>
      </div>
      <div className="section-inner mt--60">
        <div className="row g-5">
          <div className="col-lg-4" data-aos="fade-left" data-aos-delay="200">
            <div className="blog-wrapper image-transform radius-10">
              <div className="image-area">
                <Link href="/blog/top-10-essential-travel-tips-for-first-time-travelers">
                  <img className="hover-image" src="/assets/images/blog/01.webp" alt="" />
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
                    <a href="#">
                      Train Journey
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Railway
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-left" data-aos-delay="500">
            <div className="blog-wrapper image-transform radius-10">
              <div className="image-area">
                <Link href="/blog/international-travel-checklist-what-you-must-not-forget">
                  <img className="hover-image" src="/assets/images/blog/02.webp" alt="" />
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
                    <a href="#">
                      Mountain
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Travel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-left" data-aos-delay="800">
            <div className="blog-wrapper image-transform radius-10">
              <div className="image-area">
                <Link href="/blog/budget-travel-tips-how-to-explore-more-by-spending-less">
                  <img className="hover-image" src="/assets/images/blog/03.webp" alt="" />
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
                    <a href="#">
                      Train Journey
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Railway
                    </a>
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
