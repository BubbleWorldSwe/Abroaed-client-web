import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import PrivateRoute from "./privateRoute";
import AccomodationLayout from "../pages/accommodation/AccomodationLayout";
import FinanceLayout from "../Layouts/FinanceLayout";
import LayoutPageDestination from "../Layouts/DestinationLayout";
import AdminLayout from "../Layouts/AdminLayout";
import NurtureLeads from "../pages/admin/NurtureLeads";
import Student from "../admin/student/screens/student";
import Leads from "../admin/lead/screens/leads";
import HomeLayout from "../Components/Home";
import LayoutBlogs from "../Components/LayoutBlogs";
import ComingSoonPage from "../Layouts/ComingSoonPageLayout";
import SigninPage from "../pages/admin/SigninPage";
import TestPrepLayout from "../Layouts/TestPrepLayout";
import LayoutBlogHomePage from "../Components/LayoutBlogHomePage";
import LayoutBlogsCategoryPage from "../Components/LayoutBlogsCategoryPage";
import AboutUsLayout from "../Layouts/AboutUsLayout";
import CareersLayout from "../Layouts/CareersLayout";
import PathwaysHomeLayout from "../Layouts/PathwaysHomeLayout";
import LanguagePrep from "../admin/languagePrep/screens/languagePrep";
import PathwaysProgramLayout from "../Layouts/PathwaysProgramLayout";
import CollegePageLayout from "../Layouts/CollegePageLayout";
import HomeCounsellingLayout from "../Layouts/HomeCounsellingLayout";
import Transaction from "../admin/transaction/screens/transaction";
import StudentProfileLayout from "../admin/student/screens/studentProfileLayout";
import DestinationDetails from "../admin/destination/screens/destinationDetails";
import Destinations from "../admin/destination/screens/Destinations";
import Teams from "../admin/team/screens/teams";
import College from "../admin/college/screens/college";
import CollegDetails from "../admin/college/screens/collegeDetails";
import AccommodationDetails from "../admin/accommodation/screens/accommodationDetails";
import Accommodations from "../admin/accommodation/screens/accommodation";
import LanguagePrepDetails from "../admin/languagePrep/screens/languagePrepDetails";

const AppRoutes = () => {

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
    {
      path: "/accomodation",
      element: <AccomodationLayout />,
      isPrivate: false,
    },
    {
      path: "/pathways",
      element: <PathwaysHomeLayout />,
      isPrivate: false,
    },
    {
      path: "/pathwaysProgram",
      element: <PathwaysProgramLayout />,
      isPrivate: false,
    },
    {
      path: "/college",
      element: <CollegePageLayout />,
      isPrivate: false,
    },
    {
      path: "/homeCounselling",
      element: <HomeCounsellingLayout />,
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
        { path: "students", element: <Student /> },
        { path: "students/:name", element: <StudentProfileLayout /> },
        { path: "leads", element: <Leads /> },
        { path: "accommodation", element: <Accommodations /> },
        { path: "accommodation/:name", element: <AccommodationDetails /> },
        { path: "langPrep/:name", element: < LanguagePrepDetails /> },
        { path: "langPrep", element: < LanguagePrep /> },
        { path: "transaction", element: < Transaction /> },
        { path: "colleges", element: <College /> },
        { path: "colleges/:name", element: <CollegDetails /> },
        { path: "destinations/:name", element: <DestinationDetails /> },
        { path: "destinations", element: <Destinations /> },
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
              element
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
