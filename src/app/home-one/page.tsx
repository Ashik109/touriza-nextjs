import HeaderOne from "./HeaderOne";
import BannerOne from "./BannerOne";
import OffersOne from "./OffersOne";
import TripTypeOne from "./TripTypeOne";
import DestinationsOne from "./DestinationsOne";
import WhyChooseOne from "./WhyChooseOne";
import CounterOne from "./CounterOne";
import ToursOne from "./ToursOne";
import GalleryOne from "./GalleryOne";
import BrandOne from "./BrandOne";
import TestimonialsOne from "./TestimonialsOne";
import BlogOne from "./BlogOne";
import CtaOne from "./CtaOne";
import FooterOne from "./FooterOne";
import BodyClassController from "../components/BodyClassController";

export default function HomeOnePage() {
  return <><BodyClassController className="home-bg" /><HeaderOne /><main><BannerOne /><OffersOne /><TripTypeOne /><DestinationsOne /><WhyChooseOne /><CounterOne /><ToursOne /><GalleryOne /><BrandOne /><TestimonialsOne /><BlogOne /><CtaOne /></main><FooterOne /></>;
}
