/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { appointmentType } from "../../../constants/values";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";

const UpdateAppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    appointmentType: "",
    preferredSlot: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {};

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-max relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">
              Update Schedule Appointment{" "}
            </h2>
            <div>
              <form className="space-y-6">
                <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 mb-10">
                  <SelectField
                    label="Appointment Type"
                    name="appointmentType"
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
                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 mt-10">
                  <ModalCloseButton label="Cancel" onClick={onClose} />
                  <ModalSubmitButton label="Submit" onClick={handleSubmit} />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateAppointmentModal;
