# VitePress Plugin Auto Sidebar

[![npm](https://img.shields.io/npm/v/vitepress-plugin-auto-sidebar?label=npm)](https://www.npmjs.com/package/vitepress-plugin-auto-sidebar)
[![MIT License](https://img.shields.io/badge/license-MIT-yellow.svg)](../../LICENSE.md)

A plugin for [VitePress](https://vitepress.dev) that automatically generates sidebar navigation based on your documentation file structure. Designed to simplify configuration for large or nested content trees.

## ✨ Features

- 🔍 Scans your root folder recursively
- 📂 Groups content by folder hierarchy
- ⚙️ Customizable generation rules
- ❌ Skips some files by default and based on configuration

## 📦 Installation

```bash
npm install @socle-commun/vitepress-plugin-auto-sidebar
```

## 🚀 Usage

Add the plugin to your `.vitepress/config.ts`:

```ts
themeConfig: {
  // https://vitepress.dev/reference/default-theme-config
  // ...Your config
  sidebar: getSidebar({
    // ...Plugin configuration
  });
}
```

## 🔧 Options (coming soon)

Planned support for:

- Exclude patterns
- Custom sort logic
- Frontmatter overrides

## 📁 Example Output

Given this structure:

```text
docs/
├── getting-started/
│   ├── install.md
│   └── usage.md
└── guide/
    └── advanced.md
```

The sidebar will be auto-generated like:

```ts
{
  '/getting-started/': [
    { text: 'Install', link: '/getting-started/install' },
    { text: 'Usage', link: '/getting-started/usage' }
  ],
  '/guide/': [
    { text: 'Advanced', link: '/guide/advanced' }
  ]
}
```

## 🧪 Development

Run the example or test inside the monorepo root:

```bash
npm install
npm run dev
```

## 📄 License

[MIT](./LICENSE.md) © 2025 - [Socle Commun](https://github.com/socle-commun)
