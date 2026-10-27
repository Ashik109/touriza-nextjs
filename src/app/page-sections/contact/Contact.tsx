"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle", message: "" };

export default function Contact() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  return (
  <section className="rts-contact-area inner rts-section-gap">
    <div className="container">
      <div className="section-inner body-bg-one radius-10">
        <form ref={formRef} action={formAction} className="contact-form">
          <h4 className="title">
            Your info
          </h4>
          <div className="contact-form-honeypot" aria-hidden="true">
            <label htmlFor="fax">Fax</label>
            <input type="text" id="fax" name="fax" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="form-inner">
            <div className="left">
              <div className="single-input-wrapper">
                <label htmlFor="name">
                  Full Name*
                </label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" autoComplete="name" maxLength={100} required />
              </div>
              <div className="single-input-wrapper">
                <label htmlFor="email">
                  Email*
                </label>
                <input type="email" id="email" name="email" placeholder="Your email address" autoComplete="email" maxLength={254} required />
              </div>
              <div className="single-input-wrapper">
                <label htmlFor="company">
                  Company
                </label>
                <input type="text" id="company" name="company" placeholder="Your company name" autoComplete="organization" maxLength={120} />
              </div>
              <div className="single-input-wrapper">
                <label htmlFor="website">
                  Website
                </label>
                <input type="url" id="website" name="website" placeholder="https://example.com" autoComplete="url" maxLength={300} />
              </div>
            </div>
            <div className="right">
              <div className="single-input-wrapper">
                <label htmlFor="message">
                  Your Enquiry*
                </label>
                <textarea name="message" id="message" placeholder="Enter your message here" minLength={10} maxLength={3000} required></textarea>
              </div>
              <div className="single-input-wrapper">
                <button type="submit" className="rts-btn btn-primary with-arrow" disabled={pending}>
                  {pending ? "Sending..." : "Send Message"}
                  <i className="fa-regular fa-arrow-up up-right"></i>
                </button>
                {state.message ? (
                  <p className={`contact-form-status ${state.status}`} role="status" aria-live="polite">
                    {state.message}
                  </p>
                ) : null}
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
              <a href="mailto:support@reactheme.com">
                support@reactheme.com
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
