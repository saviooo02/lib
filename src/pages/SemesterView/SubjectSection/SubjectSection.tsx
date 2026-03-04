import SubjectCard from "./SubjectCard";
import { FlaskConical } from "lucide-react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      <div className="w-full max-w-sm">
        <button
          className="
      group w-full h-full
      rounded-2xl border-2 border-dashed
      border-muted-foreground/30
      bg-muted/40
      p-6
      flex flex-col items-center justify-center gap-3
      transition-all duration-200
      hover:border-gray-400
      hover:bg-muted
      hover:shadow-md
    "
          onClick={() => console.log("Add subject clicked")}
        >
          <div className="p-3 rounded-full bg-background border border-primary transition">
            <Plus className="h-5 w-5  text-primary" />
          </div>

          <div className="text-sm font-medium text-foreground group-hover:text-foreground transition">
            Add New Subject
          </div>

          <p className="text-xs text-muted-foreground/70 text-center">
            Create a new subject and start adding materials
          </p>
        </button>
      </div>
    </div>
  );
};
