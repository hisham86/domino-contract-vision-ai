
import React from "react";
import ContractsList from "@/components/dashboard/ContractsList";
import UpcomingDeadlines from "@/components/dashboard/UpcomingDeadlines";
import { Contract, Deadline } from "@/data/mockData";

interface ContractsSectionProps {
  contracts: Contract[];
  deadlines: Deadline[];
}

const ContractsSection: React.FC<ContractsSectionProps> = ({ contracts, deadlines }) => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="md:col-span-2">
        <ContractsList contracts={contracts} />
      </div>
      <div>
        <UpcomingDeadlines deadlines={deadlines} />
      </div>
    </div>
  );
};

export default ContractsSection;
