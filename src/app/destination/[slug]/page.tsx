import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DestinationDetailsContent from "../../page-sections/destination-details";
import { getDetailContent } from "../../../data/detail-content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detailContent = getDetailContent("destination", slug);
  return { title: detailContent ? `${detailContent.title} | Touriza` : "Destination Not Found | Touriza" };
}

export default async function DestinationDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const detailContent = getDetailContent("destination", slug);
  if (!detailContent) notFound();

  return <DestinationDetailsContent detailContent={detailContent} />;
}
