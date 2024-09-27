import { docs, meta } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";

const categoryStructure = {
  categories: [
    {
      title: "Introduction",
      pages: [
        "index",
        "commands",
        "contributors",
        "communities",
        "installation",
      ],
    },
    {
      title: "API Documentation",
      pages: ["api-overview", "endpoints", "parameters"],
    },
    {
      title: "Security",
      pages: ["authentication", "encryption", "best-practices"],
    },
  ],
};

export const source = loader({
  baseUrl: "/docs",
  source: createMDXSource(docs, {
    ...meta,
    structure: categoryStructure,
  }),
});
