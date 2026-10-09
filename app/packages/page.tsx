import { ContentPage } from "../../components/ContentPage";

export default function PackagesPage() {
  return <ContentPage eyebrow="Package reference" title="One ecosystem. Clear responsibilities." description="Install the published packages your application needs. The current repository publishes the packages separately; a single unified shivanya-sdk install entry point is not yet available." cards={[
    {title:"shivanya-ui",label:"React UI",description:"Reusable buttons, typography, inputs, cards, dialogs, navigation, charts and layout primitives.",href:"/components"},
    {title:"shivanya-shell",label:"Application shell",description:"WebsiteShell, DashboardShell, AppShell, page layouts and responsive navigation.",href:"/guides/shell"},
    {title:"shivanya-core",label:"Core client",description:"Shared API client, errors and common utilities for Shivanya services.",href:"/guides/getting-started"},
    {title:"shivanya-auth",label:"Authentication",description:"AuthClient, AuthProvider, useAuth, hosted auth redirects and account UI.",href:"/guides/authentication"},
    {title:"shivanya-ai",label:"AI client",description:"AI client functionality built on the shared Core package.",href:"/guides/getting-started"},
    {title:"Unified SDK",label:"Integration status",description:"Use the individual package installs today. Do not assume npm install shivanya-sdk installs all packages.",href:"/guides/troubleshooting"}
  ]}>
    <section className="shv-prose"><h2>Install the current packages</h2><p>Install only the packages required by your application. React and React DOM must be provided by React applications using UI, Shell or Auth.</p><pre>{'npm install shivanya-ui shivanya-shell shivanya-core shivanya-auth shivanya-ai'}</pre><p>Check each package's published version and exports before upgrading production applications.</p></section>
  </ContentPage>;
}
