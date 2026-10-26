import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export default async function DestinationDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/destination/${slug}`);
}
