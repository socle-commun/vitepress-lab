# VitePress Lab

Génère automatiquement la structure `sidebar` pour VitePress à partir de vos fichiers `.md`.

## Installation

```bash
npm install vitepress-auto-sidebar
```

## Utilisation

Dans `.vitepress/config.ts` :

```ts
import { defineConfig } from "vitepress";
import { autoSidebarPlugin } from "vitepress-auto-sidebar";

export default defineConfig({
  vite: {
    plugins: [autoSidebarPlugin()],
  },
});
```

## Fonctionnement

- Analyse le dossier `docs/`
- Ignore les fichiers `index.md`, `README.md`
- Construit automatiquement un objet `sidebar` regroupé par dossier

## Licence

MIT
