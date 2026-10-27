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
import Preloader from "../page-sections/about/Preloader";
import Header2 from "../page-sections/about/Header2";
import FilterSidebar from "../page-sections/about/FilterSidebar";
import DivSection15 from "../page-sections/about/DivSection15";
import DragCursor from "../page-sections/about/DragCursor";
import Progress from "../page-sections/about/Progress";
import DirectionSwitcher from "../page-sections/about/DirectionSwitcher";
import ThemeScripts from "../components/ThemeScripts";

export default function HomeOnePage() {
  return <><BodyClassController className="home-bg" /><Preloader /><HeaderOne /><main><BannerOne /><OffersOne /><TripTypeOne /><DestinationsOne /><WhyChooseOne /><CounterOne /><ToursOne /><GalleryOne /><BrandOne /><TestimonialsOne /><BlogOne /><CtaOne /></main><FooterOne /><FilterSidebar /><Header2 /><DivSection15 /><DragCursor /><Progress /><DirectionSwitcher /><ThemeScripts /></>;
}
