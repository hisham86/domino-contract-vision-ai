
import React from "react";
import RiskGauge from "@/components/dashboard/RiskGauge";
import RiskBreakdown from "@/components/dashboard/RiskBreakdown";
import { RiskData } from "@/data/mockData";

interface RiskAnalysisSectionProps {
  riskData: RiskData[];
}

const RiskAnalysisSection: React.FC<RiskAnalysisSectionProps> = ({ riskData }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <RiskGauge
        title="Overall Risk Score"
        value={42}
        description="Based on AI analysis of your current contract portfolio"
      />
      <RiskBreakdown data={riskData} />
    </div>
  );
};

export default RiskAnalysisSection;
