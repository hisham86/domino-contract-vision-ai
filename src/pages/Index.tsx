import React from "react";
import Layout from "@/components/layout/Layout";
import StatCard from "@/components/dashboard/StatCard";
import RiskGauge from "@/components/dashboard/RiskGauge";
import ContractsList from "@/components/dashboard/ContractsList";
import RiskBreakdown from "@/components/dashboard/RiskBreakdown";
import UpcomingDeadlines from "@/components/dashboard/UpcomingDeadlines";
import RiskVisualization from "@/components/dashboard/RiskVisualization";
import { FileText, AlertTriangle, CalendarClock, CheckCircle } from "lucide-react";

const Index = () => {
  // Mock data for contracts
  const contracts = [
    {
      id: "c1",
      name: "Service Agreement",
      company: "Acme Corp",
      date: "May 5, 2025",
      status: "active" as const,
      riskLevel: "low" as const,
    },
    {
      id: "c2",
      name: "Software License",
      company: "TechGiant Inc",
      date: "Jun 12, 2025",
      status: "review" as const,
      riskLevel: "high" as const,
    },
    {
      id: "c3",
      name: "NDA Agreement",
      company: "Startup XYZ",
      date: "Apr 28, 2025",
      status: "pending" as const,
      riskLevel: "medium" as const,
    },
    {
      id: "c4",
      name: "Partnership Contract",
      company: "Global Partners",
      date: "Jul 30, 2025",
      status: "draft" as const,
      riskLevel: "low" as const,
    },
    {
      id: "c5",
      name: "Vendor Agreement",
      company: "SupplyChain Co",
      date: "May 15, 2025",
      status: "expired" as const,
      riskLevel: "critical" as const,
    },
  ];

  // Mock data for risk breakdown
  const riskData = [
    { name: "Low", value: 16, color: "#22c55e" },
    { name: "Medium", value: 8, color: "#60a5fa" },
    { name: "High", value: 5, color: "#f97316" },
    { name: "Critical", value: 2, color: "#ef4444" },
  ];

  // Mock data for deadlines
  const deadlines = [
    {
      id: "d1",
      title: "Acme Corp Service Agreement",
      date: "May 15, 2025",
      daysLeft: 7,
      type: "renewal" as const,
    },
    {
      id: "d2",
      title: "TechGiant Software License",
      date: "May 11, 2025",
      daysLeft: 3,
      type: "review" as const,
    },
    {
      id: "d3",
      title: "SupplyChain Vendor Agreement",
      date: "May 9, 2025",
      daysLeft: 1,
      type: "expiration" as const,
    },
    {
      id: "d4",
      title: "Global Partners Annual Fee",
      date: "May 20, 2025",
      daysLeft: 12,
      type: "payment" as const,
    },
  ];

  // Mock data for risk visualizations
  const riskVisualizations = [
    {
      id: "rv1",
      title: "Payment Default Risk",
      riskScore: 75,
      severity: 80,
      likelihood: 60,
      subContractors: [
        { id: "sc1", name: "Global Logistics Inc", role: "Shipping" },
        { id: "sc2", name: "Acme Payment Services", role: "Payment Processing" },
        { id: "sc3", name: "SecureTech Solutions", role: "IT Support" },
      ]
    },
    {
      id: "rv2",
      title: "Compliance Violation Risk",
      riskScore: 45,
      severity: 65,
      likelihood: 35,
      subContractors: [
        { id: "sc4", name: "LegalEase Associates", role: "Compliance" },
        { id: "sc5", name: "DataGuard Systems", role: "Data Management" },
        { id: "sc6", name: "RegTech Advisors", role: "Regulatory Affairs" },
      ]
    },
    {
      id: "rv3",
      title: "Supply Chain Disruption Risk",
      riskScore: 82,
      severity: 70,
      likelihood: 90,
      subContractors: [
        { id: "sc7", name: "FastTrack Delivery", role: "Last Mile Delivery" },
        { id: "sc8", name: "WarehouseNow", role: "Storage & Inventory" },
        { id: "sc9", name: "Parts Unlimited", role: "Manufacturing" },
      ]
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor and manage all your contract activities and risks.
          </p>
        </div>

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

        <div className="grid gap-4 md:grid-cols-2">
          <RiskGauge
            title="Overall Risk Score"
            value={42}
            description="Based on AI analysis of your current contract portfolio"
          />
          <RiskBreakdown data={riskData} />
        </div>
        
        {/* New Risk Visualizations Section */}
        <div className="grid gap-4 md:grid-cols-3">
          {riskVisualizations.map(risk => (
            <RiskVisualization
              key={risk.id}
              title={risk.title}
              riskScore={risk.riskScore}
              severity={risk.severity}
              likelihood={risk.likelihood}
              subContractors={risk.subContractors}
            />
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <ContractsList contracts={contracts} />
          </div>
          <div>
            <UpcomingDeadlines deadlines={deadlines} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
