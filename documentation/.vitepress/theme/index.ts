// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";

import DefaultTheme from "vitepress/theme";

import Layout from "./Layout.vue";

import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app: _app, router: _router, siteData: _siteData }) {
    // ...
  }
} satisfies Theme
