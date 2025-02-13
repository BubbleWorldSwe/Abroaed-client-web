/* eslint-disable react/prop-types */

import { useState } from "react";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { useSelector } from "react-redux";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { toast } from "react-toastify";

function AddCollegeModal({
  isOpen,
  onClose,
  onAddCollege,
  destinationsList,
  getStatesList,
  statesList,
}) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddCollege = () => {
    const { name, destinationId, stateId, city, address, entityType, website } =
      formData;

    if (
      !name ||
      !destinationId ||
      !stateId ||
      !city ||
      !address ||
      !entityType ||
      !website
    ) {
      toast.error("Please fill out all fields.");
      return;
    }

    console.log(formData);
    onAddCollege(formData);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed font-rethink inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div
            id="addCollegeDrawer"
            className="bg-white py-4 dark:bg-gray-800 p-6 rounded-lg  min-w-max w-1/3 max-h-[600px] overflow-auto  relative"
            tabIndex="-1"
            aria-labelledby="addCollegeDrawer-label"
          >
            <h5
              id="addCollegeDrawer-label"
              className="text-xl font-semibold mb-4"
            >
              Add New College
            </h5>
            <button
              type="button"
              onClick={onClose}
              className="absolute right-2.5 top-2.5 p-1.5 text-sm text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <form className="flex flex-col gap-4 bg-white  w-full ">
              {/* College Name */}
              <TextInputField
                label="College Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange(e, "name")}
                placeholder="Enter College Name"
                required
              />

              {/* Entity Type */}
              <TextInputField
                label="Entity Type"
                name="entityType"
                type="text"
                value={formData.entityType}
                onChange={(e) => handleInputChange(e, "entityType")}
                placeholder="Enter Entity Type"
                required
              />

              {/* Website */}
              <TextInputField
                label="Website"
                name="website"
                type="text"
                value={formData.website}
                onChange={(e) => handleInputChange(e, "website")}
                placeholder="Enter Website URL"
                required
              />

              {/* Country */}

              <SelectField
                label="Country"
                name="destinationId"
                value={formData.destinationId}
                onChange={(e) => {
                  handleInputChange(e, "destinationId");

                  const selectedCountry = destinationsList.find(
                    (data) => data?._id === e.target.value
                  );

                  console.log(
                    "Selected Country Object:",
                    selectedCountry._id,
                    selectedCountry?.countryId?._id
                  );

                  getStatesList(selectedCountry?.countryId?._id);
                }}
                options={destinationsList.map((data) => ({
                  label: `${data?.countryId?.emoji} ${data?.countryId?.name}`,
                  value: data?._id,
                  ...data,
                }))}
                required
              />

              {/* State */}

              <SelectField
                label="State"
                name="stateId"
                value={formData.stateId}
                onChange={(e) => handleInputChange(e, "stateId")}
                options={statesList.map((data) => ({
                  label: data?.name,
                  value: data?._id,
                }))}
                required
              />

              {/* City */}
              <TextInputField
                label="City"
                name="city"
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange(e, "city")}
                placeholder="Enter State"
                required
              />

              {/* Address */}

              <TextareaInputField
                label="Address"
                name="address"
                type="text"
                value={formData.Address}
                onChange={(e) => handleInputChange(e, "address")}
                placeholder="Enter Address"
                required
              />

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 mt-10">
                <ModalCloseButton label="Cancel" onClick={onClose} />
                <ModalSubmitButton label="Add" onClick={handleAddCollege} />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddCollegeModal;
