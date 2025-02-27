/* eslint-disable react/prop-types */
import { useState } from "react";
import { ModalSubmitButton } from "../../commons/components/buttons/modalSubmitButton";
import { TextareaInputField } from "../../commons/components/inputFields/textareaInputField";
import { TextInputField } from "../../commons/components/inputFields/textInputField";
import SearchDropdownField from "../../commons/components/inputFields/searchDropdownFields";

const StudentProfileEditModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({});

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
            <div className="flex items-center gap-4">
              <img
                className="w-12 object-cover h-12 rounded-full"
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg="
                alt=""
              />
              <div className=" dark:text-white">
                <div className=" text-center px-2  max-w-min text-sm  bg-[#F3F4F6]">
                  Premium{" "}
                </div>
                <div className="text-[#111928] text-xl font-bold">
                  Jese Leos
                </div>
                <div className=" text-[#6B7280] text-base dark:text-gray-400 font-semibold">
                  India
                </div>
              </div>
            </div>{" "}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 p-4">
              <TextInputField
                label="Full Name"
                name="fullName"
                type="text"
                value={formData?.name}
                // onChange={handleChange}
                placeholder={"Enter Name"}
              />
              <TextInputField
                label="Email Address"
                name="email"
                type="email"
                value={formData?.email}
                // onChange={handleChange}
                placeholder={"Enter Email"}
              />
              <TextInputField
                label="Phone Numbers"
                name="number"
                type="tel"
                value={formData?.number}
                // onChange={handleChange}
                placeholder={"Enter Number"}
              />
              <TextInputField
                label="Location"
                name="location"
                type="text"
                value={formData?.location}
                // onChange={handleChange}
                placeholder={"Enter Location"}
              />
              {/* Country Selection */}
              {/* <SearchDropdownField
                                // label="Select Country"
                            options={countries.map((data) => ({
                                label: `${data.emoji} ${data.name}`,
                                value: data._id,
                                ...data,
                            }))}
                            value={selectedCountry}
                            onSelect={handleCountrySelect}
                            onSearch={fetchCountries}
                            /> */}

              {/* <SelectField
                                label="State"
                                name="stateId"
                                value={formData.stateId}
                                onChange={handleChange}
                                options={statesList.map((data) => ({
                                    label: data?.name,
                                    value: data?._id,
                                }))}
                                required
                            /> */}

              {/*  <TextInputField
                label="Currency"
                name="currency"
                value={formData?.currency}
                disabled
                placeholder={"Enter Currency"}
              /> */}

              <TextInputField
                label="Language"
                name="language"
                value={formData?.language}
                // onChange={handleChange}
                placeholder={"Select Languages"}
              />

              <TextInputField
                label="Highest Educational Qualification"
                name="qualification"
                value={formData?.availablity}
                // onChange={handleChange}
                placeholder={"Enter Qualification"}
              />
            </div>
            <div className="flex justify-end space-x-4 mt-10">
              {/* <ModalCloseButton label="Cancel" onClick={onClose} /> */}
              <ModalSubmitButton label="Save" onClick={""} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentProfileEditModal;
