import { ContentPage } from "../../components/ContentPage";

export default function DocsPage() {
  return <ContentPage eyebrow="Documentation" title="Build with Shivanya" description="Learn how the shared packages fit together, install the packages you need, and build consistent React experiences on the Shivanya foundation." cards={[
    {title:"Getting started",description:"Set up a React application and choose the right Shivanya packages.",href:"/guides/getting-started",label:"Start here"},
    {title:"UI components",description:"Browse shared buttons, forms, feedback, layout and data-display components.",href:"/components",label:"Reference"},
    {title:"SDK packages",description:"Understand Core, UI, Shell, Auth and AI responsibilities.",href:"/packages",label:"Architecture"},
    {title:"Authentication",description:"Configure cookie-based auth and use the official Auth UI.",href:"/guides/authentication",label:"Security"},
    {title:"Shell integration",description:"Use the shared website and dashboard layouts.",href:"/guides/shell",label:"Layouts"},
    {title:"Troubleshooting",description:"Resolve common package, CSS, environment and build issues.",href:"/guides/troubleshooting",label:"Help"}
  ]} />;
}
