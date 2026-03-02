import React from "react";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubjectCardProps {
  title: string;
  materialCount: number;
  updatedText: string;
  tag?: string;
  icon?: React.ReactNode;
  onViewClick?: () => void;
  className?: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  title,
  materialCount,
  updatedText,
  tag = "CORE",
  icon,
  onViewClick,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-muted/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 w-full max-w-sm",
        className,
      )}
    >
      {/* Top Section */}
      <div className="flex items-start justify-between">
        <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center">
          {icon}
        </div>

        {tag && (
          <Badge
            variant="secondary"
            className="text-xs font-medium tracking-wide"
          >
            {tag}
          </Badge>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-6 text-lg font-semibold">{title}</h3>

      {/* Materials */}
      <div className="flex items-center gap-2 mt-3 text-muted-foreground text-sm">
        <FileText className="h-4 w-4" />
        <span>{materialCount} PDF Materials</span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6 text-sm">
        <span className="text-muted-foreground">{updatedText}</span>

        <button
          onClick={onViewClick}
          className="text-primary font-medium hover:underline inline-flex items-center gap-1"
        >
          View Subject →
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;
