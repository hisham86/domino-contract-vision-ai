
import React from "react";
import Layout from "@/components/layout/Layout";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RiskAnalysisSection from "@/components/dashboard/RiskAnalysisSection";
import RiskVisualizationsSection from "@/components/dashboard/RiskVisualizationsSection";
import ContractsSection from "@/components/dashboard/ContractsSection";
import ContractFailureExamples from "@/components/dashboard/ContractFailureExamples";
import { mockContracts, mockRiskData, mockDeadlines, mockRiskVisualizations } from "@/data/mockData";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor and manage all your contract activities and risks.
          </p>
        </div>

        <DashboardStats />
        
        <RiskAnalysisSection riskData={mockRiskData} />
        
        <RiskVisualizationsSection riskVisualizations={mockRiskVisualizations} />
        
        <ContractFailureExamples />

        <ContractsSection contracts={mockContracts} deadlines={mockDeadlines} />
      </div>
    </Layout>
  );
};

export default Index;
