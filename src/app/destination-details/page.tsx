import { redirect } from "next/navigation";
import { defaultDestinationSlug } from "../../data/details";

export default function DestinationDetailsPage() {
  redirect(`/destination/${defaultDestinationSlug}`);
}
