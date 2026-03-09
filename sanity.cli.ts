import { defineCliConfig } from "sanity/cli";

const projectId = "8ky6sdci";
const dataset = "production";

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  deployment: {
    appId: "r734q1hu6mvox9qtopbtaw2e",
  },
});
