/* eslint-disable react/prop-types */

import { toast } from "react-toastify";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AddProductLanguagePrepModal = ({
  isOpen,
  onClose,
  setIsDone,
  onAddLanguagePreps,
}) => {
  const { success } = useSelector((state) => state.languagePreps);

  const [formData, setFormData] = useState({
    language: "English",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDone(true);
    onClose();
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddLanguagePreps = () => {
    const { productName, language } = formData;

    if (!productName || !language) {
      toast.error("Please fill out all fields.");
      return;
    }
    onAddLanguagePreps(formData);
  };

  useEffect(() => {
    if (success) {
      setFormData({
        language: "English",
      });
    }
  }, [success]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white max-w-md py-8 px-8 font-rethink dark:bg-gray-900 rounded-lg shadow-lg w-full  relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold ">Add Language Prep</h2>
            <form
              onSubmit={handleAddLanguagePreps}
              className="flex flex-col gap-5 mx-auto py-5 rounded-lg"
            >
              <TextInputField
                label="Name*"
                name="productName"
                type="text"
                value={formData?.productName}
                onChange={handleChange}
                placeholder={"Enter Name"}
                required
              />

              {/*   <TextInputField
                label="Language"
                name="language"
                type="text"
                value={formData?.language}
                onChange={handleChange}
                placeholder={"Enter Language"}
              /> */}

              <div className="flex justify-end space-x-4 mt-5">
                <ModalCloseButton label="Cancel" onClick={onClose} />
                <ModalSubmitButton label="Add" type="submit" />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProductLanguagePrepModal;
