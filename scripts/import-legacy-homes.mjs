import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { htmlToDOM } from "html-react-parser";

const sourceRoot = resolve(process.argv[2] ?? "../touriza");
const projectRoot = resolve(import.meta.dirname, "..");
const currentYear = new Date().getFullYear();

const pages = [
  { source: "index-eight.html", folder: "home-eight", exportName: "homeEightMarkup" },
  { source: "index-nine.html", folder: "home-nine", exportName: "homeNineMarkup" },
  { source: "index-ten.html", folder: "home-ten", exportName: "homeTenMarkup" },
];

const routeMap = {
  "index.html": "/",
  "index-two.html": "/home-two",
  "index-three.html": "/home-three",
  "index-four.html": "/home-four",
  "index-five.html": "/home-five",
  "index-six.html": "/home-six",
  "index-seven.html": "/home-seven",
  "index-eight.html": "/home-eight",
  "index-nine.html": "/home-nine",
  "index-ten.html": "/home-ten",
  "about.html": "/about",
  "blog.html": "/blog",
  "blog-details.html": "/blog-details",
  "contact.html": "/contact",
  "destination.html": "/destination",
  "destinations.html": "/destination",
  "destination-details.html": "/destination-details",
  "sign-in.html": "/sign-in",
  "sign-up.html": "/sign-up",
  "team.html": "/team",
  "tour.html": "/tour",
  "tour-one.html": "/tour-one",
  "tour-two.html": "/tour-two",
  "tour-three.html": "/tour-three",
  "tour-four.html": "/tour-four",
  "tour-five.html": "/tour-five",
  "tour-details.html": "/tour-details",
};

const detailDefaults = {
  tour: {
    slug: "the-luxury-island-hopper",
    title: "The Luxury Island Hopper",
    image: "assets/images/trip/22.webp",
  },
  destination: {
    slug: "maldives",
    title: "Maldives",
    image: "assets/images/destination/16.webp",
  },
  blog: {
    slug: "top-10-essential-travel-tips-for-first-time-travelers",
    title: "Top 10 Essential Travel Tips for First-Time Travelers",
    image: "assets/images/blog/12.webp",
  },
};

const legacyDetailContent = { tour: {}, destination: {}, blog: {} };

function slugFromTitle(title) {
  return title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function nodeText(node) {
  if (node.type === "text") return node.data ?? "";
  return (node.children ?? []).map(nodeText).join(" ").replace(/\s+/g, " ").trim();
}

function descendantElements(node) {
  return (node.children ?? []).flatMap((child) => [child, ...descendantElements(child)]);
}

function meaningfulTitle(value) {
  const title = value.replace(/\s+/g, " ").trim();
  const genericLabels = new Set([
    "",
    "view",
    "view tour",
    "read more",
    "explore",
    "learn more",
    "tour details",
    "destination details",
    "destinations details",
    "blog details",
  ]);
  return genericLabels.has(title.toLowerCase()) ? "" : title;
}

function detailContext(anchor, kind) {
  const rawOwnTitle = nodeText(anchor).replace(/\s+/g, " ").trim();
  if (/^(tour|destinations?|blog) details$/i.test(rawOwnTitle)) return detailDefaults[kind];

  const ownTitle = /^[\d$€£,.\s]+$/.test(rawOwnTitle) ? "" : meaningfulTitle(rawOwnTitle);
  let title = "";
  let image = "";

  let ancestor = anchor.parent;
  for (let depth = 0; ancestor && depth < 8; depth += 1, ancestor = ancestor.parent) {
    const descendants = descendantElements(ancestor);
    if (!title) {
      const headings = descendants.filter((node) => /^h[1-6]$/.test(node.name ?? ""));
      const titleNode = headings.find((node) => /(^|\s)title(\s|$)/.test(node.attribs?.class ?? ""))
        ?? headings.find((node) => !/(^|\s)price(\s|$)/.test(node.attribs?.class ?? ""));
      title = titleNode ? meaningfulTitle(nodeText(titleNode)) : "";
    }
    if (!image) {
      const images = descendants.filter((node) => node.name === "img" && node.attribs?.src);
      const imageNode = images.find((node) => /\.(webp|jpe?g|png)$/i.test(node.attribs.src))
        ?? images.find((node) => !/\/icon\/|star|\.svg$/i.test(node.attribs.src));
      image = imageNode?.attribs?.src?.replace(/^\//, "") ?? "";
    }
    if (title && image) break;
  }

  return {
    title: title || ownTitle || detailDefaults[kind].title,
    image: image || detailDefaults[kind].image,
  };
}

function rewriteDetailLinks(markup) {
  const nodes = htmlToDOM(markup, { withStartIndices: true, withEndIndices: true });
  const anchors = nodes.flatMap((node) => [node, ...descendantElements(node)]).filter((node) => {
    const href = node.attribs?.href;
    return node.name === "a" && ["/tour-details", "/destination-details", "/blog-details"].includes(href);
  });
  const replacements = [];

  for (const anchor of anchors) {
    const legacyHref = anchor.attribs.href;
    const kind = legacyHref.slice(1, -"-details".length);
    const context = detailContext(anchor, kind);
    const slug = slugFromTitle(context.title) || detailDefaults[kind].slug;
    const href = `/${kind}/${slug}`;
    const start = anchor.startIndex;
    if (typeof start !== "number") continue;
    const tagEnd = markup.indexOf(">", start);
    if (tagEnd === -1) continue;

    const openingTag = markup.slice(start, tagEnd + 1);
    const replacement = openingTag.replace(legacyHref, href);
    replacements.push({ start, end: tagEnd + 1, replacement });
    legacyDetailContent[kind][slug] = {
      slug,
      title: context.title,
      image: context.image || detailDefaults[kind].image,
    };
  }

  return replacements
    .sort((first, second) => second.start - first.start)
    .reduce(
      (result, replacement) =>
        result.slice(0, replacement.start) + replacement.replacement + result.slice(replacement.end),
      markup,
    );
}

function normalizeMarkup(html) {
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1];
  if (!body) throw new Error("Unable to find body markup");

  let markup = body
    .replace(/<script>[^<]*document\.write\([\s\S]*?getFullYear\(\)[\s\S]*?<\/script>/gi, String(currentYear))
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/\bwow\b/g, "")
    .replace(/(["'(])assets\//g, "$1/assets/")
    .replace(/action=(["'])mailer\.php\1/gi, 'action="#"');

  for (const [legacyPath, route] of Object.entries(routeMap)) {
    markup = markup
      .replaceAll(`href="${legacyPath}"`, `href="${route}"`)
      .replaceAll(`href='${legacyPath}'`, `href='${route}'`);
  }

  return markup.trim();
}

function addHomeNineTestimonialSlides(markup) {
  const testimonialDescriptions = [
    "Everything about this trip was magical. The crew was professional, the kayak was spotless, and the beautiful sunset made the experience unforgettable.",
    "Our honeymoon kayaking trip was the perfect choice. The service felt personal, the food was delicious, and every moment was peaceful and private.",
    "From booking to the final paddle, everything went smoothly. The team guided us carefully and made the whole family feel comfortable and completely safe.",
    "I have traveled to many places, but this peaceful journey was special. Calm water, fresh air, and beautiful views made it feel like a wonderful dream.",
  ];
  const parseSlider = () => {
    const nodes = htmlToDOM(markup, { withStartIndices: true, withEndIndices: true });
    const elements = nodes.flatMap((node) => [node, ...descendantElements(node)]);
    return elements.find((node) =>
      node.name === "div"
      && (node.attribs?.class ?? "").split(/\s+/).includes("testimonials-slider4"),
    );
  };

  let slider = parseSlider();
  const descriptions = descendantElements(slider).filter((node) =>
    node.name === "p" && (node.attribs?.class ?? "").split(/\s+/).includes("desc"),
  );
  const replacements = descriptions.slice(0, testimonialDescriptions.length).flatMap((node, index) => {
    if (typeof node.startIndex !== "number" || typeof node.endIndex !== "number") return [];
    const contentStart = markup.indexOf(">", node.startIndex) + 1;
    const contentEnd = markup.lastIndexOf("</p>", node.endIndex);
    if (contentStart === 0 || contentEnd === -1) return [];
    return [{ start: contentStart, end: contentEnd, text: `\n                                    ${testimonialDescriptions[index]}\n                                ` }];
  });
  markup = replacements.sort((first, second) => second.start - first.start).reduce(
    (result, replacement) => result.slice(0, replacement.start) + replacement.text + result.slice(replacement.end),
    markup,
  );

  slider = parseSlider();
  const wrapper = slider?.children?.find((node) =>
    node.name === "div"
    && (node.attribs?.class ?? "").split(/\s+/).includes("swiper-wrapper"),
  );
  const slides = wrapper?.children?.filter((node) =>
    node.name === "div"
    && (node.attribs?.class ?? "").split(/\s+/).includes("swiper-slide"),
  ) ?? [];

  if (slides.length !== 4 || typeof wrapper?.endIndex !== "number") return markup;

  const duplicatedSlides = slides.slice(0, 2).map((slide) => {
    if (typeof slide.startIndex !== "number" || typeof slide.endIndex !== "number") return "";
    return markup.slice(slide.startIndex, slide.endIndex + 1);
  }).join("");
  const closingTagIndex = markup.lastIndexOf("</div>", wrapper.endIndex);
  if (!duplicatedSlides || closingTagIndex === -1) return markup;

  return markup.slice(0, closingTagIndex) + duplicatedSlides + markup.slice(closingTagIndex);
}

function copyReferencedImages(markup) {
  const imagePaths = new Set(markup.match(/\/assets\/images\/[A-Za-z0-9_./-]+/g) ?? []);
  for (const publicPath of imagePaths) {
    const relativePath = publicPath.slice(1);
    const sourcePath = join(sourceRoot, relativePath);
    const targetPath = join(projectRoot, "public", relativePath);
    if (!existsSync(sourcePath) || existsSync(targetPath)) continue;
    mkdirSync(dirname(targetPath), { recursive: true });
    copyFileSync(sourcePath, targetPath);
  }
}

function syncThemeCss() {
  const sourcePath = join(sourceRoot, "assets", "css", "style.css");
  const targetPath = join(projectRoot, "public", "assets", "css", "style.css");
  const css = readFileSync(sourcePath, "utf8")
    .replaceAll("url(../images/", "url(/assets/images/")
    .replace(
      ".swiper-nav-pag-area .swiper-navigation .swiper-btn {",
      ".swiper-btn {\n  cursor: pointer;\n}\n\n.swiper-nav-pag-area .swiper-navigation .swiper-btn {",
    );
  writeFileSync(targetPath, css);
}

function collectHeaderFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return collectHeaderFiles(path);
    return /^Header.*\.tsx$/.test(entry.name) ? [path] : [];
  });
}

function insertLinksAfter(content, anchorHref, links) {
  const eol = content.includes("\r\n") ? "\r\n" : "\n";
  const lines = content.split(/\r?\n/);
  const anchorLine = lines.findIndex((line) => line.includes(`href="${anchorHref}"`));
  if (anchorLine === -1) return content;

  let start = anchorLine;
  while (start >= 0 && !lines[start].includes("<li")) start -= 1;
  let end = anchorLine;
  while (end < lines.length && !lines[end].includes("</li>")) end += 1;
  if (start < 0 || end >= lines.length) return content;

  const block = lines.slice(start, end + 1).join(eol);
  const additions = links.map(([label, href]) => {
    let clone = block.replace(anchorHref, href);
    const linkMatch = clone.match(/<Link\b[^>]*>([\s\S]*?)<\/Link>/);
    if (linkMatch) clone = clone.replace(linkMatch[1], linkMatch[1].replace(linkMatch[1].trim(), label));
    return clone;
  });
  lines.splice(end + 1, 0, ...additions);
  return lines.join(eol);
}

function syncHomeMenus() {
  const appRoot = join(projectRoot, "src", "app");
  const headerFiles = [join(appRoot, "home-one", "HeaderOne.tsx"), ...collectHeaderFiles(appRoot)];
  const uniqueHeaderFiles = [...new Set(headerFiles)];

  for (const headerPath of uniqueHeaderFiles) {
    let content = readFileSync(headerPath, "utf8")
      .replaceAll('href="/index-eight"', 'href="/home-eight"')
      .replaceAll("SEO Agency", "Travel Agency Two");
    if (!content.includes('/home-seven')) continue;

    if (headerPath.endsWith("HeaderOne.tsx")) {
      if (!content.includes('["Travel Agency Two", "/home-eight"]')) {
        content = content.replace(
          '  ["Summer Travel", "/home-seven"],',
          '  ["Summer Travel", "/home-seven"],\n  ["Travel Agency Two", "/home-eight"],\n  ["Kayaking", "/home-nine"],\n  ["Car Camping", "/home-ten"],',
        );
      }
    } else if (content.includes('/home-eight')) {
      const missingLinks = [
        ["Kayaking", "/home-nine"],
        ["Car Camping", "/home-ten"],
      ].filter(([, href]) => !content.includes(href));
      content = insertLinksAfter(content, "/home-eight", missingLinks);
    } else {
      content = insertLinksAfter(content, "/home-seven", [
        ["Travel Agency Two", "/home-eight"],
        ["Kayaking", "/home-nine"],
        ["Car Camping", "/home-ten"],
      ]);
    }

    writeFileSync(headerPath, content);
  }
}

for (const page of pages) {
  const sourcePath = join(sourceRoot, page.source);
  let markup = normalizeMarkup(readFileSync(sourcePath, "utf8"));
  if (page.folder === "home-nine") markup = addHomeNineTestimonialSlides(markup);
  markup = rewriteDetailLinks(markup);
  copyReferencedImages(markup);

  const outputPath = join(projectRoot, "src", "app", "page-sections", page.folder, "markup.ts");
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, `export const ${page.exportName} = ${JSON.stringify(markup)};\n`);
}

const detailOutputPath = join(projectRoot, "src", "data", "legacy-detail-content.ts");
writeFileSync(
  detailOutputPath,
  `import type { DetailContent, DetailKind } from "./details";\n\nexport const legacyDetailContent: Record<DetailKind, Record<string, DetailContent>> = ${JSON.stringify(legacyDetailContent, null, 2)};\n`,
);

syncThemeCss();
syncHomeMenus();
