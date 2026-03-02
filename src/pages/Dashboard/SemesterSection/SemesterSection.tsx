import SemesterCard from "./SemesterCard";

export const SemesterSection = () => {
  return (
    <div
      className="px-4 sm:px-6 lg:px-8 grid gap-5 
                    grid-cols-1 
                    sm:grid-cols-1 
                    md:grid-cols-2 
                    lg:grid-cols-3 
                    xl:grid-cols-4"
    >
      <SemesterCard
        semesterName={`Semester 1`}
        status="passed"
        subjectCount={6}
        fileCount={142}
        onClick={() => console.log("Semester clicked")}
      />
      <SemesterCard
        semesterName={`Semester 1`}
        status="passed"
        subjectCount={6}
        fileCount={142}
        onClick={() => console.log("Semester clicked")}
      />{" "}
      <SemesterCard
        semesterName={`Semester 1`}
        status="active"
        subjectCount={6}
        fileCount={142}
        onClick={() => console.log("Semester clicked")}
      />{" "}
      <SemesterCard
        semesterName={`Semester 1`}
        status="active"
        subjectCount={6}
        fileCount={142}
        onClick={() => console.log("Semester clicked")}
      />{" "}
      <SemesterCard
        semesterName={`Semester 1`}
        status="inactive"
        subjectCount={6}
        fileCount={142}
        onClick={() => console.log("Semester clicked")}
      />{" "}
      <SemesterCard
        semesterName={`Semester 1`}
        status="inactive"
        subjectCount={6}
        fileCount={142}
        onClick={() => console.log("Semester clicked")}
      />
    </div>
  );
};
