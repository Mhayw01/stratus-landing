import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = "8ky6sdci";
const dataset = "production";

export default defineConfig({
  name: "default",
  title: "Stratus Blog",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
