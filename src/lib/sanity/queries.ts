import { groq } from "next-sanity";

export type SanityPost = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  coverImage?: any;
  publishedAt?: string | null;
  body?: any;
};

export const allPostsQuery = groq`*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  publishedAt
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  publishedAt,
  body
}`;

export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))].slug.current`;
