
// Mock data types
export type Contract = {
  id: string;
  name: string;
  company: string;
  date: string;
  status: "active" | "review" | "pending" | "draft" | "expired";
  riskLevel: "low" | "medium" | "high" | "critical";
};

export type RiskData = {
  name: string;
  value: number;
  color: string;
};

export type Deadline = {
  id: string;
  title: string;
  date: string;
  daysLeft: number;
  type: "renewal" | "review" | "expiration" | "payment";
};

export type SubContractor = {
  id: string;
  name: string;
  role: string;
};

export type RiskVisualization = {
  id: string;
  title: string;
  riskScore: number;
  severity: number;
  likelihood: number;
  subContractors: SubContractor[];
};

// Mock contracts data
export const mockContracts: Contract[] = [
  {
    id: "c1",
    name: "Service Agreement",
    company: "Acme Corp",
    date: "May 5, 2025",
    status: "active",
    riskLevel: "low",
  },
  {
    id: "c2",
    name: "Software License",
    company: "TechGiant Inc",
    date: "Jun 12, 2025",
    status: "review",
    riskLevel: "high",
  },
  {
    id: "c3",
    name: "NDA Agreement",
    company: "Startup XYZ",
    date: "Apr 28, 2025",
    status: "pending",
    riskLevel: "medium",
  },
  {
    id: "c4",
    name: "Partnership Contract",
    company: "Global Partners",
    date: "Jul 30, 2025",
    status: "draft",
    riskLevel: "low",
  },
  {
    id: "c5",
    name: "Vendor Agreement",
    company: "SupplyChain Co",
    date: "May 15, 2025",
    status: "expired",
    riskLevel: "critical",
  },
];

// Mock risk data
export const mockRiskData: RiskData[] = [
  { name: "Low", value: 16, color: "#22c55e" },
  { name: "Medium", value: 8, color: "#60a5fa" },
  { name: "High", value: 5, color: "#f97316" },
  { name: "Critical", value: 2, color: "#ef4444" },
];

// Mock deadlines
export const mockDeadlines: Deadline[] = [
  {
    id: "d1",
    title: "Acme Corp Service Agreement",
    date: "May 15, 2025",
    daysLeft: 7,
    type: "renewal",
  },
  {
    id: "d2",
    title: "TechGiant Software License",
    date: "May 11, 2025",
    daysLeft: 3,
    type: "review",
  },
  {
    id: "d3",
    title: "SupplyChain Vendor Agreement",
    date: "May 9, 2025",
    daysLeft: 1,
    type: "expiration",
  },
  {
    id: "d4",
    title: "Global Partners Annual Fee",
    date: "May 20, 2025",
    daysLeft: 12,
    type: "payment",
  },
];

// Mock risk visualizations
export const mockRiskVisualizations: RiskVisualization[] = [
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
