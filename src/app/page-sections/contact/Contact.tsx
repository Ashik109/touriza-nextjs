export default function Contact() {
  return (
  <section className="rts-contact-area inner rts-section-gap">
    <div className="container">
      <div className="section-inner body-bg-one radius-10">
        <form className="contact-form">
          <h4 className="title">
            Your info
          </h4>
          <div className="form-inner">
            <div className="left">
              <div className="single-input-wrapper">
                <label htmlFor="name">
                  Full Name*
                </label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required />
              </div>
              <div className="single-input-wrapper">
                <label htmlFor="email">
                  Email*
                </label>
                <input type="email" id="email" name="email" placeholder="Your email address" required />
              </div>
              <div className="single-input-wrapper">
                <label htmlFor="company">
                  Company
                </label>
                <input type="text" id="company" name="company" placeholder="Your company name" required />
              </div>
              <div className="single-input-wrapper">
                <label htmlFor="website">
                  Website
                </label>
                <input type="text" id="website" name="website" placeholder="Your website" required />
              </div>
            </div>
            <div className="right">
              <div className="single-input-wrapper">
                <label htmlFor="message">
                  Your Enquiry*
                </label>
                <textarea name="message" id="message" placeholder="Enter your message here" required></textarea>
              </div>
              <div className="single-input-wrapper">
                <button type="submit" className="rts-btn btn-primary with-arrow">
                  Get Started 
                  <i className="fa-regular fa-arrow-up up-right"></i>
                </button>
              </div>
              <p className="desc">
                Please read our 
                <a href="#">
                   privacy policy
                </a>
                 and 
                <a href="#">
                  Cookies policy
                </a>
                 so you understand how we collect and use your personal data.
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="contact-form-content-bottom-wrapper mt--30">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="single-contact-card body-bg-one radius-10">
              <div className="top-area">
                <div className="icon">
                  <img src="/assets/images/contact/icon/01.svg" alt="contact" />
                </div>
                <h4 className="title">
                  Our Location
                </h4>
              </div>
              <p className="disc">
                 123 Main Street, Apt 4B Springfield, IL 62704, UK 
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-contact-card body-bg-one radius-10">
              <div className="top-area">
                <div className="icon">
                  <img src="/assets/images/contact/icon/02.svg" alt="contact" />
                </div>
                <h4 className="title">
                  Email Us
                </h4>
              </div>
              <p className="disc">
                 Our support team is here to assist you 
              </p>
              <a href="#">
                support@Digix.com
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-contact-card body-bg-one radius-10">
              <div className="top-area">
                <div className="icon">
                  <img src="/assets/images/contact/icon/03.svg" alt="contact" />
                </div>
                <h4 className="title">
                  Call Us
                </h4>
              </div>
              <p className="disc">
                 Our customer support team is available 
              </p>
              <a href="#">
                +1 (111) 125- 42174
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
