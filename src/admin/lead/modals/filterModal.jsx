/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { toast } from "react-toastify";
import moment from "moment";

const FilterModal = ({ isOpen, leadId, onClose, onUpdate, filledData }) => {
  const [formData, setFormData] = useState(
    filledData || {
      from: "",
      to: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.to || !formData.from) {
      toast.error(
        "Please fill in all fields before scheduling the appointment."
      );
      return;
    }

    const formattedData = {
      ...formData,
      from: moment(formData.from, "YYYY-MM-DDTHH:mm")
        .utc()
        .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
    };

    //console.log("Updated Data:", formattedData);

    onUpdate({ scheduleDetails: formattedData }, leadId);

    // setConfirmModalOpen(true);
    // dispatch(scheduleAppointment({ id: leadId, appointmentData }));
  };

  return isOpen ? (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white w-2/5 font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 relative">
          <button
            className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-xl font-semibold mb-7">Filter</h2>
          <form
            className="space-y-4 mt-4"
            //onSubmit={handleSubmit}
          >
            <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 mb-10">
              <TextInputField
                label="From Date*"
                name="from"
                type="date"
                // value={formData?.from}
                value={
                  formData?.from
                    ? moment(formData.from).format("YYYY-MM-DD")
                    : ""
                }
                onChange={handleChange}
                required
              />

              <TextInputField
                label="To Date*"
                name="to"
                type="date"
                value={
                  formData?.to ? moment(formData.t0).format("YYYY-MM-DD") : ""
                }
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-end space-x-2">
              <ModalCloseButton label="Close" onClick={onClose} />

              {/* <ModalDeleteButton
                label=" Cancel Appointment"
                onClick={onClose}
              /> */}
              <ModalSubmitButton type="submit" label="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  ) : null;
};

export default FilterModal;
