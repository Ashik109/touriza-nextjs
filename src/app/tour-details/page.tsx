import { redirect } from "next/navigation";
import { defaultTourSlug } from "../../data/details";

export default function TourDetailsPage() {
  redirect(`/tour/${defaultTourSlug}`);
}
