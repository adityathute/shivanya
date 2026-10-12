export type PlaygroundPackage = {
  route: string;
  href: string;
  category: string;
  icon: string;
  title: string;
  description: string;
  install: string;
  installDescription: string;
  example: string;
  exampleDescription: string;
  features: string[];
};

export const playgroundPackages: Record<string, PlaygroundPackage> = {
  ui: {
    route: "UI",
    href: "/playground/ui",
    category: "UI components",
    icon: "◈",
    title: "shivanya-ui",
    description: "Reusable React interface components and design-system styles.",
    install: "npm install shivanya-ui",
    installDescription: "Install the package before importing its components.",
    example: 'import "shivanya-ui/styles";\nimport { Button } from "shivanya-ui";',
    exampleDescription: "Import the components and styles required by your application.",
    features: [
      "Foundation and form components",
      "Feedback and overlay components",
      "Layout, navigation, and data display",
      "Shared icons and design tokens",
    ],
  },
  shell: {
    route: "Shell",
    href: "/playground/shell",
    category: "Application shell",
    icon: "▣",
    title: "shivanya-shell",
    description: "Reusable layouts, shell components, and application structure.",
    install: "npm install shivanya-shell",
    installDescription: "Install the package to build a consistent application layout.",
    example: 'import "shivanya-shell/styles";\nimport { AppShell, ShellSidebar } from "shivanya-shell";',
    exampleDescription: "Use the shell components exported by the package.",
    features: [
      "Website and application layouts",
      "Header, sidebar, and main regions",
      "Reusable shell context and hooks",
      "Consistent application structure",
    ],
  },
  auth: {
    route: "Auth",
    href: "/playground/auth",
    category: "Authentication",
    icon: "⌘",
    title: "shivanya-auth",
    description: "Authentication and account UI for Shivanya applications.",
    install: "npm install shivanya-auth",
    installDescription: "Install the authentication package in your application.",
    example: 'import "shivanya-auth/styles";\n// Import the authentication components you need',
    exampleDescription: "Check the package exports for the available authentication APIs.",
    features: [
      "Authentication and account experiences",
      "Built on Shivanya Core and UI",
      "Reusable React components",
      "Designed for integration with Shivanya Auth",
    ],
  },
  core: {
    route: "Core",
    href: "/playground/core",
    category: "Core SDK",
    icon: "{}",
    title: "shivanya-core",
    description: "Core client functionality for the Shivanya platform.",
    install: "npm install shivanya-core",
    installDescription: "Install the core SDK package in your application.",
    example: 'import * as ShivanyaCore from "shivanya-core";',
    exampleDescription: "Check the package exports for the available core APIs.",
    features: [
      "Core platform client",
      "Shared platform functionality",
      "TypeScript package",
      "Foundation for other SDK packages",
    ],
  }
};
