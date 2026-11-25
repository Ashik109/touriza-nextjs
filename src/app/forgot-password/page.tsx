import Link from "next/link";
import DemoPage from "../components/DemoPage";
import DemoForm from "../components/DemoForm";

export default function ForgotPasswordPage() {
  return (
    <DemoPage title="Reset Password">
      <p>Preview the password reset form using a sample email address.</p>
      <DemoForm mode="reset-password">
        <label className="d-block mb-3">
          Account email <input type="email" name="email" autoComplete="email" placeholder="traveler@example.com" required />
        </label>
        <button type="submit" className="rts-btn btn-primary">Request reset</button>
      </DemoForm>
      <Link href="/sign-in" className="d-inline-block mt-3">Back to sign in</Link>
    </DemoPage>
  );
}
