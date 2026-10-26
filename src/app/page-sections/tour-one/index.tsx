import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import Story from "./Story";
import Services from "./Services";
import WhyChoose from "./WhyChoose";
import Counter from "./Counter";
import Team from "./Team";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Cta from "./Cta";
import Footer from "./Footer";
import SearchOverlay from "./SearchOverlay";
import DivSection13 from "./DivSection13";
import Header2 from "./Header2";
import DragCursor from "./DragCursor";
import Progress from "./Progress";
import BodyClassController from "@/app/components/BodyClassController";
import ThemeScripts from "@/app/components/ThemeScripts";
import InnerPageController from "@/app/components/InnerPageController";

export default function TourOneContent() {
  return (
    <>
      <BodyClassController className="home-bg" />
      <Header />
      <Breadcrumb />
      <Story />
      <Services />
      <WhyChoose />
      <Counter />
      <Team />
      <Gallery />
      <Testimonials />
      <Cta />
      <Footer />
      <SearchOverlay />
      <DivSection13 />
      <Header2 />
      <DragCursor />
      <Progress />
      <InnerPageController />
      <ThemeScripts />
    </>
  );
}
