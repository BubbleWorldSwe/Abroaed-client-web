import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import PrivateRoute from "./privateRoute";
import AccomodationPage from "../website/accommodation/webscreens/accommodationPage";
import FinancePage from "../website/finance/webpages/financePage";
import DestinationPage from "../website/destination/webpages/destinationPage";
import NurtureLeads from "../pages/admin/NurtureLeads";
import Student from "../admin/student/screens/student";
import Leads from "../admin/lead/screens/leads";
import HomeLayout from "../website/home/webpages/homePage";
import LayoutBlogs from "../Components/LayoutBlogs";
import ComingSoonPage from "../Layouts/ComingSoonPageLayout";
import SigninPage from "../pages/admin/SigninPage";
import TestPrepLayout from "../website/testPrep/webpages/testPrepPage";
import LayoutBlogHomePage from "../Components/LayoutBlogHomePage";
import LayoutBlogsCategoryPage from "../Components/LayoutBlogsCategoryPage";
import AboutUsPage from "../website/aboutUs/webpages/aboutUsPage";
import LanguagePrep from "../admin/languagePrep/screens/languagePrep";
import PathwaysProgramPage from "../website/pathways/program/webpages/pathwaysProgramPage";
import CollegePage from "../website/college/webpages/collegePage";
import HomeCounsellingPage from "../website/homeCounselling/webpages/homeCounsellingPage";
import Transaction from "../admin/transaction/screens/transaction";
import StudentProfileLayout from "../admin/student/screens/studentProfileLayout";
import DestinationDetails from "../admin/destination/screens/destinationDetails";
import Destinations from "../admin/destination/screens/destinations";
import Teams from "../admin/team/screens/teams";
import College from "../admin/college/screens/college";
import CollegDetails from "../admin/college/screens/collegeDetails";
import AccommodationDetails from "../admin/accommodation/screens/accommodationDetails";
import Accommodations from "../admin/accommodation/screens/accommodation";
import LanguagePrepDetails from "../admin/languagePrep/screens/languagePrepDetails";
import CareerPage from "../website/career/webpages/careerPage";
import PathwaysHomePage from "../website/pathways/home/webpages/pathwaysHomePage";
import IvyLeaguesPage from "../website/ivyLeagues/webpages/ivyLeaguesPage";
import TestPrep from "../admin/testPrep/screens/testPrep";
import TestPrepDetails from "../admin/testPrep/screens/testPrepDetails";
import LanguagePrepLayout from "../website/languagePrep/webpages/languagePrepPage";
import StudentLayout from "../student/studentLayout";
import StudentHome from "../student/studentComponent/studentHome";
import StudentDocuments from "../student/studentComponent/studentDocuments";
import StudentProfile from "../student/studentComponent/studentProfile";
import StudentApplications from "../student/studentComponent/studentApplications";
import StudentTransactions from "../student/studentComponent/studentTransactions";
import LeadProfileLayout from "../admin/lead/screens/leadProfile";
import AdminLayout from "../admin/adminLayouts";

const AppRoutes = () => {
  const allRoutes = [
    { path: "/home", element: <HomeLayout />, isPrivate: false },
    {
      path: "/destinations/:id",
      element: <DestinationPage />,
      isPrivate: false,
    },
    {
      path: "/",
      element: <ComingSoonPage />,
      isPrivate: false,
    },
    { path: "/testprep", element: <TestPrepLayout />, isPrivate: false },

    { path: "/aboutus", element: <AboutUsPage />, isPrivate: false },
    { path: "/careers", element: <CareerPage />, isPrivate: false },
    { path: "/admin/signin", element: <SigninPage />, isPrivate: false },
    { path: "/blog/:id", element: <LayoutBlogs />, isPrivate: false },
    { path: "/blog", element: <LayoutBlogHomePage />, isPrivate: false },
    {
      path: "/blog/category/:id",
      element: <LayoutBlogsCategoryPage />,
      isPrivate: false,
    },
    { path: "/finance", element: <FinancePage />, isPrivate: false },
    { path: "/testprep/:id", element: <TestPrepLayout />, isPrivate: false },
    {
      path: "/languageprep/:id",
      element: <LanguagePrepLayout />,
      isPrivate: false,
    },
    {
      path: "/accomodation",
      element: <AccomodationPage />,
      isPrivate: false,
    },
    {
      path: "/ivyLeagues",
      element: <IvyLeaguesPage />,
      isPrivate: false,
    },
    {
      path: "/pathways",
      element: <PathwaysHomePage />,
      isPrivate: false,
    },
    {
      path: "/pathwaysProgram",
      element: <PathwaysProgramPage />,
      isPrivate: false,
    },
    {
      path: "/college",
      element: <CollegePage />,
      isPrivate: false,
    },
    {
      path: "/homeCounselling",
      element: <HomeCounsellingPage />,
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
        { path: "leads/:name", element: <LeadProfileLayout /> },
        { path: "accommodation", element: <Accommodations /> },
        { path: "accommodation/:name", element: <AccommodationDetails /> },
        { path: "testPrep/:name", element: <TestPrepDetails /> },
        { path: "testPrep", element: <TestPrep /> },
        { path: "langPrep/:name", element: <LanguagePrepDetails /> },
        { path: "langPrep", element: <LanguagePrep /> },
        { path: "transaction", element: <Transaction /> },
        { path: "colleges", element: <College /> },
        { path: "colleges/:name", element: <CollegDetails /> },
        { path: "destinations/:name", element: <DestinationDetails /> },
        { path: "destinations", element: <Destinations /> },
      ],
    },
    // Student Routes (Private)
    {
      path: "/student",
      element: < StudentLayout />,
      isPrivate: true,
      requiredRole: "admin",
      children: [
        { path: "home", element: <StudentHome /> },
        { path: "documents", element: <StudentDocuments /> },
        { path: "profile", element: <StudentProfile /> },
        { path: "application", element: <StudentApplications /> },
        { path: "transactions", element: <StudentTransactions /> },

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
