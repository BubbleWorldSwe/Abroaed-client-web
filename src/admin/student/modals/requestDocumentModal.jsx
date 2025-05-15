/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { SelectField } from "../../../commons/components/inputFields/selectField";
import { docCategory } from "../../../constants/values";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import moment from "moment";

const RequestDocumentModal = ({
  isOpen,
  onClose,
  leadId,
  requestDocument,
  filledData,
  updateDocument,
}) => {
  const [formData, setFormData] = useState({
    applicationId: "",
    lead: leadId,
    type: "",
    title: "",
    status: "requested",
    deadline: "",
  });

  const { applications } = useSelector(
    (state) => state?.students?.selectedStudent
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "type" && { applicationId: undefined }), // Reset applicationId when type changes
    }));
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();

      // Filter out keys with null or undefined values
      const filteredData = Object.fromEntries(
        Object.entries(formData).filter(
          ([_, value]) => value !== null && value !== undefined
        )
      );

      console.log("Form ready to submit", filteredData);

      if (filteredData._id) {
        console.log("Update");
        updateDocument(filteredData);
      } else {
        console.log("Add");
        requestDocument(filteredData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        applicationId: "",
        lead: leadId,
        type: "",
        title: "",
        status: "requested",
        deadline: "",
      });
    }
  }, [isOpen, leadId]);

  useEffect(() => {
    if (filledData?._id) {
      setFormData({ ...filledData, lead: leadId });
    }
  }, [filledData, leadId]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="w-1/2 bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 max-w-4xl max-h-[600px] overflow-auto relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid font-rethink grid-cols-1 gap-4 lg:grid-cols-2">
                <SelectField
                  label="Document Category"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  options={docCategory
                    .filter(
                      (category) =>
                        category !== "Applications" ||
                        (category === "Applications" &&
                          Array.isArray(applications) &&
                          applications.length > 0)
                    )
                    .map((data) => ({
                      label: data,
                      value: data,
                    }))}
                  required
                />

                <TextInputField
                  label="Title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter Document Title"
                  required
                />
              </div>

              {formData?.type === "Applications" && (
                <SelectField
                  label="Select College"
                  name="applicationId"
                  value={formData.applicationId}
                  onChange={handleChange}
                  options={applications.map((data) => ({
                    label: data?.college?.name,
                    value: data?._id,
                  }))}
                  required
                />
              )}

              <div className="flex-1">
                <TextInputField
                  label="Deadline"
                  name="deadline"
                  type="date" // <-- changed from "datetime-local" to "date"
                  value={
                    formData?.deadline
                      ? moment(formData.deadline).format("YYYY-MM-DD") // <-- simplified format
                      : null || ""
                  }
                  onChange={handleChange}
                  placeholder="Enter Deadline"
                  required
                />
              </div>

              <div className="flex gap-3 justify-end mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
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

export default RequestDocumentModal;
