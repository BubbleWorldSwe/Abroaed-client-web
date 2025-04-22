/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import dark from "../../../assets/dark.png";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";
import locationIcon from "../../../assets/locationIcon.png";
import wallet from "../../../assets/wallet.png";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useClickOutside } from "../customHooks/useOutSideModalClose";

const AccomodationEnquiryModal = ({
  isOpen,
  onClose,
  entity,
  source,
  onAddLead,
  accommodationDetails,
}) => {
  const { error } = useSelector((state) => state.leads);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const [termsAgreed, setTermsAgreed] = useState(false);
  const modalRef = useRef();
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

      console.log("Form Submitted:", formData, source, entity, onAddLead);

      onAddLead({ user: formData, source, entity });
      onClose();
    } catch (error) {
      console.log(error);
    }
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
  }, [error]);
  // when click on the outside the modal then modal will close
  useClickOutside(modalRef, onClose, isOpen)
  return (
    <>
      {isOpen && (
        <div className="fixed px-6 mx-auto inset-0 flex items-center  justify-center bg-gray-800 bg-opacity-75 z-50">
          <div ref={modalRef} className="bg-white max-h-min md:max-h-[73vh] overflow-y-auto  font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-3xl z-50 relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Enquire Now</h2>

            <div className="relative overflow-hidden">
              {/* Image with Float */}
              <img
                src={dark}
                alt="Accommodation"
                className="w-2/5 h-auto rounded-lg shadow-md float-left mr-6 mb-4"
              />

              {/* Details */}
              <div className="">
                <h3 className="text-lg font-semibold mb-2">
                  {accommodationDetails?.accomodationName}
                </h3>

                {/* Location */}
                <div className="flex gap-2 items-center">
                  <img
                    className="w-4 h-4 object-contain"
                    src={locationIcon}
                    alt="Location Icon"
                  />
                  <p className="text-gray-700 font-semibold">
                    {accommodationDetails?.stateId?.name},{" "}
                    {accommodationDetails?.destinationId?.countryId?.name}
                  </p>
                </div>

                {/* Price */}
                <div className="flex gap-2 items-center mt-2">
                  <img
                    className="w-5 h-5 object-contain"
                    src={wallet}
                    alt="Wallet Icon"
                  />
                  <p className="text-gray-900">
                    ₹{accommodationDetails?.price} per month
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2">
                  {accommodationDetails?.description}
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
                />
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
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
              </div>
              {/* Action Buttons */}
              <div className="flex justify-center text-center">
                <button
                  type="submit"
                  className={`mt-4 w-72 bg-yellow-primary text-gray-primary py-2 rounded-md font-semibold text-base  hover:bg-gray-primary hover:text-white`}
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

export default AccomodationEnquiryModal;
