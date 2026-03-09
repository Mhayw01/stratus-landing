import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import BlogHeader from "../../../src/components/blog/BlogHeader";
import { sanityClient, urlFor } from "../../../src/lib/sanity/client";
import { postBySlugQuery, type SanityPost } from "../../../src/lib/sanity/queries";

const formatDate = (value?: string | null) => {
  if (!value) {
    return "Unpublished";
  }
  const date = new Date(`${value}T00:00:00Z`);
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
};

type BlogPostPageProps = {
  params: { slug?: string } | Promise<{ slug?: string }>;
};

export const revalidate = 60;

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    notFound();
  }

  const post = await sanityClient.fetch<SanityPost | null>(postBySlugQuery, {
    slug,
  });

  if (!post) {
    notFound();
  }

  const coverImageUrl =
    typeof post.coverImage === "string"
      ? post.coverImage
      : urlFor(post.coverImage)?.width(1600).height(900).fit("crop").url();

  return (
    <div className="min-h-screen bg-white">
      <BlogHeader />
      <main className="mx-auto w-full max-w-[900px] px-6 py-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Link
              href="/blog"
              className="text-sm font-medium text-slate-500 transition hover:text-[#1867D4] font-[Inter]"
            >
              Back to Insights
            </Link>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 font-[Inter]">
              {formatDate(post.publishedAt)}
            </p>
            <h1 className="text-4xl font-bold text-[#1867D4] font-[Inter]">{post.title}</h1>
            {post.excerpt ? (
              <p className="text-xl leading-8 text-stone-600 font-[Inter]">{post.excerpt}</p>
            ) : null}
          </div>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-slate-100">
            {coverImageUrl ? (
              <Image
                src={coverImageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
                priority
              />
            ) : null}
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-600 font-[Inter]">
            {post.body ? (
              <PortableText value={post.body} />
            ) : (
              <p>This insight is being prepared. Please check back soon.</p>
            )}
          </div>
          <div className="pt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[#1867D4] px-10 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-[#2F557F] font-[Inter]"
            >
              Find out more
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
