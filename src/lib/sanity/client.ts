import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const projectId = "8ky6sdci";
const dataset = "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-03-01";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = createImageUrlBuilder(sanityClient);

export const urlFor = (source: unknown) => {
  if (!source) {
    return null;
  }
  return builder.image(source);
};
