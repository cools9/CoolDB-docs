import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  githubUrl: "https://github.com/TheStarloTeam/lunardb",
  nav: {
    title: (
      <>
        <Image
          alt="lunardb"
          src={"/lunaricon.svg"}
          sizes="100px"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full overflow-hidden"
          aria-label="Lunar db"
        />
        <h1>LunarDB Docs</h1>
      </>
    ),
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
  ],
};
