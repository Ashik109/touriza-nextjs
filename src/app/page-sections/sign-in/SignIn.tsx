import DemoForm from "@/app/components/DemoForm";
import Link from "next/link";

export default function SignIn() {
  return (
  <div className="sign-in-area">
    <div className="image radius-10 overflow-hidden">
      <img src="/assets/images/contact/01.webp" width="1245" alt="" />
    </div>
    <div className="sign-in-form radius-10 overflow-hidden body-bg-one">
      <div className="logo-area">
        <Link href="/">
          <img src="/assets/images/logo/02.svg" alt="" />
        </Link>
      </div>
      <h4 className="title">
        Sign In
      </h4>
      <p>Account form demo. Use sample details.</p>
      <DemoForm mode="sign-in">
        <div className="single-input-wrapper">
          <label htmlFor="account-field-1">
            Email*
          </label>
          <input id="account-field-1" type="email" name="email" placeholder="Your email address" required />
        </div>
        <div className="single-input-wrapper">
          <label htmlFor="account-field-2">
            Password
          </label>
          <input id="account-field-2" type="password" name="password" placeholder="Enter your password" required />
        </div>
        <Link href="/forgot-password" className="forgot-btn">Forgot your password?</Link>
        <button type="submit" className="rts-btn btn-primary m-w-100 text-center justify-content-center with-arrow">
          Sign In 
          <i className="fa-regular fa-arrow-up up-right"></i>
        </button>
      </DemoForm>
      <Link href="/sign-up">New to Touriza? Sign up</Link>
    </div>
  </div>
  );
}
