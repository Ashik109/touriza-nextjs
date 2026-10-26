import Preloader from "./Preloader";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import Destinations from "./Destinations";
import Faq from "./Faq";
import Footer from "./Footer";
import Header2 from "./Header2";
import FilterSidebar from "./FilterSidebar";
import DivSection9 from "./DivSection9";
import DragCursor from "./DragCursor";
import Progress from "./Progress";
import DirectionSwitcher from "./DirectionSwitcher";
import BodyClassController from "@/app/components/BodyClassController";
import ThemeScripts from "@/app/components/ThemeScripts";
import InnerPageController from "@/app/components/InnerPageController";

export default function DestinationContent() {
  return (
    <>
      <BodyClassController className="home-bg" />
      <Preloader />
      <Header />
      <Breadcrumb />
      <Destinations />
      <Faq />
      <Footer />
      <Header2 />
      <FilterSidebar />
      <DivSection9 />
      <DragCursor />
      <Progress />
      <DirectionSwitcher />
      <InnerPageController />
      <ThemeScripts />
    </>
  );
}
