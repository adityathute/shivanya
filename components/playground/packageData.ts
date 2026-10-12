export type PlaygroundPackage = {
  route: string;
  label: string;
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
    label: "shivanya-ui",
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
  auth: {
    route: "Auth",
    label: "shivanya-auth",
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
  shell: {
    route: "Shell",
    label: "shivanya-shell",
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
  core: {
    route: "Core",
    label: "shivanya-core",
    title: "shivanya-core",
    description: "Core client functionality for the Shivanya platform.",
    install: "npm install shivanya-core",
    installDescription: "Install the core SDK package in your application.",
    example: 'import { /* core exports */ } from "shivanya-core";',
    exampleDescription: "Check the package exports for the available core APIs.",
    features: [
      "Core platform client",
      "Shared platform functionality",
      "TypeScript package",
      "Foundation for other SDK packages",
    ],
  },
  ai: {
    route: "AI",
    label: "shivanya-ai",
    title: "shivanya-ai",
    description: "AI client capabilities for applications built on Shivanya.",
    install: "npm install shivanya-ai",
    installDescription: "Install the AI package alongside its required dependencies.",
    example: 'import { /* exported AI APIs */ } from "shivanya-ai";',
    exampleDescription: "Check the package exports and configure the AI provider before use.",
    features: [
      "AI client package",
      "Uses Shivanya Core",
      "TypeScript-friendly API",
      "Designed for application integration",
    ],
  },
};
