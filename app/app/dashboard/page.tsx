import Link from "next/link";
import { AppLayout } from "../../../components/AppLayout";

const activities = [
  ["Workspace initialized", "Your Shivanya workspace is ready to configure", "Today"],
  ["SDK foundation", "Shared UI, Core, Shell and Auth packages", "Connected packages"],
  ["Next step", "Configure the backend services for live data", "Setup required"],
];

export default function DashboardPage() {
  return <AppLayout pathname="/app/dashboard">
    <main className="shv-dashboard-page">
      <div className="shv-dashboard-heading"><div><span className="shv-eyebrow">Workspace overview</span><h1>Welcome to ShivanyaMS</h1><p>Your shared workspace for applications, account settings and product tools.</p></div><Link className="shv-nav-cta" href="/apps">Explore apps →</Link></div>
      <section className="shv-dashboard-stats">
        <div className="shv-dashboard-stat"><span>Available app areas</span><strong>9</strong><small>Product catalog</small></div>
        <div className="shv-dashboard-stat"><span>Shared packages</span><strong>5</strong><small>UI · Core · Shell · Auth · AI</small></div>
        <div className="shv-dashboard-stat"><span>Account status</span><strong>Setup</strong><small>Connect Auth API for live account data</small></div>
        <div className="shv-dashboard-stat"><span>Workspace health</span><strong>Ready</strong><small>Frontend foundation</small></div>
      </section>
      <section className="shv-dashboard-columns">
        <div className="shv-dashboard-panel"><h2>Workspace activity</h2>{activities.map(([title,detail,time])=><div className="shv-activity-row" key={title}><span className="shv-activity-dot"/><div><strong>{title}</strong><small>{detail}</small></div><small>{time}</small></div>)}</div>
        <div className="shv-dashboard-panel"><h2>Applications</h2><div className="shv-app-list">{[["M","Memory","Notes, tasks and lists"],["E","Expense","Personal expense tracking"],["V","Vault","Private files and documents"],["S","Syra","AI platform assistant"]].map(([icon,name,detail])=><Link className="shv-app-item" href="/apps" key={name}><span className="shv-app-icon">{icon}</span><span><strong>{name}</strong><small>{detail}</small></span></Link>)}</div></div>
      </section>
      <section className="shv-prose" style={{marginTop:18}}><h2>Connect your live services</h2><p>This dashboard currently presents the frontend foundation. Live account, activity and app data should be connected to real Shivanya APIs before production use.</p><Link className="shv-text-link" href="/guides/getting-started">Read setup guide →</Link></section>
    </main>
  </AppLayout>;
}
