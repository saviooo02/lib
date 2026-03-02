import { useEffect, useState } from "react";
import SemesterCard from "./SemesterCard";
import { Link } from "react-router-dom";

type StatusType = "passed" | "active" | "inactive";

interface Semester {
  id: number;
  name: string;
  status: StatusType;
  subjectCount: number;
  fileCount: number;
}

export const SemesterSection = () => {
  const [semesters, setSemesters] = useState<Semester[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate backend call
  useEffect(() => {
    const fetchSemesters = async () => {
      setLoading(true);

      // simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      const mockSemesters: Semester[] = [
        {
          id: 3,
          name: "Semester 3",
          status: "passed",
          subjectCount: 6,
          fileCount: 142,
        },
        {
          id: 4,
          name: "Semester 4",
          status: "passed",
          subjectCount: 6,
          fileCount: 142,
        },
        {
          id: 5,
          name: "Semester 5",
          status: "active",
          subjectCount: 6,
          fileCount: 142,
        },
        {
          id: 6,
          name: "Semester 6",
          status: "active",
          subjectCount: 6,
          fileCount: 142,
        },
        {
          id: 7,
          name: "Semester 7",
          status: "inactive",
          subjectCount: 6,
          fileCount: 142,
        },
        {
          id: 8,
          name: "Semester 8",
          status: "inactive",
          subjectCount: 6,
          fileCount: 142,
        },
      ];

      setSemesters(mockSemesters);
      setLoading(false);
    };

    fetchSemesters();
  }, []);

  if (loading) {
    return <div className="px-6">Loading semesters...</div>;
  }

  return (
    <div
      className="px-4 sm:px-6 lg:px-8 grid gap-5 
                 grid-cols-1 
                 sm:grid-cols-1 
                 md:grid-cols-2 
                 lg:grid-cols-3 
                 xl:grid-cols-4"
    >
      {semesters.map((semester) => (
        <Link key={semester.id} to={`/semester/${semester.id}`}>
          <SemesterCard
            key={semester.id}
            semesterName={semester.name}
            status={semester.status}
            subjectCount={semester.subjectCount}
            fileCount={semester.fileCount}
            onClick={() => console.log("Clicked:", semester.name)}
          />
        </Link>
      ))}
    </div>
  );
};
