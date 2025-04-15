/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BorderTextInputField } from "../../../commons/components/inputFields/borderTextInputField";
import { BorderSelectField } from "../../../commons/components/inputFields/borderSelectField";
import { applyingFor, highestEducation, targetYear } from "../data";
import { useSelector } from "react-redux";

const FeatureLOEModal = ({ isOpen, onClose, onFormSubmit, source, entity, title }) => {
  const [formData, setFormData] = useState({
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
  });

  const { error } = useSelector((state) => state.leads);

  const { allDestinations } = useSelector((state) => state.destinations);

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

  const handleAddLead = (e) => {
    e.preventDefault();
    const { email, firstName, lastName, mobile, userDetail } = formData;
    const { highestEducation, preferredDestination, applyingFor, targetYear } =
      userDetail;

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

    onFormSubmit({ user: formData, source: source, entity: entity });
    onClose();
  };

  useEffect(() => {
    if (!error) {
      setFormData({
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
      });
    }
  }, [error]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center px-6 mx-auto  justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white max-h-[85vh] py-10  font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 md:w-full max-w-3xl overflow-y-auto  md:overflow-y-hidden z-50 relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">
              Explore more about {title === "ABROAED" ? `ABROAED+` : title}
            </h2>

            <form className="space-y-6" onSubmit={handleAddLead}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <BorderTextInputField
                    label="First Name"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter"
                    required
                  />
                  <BorderTextInputField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter"
                    required
                  />
                  <BorderSelectField
                    label="Highest Education Qualification"
                    name="highestEducation"
                    value={formData.userDetail.highestEducation}
                    onChange={handleChange}
                    options={highestEducation.map((data) => ({
                      label: data,
                      value: data,
                    }))}
                    required
                  />

                  <BorderSelectField
                    label="When Do You Plan to Study?"
                    name="targetYear"
                    value={formData.userDetail.targetYear}
                    onChange={handleChange}
                    options={targetYear.map((data) => ({
                      label: data,
                      value: data,
                    }))}
                    required
                  />
                </div>
                <div>
                  <BorderTextInputField
                    label="Last Name"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter"
                    required
                  />
                  <BorderTextInputField
                    label="Mobile Number"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter"
                    required
                  />
                  <BorderSelectField
                    label="Preferred Study Level"
                    name="applyingFor"
                    value={formData.userDetail.applyingFor}
                    onChange={handleChange}
                    required
                    options={applyingFor.map((data) => ({
                      label: data,
                      value: data,
                    }))}
                  />

                  <BorderSelectField
                    label="Preferred Study Destination"
                    name="preferredDestination"
                    value={formData.userDetail.preferredDestination}
                    onChange={handleChange}
                    options={allDestinations.map((data) => ({
                      label: `${data?.countryId?.emoji} ${data?.countryId?.name}`,
                      value: data?._id,
                      ...data,
                    }))}
                    required
                  />

                  {/*   <BorderSelectField
                        label={"Mode of Counselling"}
                        options={[
                          { value: "1", label: "Home Counselling" },
                          { value: "2", label: "Virtual Counselling" },
                          { value: "3", label: "Visit Us" },
                          { value: "4", label: "Others" },
                        ]}
                        required
                      /> */}
                </div>
              </div>

              <>
                <div className="flex items-start mt-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                  <label className="ml-2 text-sm font-light text-gray-500 dark:text-gray-400">
                    I agree to ABROAED{" "}
                    <span className="font-bold">Terms of Service</span> and{" "}
                    <span className="font-bold">Privacy Policy</span>.
                  </label>
                </div>
                <div className="flex items-start mt-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                  <label className="ml-2 text-sm font-light text-gray-500 dark:text-gray-400">
                    I agree to ABROAED Terms and privacy policy. Please contact
                    me by phone, email, or SMS to assist with my enquiry. I
                    would like to receive updates and offers from ABROAED.
                  </label>
                </div>
              </>
              <div className="flex justify-center">
                <button
                  onSubmit={handleAddLead}
                  type="submit"
                  className={`py-3   px-10 text-base font-semibold  text-center text-[#432205] rounded-lg bg-yellow-primary hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500`}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div >
      )}
    </>
  );
};

export default FeatureLOEModal;
