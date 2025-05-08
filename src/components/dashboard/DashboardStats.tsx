
import React from "react";
import StatCard from "@/components/dashboard/StatCard";
import { FileText, AlertTriangle, CalendarClock, CheckCircle } from "lucide-react";

const DashboardStats: React.FC = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Contracts"
        value={31}
        icon={<FileText />}
        trend={{ value: 12, positive: true }}
      />
      <StatCard
        title="High Risk Contracts"
        value={7}
        icon={<AlertTriangle />}
        description="22% of your total contracts"
        trend={{ value: 5, positive: false }}
      />
      <StatCard
        title="Upcoming Deadlines"
        value={4}
        icon={<CalendarClock />}
        description="Within next 7 days"
      />
      <StatCard
        title="Completed Reviews"
        value={15}
        icon={<CheckCircle />}
        trend={{ value: 20, positive: true }}
      />
    </div>
  );
};

export default DashboardStats;
