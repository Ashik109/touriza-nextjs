import { redirect } from "next/navigation";
import { defaultBlogSlug } from "../../data/details";

export default function BlogDetailsPage() {
  redirect(`/blog/${defaultBlogSlug}`);
}
