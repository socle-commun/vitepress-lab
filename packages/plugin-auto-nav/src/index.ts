import fg from 'fast-glob';
import { resolve } from 'path';

export function autoSidebarPlugin(userRoot: string = '.') {
  return {
    name: 'vitepress-auto-sidebar',
    config() {
      const docsDir = resolve(userRoot, 'docs');
      const pages = fg.sync(['**/*.md'], {
        cwd: docsDir,
        ignore: ['index.md', 'README.md']
      });

      const sidebar: Record<string, { text: string; link: string }[]> = {};

      pages.forEach(file => {
        const parts = file.split('/');
        const base = '/' + parts[0] + '/';
        const link = '/' + file.replace(/\.md$/, '');
        const text = parts.at(-1)!.replace(/\.md$/, '');

        if (!sidebar[base]) sidebar[base] = [];
        sidebar[base].push({ text, link });
      });

      return {
        themeConfig: {
          sidebar
        }
      };
    }
  };
}
