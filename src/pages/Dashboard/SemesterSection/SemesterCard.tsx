import React from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "passed" | "active" | "inactive";

interface SemesterCardProps {
  semesterName: string;
  status?: Status;
  subjectCount: number;
  fileCount: number;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const statusStyle: Record<Status, string> = {
  passed: "bg-green-100 text-green-700",
  active: "bg-blue-100 text-blue-700",
  inactive: "bg-gray-400 text-gray-100",
};

const statusMap: Record<Status, string> = {
  passed: "Passed",
  active: "Active",
  inactive: "Yet to Start",
};

const accentStyle: Record<Status, string> = {
  passed: "bg-green-800",
  active: "bg-blue-800",
  inactive: "bg-gray-600",
};

const SemesterCard: React.FC<SemesterCardProps> = ({
  semesterName,
  status = "passed",
  subjectCount,
  fileCount,
  icon,
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative flex items-center justify-between rounded-2xl border bg-muted/40 p-6 hover:shadow-md transition-all duration-200 cursor-pointer",
        className,
      )}
    >
      {/* Left Green Accent */}
      <div
        className={cn(
          "absolute left-0 top-0 h-full w-2 rounded-l-2xl",
          accentStyle[status],
        )}
      />

      {/* Content */}
      <div className="flex items-center gap-6">
        {/* Icon */}
        <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center">
          {icon ?? <GraduationCap className="h-6 w-6 text-muted-foreground" />}
        </div>

        {/* Text Section */}
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold">{semesterName}</h3>

            {status && (
              <Badge
                className={cn(
                  "text-xs font-medium rounded-full px-3 py-1",
                  statusStyle[status],
                )}
              >
                {statusMap[status]}
              </Badge>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 mt-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              {subjectCount} Subjects
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              {fileCount} Files
            </div>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <ChevronRight className="h-5 w-5 text-muted-foreground" />
    </div>
  );
};

export default SemesterCard;
