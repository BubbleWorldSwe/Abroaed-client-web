import React, { useEffect, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";
import { ArrowUpRight, Calendar, Download, User } from "lucide-react";

import { getAdminDashboard } from "../../api/api";
import ActivityLoader from "../../commons/components/loader/activityLoader";
import FilterModal from "./modals/filterModal";
import { formatDate } from "../../utils/helper";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { getAllTeams } from "../../api/teamsApi";

import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [leads, setLeads] = useState(null);
  const [application, setApplication] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterStartDate, setFilterStartDate] = useState(null);
  const [filterEndDate, setFilterEndDate] = useState(null);

  const { role } = useSelector((state) => state.auth);

  const [filterUser, setFilterUser] = useState(null);

  const [teams, setTeams] = useState([]);

  const exportDashboardToExcel = (dashboardData) => {
    const { leads, application, transactions } = dashboardData;

    // Combine all sections into a single sheet
    const combinedData = [];

    combinedData.push(["Leads"]);
    combinedData.push(["Type", "Count"]);
    combinedData.push(["Converted", leads?.Converted || 0]);
    combinedData.push(["Nurture", leads?.nurture || 0]);
    combinedData.push(["Lost", leads?.Lost || 0]);
    combinedData.push([]);

    combinedData.push(["Lead Sources"]);
    combinedData.push(["Source", "Count"]);
    Object.entries(leads?.sources || {}).forEach(([source, count]) => {
      combinedData.push([source, count]);
    });
    combinedData.push([]);

    combinedData.push(["Applications"]);
    combinedData.push(["Stage", "Count"]);
    Object.entries(application || {}).forEach(([stage, count]) => {
      combinedData.push([stage, count]);
    });
    combinedData.push([]);

    combinedData.push(["Transactions"]);
    combinedData.push(["Type", "Value"]);
    combinedData.push(["Total Amount", transactions?.totalAmount || 0]);
    combinedData.push(["Total Count", transactions?.totalCount || 0]);

    // Create worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(combinedData);

    // Auto adjust column widths
    const columnWidths = combinedData[0].map((_, colIndex) => {
      const maxLength = Math.max(
        ...combinedData.map((row) =>
          row[colIndex] ? row[colIndex].toString().length : 10
        )
      );
      return { wch: maxLength + 2 }; // +2 for padding
    });
    worksheet["!cols"] = columnWidths;

    // Create workbook and save
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Dashboard");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const data = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(data, "dashboard_data.xlsx");
  };

  const selectedUser = teams?.find((member) => member._id === filterUser);

  async function fetchFilterDashboardData(startDate, endDate, userId) {
    try {
      setIsLoading(true);
      const res = await getAdminDashboard(startDate, endDate, userId);
      if (res.status === 200) {
        setLeads(res.data?.leads);
        setApplication(res.data?.application);
        setTransactions(res.data?.transactions);
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Dashboard fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  }

  function fetchFilterData(startDate, endDate, user) {
    setFilterStartDate(startDate);
    setFilterEndDate(endDate);
    setFilterUser(user);

    fetchFilterDashboardData(startDate, endDate, user);
    // TODO: Add fetch logic if filtering impacts API call
  }

  function clearFilterData() {
    setIsLoading(true);
    setShowFilterModal(false);
    setFilterStartDate(null);
    setFilterEndDate(null);
    setFilterUser(null);

    fetchData();
  }

  const metrics = [
    {
      title: "Total Leads",
      value: leads ? leads.Converted + leads.Lost + leads.nurture : 0,
      change: "+10%",
      positive: true,
    },
    {
      title: "Onboarded Students",
      value: leads?.Converted || 0,
      change: "-10%",
      positive: false,
    },
    {
      title: "Active Applications",
      value:
        (application?.to_start || 0) +
        (application?.application_filled || 0) +
        (application?.verifying_documents || 0),
      change: "+10%",
      positive: true,
    },
  ];

  const salesData = {
    labels: ["Converted", "Nurture", "Lost"],
    datasets: [
      {
        data: [leads?.Converted, leads?.nurture, leads?.Lost],
        backgroundColor: ["#F59C0B", "#2BA4FF", "#DB4437"],
      },
    ],
  };

  const histogramData = {
    labels: ["Meta", "Google", "Website", "Paid", "Free", "Panel"],
    datasets: [
      {
        label: "Sources",
        data: [
          leads?.sources?.Meta || 0,
          leads?.sources?.Google || 0,
          leads?.sources?.Website || 0,
          leads?.sources?.Paid || 0,
          leads?.sources?.Free || 0,
          leads?.sources?.Panel || 0,
        ],
        backgroundColor: "rgba(255, 214, 54, 0.6)",
        borderRadius: 4,
      },
    ],
  };

  const applicationData = {
    labels: [
      "Shortlisting",
      "Verifying Documents",
      "STU",
      "Offer Letter Received",
      "Rejected",
    ],
    datasets: [
      {
        data: [
          application?.to_start || 0,
          application?.verifying_documents || 0,
          application?.application_filled || 0,
          application?.offer_letter_received || 0,
          application?.rejected || 0,
        ],
        backgroundColor: [
          "#F59C0B",
          "#F63E7F",
          "#2BA4FF",
          "#0F9D58",
          "#DB4437",
        ],
      },
    ],
  };

  const chartOptions = {
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

  const histogramOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded",
        },
      },
    },

    scales: {
      x: { title: { display: true } },
      y: { beginAtZero: true, title: { display: true } },
    },
  };

  async function fetchData() {
    try {
      const data = await getAllTeams();
      const res = await getAdminDashboard();

      if (data.status === 200) {
        let filteredTeams = [];

        if (role === "Backend Manager") {
          filteredTeams = data.data.result.filter(
            (user) => user.roleId?.roleName === "Backend Associate"
          );
        } else if (role === "Counsellor Manager") {
          filteredTeams = data.data.result.filter(
            (user) => user.roleId?.roleName === "Counsellor"
          );
        } else if (role === "Admin") {
          filteredTeams = data.data.result.filter(
            (user) =>
              user.roleId?.roleName === "Counsellor" ||
              user.roleId?.roleName === "Backend Associate"
          );
        }

        setTeams(filteredTeams);
      }

      if (res.status === 200) {
        setLeads(res.data?.leads);
        setApplication(res.data?.application);
        setTransactions(res.data?.transactions);
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Dashboard fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen flex flex-col p-2">
      <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => setShowFilterModal(true)}
        >
          <Calendar className="w-4 h-4" />
          <span>{formatDate(filterStartDate) || "From Date"}</span>
          <span>-</span>
          <Calendar className="w-4 h-4" />
          <span>{formatDate(filterEndDate) || "To Date"}</span>
        </div>
        {filterUser && selectedUser && (
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => setShowFilterModal(true)}
          >
            <User className="w-4 h-4" />
            <span>{`${selectedUser.firstName} ${selectedUser.lastName}`}</span>
          </div>
        )}
        <button
          className="text-white flex gap-2"
          onClick={() =>
            exportDashboardToExcel({
              leads,
              application,
              transactions,
            })
          }
        >
          <Download className="w-5 h-5" />
          Download
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded p-4">
              <div className="flex items-center gap-4">
                <span
                  className={`inline-flex items-center justify-center rounded-md p-1 h-10 w-10 bg-green-100 text-green-600`}
                >
                  <ArrowUpRight size={24} />
                </span>
                <div>
                  <h2 className="font-extrabold text-2xl dark:text-white">
                    {metric.value}
                  </h2>
                  <p className="text-sm text-gray-500">{metric.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded">
            <h3 className="mb-2 font-semibold">Leads</h3>
            <Pie data={salesData} options={chartOptions} />
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded col-span-2">
            <h3 className="mb-2 font-semibold">Lead Sources</h3>
            <div className="h-80 mt-10 ">
              <Bar data={histogramData} options={histogramOptions} />
            </div>
          </div>
        </div>

        {/* Transactions & Applications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded">
            <h3 className="mb-4 font-semibold text-lg dark:text-white">
              Transactions Summary
            </h3>
            <div className="grid gap-4">
              <div className="flex items-center justify-between bg-blue-100 dark:bg-blue-900 p-4 rounded shadow">
                <div>
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    Total Amount
                  </p>
                  <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                    ₹{transactions?.totalAmount?.toLocaleString("en-IN") || 0}
                  </h2>
                </div>
                <div className="text-blue-600 dark:text-blue-300">💰</div>
              </div>
              <div className="flex items-center justify-between bg-green-100 dark:bg-green-900 p-4 rounded shadow">
                <div>
                  <p className="text-sm text-green-800 dark:text-green-300">
                    Total Count
                  </p>
                  <h2 className="text-2xl font-bold text-green-900 dark:text-green-100">
                    {transactions?.totalCount || 0}
                  </h2>
                </div>
                <div className="text-green-600 dark:text-green-300">📦</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded">
            <h3 className="mb-4 font-semibold">Applications</h3>
            {/* <div className="flex items-center justify-center"> */}
            <div className="w-full h-96 flex items-center justify-center">
              <Pie data={applicationData} options={chartOptions} />
            </div>
          </div>
        </div>
      </main>

      {/* Loader */}
      <ActivityLoader loading={isLoading} />

      {/* Filter Modal */}
      <FilterModal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        fetchFilterData={fetchFilterData}
        clearFilterData={clearFilterData}
        teams={teams}
      />
    </div>
  );
}

export default Dashboard;
