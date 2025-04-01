/* eslint-disable react/prop-types */

import { toast } from "react-toastify";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { useState } from "react";

const AddProductLanguagePrepModal = ({
  isOpen,
  onClose,
  setIsDone,
  onAddLanguagePreps,
}) => {
  const [formData, setFormData] = useState({});
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
            <h2 className="text-xl font-bold ">Add Product</h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 mx-auto py-5 rounded-lg"
            >
              <TextInputField
                label="Product Name"
                name="productName"
                type="text"
                value={formData?.productName}
                onChange={handleChange}
                placeholder={"Enter Product Name"}
              />

              <TextInputField
                label="Language"
                name="language"
                type="text"
                value={formData?.language}
                onChange={handleChange}
                placeholder={"Enter Language"}
              />

              <div className="flex justify-end space-x-4 mt-5">
                <ModalCloseButton label="Cancel" onClick={onClose} />
                <ModalSubmitButton
                  label="Add"
                  onClick={handleAddLanguagePreps}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProductLanguagePrepModal;
