import Preloader from "./Preloader";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import Search from "./Search";
import Tours from "./Tours";
import Footer from "./Footer";
import Header2 from "./Header2";
import DivSection8 from "./DivSection8";
import DragCursor from "./DragCursor";
import Progress from "./Progress";
import DirectionSwitcher from "./DirectionSwitcher";
import BodyClassController from "@/app/components/BodyClassController";
import ThemeScripts from "@/app/components/ThemeScripts";
import InnerPageController from "@/app/components/InnerPageController";

export default function TourThreeContent() {
  return (
    <>
      <BodyClassController className="with-sidebar" />
      <Preloader />
      <Header />
      <Breadcrumb />
      <Search />
      <Tours />
      <Footer />
      <Header2 />
      <DivSection8 />
      <DragCursor />
      <Progress />
      <DirectionSwitcher />
      <InnerPageController />
      <ThemeScripts />
    </>
  );
}
