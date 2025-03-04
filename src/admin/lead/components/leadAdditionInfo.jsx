import { useSelector } from "react-redux";
import pencil from "../../../assets/pencil.png";

const LeadAdditionInfo = () => {
  const leadProfile = useSelector((state) => state?.leads?.selectedLead);
  return (
    <div className="w-full mx-auto mb-8   p-5 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold  text-[#27272A]">
          Additional Information
        </h2>
        <img src={pencil} alt="pencil-img" className="w-6 h-6" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="font-semibold   text-[#111928]">
            Highest Educational Qualification
          </label>
          <span className="text-[#6B7280]">
            {leadProfile?.user?.userDetail?.highestEducation || "--"}
          </span>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold   text-[#111928]">
            Preferred Destination
          </label>
          <span className="text-[#6B7280]">
            {leadProfile?.user?.userDetail?.preferredDestination?.countryId
              ?.name || "--"}
          </span>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-[#111928]">Applying For</label>
          <span className="text-[#6B7280]">
            {leadProfile?.user?.userDetail?.applyingFor || "--"}
          </span>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-[#111928]">Target Year</label>
          <span className="text-[#6B7280]">
            {leadProfile?.user?.userDetail?.targetYear || "--"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeadAdditionInfo;
