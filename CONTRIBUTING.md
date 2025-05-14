# Contributing to VitePress Lab

Thank you for your interest in contributing to **VitePress Lab**!  
We welcome issues, discussions, bug reports, feature ideas, and pull requests.

## 🧰 Repository Structure

This is a monorepo managed via [npm workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces).

- **`/documentation`**: Project documentation
- **`/examples`**: Usage examples
- **`/packages`**: Core plugins (e.g., `plugin-auto-sidebar`)

Each plugin is developed as an independent npm package.

## 🚀 Getting Started

1. Fork and clone the repository:

```bash
git clone https://github.com/socle-commun/vitepress-lab.git
cd vitepress-lab
npm install
```

1. Start developing inside any `packages/*` folder or explore `examples/`.

## 📦 Adding a New Plugin

- Create a folder inside `packages/`.
- Use `tsup`, `vite`, or native TypeScript depending on plugin needs.
- Ensure the package has its own `package.json`.
- Export the plugin in a modular way.
- Optionally, add a usage example in `examples/`.

## ✅ Pull Request Guidelines

- Keep pull requests focused and minimal.
- Write meaningful commit messages.
- Follow the coding style of the repo (e.g., consistent TypeScript, ES Modules).
- Document your changes if they impact usage.
- Ensure changes are tested locally in an example or directly in VitePress.

## 📬 Code of Conduct

This project follows a [Code of Conduct](https://opensource.guide/code-of-conduct/).
Please be respectful in all interactions.

---

Thanks again for contributing to **VitePress Lab**! 🌱
