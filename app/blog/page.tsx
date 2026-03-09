import BlogGrid from "../../src/components/blog/BlogGrid";
import BlogHeader from "../../src/components/blog/BlogHeader";
import BlogSearch from "../../src/components/blog/BlogSearch";
import { sanityClient } from "../../src/lib/sanity/client";
import { allPostsQuery, type SanityPost } from "../../src/lib/sanity/queries";

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await sanityClient.fetch<SanityPost[]>(allPostsQuery);
  const hasPosts = posts.length > 0;

  return (
    <div className="min-h-screen bg-white">
      <BlogHeader />
      <main className="mx-auto w-full max-w-[1200px] px-6 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-[#1867D4] font-[Inter]">Insights</h1>
            <BlogSearch />
          </div>
          {hasPosts ? (
            <BlogGrid posts={posts} />
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-10 text-center text-base text-slate-500 font-[Inter]">
              No insights published yet.
            </div>
          )}
          <div className="flex justify-center pt-8">
            <button
              type="button"
              className="rounded-full bg-[#1867D4] px-10 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-[#2F557F] font-[Inter]"
            >
              Load more insights
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
