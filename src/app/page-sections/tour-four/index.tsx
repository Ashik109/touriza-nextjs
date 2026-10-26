import Preloader from "./Preloader";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import Tours from "./Tours";
import Footer from "./Footer";
import Header2 from "./Header2";
import DivSection7 from "./DivSection7";
import DragCursor from "./DragCursor";
import Progress from "./Progress";
import DirectionSwitcher from "./DirectionSwitcher";
import BodyClassController from "@/app/components/BodyClassController";
import ThemeScripts from "@/app/components/ThemeScripts";
import InnerPageController from "@/app/components/InnerPageController";

export default function TourFourContent() {
  return (
    <>
      <BodyClassController className="" />
      <Preloader />
      <Header />
      <Breadcrumb />
      <Tours />
      <Footer />
      <Header2 />
      <DivSection7 />
      <DragCursor />
      <Progress />
      <DirectionSwitcher />
      <InnerPageController />
      <ThemeScripts />
    </>
  );
}
