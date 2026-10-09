import Link from "next/link";
import { AppLayout } from "../../../components/AppLayout";

export default function ActivityPage() {
  return <AppLayout pathname="/app/activity"><main className="shv-dashboard-page"><div className="shv-dashboard-heading"><div><span className="shv-eyebrow">Workspace</span><h1>Activity</h1><p>Recent platform events will appear here when an activity API is connected.</p></div></div><section className="shv-prose"><h2>No live activity source configured</h2><p>This route is ready for integration, but it does not fabricate activity records. Connect the supported activity endpoint to display real events, loading states and errors.</p><Link className="shv-text-link" href="/guides/getting-started">Integration guide →</Link></section></main></AppLayout>;
}
