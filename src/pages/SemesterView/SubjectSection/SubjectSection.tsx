import SubjectCard from "./SubjectCard";
import { FlaskConical } from "lucide-react";
export const SubjectSection = () => {
  return (
    <div
      className="px-4 sm:px-6 lg:px-8 grid gap-5 
                 grid-cols-1 
                 sm:grid-cols-1 
                 md:grid-cols-2 
                 lg:grid-cols-3 
                 xl:grid-cols-4"
    >
      {[...Array(6)].map((_, index) => (
        <SubjectCard
          key={index}
          title="Thermodynamics"
          materialCount={24}
          updatedText="Updated 2 days ago"
          tag="CORE"
          icon={<FlaskConical className="h-5 w-5 text-red-500" />}
          onViewClick={() => console.log("View clicked")}
        />
      ))}
    </div>
  );
};
