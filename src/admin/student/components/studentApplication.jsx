/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import { Plus } from "lucide-react";
import { useState } from "react";
import StudentApplicationCard from "./studentApplicationCard";
// import StartApplicationModal from "../modals/startApplicationModal";
import { tabColors } from "../data";
import { useSelector } from "react-redux";
import { COLORS } from "../../../constants/colors";

const StudentApplication = ({
  onOpen,
  selectedApplication,
  setSelectedApplication,
  onOpenUpdate,
  onOpenDocUpdate,
  onOpenStatusModal,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const studentProfile = useSelector(
    (state) => state?.students?.selectedStudent
  );

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const formatStudentApplications = (applications = []) => {
    const statusOrder = [
      { key: "to_start", title: "To Start" },
      { key: "verifying_documents", title: "Verifying Documents" },
      { key: "application_filled", title: "Application Filled" },
      { key: "awaiting_response", title: "Awaiting Response" },
      { key: "rejected", title: "Rejected" },
      { key: "offer_letter_received", title: "Offer Letter Received" },
    ];

    const groupedData = statusOrder.reduce((acc, { key }) => {
      acc[key] = [];
      return acc;
    }, {});

    const safeApplications = Array.isArray(applications) ? applications : [];
    safeApplications.forEach((item) => {
      if (groupedData.hasOwnProperty(item.status)) {
        groupedData[item.status].push(item);
      }
    });

    return statusOrder.map(({ key, title }) => ({
      status: key,
      title,
      data: groupedData[key] || [],
    }));
  };

  const studentApplication = formatStudentApplications(
    studentProfile?.applications || []
  );

  console.log(studentApplication);

  return (
    <>
      <div className="max-w-5.5xl my-8 p-6 bg-white rounded-lg shadow-lg">
        {/* Header with title and pencil icon button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Applications</h2>
          <button
            onClick={onOpen}
            className="flex text-sm  items-center gap-2 bg-[#FAFAFA] text-black px-3 py-1 rounded-lg hover:bg-gray-400 transition"
          >
            <Plus size={15} />
            Start a New Application
          </button>
        </div>
        <div className="flex gap-4 overflow-auto max-h-screen">
          {studentApplication.map((tab, index) => {
            return (
              <div
                className="flex-1 min-w-[300px] flex flex-col gap-4"
                key={index}
              >
                <div className="" role="">
                  <button
                    className={`inline-block py-4 w-full text-sm text-start font-semibold border-b-2 border-[#D4D4D8] rounded-t-lg ${activeTab === index
                      ? "text-black border-b-4 border-blue-500"
                      : "text-gray-500 hover:text-gray-600 hover:border-gray-300"
                      }`}
                    onClick={() => handleTabClick(index)}
                    role="tab"
                    aria-controls={`styled-${tab?.title
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    aria-selected={activeTab === index}
                  >
                    <span
                      className={`px-2 py-1 rounded-full ${tabColors[tab.title] || "bg-gray-300"
                        } text-${tab.title === "Rejected" ? "white" : `${COLORS.GRAY_PRIMARY}`}`}
                    >
                      {tab.title}
                    </span>
                  </button>
                </div>
                <div className="flex flex-col gap-5 w-full">
                  {tab?.data.map((item, idx) => (
                    <div key={idx} className="w-full">
                      <StudentApplicationCard
                        data={item}
                        selectedApplication={selectedApplication}
                        setSelectedApplication={setSelectedApplication}
                        onOpen={onOpenUpdate}
                        onOpenDocUpdate={onOpenDocUpdate}
                        onOpenStatusModal={onOpenStatusModal}
                        status={tab?.status}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StudentApplication;
