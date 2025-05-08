
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
                  {industryGroup.examples.map((example) => (
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
