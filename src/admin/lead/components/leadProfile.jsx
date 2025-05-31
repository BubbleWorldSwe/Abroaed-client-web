import { Trash2 } from "lucide-react";
import { useSelector } from "react-redux";
import { IMAGES } from "../../../constants/images";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";
import { useState } from "react";

const LeadProfile = ({ handleDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const leadProfile = useSelector((state) => state?.leads?.selectedLead);
  const { isWriteAccess } = useSelector((state) => state.auth);
  return (
    <>
      <div className="flex justify-between ">
        <div className="flex items-center gap-4">
          <img
            className="w-16 object-cover h-16 rounded-full bg-slate-300 border-2 ml-3"
            src={IMAGES.user}
          />
          <div className=" dark:text-white">
            <div
              className={`text-center px-2 max-w-min text-sm rounded
    ${
      leadProfile?.status?.toLowerCase() === "nurture"
        ? "bg-[#FDF6B2] text-[#723B13]"
        : leadProfile?.status?.toLowerCase() === "converted"
        ? "bg-[#DEF7EC] text-[#03543F]"
        : leadProfile?.status?.toLowerCase() === "lost"
        ? "bg-[#FDE8E8] text-[#9B1C1C]"
        : "bg-[#F3F4F6] text-black"
    }`}
            >
              {leadProfile?.status}
            </div>

            <div className="text-[#111928] text-3xl font-bold">{`${leadProfile?.user?.firstName} ${leadProfile?.user?.lastName}`}</div>
            <div className=" text-[#6B7280] text-xl dark:text-gray-400">
              {leadProfile?.user?.address}
            </div>
          </div>
        </div>
        {/* {isWriteAccess && (
          <div className="my-auto ">
            <button
              onClick={() => {
                setIsModalOpen(!isModalOpen);
              }}
              className="flex items-center gap-2 bg-[#C80E41] text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none"
            >
              <Trash2 className="w-4 h-4" />
              <span>Delete</span>
            </button>
          </div>
        )} */}
      </div>
      {leadProfile?.status?.toLowerCase() === "lost" && (
        <div className="px-4 text-[#9B1C1C] rounded text-md font-semibold">
          Remark: {leadProfile?.remark}
        </div>
      )}
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading={`Delete : ${leadProfile?.user?.firstName} ${leadProfile?.user?.lastName}`}
        onDelete={() => {
          handleDelete();
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default LeadProfile;
