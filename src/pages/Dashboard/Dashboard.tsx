import HeaderSection from "./HeaderSection/HeaderSection";
import { SemesterSection } from "./SemesterSection/SemesterSection";
export const Dashboard = () => {
  return (
    <div className="px-10">
      <HeaderSection />
      <SemesterSection />
    </div>
  );
};
