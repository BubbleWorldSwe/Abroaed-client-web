/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { useSelector } from "react-redux";
import {
  applyingFor,
  highestEducation,
  leadSources,
  targetYear,
} from "../../../constants/values";
import { toast } from "react-toastify";

const AddLeadModal = ({ isOpen, onClose, onAddLead }) => {
  const { success } = useSelector((state) => state.leads);
  const { allDestinations } = useSelector((state) => state.destinations);

  const [leadSource, setLeadSource] = useState(null);

  const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    mobile: "",
    userDetail: {
      highestEducation: "",
      preferredDestination: "",
      applyingFor: "",
      targetYear: "",
    },
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      if (name in prevData) {
        // Update top-level fields
        return { ...prevData, [name]: value };
      } else {
        // Update nested userDetail fields
        return {
          ...prevData,
          userDetail: {
            ...prevData.userDetail,
            [name]: value,
          },
        };
      }
    });
  };

  const handleAddLead = async () => {
    try {
      const { email, firstName, lastName, mobile, userDetail } = formData;
      const {
        highestEducation,
        preferredDestination,
        applyingFor,
        targetYear,
      } = userDetail;

      if (
        !firstName ||
        !lastName ||
        !email ||
        !mobile ||
        !highestEducation ||
        !preferredDestination ||
        !applyingFor ||
        !targetYear
      ) {
        toast.error("Please fill out all fields.");
        return;
      }

      if (!leadSource) {
        toast.error("Please Select Lead Source.");
        return;
      }

      console.log("Lead Data:", formData);
      onAddLead({
        user: { ...formData, email: email.toLowerCase() },
        source: leadSource,
        entity: "Panel",
        // alertMsg: "Lead Addes Sucessfully",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (success) {
      setFormData(initialState);
    }
  }, [success]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white w-2/5 font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Add Lead</h2>

            <div>
              <form className="space-y-6" onSubmit={handleAddLead}>
                <div className="grid font-rethink grid-cols-1 gap-4 lg:grid-cols-2">
                  {/* First Name */}
                  <TextInputField
                    label="First Name*"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    required
                  />

                  {/* Last Name */}

                  <TextInputField
                    label="Last Name*"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter Last name"
                    required
                  />

                  {/* Email */}
                  <TextInputField
                    label="Email*"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    required
                  />

                  {/* Contact Number */}
                  <TextInputField
                    label="Mobile Number*"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    required
                    maxLength={10}
                  />

                  {/* Highest Education Qualification (Dropdown) */}
                  <SelectField
                    label="Highest Education Qualification*"
                    name="highestEducation"
                    value={formData?.userDetail?.highestEducation}
                    onChange={handleChange}
                    options={highestEducation?.map((data) => ({
                      label: data,
                      value: data,
                    }))}
                    required
                  />
                  {/* Preferred Study Destination (Dropdown) */}
                  <SelectField
                    label="Preferred Study Destination*"
                    name="preferredDestination"
                    value={formData?.userDetail?.preferredDestination}
                    onChange={handleChange}
                    options={allDestinations.map((data) => ({
                      label: `${data?.countryId?.emoji} ${data?.countryId?.name}`,
                      value: data?._id,
                      ...data,
                    }))}
                    required
                  />

                  {/* Applying For (Dropdown) */}
                  <SelectField
                    label="Applying For*"
                    name="applyingFor"
                    value={formData?.userDetail?.applyingFor}
                    onChange={handleChange}
                    required
                    options={applyingFor.map((data) => ({
                      label: data,
                      value: data,
                    }))}
                  />

                  {/* Target Year (Dropdown) */}
                  <SelectField
                    label="Target Year*"
                    name="targetYear"
                    value={formData?.userDetail?.targetYear}
                    onChange={handleChange}
                    options={targetYear.map((data) => ({
                      label: data,
                      value: data,
                    }))}
                    required
                  />
                </div>
                {/* Highest Education Qualification (Dropdown) */}
                <SelectField
                  label="Lead Source*"
                  name="source"
                  value={leadSource}
                  onChange={(e) => setLeadSource(e.target.value)}
                  options={leadSources?.map((data) => ({
                    label: data,
                    value: data,
                  }))}
                  required
                />
                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 mt-10">
                  <ModalCloseButton label="Cancel" onClick={onClose} />
                  <ModalSubmitButton type="submit" label="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddLeadModal;
