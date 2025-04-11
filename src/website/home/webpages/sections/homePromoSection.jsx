/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import homeQuery from "../../../../assets/homeQuery.png";
import { BorderSelectField } from "../../../../commons/components/inputFields/borderSelectField";
import { BorderTextInputField } from "../../../../commons/components/inputFields/borderTextInputField";
import {
  applyingFor,
  highestEducation,
  targetYear,
} from "../../../../constants/values";
// import { SelectField } from "../../../../commons/components/inputFields/selectField";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function HomePromoSection({ source, entity, onFormSubmit }) {
  const { allDestinations } = useSelector((state) => state.destinations);
  const { error } = useSelector((state) => state.leads);
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
    <section className=" dark:bg-gray-900 relative  h-full">
      <div className="  z-10">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-2 md:gap-28 mx-auto  ">
          {/* Left Side: Text and Image */}
          <div className="flex flex-col gap-3 justify-center">
            {/* <div className="text-start "> */}
            <h2
              className={`mb-2 text-[28px] md:text-[45px] leading-tight  font-extrabold text-gray-primary dark:text-white`}
            >
              Need Clarifications on Your Study Abroad Plans?
            </h2>
            <p className="text-[#52525B] mb-1 font-semibold text-[16px]">
              Our study abroad consultants will reach out to you and guide you
              through every step of the application process and document
              preparation, allowing you to focus on what matters most while we
              handle all the details and ensure a smooth experience easing into
              your global transition.
            </p>
            <div className="flex justify-center  lg:justify-start ">
              <img
                className="rounded-lg w-full h-[35vh] object-cover"
                src={homeQuery}
                alt="Counselling session"
              />
            </div>
            <div className="flex justify-center text-center mt-5">
              <a href="/homeCounselling">
                <button
                  className={`py-2 px-5 border-2 rounded-lg font-semibold border-gray-primary text-[#71717A] hover:bg-gray-primary hover:text-white`}
                // onClick={(e) => {
                //   e.preventDefault()
                //   navigate("/homeCounselling")
                // }}
                >
                  Learn More About Home Counselling
                </button>

              </a>
            </div>
            {/* </div> */}
          </div>

          {/* Right Side: Form */}
          <div className="flex flex-col justify-start items-end">
            <div className="flex flex-col items-start w-full rounded-lg   ">
              {/* Tabs Row */}
              <div className="mb-3">
                <h2
                  className={`mb-4 text-[28px] md:text-[45px]  font-extrabold text-gray-primary dark:text-white`}
                >
                  Book Counselling Now
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
                        I agree to ABROAED Terms and privacy policy. Please
                        contact me by phone, email, or SMS to assist with my
                        enquiry. I would like to receive updates and offers from
                        ABROAED.
                      </label>
                    </div>
                  </>
                  <div>
                    <button
                      onSubmit={handleAddLead}
                      type="submit"
                      className={`py-3  w-full px-10 text-base font-semibold  text-center text-[#432205] rounded-lg bg-yellow-primary hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500`}
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default HomePromoSection;
