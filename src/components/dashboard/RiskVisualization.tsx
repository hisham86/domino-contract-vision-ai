
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CircleAlert, ShieldAlert } from "lucide-react";

interface SubContractor {
  id: string;
  name: string;
  role: string;
}

interface RiskVisualizationProps {
  title: string;
  riskScore: number;
  severity: number;
  likelihood: number;
  subContractors: SubContractor[];
}

const RiskVisualization: React.FC<RiskVisualizationProps> = ({
  title,
  riskScore,
  severity,
  likelihood,
  subContractors,
}) => {
  // Determine color and label based on scores
  const getRiskColor = (value: number) => {
    if (value <= 25) return "bg-domino-green";
    if (value <= 50) return "bg-domino-light-blue";
    if (value <= 75) return "bg-domino-orange";
    return "bg-domino-red";
  };

  const getRiskLabel = (value: number) => {
    if (value <= 25) return "Low";
    if (value <= 50) return "Medium";
    if (value <= 75) return "High";
    return "Critical";
  };

  const getSeverityColor = (value: number) => {
    if (value <= 33) return "bg-domino-green";
    if (value <= 66) return "bg-domino-orange";
    return "bg-domino-red";
  };

  const getLikelihoodColor = (value: number) => {
    if (value <= 33) return "bg-domino-green";
    if (value <= 66) return "bg-domino-light-blue";
    return "bg-domino-orange";
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          <ShieldAlert className="h-4 w-4" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Risk Score */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Risk Score</span>
            <span className="text-sm font-semibold">{getRiskLabel(riskScore)}</span>
          </div>
          <Progress 
            value={riskScore} 
            className="h-2" 
            // Use style prop instead of indicatorClassName
            style={{ 
              "--progress-background": getRiskColor(riskScore).replace("bg-", "var(--") + ")"
            } as React.CSSProperties}
          />
        </div>

        {/* Severity */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Severity</span>
            <span className="text-sm font-semibold">{severity}%</span>
          </div>
          <Progress 
            value={severity} 
            className="h-2"
            // Use style prop instead of indicatorClassName
            style={{ 
              "--progress-background": getSeverityColor(severity).replace("bg-", "var(--") + ")"
            } as React.CSSProperties}
          />
        </div>

        {/* Likelihood */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Likelihood</span>
            <span className="text-sm font-semibold">{likelihood}%</span>
          </div>
          <Progress 
            value={likelihood} 
            className="h-2"
            // Use style prop instead of indicatorClassName
            style={{ 
              "--progress-background": getLikelihoodColor(likelihood).replace("bg-", "var(--") + ")"
            } as React.CSSProperties}
          />
        </div>

        {/* Sub-contractors */}
        <div className="pt-2 border-t">
          <h4 className="text-xs font-medium text-muted-foreground mb-2">Involved Sub-contractors</h4>
          <div className="space-y-2">
            {subContractors.map((contractor) => (
              <div key={contractor.id} className="flex items-center justify-between text-xs">
                <span className="font-medium">{contractor.name}</span>
                <Badge variant="outline" className="text-xs">
                  {contractor.role}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskVisualization;
