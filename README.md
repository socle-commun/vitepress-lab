# VitePress Lab

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE.md)
[![Node.js](https://img.shields.io/badge/Node.js-≥22.0.0-blue.svg)](https://nodejs.org/)
[![npm workspace](https://img.shields.io/badge/npm-workspaces-orange)](https://docs.npmjs.com/cli/v8/using-npm/workspaces)
[![Made with VitePress](https://img.shields.io/badge/Made%20with-VitePress-4baaaa?logo=vite)](https://vitepress.dev/)
[![Issues](https://img.shields.io/github/issues/socle-commun/vitepress-lab)](https://github.com/socle-commun/vitepress-lab/issues)

**VitePress Lab** is a monorepo that serves as an experimentation and development environment for building plugins and tools that extend [VitePress](https://vitepress.dev/).

This project is organized as an [npm workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces) monorepo and includes multiple packages that support automating, enhancing, and customizing VitePress-based documentation sites.

## 🧭 Goals

- Provide a modular and extensible architecture for VitePress plugin development.
- Explore advanced use cases and tooling around documentation workflows.
- Share reusable plugins and utilities with the VitePress community.

## 📁 Structure

```text
vitepress-lab/
├── documentation/            # Documentation for the lab and its plugins
├── examples/                 # Example VitePress projects using the plugins (TBD)
├── packages/
│   ├── plugin-auto-nav/      # Auto-generates VitePress nav
│   └── plugin-auto-sidebar/  # Auto-generates VitePress sidebar
├── package.json              # Root package with workspaces config
├── CONTRIBUTING.md
├── LICENSE.md
└── README.md
```

## 🚀 Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/socle-commun/vitepress-lab
cd vitepress-lab
```

1. **Install dependencies**

```bash
npm install
```

1. **Run an example or develop a plugin**

Browse the `examples/` or `packages/` directories and use standard Vite/VitePress dev workflows to get started.

## 🤝 Contributing

This project is experimental but open to contributions. If you have an idea for a plugin, improvement, or bug fix, feel free to open an issue or submit a pull request.

## 📜 License

[MIT](./LICENSE.md) © 2025 - [Socle Commun](https://github.com/socle-commun)
