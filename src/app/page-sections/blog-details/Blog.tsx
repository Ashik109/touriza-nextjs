import { getArticleSections } from "@/data/editorial-content";
import DemoForm from "@/app/components/DemoForm";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { DetailContent } from "@/data/details";

export default function Blog({ detailContent }: { detailContent: DetailContent }) {
  return (
  <section className="rts-blog-area inner rts-section-gap">
    <div className="container">
      <div className="section-inner">
        <div className="row g-5">
          <div className="col-lg-8" data-aos="fade-right" data-aos-delay="200">
            <div className="blog-details-area">
              <div className="image top-image radius-10 overflow-hidden mb--40" style={{ "height": "100%" } as CSSProperties}>
                <img className="w-100" src={`/${detailContent.image.replace(/^\//, "")}`} alt="" style={{ "height": "100%", "objectFit": "cover" } as CSSProperties} />
              </div>
              <h2 className="mb--30">
                {detailContent.title}
              </h2>
              {getArticleSections(detailContent).map(({ heading, text }) => (
                <section key={heading} className="mb--30">
                  <h3>{heading}</h3>
                  <p>{text}</p>
                </section>
              ))}
              <div className="comment-area mb--40">
                <h2>
                  Comment
                </h2>
                <div className="comment-box mb--30">
                  <div className="author">
                    <div className="image">
                      <img src="/assets/images/testimonials/author-01.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6>
                        Jonathon Doe
                      </h6>
                      <p>
                        A Week Ago
                      </p>
                    </div>
                  </div>
                  <p>
                    The planning tips were helpful for my first trip. I used the packing checklist to prepare before leaving.
                  </p>
                  <a href="#comment" className="reply-btn">
                    <img src="/assets/images/others/reply.svg" alt="" />
                    Reply
                  </a>
                </div>
                <div className="comment-box mb--30">
                  <div className="author">
                    <div className="image">
                      <img src="/assets/images/testimonials/author-02.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6>
                        Jonathon Doe
                      </h6>
                      <p>
                        A Week Ago
                      </p>
                    </div>
                  </div>
                  <p>
                    The planning tips were helpful for my first trip. I used the packing checklist to prepare before leaving.
                  </p>
                  <a href="#comment" className="reply-btn">
                    <img src="/assets/images/others/reply.svg" alt="" />
                    Reply
                  </a>
                </div>
                <div className="comment-form">
                  <h2 className="mb--30">
                    Leave a Comment
                  </h2>
                  <DemoForm mode="comment">
                    <textarea name="comment" aria-label="Your comment" maxLength={1500} id="comment" placeholder="Add a Comment" required></textarea>
                    <button className="rts-btn radius-small btn-primary">
                      Submit Comment
                    </button>
                  </DemoForm>
                </div>
              </div>
              <div className="rts-blog-area inner">
                <h3 className="mb--40 text-center">
                  Related listings
                </h3>
                <div className="row g-5">
                  <div className="col-lg-6">
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
                            <a href="/search?kind=blog&amp;q=Train%20Journey">
                              Train Journey
                            </a>
                          </li>
                          <li>
                            <a href="/search?kind=blog&amp;q=Railway">
                              Railway
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
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
                            <a href="/search?kind=blog&amp;q=Mountain">
                              Mountain
                            </a>
                          </li>
                          <li>
                            <a href="/search?kind=blog&amp;q=Travel">
                              Travel
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sticky-top top-100px">
              <div className="left-sidebar-area radius-10">
                <div className="search-area side-box border-0 m-0 p-0">
                  <h6>
                    Touriza Search
                  </h6>
                  <form action="/search" method="get">
                    <input type="hidden" name="kind" value="blog" />
                    <div className="input-wrapper">
                      <input type="search" name="q" aria-label="Search travel stories" placeholder="Search Here..." required />
                      <button type="submit" aria-label="Search">
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="blog-post side-box">
                  <h6>
                    Recent Post
                  </h6>
                  <ul className="blog-list">
                    <li>
                      <div className="image-area image-transform radius-10">
                        <Link href="/blog/10-tips-for-first-time-car-what-you-need-to-know">
                          <img className="hover-image" src="/assets/images/blog/01.webp" width="100" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <h6>
                          <Link className="title-p-hover" href="/blog/10-tips-for-first-time-car-what-you-need-to-know">
                            10 Tips for First-Time Car What You Need to Know
                          </Link>
                        </h6>
                        <p className="blog-meta">
                          May 26, 2024
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="image-area image-transform radius-10">
                        <Link href="/blog/top-5-reasons-to-buy-a-for-pre-owned-vehicle">
                          <img className="hover-image" src="/assets/images/blog/02.webp" width="100" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <h6>
                          <Link className="title-p-hover" href="/blog/top-5-reasons-to-buy-a-for-pre-owned-vehicle">
                            Top 5 Reasons to Buy a for Pre-Owned Vehicle
                          </Link>
                        </h6>
                        <p className="blog-meta">
                          May 26, 2024
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="image-area image-transform radius-10">
                        <Link href="/blog/how-to-choose-the-perfect-car-for-your-lifestyle">
                          <img className="hover-image" src="/assets/images/blog/03.webp" width="100" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <h6>
                          <Link className="title-p-hover" href="/blog/how-to-choose-the-perfect-car-for-your-lifestyle">
                            How to Choose the Perfect Car for Your Lifestyle
                          </Link>
                        </h6>
                        <p className="blog-meta">
                          May 26, 2024
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tag-area side-box">
                  <h6>
                    Tags
                  </h6>
                  <ul>
                    <li>
                      Hiking
                    </li>
                    <li>
                      Traveling
                    </li>
                    <li>
                      Trekking
                    </li>
                    <li>
                      Jumping
                    </li>
                    <li>
                      Camping
                    </li>
                    <li>
                      Sliding
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
