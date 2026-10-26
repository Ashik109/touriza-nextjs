import Preloader from "./Preloader";
import SignIn from "./SignIn";
import DivSection3 from "./DivSection3";
import DragCursor from "./DragCursor";
import Progress from "./Progress";
import DirectionSwitcher from "./DirectionSwitcher";
import BodyClassController from "@/app/components/BodyClassController";
import ThemeScripts from "@/app/components/ThemeScripts";
import InnerPageController from "@/app/components/InnerPageController";

export default function SignUpContent() {
  return (
    <>
      <BodyClassController className="home-bg" />
      <Preloader />
      <SignIn />
      <DivSection3 />
      <DragCursor />
      <Progress />
      <DirectionSwitcher />
      <InnerPageController />
      <ThemeScripts />
    </>
  );
}
