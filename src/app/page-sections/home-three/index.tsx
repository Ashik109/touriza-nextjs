import Preloader from "./Preloader";
import Header from "./Header";
import Banner from "./Banner";
import PopularPackages from "./PopularPackages";
import Destinations from "./Destinations";
import Offers from "./Offers";
import PopularPackages2 from "./PopularPackages2";
import Activities from "./Activities";
import Counter from "./Counter";
import WhyChoose from "./WhyChoose";
import Testimonials from "./Testimonials";
import Brands from "./Brands";
import Newsletter from "./Newsletter";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Header2 from "./Header2";
import DivSection17 from "./DivSection17";
import DragCursor from "./DragCursor";
import Progress from "./Progress";
import DirectionSwitcher from "./DirectionSwitcher";
import BodyClassController from "@/app/components/BodyClassController";
import ThemeScripts from "@/app/components/ThemeScripts";

export default function HomeThreeContent() {
  return (
    <>
      <BodyClassController className="home-yacht-bg" />
      <Preloader />
      <Header />
      <Banner />
      <PopularPackages />
      <Destinations />
      <Offers />
      <PopularPackages2 />
      <Activities />
      <Counter />
      <WhyChoose />
      <Testimonials />
      <Brands />
      <Newsletter />
      <Gallery />
      <Footer />
      <Header2 />
      <DivSection17 />
      <DragCursor />
      <Progress />
      <DirectionSwitcher />
      <ThemeScripts />
    </>
  );
}
