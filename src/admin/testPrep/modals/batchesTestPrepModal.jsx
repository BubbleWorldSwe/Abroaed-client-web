/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { testMode } from "../../../constants/values";
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";
import trash from "../../../assets/delete.png";
import { toast } from "react-toastify";

const BatchesTestPrepModal = ({ closeModal, filledData, onUpdate }) => {
  const testPrepDetails = useSelector(
    (state) => state.testPreps.selectedTestPrep
  );
  const { isWriteAccess } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState(
    filledData || {
      batchName: "",
      mode: "",
      duration: "",
      fees: "",
      features: [""],
      sold: false,
      seats: "",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.batchName.trim() ||
      !formData.seats.trim() ||
      !formData.mode.trim() ||
      !String(formData.duration).trim() ||
      !String(formData.fees).trim()
    ) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    if (formData.features.some((feature) => feature.trim() === "")) {
      toast.error("Please fill in all feature fields.");
      return;
    }

    let updatedBatches = [];

    if (filledData) {
      updatedBatches = testPrepDetails.batches.map((batch) =>
        batch._id === filledData._id ? formData : batch
      );
    } else {
      updatedBatches = [formData, ...testPrepDetails.batches];
    }

    const batchesWithoutId = updatedBatches.map(
      ({ _id, batchBrief, isSold, ...rest }) => rest
    );

    onUpdate({ batches: batchesWithoutId });
  };

  console.log(formData);

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleFeatureChange = (index, value) => {
    const updatedFeatures = formData.features.map((feature, i) =>
      i === index ? value : feature
    );
    setFormData({ ...formData, features: updatedFeatures });
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ""] });
  };

  const removeFeature = (index) => {
    const updatedFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: updatedFeatures });
  };

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

        <p className="block text-sm font-medium text-gray-700 mt-5">
          Features you’ll love
        </p>
        <div className="grid gap-2">
          {formData.features.map((feature, index) => (
            <div key={index} className="flex gap-2 items-center">
              <TextInputField
                className={"w-full"}
                name={`feature-${index}`}
                type="text"
                value={feature}
                onChange={(e) => handleFeatureChange(index, e.target.value)}
                required
                placeholder="Enter"
              />
              {index !== 0 ? (
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => removeFeature(index)}
                >
                  <img src={trash} alt="Delete Icon" className="w-5 h-5" />
                </button>
              ) : (
                <button type="button" disabled={true}>
                  <div className="w-5 h-5" />
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="col-span-full text-start mb-7 mx-2">
          <button
            type="button"
            className="mt-5 font-bold text-blue-500 py-1 rounded transition flex items-center gap-2"
            onClick={addFeature}
          >
            + Add Point
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SelectField
            label="Mode"
            name="mode"
            value={formData.mode}
            onChange={(e) => handleInputChange(e, "mode")}
            options={testMode.map((data) => ({ label: data, value: data }))}
            required
          />
          <TextInputField
            label="Seats"
            name="seats"
            type="number"
            value={formData.seats}
            onChange={(e) => handleInputChange(e, "seats")}
            required
            placeholder="Enter Seats"
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
          />
          <div className="flex items-center text-center gap-3 mt-5">
            <CheckboxField
              id="sold"
              checked={formData.sold || false}
              onChange={(e) =>
                handleInputChange(
                  { target: { value: e.target.checked } },
                  "sold"
                )
              }
            />
            <label
              htmlFor="sold"
              className="block text-sm font-medium text-gray-700"
            >
              Mark as Sold Out
            </label>
          </div>
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
