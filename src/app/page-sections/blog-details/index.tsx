import Preloader from "./Preloader";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import Blog from "./Blog";
import Cta from "./Cta";
import Footer from "./Footer";
import FilterSidebar from "./FilterSidebar";
import Header2 from "./Header2";
import DivSection9 from "./DivSection9";
import DragCursor from "./DragCursor";
import Progress from "./Progress";
import DirectionSwitcher from "./DirectionSwitcher";
import BodyClassController from "@/app/components/BodyClassController";
import ThemeScripts from "@/app/components/ThemeScripts";
import InnerPageController from "@/app/components/InnerPageController";
import type { DetailContent } from "@/data/details";

export default function BlogDetailsContent({ detailContent }: { detailContent: DetailContent }) {
  return (
    <>
      <BodyClassController className="home-bg with-sidebar" />
      <Preloader />
      <Header />
      <Breadcrumb detailContent={detailContent} />
      <Blog detailContent={detailContent} />
      <Cta />
      <Footer />
      <FilterSidebar />
      <Header2 />
      <DivSection9 />
      <DragCursor />
      <Progress />
      <DirectionSwitcher />
      <InnerPageController />
      <ThemeScripts />
    </>
  );
}
