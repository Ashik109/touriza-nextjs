import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TourDetailsContent from "../../page-sections/tour-details";
import { getDetailContent } from "../../../data/detail-content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detailContent = getDetailContent("tour", slug);
  return { title: detailContent ? `${detailContent.title} | Touriza` : "Tour Not Found | Touriza" };
}

export default async function TourDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const detailContent = getDetailContent("tour", slug);
  if (!detailContent) notFound();

  return <TourDetailsContent detailContent={detailContent} />;
}
