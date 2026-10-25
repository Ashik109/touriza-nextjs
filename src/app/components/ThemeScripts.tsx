"use client";

import Script from "next/script";

const scripts = [
  "/assets/js/plugins/jquery.min.js",
  "/assets/js/plugins/bootstrap.min.js",
  "/assets/js/plugins/metismenu.js",
  "/assets/js/vendor/jqueryui.js",
  "/assets/js/vendor/waypoint.js",
  "/assets/js/plugins/swiper.js",
  "/assets/js/plugins/smoothscroll.js",
  "/assets/js/vendor/wow.js",
  "/assets/js/plugins/odometer.js",
  "/assets/js/plugins/magnific-popup.js",
  "/assets/js/plugins/isotop.js",
  "/assets/js/main.js",
];

export default function ThemeScripts() {
  const handleThemeReady = () => {
    document.documentElement.dataset.tourizaThemeReady = "true";
    window.dispatchEvent(new Event("touriza:theme-ready"));
  };

  return (
    <>
      {scripts.map((src) => (
        <Script
          key={src}
          src={src}
          strategy="afterInteractive"
          onReady={src === "/assets/js/main.js" ? handleThemeReady : undefined}
        />
      ))}
    </>
  );
}
