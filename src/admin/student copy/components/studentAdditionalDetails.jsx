/* eslint-disable react/prop-types */
import { useState } from "react";
import pencil from "../../../assets/pencil.png";
import { useSelector } from "react-redux";
import UpdateStudentAdditionInfo from "../modals/updateStudentAdditionInfoModal";

const StudentAdditionalDetails = ({ onOpenModal }) => {
  const studentProfile = useSelector(
    (state) => state?.students?.selectedStudent
  );
  const { isWriteAccess } = useSelector((state) => state.auth);

  const [openModal, setOpenModal] = useState(false);
  const handleCloseAddModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <UpdateStudentAdditionInfo
        isOpen={openModal}
        onClose={handleCloseAddModal}
      />
      <div className="w-full mx-auto mb-5 p-5 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-2xl font-bold  text-gray-primary`}>
            Additional Information
          </h2>
          {isWriteAccess && (
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
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-semibold   text-[#111928]">
              Highest Educational Qualification
            </label>
            <span className="text-[#6B7280]">
              {studentProfile?.user?.userDetail?.highestEducation || "--"}
            </span>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold   text-[#111928]">
              Preferred Destination
            </label>
            <span className="text-[#6B7280]">
              {studentProfile?.user?.userDetail?.preferredDestination?.countryId
                ?.name || "--"}
            </span>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-[#111928]">Applying For</label>
            <span className="text-[#6B7280]">
              {studentProfile?.user?.userDetail?.applyingFor || "--"}
            </span>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-[#111928]">Target Year</label>
            <span className="text-[#6B7280]">
              {studentProfile?.user?.userDetail?.targetYear || "--"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentAdditionalDetails;
