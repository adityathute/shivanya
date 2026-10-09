import { ContentPage } from "../../components/ContentPage";

export default function GuidesPage() {
  return <ContentPage eyebrow="Guides" title="Go from install to integration." description="Practical setup guides for using the real Shivanya packages in your application." cards={[
    {title:"Getting started",description:"Install packages, import styles and create your first screen.",href:"/guides/getting-started"},
    {title:"Authentication",description:"Configure AuthProvider and use the supported cookie authentication flow.",href:"/guides/authentication"},
    {title:"Application shell",description:"Build website and dashboard layouts with shivanya-shell.",href:"/guides/shell"},
    {title:"Troubleshooting",description:"Check dependency versions, CSS exports, environment variables and build output.",href:"/guides/troubleshooting"}
  ]} />;
}
