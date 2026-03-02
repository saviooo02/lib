import React from "react";

interface SemesterHeaderSectionProps {
  title?: string;
}

const SemesterHeaderSection: React.FC<SemesterHeaderSectionProps> = ({
  title = "Semester 3",
}) => {
  return (
    <div className="w-full bg-muted/40 rounded-2xl p-8 flex items-center justify-between">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      </div>
    </div>
  );
};

export default SemesterHeaderSection;
