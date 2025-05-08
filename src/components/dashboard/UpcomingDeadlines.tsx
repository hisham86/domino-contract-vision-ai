
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface Deadline {
  id: string;
  title: string;
  date: string;
  daysLeft: number;
  type: "renewal" | "expiration" | "review" | "payment";
}

interface UpcomingDeadlinesProps {
  deadlines: Deadline[];
}

const UpcomingDeadlines: React.FC<UpcomingDeadlinesProps> = ({ deadlines }) => {
  const getDeadlineTypeStyles = (type: Deadline["type"]) => {
    switch (type) {
      case "renewal":
        return "bg-domino-blue text-white";
      case "expiration":
        return "bg-domino-red text-white";
      case "review":
        return "bg-domino-orange text-white";
      case "payment":
        return "bg-domino-green text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getUrgencyStyles = (daysLeft: number) => {
    if (daysLeft <= 3) return "text-domino-red font-medium";
    if (daysLeft <= 7) return "text-domino-orange";
    return "text-muted-foreground";
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md">Upcoming Deadlines</CardTitle>
        <Calendar className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="px-0">
        <ul className="space-y-1">
          {deadlines.map((deadline) => (
            <li
              key={deadline.id}
              className="flex items-center justify-between px-6 py-2 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <Badge className={getDeadlineTypeStyles(deadline.type)}>
                  {deadline.type.charAt(0).toUpperCase() + deadline.type.slice(1)}
                </Badge>
                <span className="text-sm">{deadline.title}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">{deadline.date}</span>
                <span className={cn("text-xs", getUrgencyStyles(deadline.daysLeft))}>
                  {deadline.daysLeft} {deadline.daysLeft === 1 ? "day" : "days"} left
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default UpcomingDeadlines;
