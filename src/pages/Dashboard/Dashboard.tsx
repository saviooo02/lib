import { useState } from "react";
import HeaderSection from "./HeaderSection/HeaderSection";
import { SemesterSection } from "./SemesterSection/SemesterSection";
import { CreateSemesterDialog } from "./HeaderSection/CreateSemesterDialog";

export const Dashboard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddClick = () => {
    setIsDialogOpen(true);
  };

  const handleCreateSemester = (name: string) => {
    console.log("Creating semester", name);
  };

  return (
    <div className="px-10">
      <HeaderSection onAddClick={handleAddClick} />
      <CreateSemesterDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onCreate={handleCreateSemester}
      />
      <SemesterSection />
    </div>
  );
};
