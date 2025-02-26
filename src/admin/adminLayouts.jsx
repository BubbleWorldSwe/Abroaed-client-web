import { Outlet } from 'react-router-dom';
import CollapsableSidebar from './adminSidebar';
import AdminNav from './adminNav';

const AdminLayout = () => {
  return (
    <div className="bg-gray-200 font-rethink relative dark:bg-gray-900 antialiased h-screen">
      <AdminNav />
      <div className="flex h-[90vh]">
        {/* Sidebar */}
        <CollapsableSidebar className="h-full" />

        {/* Main Content */}
        <main className="bg-gray-200 dark:bg-gray-900 h-full  w-full flex flex-col">
          <div className="flex-grow  overflow-scroll">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
