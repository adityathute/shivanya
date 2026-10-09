import { ContentPage } from "../../components/ContentPage";

export default function PricingPage() {
  return <ContentPage eyebrow="Plans" title="Choose a plan that fits your workflow." description="Plan availability and pricing must reflect the currently published Shivanya offers. Contact the team for confirmed plan details." cards={[
    {title:"Free",label:"Start exploring",description:"Explore available free features and evaluate the platform before choosing a plan.",href:"/contact"},
    {title:"Business",label:"For growing teams",description:"Discuss the applications, limits and support requirements that fit your business.",href:"/contact"},
    {title:"Custom",label:"Talk to us",description:"Get help selecting a setup for your organization and integration needs.",href:"/contact"}
  ]} />;
}
