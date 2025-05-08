
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ContractStatus = "active" | "pending" | "expired" | "draft" | "review";

interface Contract {
  id: string;
  name: string;
  company: string;
  date: string;
  status: ContractStatus;
  riskLevel: "low" | "medium" | "high" | "critical";
}

interface ContractsListProps {
  contracts: Contract[];
}

const ContractsList: React.FC<ContractsListProps> = ({ contracts }) => {
  const getStatusColor = (status: ContractStatus): string => {
    switch (status) {
      case "active":
        return "bg-domino-green text-white";
      case "pending":
        return "bg-domino-light-blue text-white";
      case "expired":
        return "bg-domino-gray text-white";
      case "draft":
        return "bg-muted text-muted-foreground";
      case "review":
        return "bg-domino-orange text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getRiskColor = (risk: Contract["riskLevel"]) => {
    switch (risk) {
      case "low":
        return "bg-domino-green/20 text-domino-green border-domino-green/30";
      case "medium":
        return "bg-domino-light-blue/20 text-domino-blue border-domino-light-blue/30";
      case "high":
        return "bg-domino-orange/20 text-domino-orange border-domino-orange/30";
      case "critical":
        return "bg-domino-red/20 text-domino-red border-domino-red/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-md">Recent Contracts</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr className="text-left">
                <th className="whitespace-nowrap px-4 py-2 text-xs font-medium text-muted-foreground">Contract</th>
                <th className="whitespace-nowrap px-4 py-2 text-xs font-medium text-muted-foreground">Company</th>
                <th className="whitespace-nowrap px-4 py-2 text-xs font-medium text-muted-foreground">Date</th>
                <th className="whitespace-nowrap px-4 py-2 text-xs font-medium text-muted-foreground">Status</th>
                <th className="whitespace-nowrap px-4 py-2 text-xs font-medium text-muted-foreground">Risk</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((contract) => (
                <tr key={contract.id} className="border-y border-border">
                  <td className="whitespace-nowrap px-4 py-3 text-sm">{contract.name}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm">{contract.company}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-muted-foreground">{contract.date}</td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <Badge className={getStatusColor(contract.status)}>
                      {contract.status.charAt(0).toUpperCase() + contract.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <Badge variant="outline" className={cn("border", getRiskColor(contract.riskLevel))}>
                      {contract.riskLevel.charAt(0).toUpperCase() + contract.riskLevel.slice(1)}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContractsList;
