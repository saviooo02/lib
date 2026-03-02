import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface HeaderSectionProps {
  title?: string;
  description?: string;
  onAddClick?: () => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  title = "Welcome Clint",
  description = "Access and manage your core engineering curriculum and specialized study materials.",
  onAddClick,
}) => {
  return (
    <div className="w-full bg-muted/40 rounded-2xl p-8 flex items-center justify-between">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="text-muted-foreground text-sm max-w-2xl">{description}</p>
      </div>

      {/* Right Section */}
      <Button onClick={onAddClick} className="gap-2 rounded-lg shadow-sm">
        <Plus className="h-4 w-4" />
        Add Semester
      </Button>
    </div>
  );
};

export default HeaderSection;
