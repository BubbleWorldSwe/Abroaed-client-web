/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { scheduleAppointment } from "../../../slices/leadSlice";
import ConfirmModal from "../../../commons/modal/confirmModal";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { appointmentType, highestEducation } from "../../../constants/values";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { ModalDeleteButton } from "../../../commons/components/buttons/modalDeleteButton";

const statusList = [
  { label: "Nurture", bg: "bg-[#FDF6B2]", text: "text-[#723B13]" },
  { label: "Converted", bg: "bg-[#DEF7EC]", text: "text-[#03543F]" },
  { label: "Lost", bg: "bg-[#FDE8E8]", text: "text-[#9B1C1C]" },
];

const AppointmentModal = ({ leadId, onClose, onUpdate }) => {
  const dispatch = useDispatch();
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    appointmentType: "",
    preferredSlot: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusSelect = (status) => {
    setFormData((prev) => ({ ...prev, status }));
  };

  const handleSubmit = () => {
    if (
      !formData.appointmentType ||
      !formData.preferredSlot ||
      !formData.status
    ) {
      alert("Please fill in all fields before scheduling the appointment.");
      return;
    }
    setConfirmModalOpen(true);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
        <div className="bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-1/2 relative">
          <button
            className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-xl font-semibold mb-7">
            Schedule an Appointment
          </h2>
          <div className="space-y-4 mt-4">
            <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 mb-10">
              <SelectField
                label="Appointment Type"
                name="highestEducation"
                value={formData.appointmentType}
                onChange={handleChange}
                options={appointmentType.map((data) => ({
                  label: data,
                  value: data,
                }))}
                required
              />
              <TextInputField
                label="Preferred Slot"
                name="preferredSlot"
                type="datetime-local"
                value={formData?.preferredSlot}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex space-x-2 mb-4">
              {statusList.map(({ label, bg, text }) => (
                <span
                  key={label}
                  className={`text-sm rounded-md px-3 py-1 cursor-pointer ${bg} ${text} ${
                    formData.status === label ? "font-bold" : ""
                  }`}
                  onClick={() => handleStatusSelect(label)}
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="flex justify-end space-x-2">
              <ModalCloseButton label="Reset" onClick={onClose} />
              <ModalDeleteButton label="Cancel Appointment" onClick={onClose} />
              <ModalSubmitButton label="Schedule" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <ConfirmModal
        isOpen={confirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        text="Appointment Scheduled"
      />
    </>
  );
};

export default AppointmentModal;
