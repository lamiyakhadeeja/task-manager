import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { WeekBoard } from "@/components/dashboard/WeekBoard";

export default function Home() {
  return (
    <DashboardShell>
      <WeekBoard />
    </DashboardShell>
  );
}
