import { ContentPage } from "../../components/ContentPage";

export default function ComponentsPage() {
  return <ContentPage eyebrow="Component library" title="Reusable UI, built for product teams." description="Explore the shared component families from shivanya-ui. The reference is based on the package source, not mock exports." cards={[
    {title:"Foundation",label:"Buttons · Typography · Badges",description:"Consistent actions, text hierarchy, links, icons and status indicators."},
    {title:"Forms",label:"Inputs · Selects · OTP",description:"Inputs, password fields, checkboxes, date pickers, file upload and validation helpers."},
    {title:"Data display",label:"Cards · Tables · Lists",description:"Cards, tables, grids, timelines, statistics, accordions and empty states."},
    {title:"Feedback",label:"Alerts · Dialogs · Toasts",description:"Communicate progress, confirmation, errors and important status."},
    {title:"Navigation",label:"Tabs · Menus · Sidebar",description:"Navigation bars, breadcrumbs, menus, pagination, stepper and sidebar patterns."},
    {title:"Layout",label:"Grid · Stack · Flex",description:"Compose responsive pages using shared layout primitives."},
    {title:"Media",label:"Images · Video · Carousel",description:"Display media and crop images using reusable components."},
    {title:"Overlays",label:"Drawer · Sheet · Command",description:"Layered interaction patterns for complex workflows."},
    {title:"Charts",label:"Bar · Pie · Donut",description:"Reusable chart components for product dashboards."}
  ]}>
    <section className="shv-prose"><h2>Import from the public entry point</h2><pre>{'import { Button, Card, Typography, Input } from "shivanya-ui";\nimport "shivanya-ui/styles";'}</pre><p>Confirm exact component props in the package source and declarations. The public component set may change between releases.</p></section>
  </ContentPage>;
}
