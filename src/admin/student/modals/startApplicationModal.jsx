/* eslint-disable react/prop-types */
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Plus, Trash2 } from "lucide-react";
import { useSelector } from "react-redux";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import trash from "../../../assets/delete.png";

const StartApplicationModal = ({ isOpen, onClose, collegesList }) => {
  const [documents, setDocuments] = useState([{ id: 1 }]);

  const addDocument = () => {
    setDocuments([...documents, { id: documents.length + 1 }]);
  };

  const removeDocument = (id) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  const [formData, setFormData] = useState({});
  const { countries } = useSelector((state) => state.countries);

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log("e.target.name");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50  ">
          <div className="max-w-3xl mx-auto max-h-[70vh] overflow-y-auto bg-white p-6 shadow-md rounded-lg border border-gray-300 relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold">Start a New Application</h2>

            {/* Dropdowns for College, Program, Course, and Intake */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <SelectField
                label="Select College"
                name="college"
                value={formData.college}
                onChange={handleChange}
                options={collegesList.map((data) => ({
                  label: data?.name,
                  value: data?._id,
                }))}
                required
              />
              <SelectField
                label="Select Program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                options={[].map((data) => ({
                  label: data?.name,
                  value: data?._id,
                }))}
                required
              />

              <SelectField
                label="Select Course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                options={[].map((data) => ({
                  label: data?.name,
                  value: data?._id,
                }))}
                required
              />

              <TextInputField
                label="Intake"
                name="intake"
                type="text"
                value={formData?.intake}
                onChange={handleChange}
                placeholder={"Enter Intake"}
              />
            </div>

            {/* Additional Documents Section */}
            <div className="mt-5">
              <div className="flex mb-3 justify-between text-center">
                <h3 className="text-md font-semibold">
                  Request Additional Documents
                </h3>
                <button
                  onClick={addDocument}
                  className=" flex items-center  font-medium"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="flex justify-between mb-2 items-center gap-3 my-5"
                >
                  <SelectField
                    label="Document Category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    options={[].map((data) => ({
                      label: data?.name,
                      value: data?._id,
                    }))}
                    required
                  />
                  <TextInputField
                    label="Title"
                    name="title"
                    type="text"
                    value={formData?.title}
                    onChange={handleChange}
                    placeholder={"Enter Title"}
                  />
                  <TextInputField
                    label="Deadline"
                    name="deadline"
                    type="datetime-local"
                    value={formData?.deadline}
                    onChange={handleChange}
                    placeholder={"Enter Deadline"}
                  />

                  <button
                    type="button"
                    className="text-red-500 mt-5"
                    onClick={() => removeDocument(doc.id)}
                    disabled={index === 0}
                  >
                    <img src={trash} alt="delete Icon" className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex flex-row-reverse">
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Submit
              </button>
            </div>
          </div>
          );
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default StartApplicationModal;
