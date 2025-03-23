/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { toast } from "react-toastify";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { planType, servicerType } from "../../../constants/values";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";

const statusList = [
  {
    label: "Nurture",
    bg: "bg-[#FDF6B2]",
    text: "text-[#723B13]",
    border: "border-[#723B13]",
  },
  {
    label: "Converted",
    bg: "bg-[#DEF7EC]",
    text: "text-[#03543F]",
    border: "border-[#03543F]",
  },
  {
    label: "Lost",
    bg: "bg-[#FDE8E8]",
    text: "text-[#9B1C1C]",
    border: "border-[#9B1C1C]",
  },
];

const UpdateLeadStatus = ({ leadId, onClose, onUpdate, filledData }) => {
  const [formData, setFormData] = useState(
    filledData || {
      servicerType: "",
      planType: "",
      billableAmount: "",
      status: "",
      remark: "",
    }
  );

  const isPlanTypeEnabled = ["ABROAED Plus", "ABROAED LOE"].includes(
    formData.servicerType
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "servicerType" && !isPlanTypeEnabled
        ? { planType: "", billableAmount: "" }
        : {}),
    }));
  };

  const handleStatusSelect = (status) => {
    setFormData({
      status,
      servicerType: "",
      planType: "",
      billableAmount: "",
      remark: "",
    });
  };

  const handleSubmit = () => {
    if (!formData.status) {
      toast.error("Please select a status.");
      return;
    }

    if (formData.status === "Converted") {
      if (!formData.servicerType) {
        toast.error("Please select a service type.");
        return;
      }
      if (
        isPlanTypeEnabled &&
        (!formData.planType || !formData.billableAmount)
      ) {
        toast.error("Please fill in all required fields.");
        return;
      }
    }

    if (formData.status === "Lost" && !formData.remark) {
      toast.error("Please provide remark for a lost lead.");
      return;
    }

    const updatedFormData = {
      ...formData,
      type: formData.status === "Converted" ? "student" : "lead",
    };

    console.log(updatedFormData);
    onUpdate(updatedFormData, leadId);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-1/2 relative">
        <button
          className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Update Lead Status</h2>

        <h5 className="block text-sm font-medium text-gray-700 mb-2">
          Update To
        </h5>
        <div className="flex space-x-3">
          {statusList.map(({ label, bg, text, border }) => (
            <span
              key={label}
              className={`text-sm rounded-md px-3 py-1 cursor-pointer border ${border} ${bg} ${text} ${formData.status?.toLowerCase() === label.toLowerCase()
                  ? "font-semibold border-1"
                  : "border-0"
                }`}
              onClick={() => handleStatusSelect(label)}
            >
              {label}
            </span>
          ))}
        </div>

        {formData.status === "Converted" && (
          <div className="mt-5">
            <SelectField
              label="Service Type"
              name="servicerType"
              value={formData.servicerType}
              onChange={handleChange}
              options={servicerType.map((data) => ({
                label: data,
                value: data,
              }))}
              required
            />
            <div className="grid mt-5 grid-cols-1 gap-4 lg:grid-cols-2">
              {isPlanTypeEnabled && (
                <>
                  <SelectField
                    label="Plan Type"
                    name="planType"
                    value={formData.planType}
                    onChange={handleChange}
                    options={planType.map((data) => ({
                      label: data,
                      value: data,
                    }))}
                    required={isPlanTypeEnabled}
                    disabled={!isPlanTypeEnabled}
                  />

                  <TextInputField
                    label="Billable Amount (INR)"
                    name="billableAmount"
                    value={formData.billableAmount}
                    onChange={handleChange}
                    required={isPlanTypeEnabled}
                    disabled={!isPlanTypeEnabled}
                  />
                </>
              )}
            </div>
          </div>
        )}

        {formData.status === "Lost" && (
          <div className="mt-5">
            <TextareaInputField
              label="Remark"
              name="remark"
              value={formData.remark}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="flex justify-end space-x-2 mt-10">
          <ModalCloseButton label="Close" onClick={onClose} />
          <ModalSubmitButton label="Update" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default UpdateLeadStatus;
