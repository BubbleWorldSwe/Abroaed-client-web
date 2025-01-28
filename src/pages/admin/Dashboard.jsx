import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(logout(null));
    localStorage.removeItem("token", token);
    navigate("/home");
  };
  return (
    <div className="h-screen flex flex-col p-2">
      {/* Adjust padding and spacing */}
      <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <h1 className="text-lg font-bold">Dashboard</h1>
        <button onClick={handleSignOut}>Sign Out</button>
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
    </div>
  );
}

export default Dashboard;
