import { ContentPage } from "../../components/ContentPage";

export default function PrivacyPage() {
  return <ContentPage eyebrow="Legal" title="Privacy policy" description="A starter privacy page that must be aligned with the real data collected by Shivanya and its connected services.">
    <section className="shv-prose"><h2>Information and purpose</h2><p>Describe the account, usage, support and technical information your deployed services actually collect, and explain why each category is needed.</p><h2>Storage and security</h2><p>Document your actual retention periods, access controls, security practices, processors and data hosting arrangements. Do not publish claims that have not been verified.</p><h2>Your choices</h2><p>Explain how users can access, correct, export or request deletion of their information, including the relevant support contact.</p><h2>Review required</h2><p>This starter content is not a finalized legal policy. Review it against the actual backend, cookies, analytics, authentication and applicable privacy laws before public launch.</p></section>
  </ContentPage>;
}
