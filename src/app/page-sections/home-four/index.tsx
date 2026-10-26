import Preloader from "./Preloader";
import Header from "./Header";
import Banner from "./Banner";
import Search from "./Search";
import About from "./About";
import Destinations from "./Destinations";
import PopularPackages from "./PopularPackages";
import Activities from "./Activities";
import WhyChoose from "./WhyChoose";
import Testimonials from "./Testimonials";
import Counter from "./Counter";
import Team from "./Team";
import Blog from "./Blog";
import Footer from "./Footer";
import Header2 from "./Header2";
import DivSection16 from "./DivSection16";
import DragCursor from "./DragCursor";
import Progress from "./Progress";
import DirectionSwitcher from "./DirectionSwitcher";
import BodyClassController from "@/app/components/BodyClassController";
import ThemeScripts from "@/app/components/ThemeScripts";

export default function HomeFourContent() {
  return (
    <>
      <BodyClassController className="home-wild-bg onepage" />
      <Preloader />
      <Header />
      <Banner />
      <Search />
      <About />
      <Destinations />
      <PopularPackages />
      <Activities />
      <WhyChoose />
      <Testimonials />
      <Counter />
      <Team />
      <Blog />
      <Footer />
      <Header2 />
      <DivSection16 />
      <DragCursor />
      <Progress />
      <DirectionSwitcher />
      <ThemeScripts />
    </>
  );
}
