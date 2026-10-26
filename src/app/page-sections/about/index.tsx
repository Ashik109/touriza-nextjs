import Preloader from "./Preloader";
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
import Header2 from "./Header2";
import FilterSidebar from "./FilterSidebar";
import DivSection15 from "./DivSection15";
import DragCursor from "./DragCursor";
import Progress from "./Progress";
import DirectionSwitcher from "./DirectionSwitcher";
import BodyClassController from "@/app/components/BodyClassController";
import ThemeScripts from "@/app/components/ThemeScripts";
import InnerPageController from "@/app/components/InnerPageController";

export default function AboutContent() {
  return (
    <>
      <BodyClassController className="home-bg with-sidebar" />
      <Preloader />
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
      <Header2 />
      <FilterSidebar />
      <DivSection15 />
      <DragCursor />
      <Progress />
      <DirectionSwitcher />
      <InnerPageController />
      <ThemeScripts />
    </>
  );
}
