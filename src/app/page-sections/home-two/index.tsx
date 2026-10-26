import Preloader from "./Preloader";
import Header from "./Header";
import Banner from "./Banner";
import Search from "./Search";
import Destinations from "./Destinations";
import WhyChoose from "./WhyChoose";
import TripTypes from "./TripTypes";
import Tours from "./Tours";
import Testimonials from "./Testimonials";
import Brands from "./Brands";
import Cta from "./Cta";
import Blog from "./Blog";
import Gallery from "./Gallery";
import Footer from "./Footer";
import FilterSidebar from "./FilterSidebar";
import Header2 from "./Header2";
import DivSection17 from "./DivSection17";
import DragCursor from "./DragCursor";
import Progress from "./Progress";
import DirectionSwitcher from "./DirectionSwitcher";
import BodyClassController from "@/app/components/BodyClassController";
import ThemeScripts from "@/app/components/ThemeScripts";

export default function HomeTwoContent() {
  return (
    <>
      <BodyClassController className="home-hiking-bg" />
      <Preloader />
      <Header />
      <Banner />
      <Search />
      <Destinations />
      <WhyChoose />
      <TripTypes />
      <Tours />
      <Testimonials />
      <Brands />
      <Cta />
      <Blog />
      <Gallery />
      <Footer />
      <FilterSidebar />
      <Header2 />
      <DivSection17 />
      <DragCursor />
      <Progress />
      <DirectionSwitcher />
      <ThemeScripts />
    </>
  );
}
