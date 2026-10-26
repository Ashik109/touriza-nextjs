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
      <form action="#">
        <div className="single-input-wrapper">
          <label htmlFor="femail">
            Email*
          </label>
          <input type="email" name="email" placeholder="Your email address" required />
        </div>
        <div className="single-input-wrapper">
          <label htmlFor="fname">
            Password
          </label>
          <input type="password" name="password" placeholder="Enter your password" required />
        </div>
        <div className="single-input-area d-flex align-items-center justify-content-between">
          <label className="checkbox-label">
            <input type="checkbox" />
            <span>
              Remember me
            </span>
          </label>
          <a href="#" className="forgot-btn">
            Forgot your password?
          </a>
        </div>
        <button type="submit" className="rts-btn btn-primary m-w-100 text-center justify-content-center with-arrow">
          Sign In 
          <i className="fa-regular fa-arrow-up up-right"></i>
        </button>
      </form>
    </div>
  </div>
  );
}
