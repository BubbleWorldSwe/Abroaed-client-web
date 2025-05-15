/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { toast } from "react-toastify";

const AddProductTestPrepModal = ({ isOpen, onClose, onAddTestPreps }) => {
  const [formData, setFormData] = useState({ language: "English" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddTestPreps = () => {
    const { productName, exam, language } = formData;

    if (!productName || !exam || !language) {
      toast.error("Please fill out all fields.");
      return;
    }
    onAddTestPreps(formData);
  };

  const onReset = () => {
    try {
      setFormData({ language: "English" });
      onClose();
    } catch (error) {}
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white max-w-md py-8 px-8 font-rethink dark:bg-gray-900 rounded-lg shadow-lg w-full  relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onReset}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold ">Add Product</h2>
            <form
              onSubmit={handleAddTestPreps}
              className="flex flex-col gap-5 mx-auto py-5 rounded-lg"
            >
              <TextInputField
                label="Name"
                name="productName"
                type="text"
                value={formData?.productName}
                onChange={handleChange}
                placeholder={"Enter Name"}
              />
              <TextInputField
                label="Acronym"
                name="exam"
                type="text"
                value={formData?.exam}
                onChange={handleChange}
                placeholder={"Enter Acronym"}
              />
              {/*  <TextInputField
                label="Language"
                name="language"
                type="text"
                value={formData?.language}
                onChange={handleChange}
                placeholder={"Enter Language"}
              /> */}

              <div className="flex justify-end space-x-4 mt-5">
                <ModalCloseButton label="Reset" onClick={onReset} />
                <ModalSubmitButton label="Add" type="submit" />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProductTestPrepModal;
