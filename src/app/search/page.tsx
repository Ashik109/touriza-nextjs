import { Suspense } from "react";
import Link from "next/link";
import DemoPage from "../components/DemoPage";
import { listDetailContent } from "@/data/detail-content";
import { slugFromTitle, type DetailKind } from "@/data/details";
import { tourSearchDetails } from "@/data/tour-search";

const sections: { kind: DetailKind; label: string }[] = [
  { kind: "tour", label: "Tours" },
  { kind: "destination", label: "Destinations" },
  { kind: "blog", label: "Travel stories" },
];

function inRange(value: number | undefined, filter: string) {
  if (!filter) return true;
  const range = filter.replaceAll(",", "").match(/\d+/g)?.map(Number);
  return range?.length === 2 && value !== undefined && value >= range[0] && value <= range[1];
}

async function SearchResults({ searchParams }: { searchParams: PageProps<"/search">["searchParams"] }) {
  const params = await searchParams;
  const field = (name: string) => typeof params[name] === "string" ? params[name].trim().slice(0, 100) : "";
  const query = field("q");
  const kind = field("kind");
  const destination = field("destination");
  const activity = field("activity");
  const duration = field("duration");
  const budget = field("budget");
  const matches = sections.filter(section => !kind || section.kind === kind).map(section => ({
    ...section,
    items: listDetailContent(section.kind).filter(item => {
      const tour = section.kind === "tour" ? tourSearchDetails[item.slug] : undefined;
      const searchable = slugFromTitle([item.title, tour?.location].filter(Boolean).join(" "));
      const terms = slugFromTitle(query).split("-").filter(Boolean);
      return terms.every(term => searchable.includes(term))
        && (!destination || searchable.includes(slugFromTitle(destination)))
        && (!activity || slugFromTitle(activity).split("-").some(term => term && searchable.includes(term)))
        && inRange(tour?.days, duration)
        && inRange(tour?.price, budget);
    }).sort((a, b) => a.title.localeCompare(b.title)),
  }));

  return (
    <>
      <form action="/search" method="get" className="demo-search-form mb--30">
        <label>Keywords <input type="search" name="q" defaultValue={query} /></label>
        <label>Search in
          <select name="kind" defaultValue={kind}>
            <option value="">All categories</option>
            {sections.map(section => <option key={section.kind} value={section.kind}>{section.label}</option>)}
          </select>
        </label>
        <button className="rts-btn btn-primary" type="submit">Search</button>
        <Link href="/search">Clear search</Link>
      </form>
      {[destination, activity, duration, budget].some(Boolean) && (
        <p>Tour filters applied · {[destination, activity, duration, budget].filter(Boolean).join(" · ")}</p>
      )}
      {matches.every(section => !section.items.length) && <p>No results found. Try another keyword or clear your search.</p>}
      {matches.filter(section => section.items.length).map(section => (
        <section key={section.kind} className="mb--40">
          <h2>{section.label} ({section.items.length})</h2>
          <div className="row g-4">
            {section.items.map(item => (
              <div key={item.slug} className="col-sm-6 col-lg-4 col-xl-3">
                <Link className="demo-result border radius-10 overflow-hidden" href={`/${section.kind}/${item.slug}`} prefetch={false}>
                  <img src={`/${item.image.replace(/^\/+/, "")}`} alt="" loading="lazy" />
                  <span>{item.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

export default function SearchPage({ searchParams }: PageProps<"/search">) {
  return (
    <DemoPage title="Search Touriza">
      <Suspense fallback={<p>Loading results…</p>}>
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </DemoPage>
  );
}
