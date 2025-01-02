import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/admin/Dashboard";

import PrivateRoute from "./privateRoute";
import AccomodationLayout from "../pages/accomodation/AccomodationLayout";
import FinanceLayout from "../Layouts/FinanceLayout";
import LayoutPageDestination from "../Layouts/DestinationLayout";
import AdminLayout from "../Layouts/AdminLayout";
import Teams from "../pages/admin/Teams";
import NurtureLeads from "../pages/admin/NurtureLeads";
import StudentsTable from "../pages/admin/StudentsTable";
import ManageLeadsTable from "../pages/admin/ManageLeadsTable";
import HomeLayout from "../Components/Home";
import LayoutBlogs from "../Components/LayoutBlogs";
import ComingSoonPage from "../Layouts/ComingSoonPageLayout";
import CollegeTable from "../pages/admin/CollegeTable";
import SigninPage from "../pages/admin/SigninPage";
import TestPrepLayout from "../Layouts/TestPrepLayout";
import CollegePage from "../pages/Colleges/CollegePage";
import DestinationTable from "../pages/destinations/DestinationTable";
import DestinationPage from "../pages/destinations/DestinationPage";
import LayoutBlogHomePage from "../Components/LayoutBlogHomePage";
import LayoutBlogsCategoryPage from "../Components/LayoutBlogsCategoryPage";
import AboutUsLayout from "../Layouts/AboutUsLayout";
import CareersLayout from "../Layouts/CareersLayout";
import PathwaysHomeLayout from "../Layouts/PathwaysHomeLayout";

const AppRoutes = () => {
  // Define all routes (public and private)
  const allRoutes = [
    { path: "/home", element: <HomeLayout />, isPrivate: false },
    {
      path: "/destinations",
      element: <LayoutPageDestination />,
      isPrivate: false,
    },
    {
      path: "/",
      element: <ComingSoonPage />,
      isPrivate: false,
    },
    { path: "/testprep", element: <TestPrepLayout />, isPrivate: false },
    { path: "/aboutus", element: <AboutUsLayout />, isPrivate: false },
    { path: "/careers", element: <CareersLayout />, isPrivate: false },
    { path: "/admin/signin", element: <SigninPage />, isPrivate: false },
    { path: "/blog/:id", element: <LayoutBlogs />, isPrivate: false },
    { path: "/blog", element: <LayoutBlogHomePage />, isPrivate: false },
    {
      path: "/blog/category/:id",
      element: <LayoutBlogsCategoryPage />,
      isPrivate: false,
    },
    { path: "/finance", element: <FinanceLayout />, isPrivate: false },
    { path: "/testprep/:id", element: <TestPrepLayout />, isPrivate: false },
    { path: "/pathways", element: <PathwaysHomeLayout />, isPrivate: false },
    {
      path: "/accomodation",
      element: <AccomodationLayout />,
      isPrivate: false,
    },

    // Admin Dashboard Routes (Private)
    {
      path: "/admin",
      element: <AdminLayout />,
      isPrivate: true,
      requiredRole: "admin",
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "teams", element: <Teams /> },
        { path: "nurtureLeads", element: <NurtureLeads /> },
        { path: "students", element: <StudentsTable /> },
        { path: "leads", element: <ManageLeadsTable /> },
        { path: "colleges", element: <CollegeTable /> },
        { path: "colleges/:name", element: <CollegePage /> },
        { path: "destinations/:name", element: <DestinationPage /> },
        { path: "destinations", element: <DestinationTable /> },
      ],
    },
  ];

  return (
    <Routes>
      {/* Loop through the routes and apply PrivateRoute for private routes */}
      {allRoutes.map(({ path, element, isPrivate, children }, index) => (
        <Route
          key={index}
          path={path}
          element={
            isPrivate ? (
              <PrivateRoute>{element}</PrivateRoute> // Wrap private routes in PrivateRoute
            ) : (
              element // Render public routes directly
            )
          }
        >
          {/* Render child routes */}
          {children &&
            children.map((child, idx) => (
              <Route key={idx} path={child.path} element={child.element} />
            ))}
        </Route>
      ))}

      {/* Fallback for unknown routes (optional) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
