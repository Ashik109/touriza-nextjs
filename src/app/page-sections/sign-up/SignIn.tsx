import DemoForm from "@/app/components/DemoForm";
import Link from "next/link";

export default function SignIn() {
  return (
  <div className="sign-in-area">
    <div className="image radius-10 overflow-hidden">
      <img src="/assets/images/contact/02.webp" width="1245" alt="" />
    </div>
    <div className="sign-in-form radius-10 overflow-hidden body-bg-one">
      <div className="logo-area">
        <Link href="/">
          <img src="/assets/images/logo/02.svg" alt="" />
        </Link>
      </div>
      <h4 className="title">
        Sign Up
      </h4>
      <p>Account form demo. Use sample details.</p>
      <DemoForm mode="sign-up">
        <div className="single-input-wrapper">
          <label htmlFor="account-field-1">
            First Name*
          </label>
          <input id="account-field-1" type="text" name="name" placeholder="Your first name" required />
        </div>
        <div className="single-input-wrapper">
          <label htmlFor="account-field-2">
            Last Name*
          </label>
          <input id="account-field-2" type="text" name="name" placeholder="Your last name" required />
        </div>
        <div className="single-input-wrapper">
          <label htmlFor="fmail">
            Email*
          </label>
          <input type="email" name="email" placeholder="Your email address" required />
        </div>
        <div className="single-input-wrapper">
          <label htmlFor="account-field-3">
            Password
          </label>
          <input id="account-field-3" type="password" name="password" placeholder="Enter your password" required />
        </div>

        <button type="submit" className="rts-btn btn-primary m-w-100 text-center justify-content-center with-arrow">
          Sign Up
          <i className="fa-regular fa-arrow-up up-right"></i>
        </button>
      </DemoForm>
      <Link href="/sign-in">Already registered? Sign in</Link>
    </div>
  </div>
  );
}
