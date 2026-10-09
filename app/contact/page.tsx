import { ContentPage } from "../../components/ContentPage";

export default function ContactPage() {
  return <ContentPage eyebrow="Contact" title="Let's talk about your project." description="Tell us what you are building with Shivanya or which product you want to learn more about.">
    <section className="shv-prose">
      <h2>Contact the Shivanya team</h2>
      <p>For product questions, SDK integration, pricing or partnership discussions, use your configured company contact channel. This page intentionally does not pretend to submit a form without a connected backend.</p>
      <p>To enable a working contact form, connect it to a real API endpoint and configure validation, spam protection and success/error states.</p>
      <Link className="shv-text-link" href="https://github.com/adityathute/shivanya" >View the frontend repository →</Link>
    </section>
  </ContentPage>;
}
