import LegacyHomePage from "@/app/components/LegacyHomePage";
import { homeTenMarkup } from "./markup";

export default function HomeTenContent() {
  return <LegacyHomePage bodyClass="carcamping" markup={homeTenMarkup} />;
}
