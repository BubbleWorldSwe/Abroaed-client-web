import { useSelector } from "react-redux";
import { tabColors } from "../../constants/values";
import StudentApplicationCard from "./studentApplicationCard";

const StudentApplicationsList = ({ studentApplication = [] }) => {
  return (
    <div className="flex gap-4 overflow-auto max-h-screen">
      {studentApplication.map((tab, index) => {
        return (
          <div className="flex-1 min-w-[300px] flex flex-col gap-4" key={index}>
            <div className="" role="">
              <button
                className={`inline-block py-4 w-full text-sm text-start font-semibold border-b-2 border-[#D4D4D8] rounded-t-lg`}
                //   onClick={() => handleTabClick(index)}
                role="tab"
              >
                <span
                  className={`px-2 py-1 rounded-full ${
                    tabColors[tab.title] || "bg-gray-300"
                  } text-${
                    tab.title === "Rejected" ? "white" : "gray-primary"
                  }`}
                >
                  {tab.title} ({tab?.data.length})
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-5 w-full">
              {tab?.data.map((item, idx) => (
                <div key={idx} className="w-full">
                  <StudentApplicationCard data={item} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StudentApplicationsList;
