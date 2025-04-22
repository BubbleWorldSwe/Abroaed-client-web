/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BorderTextInputField } from "../../../commons/components/inputFields/borderTextInputField";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ContactUsForm = ({ onFormSubmit, source, entity, title, text, buttonText }) => {
  const { error, loading } = useSelector((state) => state.leads);

  console.log(error + " : Error");

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
    if (!error) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
      });
    }
  }, [loading, error]);

  console.log(formData);

  return (
    <section className="relative ">
      <div className="  dark:bg-gray-800  bg-gray-primary py-6 md:py-2 rounded-lg max-h-min md:min-h-[90vh] antialiased relative ">
        <div
          className={`flex flex-col lg:flex-row justify-between   lg:gap-12 px-6 md:px-10  rounded-lg`}
        >
          {/* Left Section - 60% Width */}
          <div className="md:w-3/5   py-4 flex flex-col justify-center ">
            <h1
              className={`text-[28px] md:text-[65px] mb-4 md:mb-10 font-medium  leading-tight  text-white  max-w-3xl  `}
            >
              {title || `Book Your Counselling Session Today!`}
            </h1>
            <p className="text-[18px] md:text-[23px] max-w-3xl tracking-tight text-[#e7e7ef]  font-normal">
              {text ||
                `Our specialised home counselling session is available at your
              convenience. Don’t waste a minute—take a stride towards your
              future by contacting our study abroad expert today.`}
            </p>
          </div>

          {/* Right Section - 40% Width */}
          <div className="lg:w-2/5   py-2 md:py-14 md:pt-5 md:pb-10 max-w-lg">
            <form
              className=" mx-auto flex flex-col gap-2"
              onSubmit={handleSubmit}
            >
              <BorderTextInputField
                label={"First Name"}
                placeholder="Enter"
                name="firstName"
                type={"text"}
                value={formData.firstName}
                onChange={handleChange}
                sx={{ color: "white", fontSize: "16px" }}
                required
              />
              <BorderTextInputField
                label={"Last Name"}
                placeholder="Enter"
                name="lastName"
                type={"text"}
                value={formData.lastName}
                onChange={handleChange}
                sx={{ color: "white", fontSize: "16px" }}
                required
              />
              <BorderTextInputField
                label={"Email ID"}
                placeholder="Enter"
                name="email"
                type={"email"}
                value={formData.email}
                onChange={handleChange}
                sx={{ color: "white", fontSize: "16px" }}
                required
              />
              <BorderTextInputField
                label={"Contact Number"}
                placeholder="Enter"
                name="mobile"
                type={"phone"}
                value={formData.mobile}
                onChange={handleChange}
                sx={{ color: "white", fontSize: "16px" }}
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
                {/* <label className="ml-2 text-[12px] text-white"> */}
                <label className="ml-2 text-[16px] text-white">
                  I agree to ABROAED{" "}
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
                {/* <label className="ml-2 text-[12px] text-white"> */}
                <label className="ml-2 text-[16px] text-white">
                  Please contact me by phone, email, or SMS to assist with my
                  enquiry. I would like to receive updates and offers from
                  ABROAED.
                </label>
              </div>

              <button
                type="submit"
                className={`w-full font-semibold rounded-lg text-base px-5 text-[#432205] py-2.5 text-center bg-yellow-primary hover:bg-yellow-300`}
                style={{ color: "#000" }}
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <div className="spinner-border animate-spin h-5 w-5 border-t-2 border-b-2 border-black rounded-full"></div>
                  </div>
                ) : (
                  buttonText || "Book Now"
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
