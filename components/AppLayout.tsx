import type { ReactNode } from "react";
import Link from "next/link";
import { Activity, Grid2X2, Home, Settings, Sparkles, UserRound } from "lucide-react";
import { DashboardShell } from "shivanya-shell";

const navigation = [
  { id: "dashboard", label: "Overview", href: "/app/dashboard", icon: <Home size={17} />, exact: true },
  { id: "apps", label: "Applications", href: "/apps", icon: <Grid2X2 size={17} /> },
  { id: "activity", label: "Activity", href: "/app/activity", icon: <Activity size={17} /> },\n  { id: "assistant", label: "Syra assistant", href: "/app/assistant", icon: <Sparkles size={17} /> },
  { id: "profile", label: "Profile & settings", href: "/app/profile", icon: <UserRound size={17} /> },
];

export function AppLayout({ children, pathname }: { children: ReactNode; pathname: string }) {
  return (
    <DashboardShell
      className="shv-app-shell"
      branding={{ name: "ShivanyaMS", subtitle: "Workspace", href: "/app/dashboard" }}
      navigation={navigation}
      pathname={pathname}
      linkComponent={Link}
      headerEnd={<Link href="/app/profile" className="shv-shell-account"><span>A</span><span>My account</span><Settings size={15}/></Link>}
      sidebarFooter={<Link href="/" className="shv-shell-back">← Public website</Link>}
      contentPadding={0}
    >
      {children}
    </DashboardShell>
  );
}
