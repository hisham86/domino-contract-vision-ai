
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FailureExample {
  id: string;
  project: string;
  location: string;
  timeline: string;
  issue: string;
  clmBreakdown: string;
}

interface FinancialImpactCase {
  id: string;
  title: string;
  example: string;
  impact: string;
  casePoint: string;
}

interface ContractFailureExamplesProps {
  industry: string;
  examples: FailureExample[];
}

const ContractFailureExamples = () => {
  // Organize the examples by industry
  const examplesByIndustry = [
    {
      industry: "Construction Industry Failures (2023–2025)",
      examples: [
        {
          id: "c1",
          project: "North Sydney Pool Redevelopment",
          location: "Australia",
          timeline: "2019–2025",
          issue: "The project experienced nearly 300 contract modifications over 18 months, leading to significant delays and cost overruns.",
          clmBreakdown: "Frequent design changes and inadequate contract oversight resulted in dismantling completed work and increased expenses."
        },
        {
          id: "c2",
          project: "ISG Ltd Collapse",
          location: "UK",
          timeline: "Administration filed in September 2024",
          issue: "ISG Ltd, a major UK contractor, collapsed due to legacy issues from loss-making contracts and poor financial management.",
          clmBreakdown: "Inadequate tracking of contract obligations and risks led to insolvency, affecting numerous projects and stakeholders."
        },
        {
          id: "c3",
          project: "Buckingham Group Administration",
          location: "UK",
          timeline: "Entered administration in September 2023",
          issue: "The company faced financial difficulties, leading to halted projects and unpaid subcontractors.",
          clmBreakdown: "Poor contract oversight and risk management contributed to the firm's financial collapse."
        }
      ]
    },
    {
      industry: "Oil & Gas Industry Failures (2023–2025)",
      examples: [
        {
          id: "o1",
          project: "Pertamina Corruption Case",
          location: "Indonesia",
          timeline: "Misconduct occurred between 2018 and 2023; arrests made in February 2025",
          issue: "Executives engaged in unauthorized oil imports, violating procurement regulations.",
          clmBreakdown: "Lack of compliance monitoring and contract enforcement led to significant financial losses and legal repercussions."
        },
        {
          id: "o2",
          project: "Vasilikos LNG Terminal Collapse",
          location: "Cyprus",
          timeline: "Project abandoned in July 2024",
          issue: "The Chinese-led consortium failed to deliver the LNG terminal, leading to EU investigations.",
          clmBreakdown: "Inadequate contract management and oversight resulted in project failure and potential financial penalties."
        }
      ]
    },
    {
      industry: "Financial Impacts of CLM Failures in Back-to-Back Agreements",
      financialCases: [
        {
          id: "f1",
          title: "Cost Overruns",
          example: "A main contractor agrees to a liquidated damages (LD) clause (e.g. $100K/day for delays), but fails to mirror this in subcontractor agreements.",
          impact: "If a subcontractor causes delays, the contractor absorbs the LD penalties, which can total millions in large infrastructure or energy projects.",
          casePoint: "Delays in subcontractor works at the Berlin Brandenburg Airport resulted in €1 million+ in monthly penalty costs not passed down due to poor back-to-back risk alignment."
        },
        {
          id: "f2",
          title: "Unrecoverable Claims and Disputes",
          example: "Scope changes agreed with the client are not reflected or flowed down to vendors.",
          impact: "Contractors cannot recover variation costs from subcontractors, leading to margin erosion or losses on entire projects.",
          casePoint: "In Chevron's Gorgon Project, scope and cost changes in some packages weren't contractually synchronized across vendors, contributing to $17+ billion in overruns."
        },
        {
          id: "f3",
          title: "Legal and Arbitration Costs",
          example: "Conflicting indemnity or insurance clauses between prime and subcontract create ambiguity during disputes.",
          impact: "Disputes escalate into litigation or arbitration, costing hundreds of thousands to millions per case in legal fees.",
          casePoint: "According to the Arcadis Global Construction Disputes Report (2023), the average dispute value in construction was $42.8 million—many tied to back-to-back clause mismanagement."
        },
        {
          id: "f4",
          title: "Cash Flow & Working Capital Disruptions",
          example: "Subcontractor payment terms (e.g. 15 days) don't match upstream payment terms from the client (e.g. 45 days).",
          impact: "Cash outflows precede inflows, resulting in project cash crunches or forced borrowing.",
          casePoint: "Misaligned cash flow clauses in back-to-back contracts can drain millions in working capital, especially in megaprojects with thin margins."
        },
        {
          id: "f5",
          title: "Reputational Damage and Project Cancellations",
          example: "A contractor fails to enforce safety or ESG requirements in subcontractor agreements, leading to regulatory violations.",
          impact: "Clients may cancel contracts, blacklist vendors, or levy heavy fines.",
          casePoint: "In the oil & gas sector, several operators in Southeast Asia faced contract terminations exceeding $50M due to back-to-back compliance failures in subcontracted offshore services."
        }
      ]
    }
  ];

  return (
    <Card className="border-domino-red/20 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-domino-red">
          <CircleAlert className="h-5 w-5" />
          Real-world Contract Failures
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <Alert variant="destructive" className="mb-3">
          <AlertTitle className="text-sm font-semibold">Protect Your Business</AlertTitle>
          <AlertDescription className="text-xs">
            These real-world examples demonstrate critical failures in contract management that led to significant financial and operational losses.
          </AlertDescription>
        </Alert>

        <Accordion type="single" collapsible className="w-full">
          {examplesByIndustry.map((industryGroup) => (
            <AccordionItem key={industryGroup.industry} value={industryGroup.industry}>
              <AccordionTrigger className="text-sm font-medium text-domino-red">
                {industryGroup.industry}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 mt-2">
                  {industryGroup.examples && industryGroup.examples.map((example) => (
                    <div key={example.id} className="bg-red-50 p-3 rounded-md border border-red-100">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-sm">{example.project}</h4>
                        <Badge variant="outline" className="text-xs font-normal text-domino-red">
                          {example.location}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">
                        Timeline: {example.timeline}
                      </div>
                      <div className="text-xs mb-2">
                        <span className="font-medium">Issue: </span>
                        {example.issue}
                      </div>
                      <div className="text-xs bg-red-100 p-2 rounded border-l-2 border-domino-red">
                        <span className="font-medium">CLM Breakdown: </span>
                        {example.clmBreakdown}
                      </div>
                    </div>
                  ))}
                  
                  {/* Financial Impact Cases */}
                  {industryGroup.financialCases && industryGroup.financialCases.map((caseItem) => (
                    <div key={caseItem.id} className="bg-red-50 p-3 rounded-md border border-red-100">
                      <div className="mb-1">
                        <h4 className="font-semibold text-sm">{caseItem.title}</h4>
                      </div>
                      <div className="text-xs mb-2">
                        <span className="font-medium">Example: </span>
                        {caseItem.example}
                      </div>
                      <div className="text-xs mb-2">
                        <span className="font-medium">Impact: </span>
                        {caseItem.impact}
                      </div>
                      <div className="text-xs bg-red-100 p-2 rounded border-l-2 border-domino-red">
                        <span className="font-medium">Case in Point: </span>
                        {caseItem.casePoint}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ContractFailureExamples;
