import type { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import parse, {
  attributesToProps,
  domToReact,
  Element,
  type DOMNode,
  type HTMLReactParserOptions,
} from "html-react-parser";
import BodyClassController from "./BodyClassController";
import ThemeScripts from "./ThemeScripts";

type LegacyHomePageProps = {
  bodyClass: string;
  markup: string;
};

const parserOptions: HTMLReactParserOptions = {
  replace(domNode) {
    if (!(domNode instanceof Element) || domNode.name !== "a") return;

    const href = domNode.attribs.href;
    if (!href?.startsWith("/") || href.startsWith("/assets/") || href.startsWith("//")) return;

    const anchorProps = attributesToProps(domNode.attribs) as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link {...anchorProps} href={href}>
        {domToReact(domNode.children as DOMNode[], parserOptions)}
      </Link>
    );
  },
};

export default function LegacyHomePage({ bodyClass, markup }: LegacyHomePageProps) {
  return (
    <>
      <BodyClassController className={bodyClass} />
      {parse(markup, parserOptions)}
      <ThemeScripts />
    </>
  );
}
