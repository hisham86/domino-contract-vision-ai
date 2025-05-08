
import React from "react";
import RiskVisualization from "@/components/dashboard/RiskVisualization";
import { RiskVisualization as RiskVisualizationType } from "@/data/mockData";

interface RiskVisualizationsSectionProps {
  riskVisualizations: RiskVisualizationType[];
}

const RiskVisualizationsSection: React.FC<RiskVisualizationsSectionProps> = ({ 
  riskVisualizations 
}) => {
  return (
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
  );
};

export default RiskVisualizationsSection;
