import { Plus } from "lucide-react";
import { useState } from "react";
import StudentApplicationCard from "./studentApplicationCard";
import StartApplicationModal from "../modals/startApplicationModal";
import { tabColors, tabsData } from "../data";

const StudentApplication = ({
  collegesList,
  getCollegesList,
  leadId,
  addApplication,
  isOpen,
  onClose,
  onOpen,
  studentApplication,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <StartApplicationModal
        isOpen={isOpen}
        onClose={onClose}
        collegesList={collegesList}
        getCollegesList={getCollegesList}
        leadId={leadId}
        addApplication={addApplication}
      />
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
        <div>
          <div className="flex  gap-4 overflow-auto max-h-screen">
            {tabsData.map((tab, index) => {
              return (
                <>
                  <div className="flex flex-col gap-4" key={index}>
                    <div className="" role="">
                      <button
                        className={`inline-block py-4 w-full text-sm text-start font-semibold border-b-2 border-[#D4D4D8] rounded-t-lg ${
                          activeTab === index
                            ? "text-black  border-b-4 border-blue-500"
                            : "text-gray-500 dark:text-gray-400 font-semibold hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        }`}
                        onClick={() => handleTabClick(index)}
                        role="tab"
                        aria-controls={`styled-${tab?.tabName
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        aria-selected={activeTab === index}
                      >
                        <span
                          className={`px-2 py-1 rounded-full ${
                            tabColors[tab.tabName] || "bg-gray-300"
                          } text-${
                            tab.tabName === "Rejected" ? "white" : "#27272A"
                          }`}
                        >
                          {tab.tabName}
                        </span>
                      </button>
                    </div>
                    <div className="flex flex-col gap-5">
                      {tab.cardDetails.map((card, idx) => (
                        <StudentApplicationCard key={idx} />
                      ))}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentApplication;
