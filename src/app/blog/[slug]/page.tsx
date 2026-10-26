import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailsContent from "../../page-sections/blog-details";
import { getDetailContent } from "../../../data/detail-content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detailContent = getDetailContent("blog", slug);
  return { title: detailContent ? `${detailContent.title} | Touriza` : "Blog Not Found | Touriza" };
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const detailContent = getDetailContent("blog", slug);
  if (!detailContent) notFound();

  return <BlogDetailsContent detailContent={detailContent} />;
}
