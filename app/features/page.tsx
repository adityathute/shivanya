import { ContentPage } from "../../components/ContentPage";

export default function FeaturesPage() {
  return <ContentPage eyebrow="Platform features" title="A shared foundation for every experience." description="Shivanya combines focused applications with reusable services and a consistent interface." cards={[
    {title:"Reusable UI",label:"Design system",description:"Build screens with the shared Shivanya UI component library.",href:"/components"},
    {title:"Consistent application shell",label:"Layouts",description:"Use the same responsive navigation and page structure across apps.",href:"/guides/shell"},
    {title:"Authentication",label:"Account security",description:"Integrate the existing Auth SDK and supported authentication flows.",href:"/guides/authentication"},
    {title:"Shared API foundation",label:"Core",description:"Use the Core client and typed error handling where supported.",href:"/packages"},
    {title:"AI integration",label:"Syra",description:"Connect the AI client to an API endpoint that implements its documented contract.",href:"/app/assistant"},
    {title:"Modular applications",label:"Workspace",description:"Keep Memory, Expense, Vault, Team and other product areas separate and focused.",href:"/apps"}
  ]} />;
}
