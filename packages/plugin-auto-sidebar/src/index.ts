import { readdirSync, statSync } from "fs";
import { join } from "path";
import { DefaultTheme } from "vitepress";

declare type autoSidebarPluginOptions = {
  isMulti?: boolean;
  rootDir?: string;
  srcDir?: string;
};

function getSidebarMulti(dir: string): DefaultTheme.SidebarMulti {
  const result: DefaultTheme.SidebarMulti = {};

  readdirSync(dir).forEach((path: string) => {
    const dirPath = join(dir, path);
    if (statSync(dirPath).isDirectory()) {
      result[path] = getSidebarItems(dirPath);
    }
  });

  return result;
}

function getSidebarItems(dir: string): DefaultTheme.SidebarItem[] {
  const result: DefaultTheme.SidebarItem[] = [];

  readdirSync(dir).forEach((file: string) => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      const subItems = getSidebarItems(filePath);
      result.push({
        text: file,
        link: filePath.replace(/\\/g, "/").replace(/.*\/src\//, "/"),
        items: [...subItems]
      });
    } else if (file.endsWith(".md")) {
      result.push({
        text: file.replace(/\.md$/, ""),  // Remove the .md extension
        link: filePath.replace(/\\/g, "/").replace(/.*\/src\//, "/")
      });
    }
  });

  return result;
}

export default function autoSidebarPlugin(options: autoSidebarPluginOptions = {}): DefaultTheme.SidebarItem[] | DefaultTheme.SidebarMulti {
  const rootDir = join(options.rootDir || process.cwd(), options.srcDir || "");

  if (options.isMulti) {
    return getSidebarMulti(rootDir);
  }
  else {
    return getSidebarItems(rootDir);
  }
}
