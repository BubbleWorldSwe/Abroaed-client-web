/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BorderTextInputField } from "../../../commons/components/inputFields/borderTextInputField";
import { toast } from "react-toastify";

const ContactUsForm = ({
  onFormSubmit,
  source,
  entity,
  isLoading,
  title,
  text,
}) => {
  console.log(isLoading + " Is Loading");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const [checkboxes, setCheckboxes] = useState({
    termsAgreed: false,
    contactPermission: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, mobile } = formData;
    const { termsAgreed, contactPermission } = checkboxes;

    // Validate required fields
    if (!firstName || !lastName || !email || !mobile) {
      toast.error("Please fill out all fields.");
      return;
    }

    // Validate checkboxes
    if (!termsAgreed || !contactPermission) {
      toast.error("Please agree to both Terms & Conditions.");
      return;
    }

    console.log("Form Submitted:", formData);

    onFormSubmit({ user: formData, source, entity });
  };

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <section className="relative isolate overflow-hidden  px-10 mx-auto">
      <div className="py-8 px-3 mx-auto max-w-screen-2xl  dark:bg-gray-800 antialiased relative ">
        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-12">
          {/* Left Section - 60% Width */}
          <div className="lg:w-3/5  py-4 flex flex-col justify-center">
            <h1 className="text-[45px] font-extrabold text-[#27272A]  max-w-xl  ">
              {title || `Book your counseling session today!`}
            </h1>
            <p className=" text-base text-[#52525B]  font-normal">
              {text ||
                `Our specialised home counseling session is available at your
              convenience. Don’t waste a minute—take a stride towards your
              future by contacting our study abroad expert today.`}
            </p>
          </div>

          {/* Right Section - 40% Width */}
          <div className="lg:w-2/5 px-4 py-4 md:pt-5 max-w-md">
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
              <BorderTextInputField
                label={"First Name*"}
                placeholder="Enter"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <BorderTextInputField
                label={"Last Name*"}
                placeholder="Enter"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <BorderTextInputField
                label={"Email ID*"}
                placeholder="Enter"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <BorderTextInputField
                label={"Contact Number*"}
                placeholder="Enter"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />

              {/* Checkbox 1 */}
              <div className="flex items-start mt-6">
                <input
                  type="checkbox"
                  name="termsAgreed"
                  checked={checkboxes.termsAgreed}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
                <label className="ml-2 text-[12px] text-[#71717A]">
                  I agree to Abroaed{" "}
                  <span className="font-bold">Terms of Service</span> and{" "}
                  <span className="font-bold">Privacy Policy</span>.
                </label>
              </div>

              {/* Checkbox 2 */}
              <div className="flex items-start mt-4 mb-4">
                <input
                  type="checkbox"
                  name="contactPermission"
                  checked={checkboxes.contactPermission}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
                <label className="ml-2 text-[12px] text-[#71717A]">
                  Please contact me by phone, email, or SMS to assist with my
                  enquiry. I would like to receive updates and offers from
                  Abroaed.
                </label>
              </div>

              <button
                type="submit"
                className="w-full font-medium rounded-lg text-sm px-5 text-[#432205] py-2.5 text-center focus:ring-4 focus:outline-none focus:ring-yellow-400"
                style={{ backgroundColor: "#FDDA24", color: "#000" }}
              >
                {isLoading ? (
                  <div className="flex justify-center items-center">
                    <div className="spinner-border animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
                  </div>
                ) : (
                  "Get Help"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
