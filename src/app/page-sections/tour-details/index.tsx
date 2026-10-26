import Preloader from "./Preloader";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import TourDetails from "./TourDetails";
import Footer from "./Footer";
import Header2 from "./Header2";
import DivSection7 from "./DivSection7";
import DragCursor from "./DragCursor";
import Progress from "./Progress";
import DirectionSwitcher from "./DirectionSwitcher";
import BodyClassController from "@/app/components/BodyClassController";
import ThemeScripts from "@/app/components/ThemeScripts";
import InnerPageController from "@/app/components/InnerPageController";
import type { DetailContent } from "@/data/details";

export default function TourDetailsContent({ detailContent }: { detailContent: DetailContent }) {
  return (
    <>
      <BodyClassController className="home-bg with-sidebar onepage" />
      <Preloader />
      <Header />
      <Breadcrumb detailContent={detailContent} />
      <TourDetails detailContent={detailContent} />
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
