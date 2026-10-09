import { ContentPage } from "../../components/ContentPage";

export default function AppsPage() {
  return <ContentPage eyebrow="Shivanya workspace" title="Your digital workspace, connected." description="A growing family of focused applications built around a shared foundation. Availability depends on each app's implementation and release status." cards={[
    {title:"Memory",label:"Personal productivity",description:"Keep notes, tasks and lists together in one searchable place."},
    {title:"Expense",label:"Personal finance",description:"Track expenses and understand where your money goes."},
    {title:"Vault",label:"Private storage",description:"Organize personal documents, images and files with security as a priority."},
    {title:"Partner",label:"Communication",description:"Discover people and connect through accepted chat requests."},
    {title:"Team",label:"Team operations",description:"Manage attendance, salary and sales incentives for company members."},
    {title:"Syra",label:"AI assistant",description:"An assistant designed to help people learn and use the Shivanya platform."},
    {title:"Analytics",label:"Insights",description:"Understand product activity and usage with shared analytics foundations."},
    {title:"Admin",label:"Administration",description:"Manage platform settings and operational information."},
    {title:"ERP",label:"Business tools",description:"Business workflows and management tools as they become available."}
  ]} />;
}
