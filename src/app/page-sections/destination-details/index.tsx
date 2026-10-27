import Preloader from "./Preloader";
import Header from "./Header";
import Banner from "./Banner";
import Destinations from "./Destinations";
import Gallery from "./Gallery";
import Tours from "./Tours";
import Cta from "./Cta";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Cta2 from "./Cta2";
import Footer from "./Footer";
import Header2 from "./Header2";
import DivSection14 from "./DivSection14";
import DragCursor from "./DragCursor";
import Progress from "./Progress";
import DirectionSwitcher from "./DirectionSwitcher";
import BodyClassController from "@/app/components/BodyClassController";
import ThemeScripts from "@/app/components/ThemeScripts";
import InnerPageController from "@/app/components/InnerPageController";
import type { DetailContent } from "@/data/details";

export default function DestinationDetailsContent({ detailContent }: { detailContent: DetailContent }) {
  return (
    <>
      <BodyClassController className="home-bg" />
      <Preloader />
      <Header />
      <Banner />
      <Destinations detailContent={detailContent} />
      <Gallery />
      <Tours />
      <Cta />
      <Faq />
      <Testimonials />
      <Blog />
      <Cta2 />
      <Footer />
      <Header2 />
      <DivSection14 />
      <DragCursor />
      <Progress />
      <DirectionSwitcher />
      <InnerPageController />
      <ThemeScripts />
    </>
  );
}
