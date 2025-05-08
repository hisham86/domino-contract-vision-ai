
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RiskGaugeProps {
  title: string;
  value: number;
  description?: string;
}

const RiskGauge: React.FC<RiskGaugeProps> = ({ title, value, description }) => {
  // Determine color based on risk value
  const getColor = () => {
    if (value <= 25) return "bg-domino-green";
    if (value <= 50) return "bg-domino-light-blue";
    if (value <= 75) return "bg-domino-orange";
    return "bg-domino-red";
  };

  // Determine risk label based on value
  const getRiskLabel = () => {
    if (value <= 25) return "Low";
    if (value <= 50) return "Medium";
    if (value <= 75) return "High";
    return "Critical";
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">{getRiskLabel()}</span>
          <span className="text-sm text-muted-foreground">{value}%</span>
        </div>
        <Progress value={value} className="h-2" indicatorClassName={getColor()} />
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </CardContent>
    </Card>
  );
};

export default RiskGauge;
