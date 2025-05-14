import { defineConfig } from "vitepress";

import getSidebar from "@socle-commun/vitepress-plugin-auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  base: "/vitepress-lab/",
  cleanUrls: true,
  title: "VitePress Lab",
  description: "All things VitePress from Socle Commun",
  head: [
    // Favicons
    [
      "link",
      { rel: "icon", href: "/logo-light.svg", media: "(prefers-color-scheme: light)" }
    ],
    [
      "link",
      { rel: "icon", href: "/logo-dark.svg", media: "(prefers-color-scheme: dark)" }
    ],
    //Fonts
    [
      "link",
      { rel: "preconnect", href: "https://fonts.googleapis.com" }
    ],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }
    ],
    [
      "link",
      { href: "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Mono:ital,wght@0,200..800;1,200..800&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap", rel: "stylesheet" }
    ]
  ],
  sitemap: {
    hostname: "https://socle-commun.github.io/vitepress-lab"
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: "/logo-light.svg",
      dark: "/logo-dark.svg"
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" }
    ],

    sidebar: getSidebar({
      srcDir: "src",
    }),
    socialLinks: [
      { icon: "github", link: "https://github.com/socle-commun/vitepress-lab" }
    ]
  }
})
