import Preloader from "./Preloader";
import Header from "./Header";
import Banner from "./Banner";
import Search from "./Search";
import Offers from "./Offers";
import Destinations from "./Destinations";
import PopularPackages from "./PopularPackages";
import Deals from "./Deals";
import Newsletter from "./Newsletter";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Footer from "./Footer";
import Header2 from "./Header2";
import DivSection14 from "./DivSection14";
import DragCursor from "./DragCursor";
import Progress from "./Progress";
import DirectionSwitcher from "./DirectionSwitcher";
import BodyClassController from "@/app/components/BodyClassController";
import ThemeScripts from "@/app/components/ThemeScripts";

export default function HomeSixContent() {
  return (
    <>
      <BodyClassController className="tour-marketplace" />
      <Preloader />
      <Header />
      <Banner />
      <Search />
      <Offers />
      <Destinations />
      <PopularPackages />
      <Deals />
      <Newsletter />
      <Testimonials />
      <Blog />
      <Footer />
      <Header2 />
      <DivSection14 />
      <DragCursor />
      <Progress />
      <DirectionSwitcher />
      <ThemeScripts />
    </>
  );
}
