
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  FileText, 
  FilePen, 
  FileSearch, 
  Calendar, 
  Users, 
  Settings, 
  Shield 
} from "lucide-react";

type SidebarItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

const mainItems: SidebarItem[] = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
    href: "/",
  },
  {
    title: "Contracts",
    icon: <FileText className="h-5 w-5" />,
    href: "/contracts",
  },
  {
    title: "Drafting",
    icon: <FilePen className="h-5 w-5" />,
    href: "/drafting",
  },
  {
    title: "Review",
    icon: <FileSearch className="h-5 w-5" />,
    href: "/review",
  },
  {
    title: "Calendar",
    icon: <Calendar className="h-5 w-5" />,
    href: "/calendar",
  },
];

const secondaryItems: SidebarItem[] = [
  {
    title: "Team",
    icon: <Users className="h-5 w-5" />,
    href: "/team",
  },
  {
    title: "Risk Analysis",
    icon: <Shield className="h-5 w-5" />,
    href: "/risk",
  },
  {
    title: "Settings",
    icon: <Settings className="h-5 w-5" />,
    href: "/settings",
  },
];

const Sidebar: React.FC = () => {
  const pathname = window.location.pathname;
  
  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-border bg-sidebar h-[calc(100vh-4rem)]">
      <div className="flex flex-col flex-1 p-4">
        <div className="space-y-1.5">
          {mainItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-domino-blue text-white"
                  : "text-muted-foreground hover:bg-domino-light-gray hover:text-foreground"
              )}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </div>
        
        <div className="mt-auto pt-4 border-t border-border space-y-1.5">
          {secondaryItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-domino-blue text-white"
                  : "text-muted-foreground hover:bg-domino-light-gray hover:text-foreground"
              )}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
