/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import pencil from "../../../assets/pencil.png"
const AboutExamTestPrepModal = ({ closeModal, onUpdate }) => {
  const testPrepDetails = useSelector(
    (state) => state.testPreps.selectedTestPrep
  );
  const [formData, setFormData] = useState({
    about: testPrepDetails?.about || "",
    exampTypes: testPrepDetails?.exampTypes || "",
    exampComponents: testPrepDetails?.exampComponents || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.about.trim() ||
      !formData.exampTypes.trim() ||
      !formData.exampComponents.trim()
    ) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    onUpdate(formData);
  };
  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextareaInputField
          label="About"
          name="about"
          type="text"
          value={formData.about}
          onChange={(e) => handleInputChange(e, "about")}
          required
          placeholder="Enter About"
        />
        <div className="mt-5">
          <table className="w-full  rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className=" text-[#71717A] font-rethink   bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-1 min-w-[14rem]">
                  Particular
                </th>
                <th scope="col" className="px-4 py-1 min-w-[10rem]">
                  Details
                </th>
                <th scope="col" className="px-4 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                // key={index}
                className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <th
                  scope="row"
                  className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >Exam Date
                </th>
                <td className="px-4 py-3">V-1</td>
                <td className=" py-3">
                  <button>
                    <img src={pencil} alt="pic" className="w-4 h-4 mr-2" />
                  </button>
                </td>
              </tr>
              <tr
                // key={index}
                className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <th
                  scope="row"
                  className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >Exam Date
                </th>
                <td className="px-4 py-3">V-1</td>
                <td className=" py-3">
                  <button>
                    <img src={pencil} alt="pic" className="w-4 h-4 mr-2" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-end mt-10">
          <ModalCloseButton label="Cancel" onClick={closeModal} />
          <ModalSubmitButton label="Save" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default AboutExamTestPrepModal;
