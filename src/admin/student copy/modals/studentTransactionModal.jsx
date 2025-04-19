import { useEffect, useState } from "react";

import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { toast } from "react-toastify";
import moment from "moment";
import { paymentMode } from "../../../constants/values";

const StudentTransactionModal = ({ isOpen, onClose, onSave, studentId }) => {
  const [formData, setFormData] = useState({
    date: "",
    user: studentId,
    amount: "",
    mode: "",
    description: "",
  });

  const handleSubmit = (e) => {
    try {
      console.log(formData);
      e.preventDefault();
      if (
        !formData.date ||
        !formData.user ||
        !formData.amount ||
        !formData.mode ||
        !formData.description
      ) {
        toast.error("Please fill out all fields.");
        return;
      }

      const formattedData = {
        ...formData,
        date: moment(formData.date, "YYYY-MM-DDTHH:mm")
          .utc()
          .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
      };

      console.log(formattedData);
      onSave(formData);

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {}, [formData]);

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white w-2/5 font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 relative">
          <button
            className="absolute w-10 h-10 top-5 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-xl font-bold my-4">{"Add Transaction"}</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 mx-auto py-5 rounded-lg"
          >
            <div className="grid grid-cols-1 gap-4">
              <TextInputField
                label="Date"
                name="date"
                type="datetime-local"
                value={
                  formData?.date
                    ? moment(formData.date).format("YYYY-MM-DDTHH:mm")
                    : ""
                }
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <TextInputField
                label="Amount"
                name="amount"
                type="number"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter Amount"
              />
              <SelectField
                label="Payment Mode"
                name="mode"
                value={formData?.mode}
                onChange={handleChange}
                options={paymentMode?.map((data) => ({
                  label: data,
                  value: data,
                }))}
                required
              />
            </div>

            <TextareaInputField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter Description"
            />
            <div className="flex justify-end space-x-4 mt-5">
              <ModalCloseButton label="Cancel" onClick={onClose} />
              <ModalSubmitButton label={"Add"} onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default StudentTransactionModal;
