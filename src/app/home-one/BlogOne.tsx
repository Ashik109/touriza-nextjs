import Link from "next/link";

const posts = [
  {
    image: "01.webp",
    author: "01.svg",
    delay: "200",
    date: "12 May, 2025",
    title: "Top 10 Essential Travel Tips for First-Time Travelers",
    tags: ["Train Journey", "Railway"],
  },
  {
    image: "02.webp",
    author: "02.svg",
    delay: "500",
    date: "17 May, 2025",
    title: "International Travel Checklist: What You Must Not Forget",
    tags: ["Mountain", "Travel"],
  },
  {
    image: "03.webp",
    author: "03.svg",
    delay: "800",
    date: "12 May, 2025",
    title: "Budget Travel Tips: How to Explore More by Spending Less",
    tags: ["Train Journey", "Railway"],
  },
];

export default function BlogOne() {
  return (
    <section className="rts-blog-area rts-section-gap">
      <div className="container">
        <div className="section-top-area d-flex align-items-end justify-content-between">
          <div className="section-title-area" data-aos="fade-right" data-aos-delay="200">
            <p className="sub-title">Our Blog</p>
            <h2 className="section-title mb-0">Travel Stories &amp; Guides</h2>
            <p className="desc">Read exciting travel stories, expert guides, and helpful tips.</p>
          </div>
          <div className="button-area mb--15" data-aos="fade-left" data-aos-delay="200">
            <Link href="/blog" className="rts-btn btn-primary btn-border with-arrow">View All <i className="fa-regular fa-arrow-up up-right"></i></Link>
          </div>
        </div>
        <div className="section-inner mt--60">
          <div className="row g-5">
            {posts.map((post) => (
              <div className="col-lg-4" data-aos="fade-left" data-aos-delay={post.delay} key={post.title}>
                <div className="blog-wrapper image-transform radius-10">
                  <div className="image-area">
                                            <Link href="/blog-details"><img className="hover-image" src={`/assets/images/blog/${post.image}`} alt="" /></Link>
                  </div>
                  <div className="author-area">
                    <div className="image"><img src={`/assets/images/blog/author/${post.author}`} alt="" /></div>
                    <p className="text">Post By <br /> <span>Reacthemes</span></p>
                  </div>
                  <div className="content-area">
                    <div className="blog-meta">
                      <ul>
                        <li>{post.date}</li>
                        <li className="mid"></li>
                        <li>2 Min Read</li>
                      </ul>
                    </div>
                    <h5 className="blog-title">
                                        <Link className="title-w-hover" href="/blog-details"> {post.title}</Link>
                    </h5>
                    <ul className="tags">
                                            {post.tags.map((tag) => <li key={tag}><Link href="/blog-details">{tag}</Link></li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
