/* eslint-disable react/prop-types */
import { BorderSelectField } from "../../../../commons/components/inputFields/borderSelectField";
import { BorderTextInputField } from "../../../../commons/components/inputFields/borderTextInputField";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  applyingFor,
  highestEducation,
  targetYear,
} from "../../../../constants/values";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import { motion } from "framer-motion";

const BookCounsellingNow = ({ source, entity, onFormSubmit }) => {
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
    <section className=" relative  h-full">
      <div className="   z-10">
        {/* <div className="grid grid-cols-1  lg:grid-cols-2 gap-28 mx-auto  "> */}
        <SectionMainHeader
          className={`mb-4  text-start md:text-center`}
        >
          Book Counselling Now
        </SectionMainHeader>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="overflow-hidden"
        >
          <div className="flex justify-center items-center">
            <form className="space-y-6 w-full md:w-[46rem]" onSubmit={handleAddLead}>
              <div className="grid grid-cols-1 md:grid-cols-2  md:gap-y-0  md:gap-4">
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
              {/* Submit Button */}
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
        </motion.div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default BookCounsellingNow;
