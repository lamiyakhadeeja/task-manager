import { TopBar } from "./TopBar";
import { PrimarySidebar } from "./PrimarySidebar";
import { SecondarySidebar } from "./SecondarySidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <TopBar />
      <div className="flex min-h-0 flex-1">
        <PrimarySidebar />
        <SecondarySidebar />
        <main className="min-w-0 flex-1 overflow-hidden bg-white">{children}</main>
      </div>
    </div>
  );
}
