import { useSelector } from "react-redux";
import StudentApplicationsList from "../components/studentApplicationsList";
import { formatStudentApplications } from "../../utils/helper";

const StudentApplications = () => {
  const { applications } = useSelector((state) => state?.studentProfile);

  const studentApplications = formatStudentApplications(applications || []);

  console.log(studentApplications);

  function getDataLengthByStatus(targetStatus) {
    const item = studentApplications.find((s) => s.status === targetStatus);
    return item ? item.data?.length || 0 : 0;
  }

  return (
    <div className="w-full bg-[#fff] font-rethink min-h-[90vh] px-5 py-10  scroll-smooth">
      <h2 className="text-2xl font-semibold mb-5">Applications</h2>

      <div className="grid mb-8 grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="flex flex-col shadow-lg rounded-lg p-3 px-5">
          <label className="font-bold text-4xl text-[#EDBD05]">
            {getDataLengthByStatus("to_start")}
          </label>
          <span className="text-xl font-semibold">Applied</span>
        </div>
        <div className="flex flex-col shadow-lg rounded-lg p-3 px-5">
          <label className="font-bold text-4xl text-[#EDBD05]">
            {getDataLengthByStatus("verifying_documents")}
          </label>
          <span className="text-xl font-semibold">In-Progress</span>
        </div>
        <div className="flex flex-col shadow-lg rounded-lg p-3 px-5">
          <label className="font-bold text-4xl text-[#EDBD05]">
            {getDataLengthByStatus("offer_letter_received")}
          </label>
          <span className="text-xl font-semibold">Offer Received</span>
        </div>
      </div>
      {/* university details */}

      <div className="p-6 rounded-xl shadow-md">
        <div className="flex  gap-4 overflow-auto max-h-screen lg:max-w-[79vw] ">
          <StudentApplicationsList studentApplication={studentApplications} />
        </div>
      </div>
    </div>
  );
};

export default StudentApplications;
