/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import { Plus } from "lucide-react";
import { useState } from "react";
import StudentApplicationCard from "./studentApplicationCard";
// import StartApplicationModal from "../modals/startApplicationModal";

import { useSelector } from "react-redux";
import { tabColors } from "../../../constants/values";
import { formatStudentApplications } from "../../../utils/helper";

const StudentApplication = ({
  onOpen,
  selectedApplication,
  setSelectedApplication,
  onOpenUpdate,
  onOpenDocUpdate,
  onOpenStatusModal,
  onOpenCommentModal,
}) => {
  const { isWriteAccess } = useSelector((state) => state.auth);

  const studentProfile = useSelector(
    (state) => state?.students?.selectedStudent
  );

  const studentApplication = formatStudentApplications(
    studentProfile?.applications || []
  );

  return (
    <>
      <div className="max-w-5.5xl my-8 p-6 bg-white rounded-lg shadow-lg">
        {/* Header with title and pencil icon button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Applications</h2>
          {isWriteAccess && (
            <button
              onClick={onOpen}
              className="flex text-sm  items-center gap-2 bg-[#FAFAFA] text-black px-3 py-1 rounded-lg hover:bg-gray-400 transition"
            >
              <Plus size={15} />
              Start a New Application
            </button>
          )}
        </div>
        <div className="flex gap-4 overflow-x-auto">
          {studentApplication.map((tab, index) => {
            return (
              <div
                className="flex-1 min-w-[250px] flex flex-col gap-4"
                key={index}
              >
                <div className="" role="">
                  <button
                    className={`inline-block py-4 w-full text-sm text-start font-semibold border-b-2 border-[#D4D4D8] rounded-t-lg`}
                    role="tab"
                  >
                    <span
                      className={`px-2 py-1 rounded-full ${
                        tabColors[tab.title] || "bg-gray-300"
                      } text-${
                        tab.title === "Rejected" ? "white" : "gray-primary"
                      }`}
                    >
                      {tab.title} ( {tab?.data.length} )
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
                        onOpenCommentModal={onOpenCommentModal}
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
