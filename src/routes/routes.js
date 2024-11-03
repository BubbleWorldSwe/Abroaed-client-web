import { useContext, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import Login from './../components/login/login';
import Home from './../components/home/home';
import NotFound from '../components/notFound/notFound';
import SignUp from '../components/signup/signup';
import ActivateAccount from '../components/activateAccount/activateAccount';
import ManageFactory from '../components/factory/manageFactory.js';
import { UserContext } from '../contexts/userContext';
import Users from '../components/users/users';
import AddUser from '../components/addUser/addUser';
import JoinFactory from '../components/joinFactory/joinFactory';
import EditUser from '../components/editUser/editUser';
import ForgotPassword from '../components/forgotPassword/forgotPassword';
import ResetPassword from '../components/resetPassword/resetPassword';
import Factories from '../components/superadmin/factories/factories';
import Suppliers from '../components/suppliers/suppliers';
import SupplierTransaction from '../components/suppliers/supplierTransaction';
import MakePayments from '../components/makePayments/makePayment';
import LandingPage from '../components/landingPage/landingPage';

const AppRoutes = () => {
  const allRoutes = [
    {
      path: 'Suppliers',
      element: <Suppliers />,
      module: 'Suppliers'
    },
    {
      path: 'makePayment',
      element: <MakePayments />,
      module: 'Transactions'
    },
    {
      path: 'supplierTransactions',
      element: <SupplierTransaction />,
      module: 'Suppliers'
    },
    {
      path: 'users',
      element: <Users />,
      module: 'User Management'
    },
    {
      path: 'edit-user',
      element: <EditUser />,
      module: 'User Management'
    },
    {
      path: 'add-user',
      element: <AddUser />,
      module: 'User Management'
    },
    {
      path: 'manageFactory',
      element: <ManageFactory />,
      module: 'Factory Management'
    },
    {
      path: 'factories',
      element: <Factories />,
      module: 'Super Admin'
    }
  ];
  const { currentFactoryUser } = useContext(UserContext);
  const [landingRoute, setLandingRoute] = useState('');
  const [userRoutes, setUserRoutes] = useState(allRoutes);

  useEffect(() => {
    if (currentFactoryUser) {
      const routes =
        currentFactoryUser.modules?.length > 0
          ? allRoutes.filter((route) => !route.module || currentFactoryUser.modules.includes(route.module))
          : allRoutes.filter((route) => !route.module);
      setUserRoutes(routes);
      setLandingRoute(`/${routes[0]?.path ?? 'notFound'}`);
    }
  }, [currentFactoryUser]);

  return (
    <Routes>
      {landingRoute && <Route path="/" element={<Navigate to={landingRoute} replace />} />}
      <Route path="/" element={<PrivateRoute component={Home} />}>
        {userRoutes.map(({ path, element }, index) => (
          <Route path={path} element={element} key={index} />
        ))}
      </Route>
      <Route path="/login" element={<PublicRoute component={Login}></PublicRoute>}></Route>
      <Route path="/landingPage" element={<PublicRoute component={LandingPage}></PublicRoute>}></Route>
      <Route path="/forgot-password" element={<PublicRoute component={ForgotPassword}></PublicRoute>}></Route>
      <Route path="/signup" element={<PublicRoute component={SignUp}></PublicRoute>}></Route>
      <Route
        path="/activate-account/:resetToken"
        element={<PublicRoute component={ActivateAccount}></PublicRoute>}
      ></Route>
      <Route path="/reset-password/:resetToken" element={<PublicRoute component={ResetPassword}></PublicRoute>}></Route>
      <Route path="/join-factory/:resetToken" element={<PublicRoute component={JoinFactory}></PublicRoute>}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
