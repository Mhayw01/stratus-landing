import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../lib/sanity/client";
import type { SanityPost } from "../../lib/sanity/queries";

const formatDate = (value?: string | null) => {
  if (!value) {
    return "Unpublished";
  }
  const date = new Date(`${value}T00:00:00Z`);
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};

type BlogCardProps = {
  post: SanityPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  const coverImageUrl =
    typeof post.coverImage === "string"
      ? post.coverImage
      : urlFor(post.coverImage)?.width(800).height(450).fit("crop").url();

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-48 w-full">
        {coverImageUrl ? (
          <Image
            src={coverImageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-slate-100" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 font-[Inter]">
          {formatDate(post.publishedAt)}
        </p>
        <h3 className="text-xl font-semibold text-[#1867D4] font-[Inter] group-hover:text-[#2F557F]">
          {post.title}
        </h3>
        {post.excerpt ? (
          <p className="text-base leading-7 text-stone-600 font-[Inter]">{post.excerpt}</p>
        ) : null}
      </div>
    </Link>
  );
}
