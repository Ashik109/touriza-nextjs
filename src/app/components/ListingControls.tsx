"use client";

import { useEffect, useRef, useState } from "react";

type ListingKind = "tour" | "blog";
type Sort = "featured" | "price-low" | "price-high" | "duration";

export default function ListingControls({ kind }: { kind: ListingKind }) {
  const controls = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const pageSize = 6;

  useEffect(() => {
    const root = controls.current?.closest<HTMLElement>("[data-demo-listing]");
    if (!root) return;
    const sort = root.querySelector<HTMLSelectElement>("[data-listing-sort]");
    const status = root.querySelector<HTMLElement>("[data-listing-count]");
    const cards = [...root.querySelectorAll<HTMLElement>(
      kind === "tour" ? ".tour-wrapper, .tour-wrapper-list" : ".left-blog .blog-wrapper",
    )].map((card, index) => ({
      item: card.classList.contains("tour-wrapper-list") ? card : card.parentElement!,
      location: card.querySelector(".meta-content li")?.textContent?.trim().toLowerCase() ?? "",
      price: Number(card.querySelector(".image-area .tag")?.textContent?.match(/\$([\d,]+)/)?.[1].replaceAll(",", "") ?? 0),
      days: Number(card.querySelector(".meta-content")?.textContent?.match(/(\d+)\s*days?/i)?.[1] ?? 0),
      index,
    }));

    function render(currentPage: number) {
      const view = root?.querySelector(".tab-pane.active") ?? root;
      if (!view) return;
      const selectedLocations = [...root!.querySelectorAll<HTMLInputElement>(".destination input:checked")]
        .map(input => input.closest("label")?.textContent?.trim().toLowerCase());
      const selectedDurations = [...root!.querySelectorAll<HTMLInputElement>(".duration input:checked")]
        .map(input => input.closest("label")?.textContent?.trim());
      const minimum = Number(root!.querySelector<HTMLInputElement>("#minRange")?.value ?? 0) * 22.99;
      const maximum = Number(root!.querySelector<HTMLInputElement>("#maxRange")?.value ?? 100) * 22.99;
      const mode = sort?.value as Sort | undefined;
      const current = cards.filter(({ item }) => view.contains(item));
      current.sort((a, b) => {
        if (mode === "price-low") return a.price - b.price;
        if (mode === "price-high") return b.price - a.price;
        if (mode === "duration") return a.days - b.days;
        return a.index - b.index;
      });
      const filtered = current.filter(({ location, price, days }) =>
        (!selectedLocations.length || selectedLocations.some(value => value && location.includes(value)))
        && (!selectedDurations.length || selectedDurations.some(value => {
          if (value === "1 to 3 days") return days >= 1 && days <= 3;
          if (value === "3+ days") return days >= 3;
          return false;
        }))
        && (minimum === 0 || price >= minimum)
        && (maximum >= 2299 || price <= maximum)
      );
      const visible = new Set(filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize));
      current.forEach(card => {
        card.item.hidden = !visible.has(card);
        card.item.parentElement?.append(card.item);
      });
      setCount(filtered.length);
      if (status) status.textContent = `${filtered.length} ${kind === "tour" ? "tours" : "articles"} found`;
      requestAnimationFrame(() => window.dispatchEvent(new Event("scroll")));
    }

    const refresh = () => {
      setPage(1);
      render(1);
    };
    const clear = () => {
      root.querySelectorAll<HTMLInputElement>('input[type="checkbox"], input[type="range"]').forEach(input => {
        input.checked = false;
        if (input.type === "range") input.value = input.defaultValue;
      });
      if (sort) sort.value = "featured";
      root.querySelector("#minRange")?.dispatchEvent(new Event("input", { bubbles: true }));
      refresh();
    };
    const clearButton = root.querySelector("[data-listing-clear]");

    root.addEventListener("change", refresh);
    root.addEventListener("shown.bs.tab", refresh);
    clearButton?.addEventListener("click", clear);
    render(page);

    return () => {
      root.removeEventListener("change", refresh);
      root.removeEventListener("shown.bs.tab", refresh);
      clearButton?.removeEventListener("click", clear);
    };
  }, [kind, page]);

  const pages = Math.ceil(count / pageSize);
  const goTo = (nextPage: number) => {
    setPage(nextPage);
    const listing = controls.current?.closest("[data-demo-listing]");
    (listing?.querySelector(".filter-small-top-full, .left-blog") ?? listing)?.scrollIntoView({ block: "start" });
  };

  return (
    <div ref={controls}>
      {count === 0 && <p role="status">No matches for these filters.</p>}
      {pages > 1 && (
        <nav className="rts-course-pagination-area mt--50" aria-label={kind === "tour" ? "Tour pages" : "Blog pages"}>
          <ul>
            {Array.from({ length: pages }, (_, index) => index + 1).map(number => (
              <li key={number}>
                <button type="button" className={page === number ? "active" : undefined} aria-current={page === number ? "page" : undefined} onClick={() => goTo(number)}>
                  {String(number).padStart(2, "0")}
                </button>
              </li>
            ))}
            {page < pages && <li><button type="button" aria-label="Next page" onClick={() => goTo(page + 1)}><i className="fa-regular fa-chevron-right" /></button></li>}
          </ul>
        </nav>
      )}
    </div>
  );
}
