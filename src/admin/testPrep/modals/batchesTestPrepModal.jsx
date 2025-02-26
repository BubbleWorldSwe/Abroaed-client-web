/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
// import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
// import { CurrencyInputField } from "../../../commons/components/inputFields/currencyInputField";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { toast } from "react-toastify";
import { testMode } from "../../../constants/values";
import { Plus } from "lucide-react";

const BatchesTestPrepModal = ({ closeModal, filledData, onUpdate }) => {
  const [formData, setFormData] = useState(
    filledData || {
      batchName: "",
      batchBrief: "",
      mode: "",
      isSold: false,
      duration: "",
      fees: "",
    }
  );

  const testPrepDetails = useSelector(
    (state) => state.testPreps.selectedTestPrep
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.batchName.trim() ||
      !formData.batchBrief.trim() ||
      !formData.mode.trim() ||
      !String(formData.duration).trim() ||
      !String(formData.fees).trim()
    ) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    let updatedBatches = [];

    if (filledData) {
      updatedBatches = testPrepDetails.batches.map((batches) =>
        batches._id === filledData._id ? formData : batches
      );
    } else {
      const newBatches = { ...formData };
      updatedBatches = [newBatches, ...testPrepDetails.batches];
    }

    const batchesWithoutId = updatedBatches?.map(({ _id, ...rest }) => rest);
    console.log(batchesWithoutId);

    onUpdate({ batches: batchesWithoutId });
  };

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  console.log(formData);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInputField
          label="Batch Name"
          name="batchName"
          type="text"
          value={formData.batchName}
          onChange={(e) => handleInputChange(e, "batchName")}
          required
          placeholder="Enter Batch Name"
        />
        <div className="my-3">
          <p className="text-sm mb-1 font-semibold text-gray-700">Features you’ll love</p>
          <div className="flex flex-col gap-1">
            {
              [1, 2, 3].map((item, index) => (
                <p key={index} className="py-1 px-2 bg-[#F4F4F5] text-gray-500">
                  Lorem ipsum dolor sit amet
                </p>
              ))
            }
          </div>
          <div>
            <button className="text-blue-500 mt-1 font-semibold flex gap-1 text-sm justify-between text-center">
              <Plus className="w-4 h-4" /> Add Point
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
          <SelectField
            label="Mode"
            name="mode"
            value={formData.mode}
            onChange={(e) => handleInputChange(e, "mode")}
            options={testMode.map((data) => ({
              label: data,
              value: data,
            }))}
            required
          />
          <TextInputField
            label="Duration (Months)"
            name="duration"
            type="number"
            value={formData.duration}
            onChange={(e) => handleInputChange(e, "duration")}
            required
            placeholder="Enter Duration"
          />
          <TextInputField
            label="Fees (in ₹)"
            name="fees"
            type="number"
            value={formData.fees}
            onChange={(e) => handleInputChange(e, "fees")}
            required
            placeholder="Enter Fees"
            currency={"INR"}
          />
        </div>
        <div className="flex items-center text-center gap-3 mt-5">
          <CheckboxField
            id="isSold"
            checked={formData.isSold || false}
            onChange={(e) =>
              handleInputChange(
                { target: { value: e.target.checked } },
                "isSold"
              )
            }
          />

          <label
            htmlFor="isSold"
            className="block text-sm font-medium text-gray-700"
          >
            Mark as Sold Out
          </label>
        </div>
        <div className="text-end mt-10">
          <ModalCloseButton label={"Cancel"} onClick={closeModal} />
          <ModalSubmitButton label={"Save"} onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default BatchesTestPrepModal;
