import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../components/Home';
import BlogPage from '../components/BlogPage';
import Dashboard from '../pages/admin/Dashboard';

import PrivateRoute from './privateRoute';
import AccomodationLayout from '../pages/accomodation/AccomodationLayout';
import TestPrepLayout from '../pages/TestPrep/Layout';
import FinanceLayout from '../Layouts/FinanceLayout';
import LayoutPageDestination from '../Layouts/DestinationLayout';
import AdminLayout from '../Layouts/AdminLayout';
import Teams from '../pages/admin/Teams';
import Onboarding from '../pages/admin/Onboarding';
import NurtureLeads from '../pages/admin/NurtureLeads';

const AppRoutes = () => {
  // Define all routes (public and private)
  const allRoutes = [
    { path: '/', element: <Home />, isPrivate: false },
    { path: '/blog', element: <BlogPage />, isPrivate: false },
    { path: '/destinations', element: <LayoutPageDestination />, isPrivate: false },
    { path: '/testprep', element: <TestPrepLayout />, isPrivate: false },
    { path: '/finance', element: <FinanceLayout />, isPrivate: false },
    { path: '/accomodation', element: <AccomodationLayout />, isPrivate: false },

    // Admin Dashboard Routes (Private)
    {
      path: '/admin',
      element: <AdminLayout />,
      isPrivate: true,
      requiredRole: 'admin',
      children: [
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'teams', element: <Teams /> },
        { path: 'onboarding', element: <Onboarding /> },
        { path: 'nurtureLeads', element: <NurtureLeads /> }
      ]
    }
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
          {children && children.map((child, idx) => <Route key={idx} path={child.path} element={child.element} />)}
        </Route>
      ))}

      {/* Fallback for unknown routes (optional) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;