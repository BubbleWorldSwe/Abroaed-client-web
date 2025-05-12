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
import SigninPage from "../pages/admin/SigninPage";
import TestPrepLayout from "../website/testPrep/webpages/testPrepPage";
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
import LeaguageOfExcellencePage from "../website/leagueOfExcellence/webpages/leaguageOfExcellencePage";
import AbroaedPlusPage from "../website/abroaedPlus/webscreens/abroaedPlusPage";
// import BlogsCategoryPage from "../website/blogCategory/webpages/blogsCategoryPage";
import BlogsHome from "../website/blogHome/webpages/blogHomePage";
import BlogPage from "../website/blogPage/webpages/blogPage";
import ContactUsPage from "../website/contactUs/webpages/contactUsPage";
import FaqsPage from "../website/faqs/webpages/faqsPage";
import Blogs from "../admin/blogs/screens/blogs";
import BlogsDetails from "../admin/blogs/screens/blogsDetails";
import StudentSignIn from "../website/auth/studentSignIn";
import StudentSignUp from "../website/auth/studentSignUp";
import StudentResetPassword from "../website/auth/studentResetPassword";
import BatchLoginPage from "../website/authentication/batchLoginPage";
import BatchSignupPage from "../website/authentication/batchSignupPage";
import ForgetPasswordEmail from "../website/authentication/forgetPassword/forgetPasswordEmail";
import ForgetPasswordOtp from "../website/authentication/forgetPassword/forgetPasswordOtp";
import ForgetPasswordSet from "../website/authentication/forgetPassword/forgetPasswordSet";
import ForgetPasswordSuccessfull from "../website/authentication/forgetPassword/forgetPasswordSuccessfull";
import Login from "../website/authentication/login";
import AddBlog from "../admin/blogs/screens/addBlog";
import EditBlog from "../admin/blogs/screens/editBlog";
import ComingSoonPage from "../website/comingSoon/comingSoonPage";
import ForexPage from "../website/forex/webpages/forexPage";
import StudentOtpVerification from "../website/auth/studentOtpVerification";
import StudentForgotPassword from "../website/auth/studentForgotPassword";
import StudentOtpLogin from "../website/auth/studentOtpLogin";

const AppRoutes = () => {
  const allRoutes = [
    { path: "/", element: <HomeLayout />, isPrivate: false },
    {
      path: "/destinations/:id",
      element: <DestinationPage />,
      isPrivate: false,
    },
    {
      path: "/coming-soon",
      element: <ComingSoonPage />,
      isPrivate: false,
    },
    { path: "/testprep", element: <TestPrepLayout />, isPrivate: false },

    { path: "/whyAbroaed", element: <AboutUsPage />, isPrivate: false },
    { path: "/careers", element: <CareerPage />, isPrivate: false },
    { path: "/signin", element: <StudentSignIn />, isPrivate: false },
    {
      path: "/otpVerification",
      element: <StudentOtpVerification />,
      isPrivate: false,
    },
    { path: "/signup", element: <StudentSignUp />, isPrivate: false },
    { path: "/batchLogin", element: <BatchLoginPage />, isPrivate: false },
    { path: "/batchSignup", element: <BatchSignupPage />, isPrivate: false },
    {
      path: "/forgetPassword",
      element: <ForgetPasswordEmail />,
      isPrivate: false,
    },
    {
      path: "/sendOtp",
      element: <ForgetPasswordOtp />,
      isPrivate: false,
    },
    {
      path: "/setPassword",
      element: <ForgetPasswordSet />,
      isPrivate: false,
    },
    {
      path: "/login",
      element: <Login />,
      isPrivate: false,
    },
    {
      path: "/setPasswordSuccessfull",
      element: <ForgetPasswordSuccessfull />,
      isPrivate: false,
    },
    {
      path: "/update-password",
      element: <StudentResetPassword />,
      isPrivate: false,
    },
    {
      path: "/forgot-password",
      element: <StudentForgotPassword />,
      isPrivate: false,
    },
    {
      path: "/otp-login",
      element: <StudentOtpLogin />,
      isPrivate: false,
    },
    { path: "/blog/:id", element: <BlogPage />, isPrivate: false },
    { path: "/blogs", element: <BlogsHome />, isPrivate: false },
    // {
    //   path: "/blog/category/:id",
    //   element: <BlogsCategoryPage />,
    //   isPrivate: false,
    // },
    { path: "/finance", element: <FinancePage />, isPrivate: false },
    { path: "/forex", element: <ForexPage />, isPrivate: false },
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
      path: "/accomodation/:id",
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
      path: "/leaguageOfExcellence",
      element: <LeaguageOfExcellencePage />,
      isPrivate: false,
    },
    {
      path: "/abroaedPlus",
      element: <AbroaedPlusPage />,
      isPrivate: false,
    },
    {
      path: "/pathwaysProgram",
      element: <PathwaysProgramPage />,
      isPrivate: false,
    },
    {
      path: "/college/:id",
      element: <CollegePage />,
      isPrivate: false,
    },
    {
      path: "/homeCounselling",
      element: <HomeCounsellingPage />,
      isPrivate: false,
    },
    {
      path: "/contactUs",
      element: <ContactUsPage />,
      isPrivate: false,
    },
    {
      path: "/faqs",
      element: <FaqsPage />,
      isPrivate: false,
    },
    // Admin Dashboard Routes (Private)
    { path: "/admin/signin", element: <SigninPage />, isPrivate: false },
    {
      path: "/admin",
      element: <AdminLayout />,
      isPrivate: true,
      requiredRole: "admin",
      children: [
        { path: "", element: <Navigate to="dashboard" replace /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "teams", element: <Teams /> },
        { path: "nurtureLeads", element: <NurtureLeads /> },
        { path: "students", element: <Student /> },
        { path: "students/:id", element: <StudentProfileLayout /> },
        { path: "leads", element: <Leads /> },
        { path: "leads/:id", element: <LeadProfileLayout /> },
        { path: "accommodation", element: <Accommodations /> },
        { path: "accommodation/:id", element: <AccommodationDetails /> },
        { path: "testPrep/:id", element: <TestPrepDetails /> },
        { path: "testPrep", element: <TestPrep /> },
        { path: "langPrep/:id", element: <LanguagePrepDetails /> },
        { path: "langPrep", element: <LanguagePrep /> },
        { path: "transaction", element: <Transaction /> },
        { path: "colleges", element: <College /> },
        { path: "colleges/:id", element: <CollegDetails /> },
        { path: "destinations/:id", element: <DestinationDetails /> },
        { path: "destinations", element: <Destinations /> },
        { path: "blogs", element: <Blogs /> },
        { path: "blogs/blogDetails/:id", element: <BlogsDetails /> },
        { path: "blogs/addBlog", element: <AddBlog /> },
        { path: "blogs/editBlog/:id", element: <EditBlog /> },
      ],
    },
    // Student Routes (Private)
    {
      path: "/student",
      element: <StudentLayout />,
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
