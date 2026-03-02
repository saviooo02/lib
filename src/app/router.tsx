import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Dashboard } from "@/pages/Dashboard/Dashboard";
import { SemesterView } from "@/pages/SemesterView/SemesterView";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/semester/:id",
        element: <SemesterView />,
      },
    ],
  },
]);
