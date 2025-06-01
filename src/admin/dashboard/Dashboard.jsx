import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminLogout } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import { getAdminDashboard } from "../../api/api";
import ActivityLoader from "../../commons/components/loader/activityLoader";
import { Pie, Line, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import {
  ArrowDownLeft,
  ArrowDownRight,
  ArrowUpLeft,
  ArrowUpRight,
  Calendar,
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.auth);
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

  const metrics = [
    { title: "Total Leads", value: 250, change: "+10%", positive: true },
    {
      title: "Active Applications",
      value: 185,
      change: "+10%",
      positive: true,
    },
    {
      title: "Onboarded Students",
      value: 120,
      change: "-10%",
      positive: false,
    },
  ];

  const salesData = {
    labels: ["Direct-Standard", "Direct-Premium", "Pathway"],
    datasets: [
      {
        data: [60, 15, 25],
        backgroundColor: ["#3b82f6", "#fbbf24", "#f472b6"],
      },
    ],
  };
  const salesOptions = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
    },
  };

  const websiteTraffic = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Website Traffic",
        data: [5000, 10000, 15000, 25000, 10000, 15000, 5000],
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "#3b82f6",
        tension: 0.4, // Smooth curved lines
      },
    ],
  };

  const websiteOptions = {
    plugins: {
      legend: {
        position: "bottom", // Legend (data label) on the right
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Optional: make it responsive
    elements: {
      line: {
        tension: 0.4, // Smooth curves
      },
    },
  };

  const leadsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Organic",
        data: [50, 100, 150, 300, 200, 250, 100],
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "#3b82f6",
        tension: 0.4, // This makes the lines curved (0 - straight, 1 - super curvy)
        pointRadius: 5, // Makes the dots visible
        pointBackgroundColor: "#3b82f6", // Color of the dots
        pointBorderColor: "#ffffff", // Optional: white border around dots
        pointBorderWidth: 2, // Optional: border thickness
      },
      {
        label: "In-Organic",
        data: [30, 60, 120, 250, 150, 200, 80],
        fill: true,
        backgroundColor: "rgba(244, 114, 182, 0.2)",
        borderColor: "#f472b6",
        tension: 0.4, // Curved lines
        pointRadius: 5, // Dot size
        pointBackgroundColor: "#f472b6", // Color of the dots
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
      },
    ],
  };

  const leadsOptions = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
    },
  };

  const leadStatusData = {
    labels: ["Verified", "Nurture", "Closed", "Lost"],
    datasets: [
      {
        data: [60, 15, 25, 10],
        backgroundColor: ["#3b82f6", "#fbbf24", "#22c55e", "#ef4444"],
      },
    ],
  };
  const leadStatusOptions = {
    cutout: "70%",
  };

  return (
    <div className="h-screen flex flex-col p-2">
      <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <h1 className="text-lg font-bold">Dashboard</h1>
        {/* <button onClick={handleSignOut}>Welcome, {admin?.firstName}</button> */}
      </header>

      <main className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {metrics.map((metric, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded p-4">
              <p className="text-2xl text-black dark:text-white mb-4">
                <span
                  className={`inline-flex items-center justify-center rounded-md mr-4 p-1 h-10 w-10 ${
                    metric.positive
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {metric.positive ? (
                    <ArrowUpRight size={28} />
                  ) : (
                    <ArrowDownRight size={28} />
                  )}
                </span>
                <span className="font-extrabold text-2xl">{metric.value}</span>{" "}
                <span className="text-sm text-gray-500">{metric.title}</span>
              </p>

              <p>
                <span
                  className={
                    metric.positive ? "text-green-500" : "text-red-500"
                  }
                >
                  {metric.change}
                </span>{" "}
                <span className="text-black dark:text-white text-sm">
                  {metric.positive ? "more" : "less"} than last quarter
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded">
            <h3 className="mb-2 font-semibold">Sales Distribution</h3>
            <Pie data={salesData} options={salesOptions} />
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded col-span-2">
            <h3 className="mb-2 font-semibold">Website Traffic</h3>
            <div className="h-80 mt-10">
              {/* Optional: control chart height */}
              <Line data={websiteTraffic} options={websiteOptions} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded">
            <h3 className="mb-2 font-semibold" mb-5>
              Leads
            </h3>
            <Line data={leadsData} options={leadsOptions} />
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded">
            <h3 className="mb-2 font-semibold">Lead Status</h3>
            <div style={{ width: "350px", height: "350px" }}>
              <Doughnut
                data={leadStatusData}
                options={{
                  cutout: "50%",
                  plugins: {
                    legend: {
                      position: "bottom",
                      labels: {
                        usePointStyle: true,
                        pointStyle: "circle",
                        padding: 20,
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </main>

      <ActivityLoader loading={isLoading} />
    </div>
  );
}

export default Dashboard;
