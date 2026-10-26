import Preloader from "./Preloader";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import Contact from "./Contact";
import Map from "./Map";
import Faq from "./Faq";
import Footer from "./Footer";
import Header2 from "./Header2";
import FilterSidebar from "./FilterSidebar";
import DivSection10 from "./DivSection10";
import DragCursor from "./DragCursor";
import Progress from "./Progress";
import DirectionSwitcher from "./DirectionSwitcher";
import BodyClassController from "@/app/components/BodyClassController";
import ThemeScripts from "@/app/components/ThemeScripts";
import InnerPageController from "@/app/components/InnerPageController";

export default function ContactContent() {
  return (
    <>
      <BodyClassController className="home-bg" />
      <Preloader />
      <Header />
      <Breadcrumb />
      <Contact />
      <Map />
      <Faq />
      <Footer />
      <Header2 />
      <FilterSidebar />
      <DivSection10 />
      <DragCursor />
      <Progress />
      <DirectionSwitcher />
      <InnerPageController />
      <ThemeScripts />
    </>
  );
}
