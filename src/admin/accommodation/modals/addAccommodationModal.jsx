/* eslint-disable react/prop-types */

import { useState } from "react";

import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import SearchDropdownField from "../../../commons/components/inputFields/searchDropdownFields";
import { useSelector } from "react-redux";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { toast } from "react-toastify";
import { CurrencyInputField } from "../../../commons/components/inputFields/currencyInputField";

const AddAccommodationModal = ({
  isOpen,
  onClose,
  setIsDone,
  onAddAccommodation,
  fetchCountries,
}) => {
  const [formData, setFormData] = useState({});
  const { countries } = useSelector((state) => state.countries);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDone(true);
    onClose();
  };

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [statesList, setStatesList] = useState([]); // Stores states of selected country

  const handleCountrySelect = (data) => {
    console.log(data);
    setSelectedCountry(data);
    setFormData({
      ...formData,
      countryId: data.value,
      currency: data.currency,
    });
    setStatesList(data.states || []); // Extract states from selected country
  };

  console.log(formData);
  const handleChange = (e) => {
    console.log(e.target.name);
    console.log("e.target.name");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddAccommodation = () => {
    const {
      accomodationName,
      availablity,
      city,
      countryId,
      stateId,
      price,
      description,
    } = formData;

    if (
      !accomodationName ||
      !availablity ||
      !city ||
      !countryId ||
      !stateId ||
      !price ||
      !description
    ) {
      toast.error("Please fill out all fields.");
      return;
    }
    onAddAccommodation(formData);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed  font-rethink inset-0 bg-black bg-opacity-50 z-30 flex justify-center items-center">
          <div className="bg-white relative p-5 rounded-lg shadow-lg w-full max-w-xl py-7">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold px-4 mb-3">Add Accommodation</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 p-4">
              <TextInputField
                label="Accommodation Name"
                name="accomodationName"
                type="text"
                value={formData?.accomodationName}
                onChange={handleChange}
                placeholder={"Enter Accommodation Name"}
              />
              {/* Country Selection */}
              {/* <SearchDropdownField
                label="Select Country"
                options={countries.map((data) => ({
                  label: `${data.emoji} ${data.name}`,
                  value: data._id,
                  ...data,
                }))}
                value={selectedCountry}
                onSelect={handleCountrySelect}
                onSearch={fetchCountries}
              /> */}

              <SelectField
                label="Location"
                name="stateId"
                value={formData.stateId}
                onChange={handleChange}
                options={statesList.map((data) => ({
                  label: data?.name,
                  value: data?._id,
                }))}
                required
              />

              {/*  <TextInputField
                label="Currency"
                name="currency"
                value={formData?.currency}
                disabled
                placeholder={"Enter Currency"}
              /> */}

              {/* <TextInputField
                label="City"
                name="city"
                value={formData?.city}
                onChange={handleChange}
                placeholder={"Enter City"}
              /> */}

              <CurrencyInputField
                label="Price"
                name="price"
                type="number"
                value={formData?.price}
                onChange={handleChange}
                placeholder={"Enter Price"}
                currency={formData?.currency}
              />

              <TextInputField
                label="Availability"
                name="availablity"
                value={formData?.availablity}
                onChange={handleChange}
                placeholder={"Enter Availability"}
              />

              <div className="lg:col-span-2 mt-3">
                <TextareaInputField
                  label="Description"
                  name="description"
                  value={formData?.description}
                  onChange={handleChange}
                  placeholder={"Enter Description"}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-10">
              <ModalCloseButton label="Cancel" onClick={onClose} />
              <ModalSubmitButton label="Add" onClick={handleAddAccommodation} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddAccommodationModal;
