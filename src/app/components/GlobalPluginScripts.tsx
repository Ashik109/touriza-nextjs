"use client";

import Script from "next/script";

export default function GlobalPluginScripts() {
  const handlePluginsReady = () => {
    window.dispatchEvent(new Event("touriza:plugins-ready"));
  };

  return (
    <>
      <Script src="/assets/js/plugins/jquery.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/plugins/bootstrap.min.js" strategy="afterInteractive" />
      <Script
        src="/assets/js/plugins/magnific-popup.js"
        strategy="afterInteractive"
        onReady={handlePluginsReady}
      />
    </>
  );
}
