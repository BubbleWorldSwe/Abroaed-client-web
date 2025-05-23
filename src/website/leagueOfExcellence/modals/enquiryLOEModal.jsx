/* eslint-disable react/prop-types */
import { useState } from "react";
import locationIcon from "../../../assets/locationIcon.png";
import wallet from "../../../assets/wallet.png";
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { toast } from "react-toastify";
import { entity, source } from "../../../constants/values";

const EnquiryLOEModal = ({ item, isOpen, onClose, onAddLead }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });
  const [readMore, setReadMore] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { firstName, lastName, email, mobile } = formData;

      // Validate required fields
      if (!firstName || !lastName || !email || !mobile) {
        toast.error("Please fill out all fields.");
        return;
      }

      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address.");
        return;
      }

      // Phone number validation (only digits, length 10-15)
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(mobile)) {
        toast.error("Please enter a valid 10-digit phone number.");
        return;
      }

      // Validate checkboxes
      if (!termsAgreed) {
        toast.error("Please agree to Terms & Conditions.");
        return;
      }

      console.log("Form Submitted:", formData, source, onAddLead);

      onAddLead({
        user: formData,
        entity: source.leaguageOfExcellence,
        source: "Website",
      });
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center  justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white max-h-[73vh] overflow-y-auto  font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-4 px-6 w-72 md:w-full max-w-3xl z-50 relative">
            <button
              className="absolute w-12 h-12 top-2 right-2 text-gray-600 hover:text-gray-900 text-4xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Enquire Now</h2>

            <div className="relative overflow-hidden">
              {/* Image with Float */}
              <img
                src={item.imgUrl}
                alt="Accommodation"
                className="w-2/5 h-auto rounded-lg shadow-md float-left mr-6 mb-4"
              />

              {/* Details */}
              <div className="">
                <h3 className="text-lg font-semibold mb-2">{item?.name}</h3>

                {/* Location */}
                <div className="flex gap-2 items-center">
                  <img
                    className="w-4 h-4 object-contain"
                    src={locationIcon}
                    alt="Location Icon"
                  />
                  <p
                    className={`text-gray-700 font-semibold ${
                      readMore ? "line-clamp-4" : "line-clamp-none"
                    } `}
                  >
                    {item?.location}
                  </p>
                </div>

                {/* Price */}
                <div className="flex gap-2 items-center mt-2">
                  <img
                    className="w-5 h-5 object-contain"
                    src={wallet}
                    alt="Wallet Icon"
                  />
                  <p className="text-gray-900">₹{item?.fees}</p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-justify text-sm mt-2">
                  <span className={`${readMore ? "" : "line-clamp-2"} `}>
                    {item?.description}
                  </span>
                  <span
                    className="cursor-pointer text-blue-500 "
                    onClick={() => setReadMore(!readMore)}
                  >
                    {readMore ? " Read Less" : "Read More"}
                  </span>
                </p>
              </div>
            </div>

            <form className="space-y-15 pt-5" onSubmit={handleSubmit}>
              <div className="grid font-rethink grid-cols-1 gap-4 lg:grid-cols-2">
                {/* F Name */}
                <TextInputField
                  label={"First Name*"}
                  placeholder="Enter"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

                {/* L Name */}
                <TextInputField
                  label={"Last Name*"}
                  placeholder="Enter"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
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
                  label="Phone*"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter phone"
                  required
                  maxLength={10}
                />
              </div>
              {/* <div className="mt-4 flex items-center justify-center gap-2">
                <CheckboxField
                  onClick={(e) => e.stopPropagation()}
                  id={`enquiryModal`}
                  htmlFor={`enquiryModal`}
                  checked={termsAgreed}
                  onChange={(e) => setTermsAgreed(e.target.checked)}
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to ABROAED{" "}
                  <span className="text-black cursor-pointer">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-black cursor-pointer">
                    Privacy Policy
                  </span>
                  .
                </label>
              </div> */}
              {/* Action Buttons */}
              <div className="flex justify-center py-4 text-center">
                <button
                  type="submit" // ✅ Ensure button is of type submit
                  className={`mt-4 w-72 bg-yellow-primary text-gray-700 py-2 rounded-md font-semibold text-base hover:bg-gray-primary hover:text-white`}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EnquiryLOEModal;
