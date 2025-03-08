import { useSelector } from "react-redux";
import pencil from "../../../assets/pencil.png";

const LeadPersonalDetails = ({ onOpenModal }) => {
  const leadProfile = useSelector((state) => state?.leads?.selectedLead);

  return (
    <div className="w-full mx-auto mb-8 p-5 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[#27272A]">
          Personal Information
        </h2>
        <button
          onClick={onOpenModal}
          className="group relative p-3 rounded-full transition-all duration-300 bg-white hover:bg-gray-200"
        >
          <img
            src={pencil}
            alt="pencil-img"
            className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
          />
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="font-semibold tracking-tight text-[#111928]">
            Full Name
          </label>
          <span className="text-[#6B7280] tracking-tight">
            {`${leadProfile?.user?.firstName} ${leadProfile?.user?.lastName}`}
          </span>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold tracking-tight text-[#111928]">
            Phone Number
          </label>
          <span className="text-[#6B7280] tracking-tight">
            {leadProfile?.user?.mobile}
          </span>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold tracking-tight text-[#111928]">
            Email
          </label>
          <span className="text-[#6B7280] tracking-tight">
            {leadProfile?.user?.email}
          </span>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold tracking-tight text-[#111928]">
            Location
          </label>
          <span className="text-[#6B7280] tracking-tight">
            {leadProfile?.user?.address || "--"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeadPersonalDetails;
