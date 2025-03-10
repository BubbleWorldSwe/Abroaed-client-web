/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  applyingFor,
  highestEducation,
  targetYear,
} from "../../../constants/values";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";

const UpdateStudentAdditionInfo = ({
  isOpen,
  onClose,
  onUpdate,
  leadId,
  filledData,
  userId,
}) => {
  const { allDestinations } = useSelector((state) => state.destinations);

  const [formData, setFormData] = useState(filledData);

  // console.log(filledData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.highestEducation) {
      toast.error("Please select your highest education qualification.");
      return false;
    }
    if (!formData.preferredDestination) {
      toast.error("Please select your preferred study destination.");
      return false;
    }
    if (!formData.applyingFor) {
      toast.error("Please select the application type.");
      return false;
    }
    if (!formData.targetYear) {
      toast.error("Please select the target year.");
      return false;
    }
    return true;
  };

  const handleUpdateLeadProfileInfo = () => {
    if (validateForm()) {
      console.log(formData, leadId);
      onUpdate({ userDetail: formData }, userId);

      // onUpdate({ user: { userDetail: formData } }, leadId);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-1/2 relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">
              Update Additional Information
            </h2>
            <div>
              <form className="space-y-6">
                <div className="grid font-rethink grid-cols-1 gap-4 lg:grid-cols-2 mb-5">
                  <SelectField
                    label="Highest Education Qualification"
                    name="highestEducation"
                    value={formData.highestEducation}
                    onChange={handleChange}
                    options={highestEducation.map((data) => ({
                      label: data,
                      value: data,
                    }))}
                    required
                  />
                  <SelectField
                    label="Preferred Study Destination"
                    name="preferredDestination"
                    value={formData.preferredDestination}
                    onChange={handleChange}
                    options={allDestinations.map((data) => ({
                      label: `${data?.countryId?.emoji} ${data?.countryId?.name}`,
                      value: data?._id,
                      ...data,
                    }))}
                    required
                  />
                  <SelectField
                    label="Applying For"
                    name="applyingFor"
                    value={formData.applyingFor}
                    onChange={handleChange}
                    required
                    options={applyingFor.map((data) => ({
                      label: data,
                      value: data,
                    }))}
                  />
                  <SelectField
                    label="Target Year"
                    name="targetYear"
                    value={formData.targetYear}
                    onChange={handleChange}
                    options={targetYear.map((data) => ({
                      label: data,
                      value: data,
                    }))}
                    required
                  />
                </div>
                <div className="flex justify-end space-x-4 mt-10">
                  <ModalCloseButton label="Cancel" onClick={onClose} />
                  <ModalSubmitButton
                    label="Submit"
                    onClick={handleUpdateLeadProfileInfo}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateStudentAdditionInfo;
