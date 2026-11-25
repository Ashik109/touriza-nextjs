import Link from "next/link";
import DemoPage from "../components/DemoPage";

export default function PrivacyPolicyPage() {
  return (
    <DemoPage title="Demo Privacy Notice">
      <p>The contact form forwards the details you submit to the configured contact service so the site operator can respond. Use sample details when exploring this template.</p>
      <p>Embedded maps and videos are served by their respective providers and may receive your IP address and browser information.</p>
      <p>Some demo preferences are stored in your browser. <Link href="/cookies-policy">Read about browser storage</Link>.</p>
    </DemoPage>
  );
}
