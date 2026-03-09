export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  publishedAt: string;
};

export const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "How structured intelligence improves supply chain oversight",
    excerpt: "Why modern insurance supply networks need structured evidence.",
    slug: "structured-intelligence-supply-chain",
    coverImage: "/blog/sample1.jpg",
    publishedAt: "2026-03-01",
  },
  {
    id: "2",
    title: "From periodic audits to continuous oversight",
    excerpt: "Moving from retrospective review to a defined evidence cadence.",
    slug: "periodic-audits-to-continuous-oversight",
    coverImage: "/blog/sample2.jpg",
    publishedAt: "2026-02-22",
  },
  {
    id: "3",
    title: "Shared intelligence across insurer and supplier teams",
    excerpt: "How aligned datasets reduce friction and improve performance.",
    slug: "shared-intelligence-across-teams",
    coverImage: "/blog/sample3.jpg",
    publishedAt: "2026-02-14",
  },
  {
    id: "4",
    title: "SLA mapping that removes spreadsheet ambiguity",
    excerpt: "Standardise supplier data without disrupting claims systems.",
    slug: "sla-mapping-removes-ambiguity",
    coverImage: "/blog/sample4.jpg",
    publishedAt: "2026-02-05",
  },
  {
    id: "5",
    title: "Portfolio-level visibility for insurer governance",
    excerpt: "Compare supplier performance within a unified framework.",
    slug: "portfolio-level-visibility",
    coverImage: "/blog/sample5.jpg",
    publishedAt: "2026-01-28",
  },
  {
    id: "6",
    title: "Using AI to interrogate performance data responsibly",
    excerpt: "Surfacing patterns and anomalies without opaque scoring models.",
    slug: "ai-interrogate-performance-data",
    coverImage: "/blog/sample6.jpg",
    publishedAt: "2026-01-17",
  },
];
