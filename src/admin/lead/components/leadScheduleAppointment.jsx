import { useSelector } from "react-redux";
import { formatDateTime } from "../../../utils/helper";
import pencil from "../../../assets/pencil.png";
import UpdateAppointmentModal from "../modals/updateAppointmentModal";
import { useState } from "react";

const LeadScheduleAppointment = () => {
  const leadProfile = useSelector((state) => state?.leads?.selectedLead);
  const [openModal, setOpenModal] = useState(false);
  const handleCloseAddModal = () => {
    setOpenModal(false);
  };
  const handleOpenAddModal = () => {
    setOpenModal(true);
  };
  return (
    <>
      <UpdateAppointmentModal
        isOpen={openModal}
        onClose={handleCloseAddModal}
      />
      <div className="w-full mx-auto my-2 p-6 bg-white rounded-lg shadow-lg">
        <div className="space-y-4 mt-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold  text-[#27272A]">
              Schedule Appointment (Already Scheduled)
            </h2>
            <button
              onClick={handleOpenAddModal}
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
                Appointment Type
              </label>
              <span className="text-[#6B7280] tracking-tight">{`${leadProfile?.scheduleDetails?.appointmentType}`}</span>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold tracking-tight text-[#111928]">
                Preferred Slot
              </label>
              <span className="text-[#6B7280] tracking-tight">{`${formatDateTime(
                leadProfile?.scheduleDetails?.preferredSlot
              )}`}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadScheduleAppointment;
