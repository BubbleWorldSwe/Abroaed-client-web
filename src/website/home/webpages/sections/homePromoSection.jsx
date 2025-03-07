import { useState } from "react";
import homeQuery from "../../../../assets/homeQuery.png";
import { BorderSelectField } from "../../../../commons/components/inputFields/borderSelectField";
import { BorderTextInputField } from "../../../../commons/components/inputFields/borderTextInputField";

function HomePromoSection({ source, entity, onFormSubmit }) {
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

  return (
    <section className="bg-white dark:bg-gray-900 relative px-10 mx-auto h-full">
      <div className="py-20 px-4 mx-auto max-w-screen-2xl  lg:px-3  z-10">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-28 mx-auto  ">
          {/* Left Side: Text and Image */}
          <div className="flex flex-col gap-3 justify-center">
            {/* <div className="text-start "> */}
            <h2 className="mb-2 text-5xl tracking-tight font-extrabold text-[#27272A] dark:text-white">
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
                className="rounded-lg w-full h-[45vh] object-cover"
                src={homeQuery}
                alt="Counselling session"
              />
            </div>
            <div className="flex justify-center text-center mt-5">
              <button className="py-2 px-5 border-2 rounded-lg font-semibold border-[#27272A] text-[#71717A]">
                Learn About Home Counselling
              </button>
            </div>
            {/* </div> */}
          </div>

          {/* Right Side: Form */}
          <div className="flex flex-col justify-start items-end">
            <div className="flex flex-col items-start w-full rounded-lg p-8 bg-bal">
              {/* Tabs Row */}
              <div className="mb-3">
                <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-[#27272A] dark:text-white">
                  Book Counselling Now
                </h2>

                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <BorderTextInputField
                        label={"First Name*"}
                        placeholder="Enter"
                      />
                      <BorderTextInputField
                        label={"Email*"}
                        placeholder="Enter"
                      />
                      <BorderTextInputField
                        label={"Highest Education Qualification"}
                        placeholder="Enter"
                      />
                      <BorderTextInputField
                        label={"  When Do You Plan to Study?"}
                        placeholder="Enter"
                      />
                    </div>
                    <div>
                      <BorderTextInputField
                        label={"Last Name*"}
                        placeholder="Enter"
                      />
                      <BorderTextInputField
                        label={"Contact Number*"}
                        placeholder="Enter"
                      />
                      <div className="my-2">
                        <BorderSelectField
                          label={"Preferred Study Level"}
                          options={[
                            { value: "UG", label: "UG" },
                            { value: "PG", label: "PG" },
                            { value: "PhD", label: "PhD" },
                            { value: "Others", label: "Others" },
                          ]}
                          required
                        />
                      </div>

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
                    </div>
                  </div>
                </>
                <>
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
                  <div className="flex items-start mt-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      required
                    />
                    <label className="ml-2 text-sm font-light text-gray-500 dark:text-gray-400">
                      I agree to Abroaed Terms and privacy policy. Please
                      contact me by phone, email, or SMS to assist with my
                      enquiry. I would like to receive updates and offers from
                      Abroaed.
                    </label>
                  </div>
                </>
                <div>
                  <button
                    onSubmit={onFormSubmit}
                    type="submit"
                    className="py-3 w-full px-10 text-base font-semibold  mt-4 text-center text-[#432205] rounded-lg bg-[#FDDA24] hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePromoSection;
