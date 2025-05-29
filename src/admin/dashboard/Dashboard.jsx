import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminLogout } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import { getAdminDashboard } from "../../api/api";
import ActivityLoader from "../../commons/components/loader/activityLoader";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(adminLogout(null));
    // localStorage.removeItem("token", token);
    navigate("/admin/signin");
  };

  const { adminToken, admin } = useSelector((state) => state.auth);

  const [dashboardData, setDashboardData] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const data = await getAdminDashboard();

      if (data.status === 200) {
        setDashboardData(data.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen flex flex-col p-2">
      {/* Adjust padding and spacing */}
      <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <h1 className="text-lg font-bold">Dashboard</h1>
        <button
        // onClick={handleSignOut}
        >
          {/*  {`Welcome, ${admin?.firstName} ${admin?.lastName}`} */}
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
        {/* Grid Layouts */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 lg:h-64"></div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 lg:h-64"></div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 lg:h-64"></div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-48 lg:h-72"></div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-48 lg:h-72"></div>
        </div>
      </main>
      <ActivityLoader loading={isLoading} />
    </div>
  );
}

export default Dashboard;
