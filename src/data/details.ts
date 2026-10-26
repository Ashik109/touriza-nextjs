export const defaultTourSlug = "the-luxury-island-hopper";
export const defaultDestinationSlug = "maldives";
export const defaultBlogSlug = "top-10-essential-travel-tips-for-first-time-travelers";

export type DetailKind = "tour" | "destination" | "blog";

export type DetailContent = {
  slug: string;
  title: string;
  image: string;
};

export function slugFromTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function tourDetailPath(title: string) {
  return `/tour/${slugFromTitle(title) || defaultTourSlug}`;
}

export function destinationDetailPath(title: string) {
  return `/destination/${slugFromTitle(title) || defaultDestinationSlug}`;
}

export function blogDetailPath(title: string) {
  return `/blog/${slugFromTitle(title) || defaultBlogSlug}`;
}
