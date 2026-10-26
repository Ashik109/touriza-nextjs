import Preloader from "./Preloader";
import Header from "./Header";
import Banner from "./Banner";
import Search from "./Search";
import Destinations from "./Destinations";
import Tours from "./Tours";
import Activities from "./Activities";
import Deals from "./Deals";
import Testimonials from "./Testimonials";
import Brands from "./Brands";
import Blog from "./Blog";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Header2 from "./Header2";
import DivSection15 from "./DivSection15";
import DragCursor from "./DragCursor";
import Progress from "./Progress";
import DirectionSwitcher from "./DirectionSwitcher";
import BodyClassController from "@/app/components/BodyClassController";
import ThemeScripts from "@/app/components/ThemeScripts";

export default function HomeSevenContent() {
  return (
    <>
      <BodyClassController className="summer-travel" />
      <Preloader />
      <Header />
      <Banner />
      <Search />
      <Destinations />
      <Tours />
      <Activities />
      <Deals />
      <Testimonials />
      <Brands />
      <Blog />
      <Gallery />
      <Footer />
      <Header2 />
      <DivSection15 />
      <DragCursor />
      <Progress />
      <DirectionSwitcher />
      <ThemeScripts />
    </>
  );
}
