/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { BorderSelectField } from "../../../commons/components/inputFields/borderSelectField";
import { BorderTextInputField } from "../../../commons/components/inputFields/borderTextInputField";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  applyingFor,
  entity,
  highestEducation,
  source,
  targetYear,
} from "../../../constants/values";
import { addLeadRequest } from "../../../redux/actions/leadsActions";
import { useClickOutside } from "../customHooks/useOutSideModalClose";

const BookCounsellingModal = ({ isOpen, onClose }) => {
  const modalRef = useRef();
  const dispatch = useDispatch();
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

  const handleAddLead = async (e) => {
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

    try {
      await dispatch(
        addLeadRequest({
          user: formData,
          source: source.menu,
          entity: entity.bookCounselling,
        })
      );
      onClose();
    } catch (err) {
      console.error("Error adding lead:", err);
      toast.error("Something went wrong while submitting the form.");
    }
  };

  // when click on the outside the modal then modal will close
  useClickOutside(modalRef, onClose, isOpen);

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
      <div className="fixed px-6 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
        <div
          ref={modalRef}
          className="bg-white max-h-[80vh] overflow-y-auto font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-3xl z-50 relative"
        >
          <button
            className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-[26px] md:text-[32px] text-gray-primary font-semibold ">
            Book Counselling Now
          </h2>
          <form className="space-y-5" onSubmit={handleAddLead}>
            <div className="grid grid-cols-1 md:grid-cols-2  md:gap-y-0   md:gap-4">
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
                label="Last Name"
                name="lastName"
                type="text"
                value={formData.lastName}
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
              <BorderTextInputField
                label="Mobile Number"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter"
                required
                maxLength={10}
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
            </div>
            <div>
              <button
                type="submit"
                className="py-3 w-full px-10 text-base font-semibold text-center text-[#432205] rounded-lg bg-yellow-primary hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookCounsellingModal;
