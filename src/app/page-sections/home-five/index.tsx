import Preloader from "./Preloader";
import Header from "./Header";
import Banner from "./Banner";
import Activities from "./Activities";
import Destinations from "./Destinations";
import PopularPackages from "./PopularPackages";
import Cta from "./Cta";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Header2 from "./Header2";
import DivSection13 from "./DivSection13";
import DragCursor from "./DragCursor";
import Progress from "./Progress";
import DirectionSwitcher from "./DirectionSwitcher";
import BodyClassController from "@/app/components/BodyClassController";
import ThemeScripts from "@/app/components/ThemeScripts";

export default function HomeFiveContent() {
  return (
    <>
      <BodyClassController className="travel-africa" />
      <Preloader />
      <Header />
      <Banner />
      <Activities />
      <Destinations />
      <PopularPackages />
      <Cta />
      <Testimonials />
      <Blog />
      <Gallery />
      <Footer />
      <Header2 />
      <DivSection13 />
      <DragCursor />
      <Progress />
      <DirectionSwitcher />
      <ThemeScripts />
    </>
  );
}
