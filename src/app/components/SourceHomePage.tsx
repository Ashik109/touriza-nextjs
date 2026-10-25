import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { ReactNode } from "react";
import Link from "next/link";
import parse, { attributesToProps, domToReact, Element, type DOMNode, type HTMLReactParserOptions } from "html-react-parser";
import BodyClassController from "./BodyClassController";
import ThemeScripts from "./ThemeScripts";

const routeMap: Record<string, string> = {
  "index.html": "/",
  "index-two.html": "/home-two",
  "index-three.html": "/home-three",
  "index-four.html": "/home-four",
  "index-five.html": "/home-five",
  "index-six.html": "/home-six",
  "index-seven.html": "/home-seven",
  "tour.html": "/tour",
  "tour-one.html": "/tour-one",
  "tour-two.html": "/tour-two",
  "tour-three.html": "/tour-three",
  "tour-four.html": "/tour-four",
  "tour-five.html": "/tour-five",
  "tour-details.html": "/tour-details",
  "destination.html": "/destination",
  "destination-details.html": "/destination-details",
  "about.html": "/about",
  "team.html": "/team",
  "blog.html": "/blog",
  "blog-details.html": "/blog-details",
  "contact.html": "/contact",
  "sign-in.html": "/sign-in",
  "sign-up.html": "/sign-up",
};

const aosAnimations: Record<string, string> = {
  fadeIn: "fade",
  fadeInUp: "fade-up",
  fadeInDown: "fade-down",
  fadeInLeft: "fade-right",
  fadeInRight: "fade-left",
  zoomIn: "zoom-in",
  scaleIn: "zoom-in",
  slideInUp: "slide-up",
};

function milliseconds(value: string) {
  const seconds = Number.parseFloat(value);
  return Number.isFinite(seconds) ? String(Math.round(seconds * 1000)) : value;
}

function convertWowToAos(html: string) {
  return html.replace(/<[^>]+class="[^"]*\bwow\b[^"]*"[^>]*>/gi, (tag) => {
    const classMatch = tag.match(/class="([^"]*)"/i);
    if (!classMatch) return tag;

    const classes = classMatch[1].split(/\s+/).filter(Boolean);
    const animationClass = classes.find((className) => aosAnimations[className]);
    const cleanClasses = classes.filter((className) => className !== "wow" && !aosAnimations[className]);
    let converted = tag.replace(classMatch[0], `class="${cleanClasses.join(" ")}"`);

    converted = converted.replace(/\sdata-wow-delay="([^"]+)"/i, (_, delay: string) => ` data-aos-delay="${milliseconds(delay)}"`);
    converted = converted.replace(/\sdata-wow-duration="([^"]+)"/i, (_, duration: string) => ` data-aos-duration="${milliseconds(duration)}"`);

    if (animationClass && !converted.includes("data-aos=")) {
      converted = converted.replace(/>$/, ` data-aos="${aosAnimations[animationClass]}">`);
    }

    return converted;
  });
}

function addBackgroundStyles(html: string) {
  return html.replace(/<[^>]+data-bg-src="([^"]+)"[^>]*>/gi, (tag, source: string) => {
    const backgroundStyles = `background-image: url('${source}'); background-size: cover; background-position: center center; background-repeat: no-repeat;`;

    if (/\sstyle="[^"]*"/i.test(tag)) {
      return tag.replace(/\sstyle="([^"]*)"/i, (_, style: string) => ` style="${style}; ${backgroundStyles}"`);
    }

    return tag.replace(/>$/, ` style="${backgroundStyles}">`);
  });
}

function prepareHtml(source: string) {
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? source;
  let html = body.replace(/<script[^>]*>[\s\S]*?document\.write[\s\S]*?<\/script>/gi, "2026");
  html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  html = html.replace(/(["'(])assets\//g, "$1/assets/");
  html = html.replace(/href="([a-z0-9-]+\.html)(#[^"]*)?"/gi, (_, page: string, hash = "") => `href="${routeMap[page] ?? `/${page.replace(/\.html$/, "")}`}${hash}"`);
  html = convertWowToAos(html);
  return addBackgroundStyles(html);
}

function PageBlock({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

const parserOptions: HTMLReactParserOptions = {
  replace(domNode) {
    if (!(domNode instanceof Element) || domNode.name !== "a") return;

    const href = domNode.attribs.href;
    if (!href?.startsWith("/") || href.startsWith("/assets/")) return;

    return (
      <Link {...attributesToProps(domNode.attribs)} href={href}>
        {domToReact(domNode.children as DOMNode[], parserOptions)}
      </Link>
    );
  },
};

export default function SourceHomePage({ fileName }: { fileName: string }) {
  const filePath = join(process.cwd(), "src", "content", "home", fileName);
  const source = readFileSync(filePath, "utf8");
  const bodyClass = source.match(/<body[^>]*\bclass="([^"]*)"[^>]*>/i)?.[1] ?? "";
  const nodes = parse(prepareHtml(source), parserOptions);
  const blocks = Array.isArray(nodes) ? nodes : [nodes];

  return (
    <>
      <BodyClassController className={bodyClass} />
      {blocks.map((block, index) => <PageBlock key={index}>{block}</PageBlock>)}
      <ThemeScripts />
    </>
  );
}
