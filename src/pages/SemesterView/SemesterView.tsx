import SemesterHeaderSection from "./SemesterHeader/SemesterHeader";
import { SubjectSection } from "./SubjectSection/SubjectSection";

export const SemesterView = () => {
  return (
    <div className="px-8">
      <SemesterHeaderSection />
      <SubjectSection />
    </div>
  );
};
