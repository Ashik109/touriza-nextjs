import Link from "next/link";
import DemoPage from "../components/DemoPage";

export default function BookingGuidePage() {
  return (
    <DemoPage title="Booking Guide">
      <ol className="mb--30">
        <li>Browse the tours and open the one you want to enquire about.</li>
        <li>Use the enquiry form on the tour page. Include your travel dates and group size.</li>
        <li>Ask the operator to confirm availability, the total price, inclusions, and cancellation terms before paying.</li>
      </ol>
      <p>This template demo illustrates the enquiry process. It does not accept payments or confirm reservations.</p>
      <Link className="rts-btn btn-primary" href="/tour">Browse tours</Link>
    </DemoPage>
  );
}
