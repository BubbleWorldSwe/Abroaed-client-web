/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import pencil from "../../../assets/pencil.png";
import { formatDate, formatDateTime } from "../../../utils/helper";

const StudentAvailedServices = ({ onOpenModal }) => {
  const studentProfile = useSelector(
    (state) => state?.students?.selectedStudent
  );
  const { isWriteAccess } = useSelector((state) => state.auth);
  return (
    <div className="w-full mx-auto mb-8 p-5 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-2xl font-bold text-gray-primary`}>
          Availed Services
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="font-semibold tracking-tight text-[#111928]">
            Service
          </label>
          <span className="text-[#6B7280] tracking-tight">
            {`${studentProfile?.servicerType}`}
          </span>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold tracking-tight text-[#111928]">
            Plan
          </label>
          <span className="text-[#6B7280] tracking-tight">
            {studentProfile?.planType}
          </span>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold tracking-tight text-[#111928]">
            Billable Amount
          </label>
          <span className="text-[#6B7280] tracking-tight">
            ₹{studentProfile?.billableAmount || 0}
          </span>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold tracking-tight text-[#111928]">
            Opt In
          </label>
          <span className="text-[#6B7280] tracking-tight">
            {formatDateTime(studentProfile?.updatedAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentAvailedServices;
