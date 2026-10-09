import { AppLayout } from "../../../components/AppLayout";
import { AIChatPanel } from "../../../components/AIChatPanel";

export default function AssistantPage() {
  return <AppLayout pathname="/app/assistant"><main className="shv-dashboard-page"><div className="shv-dashboard-heading"><div><span className="shv-eyebrow">AI assistant</span><h1>Syra</h1><p>Ask questions through the Shivanya AI client connected to your configured API.</p></div></div><AIChatPanel /></main></AppLayout>;
}
