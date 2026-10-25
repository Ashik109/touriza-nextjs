import type { Metadata } from "next";
import "../../public/assets/fonts/custom-font.css";
import "../../public/assets/css/vendor/bootstrap.min.css";
import "../../public/assets/css/vendor/animate.css";
import "../../public/assets/css/plugins/swiper.min.css";
import "../../public/assets/css/plugins/magnific-popup.css";
import "../../public/assets/css/plugins/metismenu.css";
import "../../public/assets/css/plugins/aos.css";
import "../../public/assets/css/plugins/odometer.css";
import "../../public/assets/css/plugins/nice-select.css";
import "../../public/assets/css/plugins/timepickers.min.css";
import "../../public/assets/css/plugins/unicons.css";
import "../../public/assets/css/plugins/fontawesome.min.css";
import "../../public/assets/css/plugins/fontawesome-6.css";
import "../../public/assets/css/plugins/hover-revel.css";
import "../../public/assets/css/style.css";
import AosController from "./components/AosController";
import PreloaderController from "./components/PreloaderController";

export const metadata: Metadata = {
  title: "Touriza | Travel Smart, Travel Better",
  description: "Discover extraordinary destinations and unforgettable journeys with Touriza.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <PreloaderController />
        <AosController />
        {children}
      </body>
    </html>
  );
}
