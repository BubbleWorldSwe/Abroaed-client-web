import { useContext, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import Login from '../../dump/components/login/login.js';
import Home from '../../dump/components/home/home.js';
import NotFound from '../../dump/components/notFound/notFound.js';
import SignUp from '../../dump/components/signup/signup.js';
import ActivateAccount from '../../dump/components/activateAccount/activateAccount.js';
import ManageFactory from '../../dump/components/factory/manageFactory.js';
import { UserContext } from '../contexts/userContext';
import Users from '../../dump/components/users/users.js';
import AddUser from '../../dump/components/addUser/addUser.js';
import JoinFactory from '../../dump/components/joinFactory/joinFactory.js';
import EditUser from '../../dump/components/editUser/editUser.js';
import ForgotPassword from '../../dump/components/forgotPassword/forgotPassword.js';
import ResetPassword from '../../dump/components/resetPassword/resetPassword.js';
import Factories from '../../dump/components/superadmin/factories/factories.js';
import Suppliers from '../../dump/components/suppliers/suppliers.js';
import SupplierTransaction from '../../dump/components/suppliers/supplierTransaction.js';
import MakePayments from '../../dump/components/makePayments/makePayment.js';
import LandingPage from '../../dump/components/landingPage/landingPage.js';

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
