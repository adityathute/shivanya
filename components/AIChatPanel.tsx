"use client";

import { useMemo, useState, type FormEvent } from "react";
import { ShivanyaAI } from "shivanya-ai";
import { ShivanyaClient } from "shivanya-core";

type Message = { role: "user" | "assistant"; content: string };

export function AIChatPanel() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const baseURL = process.env.NEXT_PUBLIC_SHIVANYA_API_BASE_URL?.trim();

  const ai = useMemo(() => {
    if (!baseURL) return null;
    return new ShivanyaAI(new ShivanyaClient({ baseURL }));
  }, [baseURL]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const prompt = message.trim();
    if (!prompt || !ai || loading) return;

    setMessages((current) => [...current, { role: "user", content: prompt }]);
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await ai.chat({ message: prompt });
      setMessages((current) => [...current, { role: "assistant", content: response.content }]);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "The AI request failed.");
    } finally {
      setLoading(false);
    }
  }

  if (!baseURL) {
    return <section className="shv-prose"><h2>Configure the Shivanya API</h2><p>Set NEXT_PUBLIC_SHIVANYA_API_BASE_URL to the API origin that supports the SDK's /api/ai/chat endpoint. No mock response is shown.</p><pre>{"NEXT_PUBLIC_SHIVANYA_API_BASE_URL=https://your-api.example.com"}</pre></section>;
  }

  return <section className="shv-ai-panel">
    <div className="shv-ai-messages" aria-live="polite">
      {messages.length === 0 && <div className="shv-ai-empty"><span className="shv-app-icon">AI</span><h2>What would you like help with?</h2><p>Ask a question to send a real request to the configured Shivanya AI API.</p></div>}
      {messages.map((item, index) => <article className={"shv-ai-message " + item.role} key={index}><span>{item.role === "user" ? "You" : "Syra"}</span><p>{item.content}</p></article>)}
      {loading && <p className="shv-ai-loading">Waiting for the AI service…</p>}
    </div>
    {error && <p className="shv-ai-error" role="alert">{error}</p>}
    <form className="shv-ai-form" onSubmit={submit}>
      <label className="sr-only" htmlFor="shv-ai-prompt">Your message</label>
      <textarea id="shv-ai-prompt" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Ask something…" rows={3} required />
      <button className="shv-nav-cta" type="submit" disabled={loading || !message.trim()}>{loading ? "Sending…" : "Send message"}</button>
    </form>
  </section>;
}
