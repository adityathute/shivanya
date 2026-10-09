import { notFound } from "next/navigation";
import { AuthRouteClient } from "../../../components/AuthRouteClient";

const views = ["login", "register", "forgot", "reset", "verify"];

export function generateStaticParams() {
  return views.map((view) => ({ view }));
}

export default async function AuthRoutePage({ params }: { params: Promise<{ view: string }> }) {
  const { view } = await params;
  if (!views.includes(view)) notFound();
  return <AuthRouteClient requestedView={view} />;
}
