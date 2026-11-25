import Link from "next/link";
import type { ReactNode } from "react";
import Header from "../page-sections/about/Header";
import MobileMenu from "../page-sections/about/Header2";
import Footer from "../page-sections/about/Footer";
import Sidebar from "../page-sections/about/FilterSidebar";
import BodyClassController from "./BodyClassController";
import ThemeScripts from "./ThemeScripts";

export default function DemoPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <BodyClassController className="home-bg with-sidebar" />
      <Header />
      <main className="container rts-section-gap">
        <nav aria-label="Breadcrumb" className="mb--20"><Link href="/">Home</Link> / {title}</nav>
        <h1 className="mb--30">{title}</h1>
        {children}
      </main>
      <Footer />
      <MobileMenu />
      <Sidebar />
      <div id="anywhere-home" />
      <ThemeScripts />
    </>
  );
}
