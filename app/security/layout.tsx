import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { baseOptions } from "../layout.config";
import { source } from "./source";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CoolDB",
  description: "Documentation & Blog for CoolDB",
  icons: {
    icon: "/lunaricon.svg",
    // apple: "/apple-icon.png",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
