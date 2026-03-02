import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Dashboard } from "@/pages/Dashboard";

export const router = createBrowserRouter([
       {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
         
        ],
      },

]);