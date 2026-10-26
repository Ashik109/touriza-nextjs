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
              <p className="mb--30">
                The image shows a scenic view of a long, arched railway bridge curving gracefully through a lush green landscape. A vintage-style steam train with red carriages is traveling across the bridge, releasing a plume of white smoke. The surrounding area is covered in rolling hills and dense greenery, giving the scene a picturesque and peaceful atmosphere — it looks like a popular travel or sightseeing spot, possibly in a rural or mountainous region.
              </p>
              <p>
                Cars come in a variety of body styles and sizes, such as sedans, SUVs, hatchbacks, coupes, convertibles, and for pickup trucks, each serving different needs and preferences.
              </p>
              <h2 className="mb--30">
                Car Features
              </h2>
              <ul className="feature-list mb--40">
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                   Engine Type 
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                   Horsepower 
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                   Automatic Climate Control 
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                   Touchscreen Display 
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                   Navigation System 
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                   Fog Lights 
                </li>
              </ul>
              <h2 className="mb--30">
                Your Trusted Partner in Car Buying and Service
              </h2>
              <p className="mb--30">
                Welcome to Career Compass, your ultimate destination for career advice, job search strategies, and big to an a professional development insights. Whether you're a recent graduate, seasoned professional, or someone considering a career change, our blog is your trusted guide to help you navigate the ever-evolving landscape of the job market.
              </p>
              <div className="quote-area mb--30">
                <div className="image mb--20">
                  <img src="/assets/images/testimonials/quote.svg" alt="" />
                </div>
                 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia 
                <img src="/assets/images/testimonials/quote.svg" alt="" />
              </div>
              <p className="mb--40">
                At Career Compass, we understand that finding the right career path can be daunting. That's why we offer a wealth of resources to empower you on your journey. From resume writing tips and interview techniques to networking advice and skill-building strategies, our expert contributors share their knowledge and expertise to equip you with the tools you need to succeed.
              </p>
              <h2 className="mb--30">
                Tags
              </h2>
              <ul className="tag-area mb--40">
                <li>
                  New Cars
                </li>
                <li>
                  Used Cars
                </li>
                <li>
                  Test Drives
                </li>
                <li>
                  Car Deals
                </li>
                <li>
                  Luxury Cars
                </li>
              </ul>
              <div className="share-link mb--40">
                <h2>
                  Share
                </h2>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
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
                    I still have a lot of studying to do using this course and the other practice exams, but so far it's been great! I have not taken my Security+ exam as well, so I'll update this at a later time.
                  </p>
                  <a href="#" className="reply-btn">
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
                    I still have a lot of studying to do using this course and the other practice exams, but so far it's been great! I have not taken my Security+ exam as well, so I'll update this at a later time.
                  </p>
                  <a href="#" className="reply-btn">
                    <img src="/assets/images/others/reply.svg" alt="" />
                    Reply
                  </a>
                </div>
                <div className="comment-form">
                  <h2 className="mb--30">
                    Leave a Comment
                  </h2>
                  <form action="#" method="get">
                    <textarea name="comment" id="comment" placeholder="Add a Comment" required></textarea>
                    <button className="rts-btn radius-small btn-primary">
                      Submit Comment
                    </button>
                  </form>
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
                  <form action="#">
                    <div className="input-wrapper">
                      <input type="text" placeholder="Search Here..." required />
                      <button type="submit">
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="destination side-box">
                  <h6>
                    Destination
                  </h6>
                  <ul className="checkbox-list">
                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" defaultChecked />
                        <span>
                          Nepal
                        </span>
                      </label>
                    </li>
                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" />
                        <span>
                          Maldives
                        </span>
                      </label>
                    </li>
                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" />
                        <span>
                          Greek Island
                        </span>
                      </label>
                    </li>
                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" />
                        <span>
                          New York
                        </span>
                      </label>
                    </li>
                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" />
                        <span>
                          Indonesia
                        </span>
                      </label>
                    </li>
                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" />
                        <span>
                          Dubai Coastline
                        </span>
                      </label>
                    </li>
                  </ul>
                  <a href="#" className="btn">
                    Show More
                  </a>
                  <span className="cross">
                    <i className="fa-regular fa-chevron-up"></i>
                  </span>
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
