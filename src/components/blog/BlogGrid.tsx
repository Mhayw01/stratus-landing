import type { SanityPost } from "../../lib/sanity/queries";
import BlogCard from "./BlogCard";

type BlogGridProps = {
  posts: SanityPost[];
};

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
