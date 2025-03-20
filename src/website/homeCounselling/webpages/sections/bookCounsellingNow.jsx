import { useNavigate } from "react-router-dom";
import { BorderSelectField } from "../../../../commons/components/inputFields/borderSelectField";
import { BorderTextInputField } from "../../../../commons/components/inputFields/borderTextInputField";
import { useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  applyingFor,
  highestEducation,
  targetYear,
} from "../../../../constants/values";

const BookCounsellingNow = ({ source, entity, onFormSubmit }) => {
  const navigate = useNavigate();
  const { allDestinations } = useSelector((state) => state.destinations);
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

    console.log("Lead Data:", formData);
    onFormSubmit({ user: formData, source: source, entity: entity });
  };

  return (
    <section className=" dark:bg-gray-900 relative px-10 mx-auto h-full">
      <div className="py-16 px-4 mx-auto max-w-screen-2xl   z-10">
        {/* <div className="grid grid-cols-1  lg:grid-cols-2 gap-28 mx-auto  "> */}
        <h2 className="mb-4 text-[45px] text-center  font-extrabold text-[#27272A] dark:text-white">
          Book Counselling Now
        </h2>
        <div className="flex justify-center text-center">
          <form onSubmit={handleAddLead}>
            <div className="px-10 max-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-start">
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
                    label={"Mode of Counselling"}
                    options={[
                      { value: "1", label: "Home Counselling" },
                      { value: "2", label: "Virtual Counselling" },
                      { value: "3", label: "Visit Us" },
                      { value: "4", label: "Others" },
                    ]}
                    required
                  />
                  {/*  <BorderSelectField
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
                /> */}
                </div>
              </div>
              <div className="flex items-start mt-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
                <label className="ml-2 text-sm font-light text-gray-500 dark:text-gray-400">
                  I agree to Abroaed{" "}
                  <span className="font-bold">Terms of Service</span> and{" "}
                  <span className="font-bold">Privacy Policy</span>.
                </label>
              </div>
              <div className="flex items-start mt-4 text-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
                <label className="ml-2 text-sm font-light text-gray-500 dark:text-gray-400 text-start">
                  I agree to Abroaed Terms and privacy policy. Please contact me
                  by phone, email, or SMS to assist with my enquiry.
                  <br />I would like to receive updates and offers from Abroaed.
                </label>
              </div>
              <div className="py-6">
                <button
                  onSubmit={handleAddLead}
                  type="submit"
                  className="py-2  px-7 text-base font-semibold  mt-4 text-center text-[#432205] rounded-lg bg-[#FDDA24] hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
                >
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default BookCounsellingNow;
