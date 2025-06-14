/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import moment from "moment";
import { ModalDeleteButton } from "../../../commons/components/buttons/modalDeleteButton";
import { useSelector } from "react-redux";
import { SelectField } from "../../../commons/components/inputFields/selectField";

const FilterModal = ({
  isOpen,
  onClose,
  fetchFilterData,
  clearFilterData,
  teams,
}) => {
  const { role } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    userId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { from, to, userId } = formData;

    fetchFilterData(from, to, userId);
    onClose();
  };

  const clearData = (e) => {
    e.preventDefault();
    setFormData({ from: "", to: "", userId: "" });
    clearFilterData();
  };

  return isOpen ? (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white w-2/5 font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 relative">
          <button
            className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-xl font-semibold mb-7">Filter</h2>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2">
              <TextInputField
                label="From Date*"
                name="from"
                type="date"
                // value={formData?.from}
                value={
                  formData?.from
                    ? moment(formData.from).format("YYYY-MM-DD")
                    : ""
                }
                onChange={handleChange}
                required
              />

              <TextInputField
                label="To Date*"
                name="to"
                type="date"
                value={
                  formData?.to ? moment(formData.to).format("YYYY-MM-DD") : ""
                }
                onChange={handleChange}
                required
              />
            </div>
            {["Backend Manager", "Counsellor Manager", "Admin"].includes(
              role
            ) && (
              <div className="mt-5">
                <SelectField
                  label="Team"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  options={teams?.map((data) => ({
                    label: `${data?.firstName} ${data?.lastName}`,
                    value: data?._id,
                  }))}
                />
              </div>
            )}
            <div className="flex justify-end space-x-2 mt-10">
              <ModalDeleteButton label="Clear" onClick={clearData} />
              <ModalCloseButton label="Close" onClick={onClose} />

              {/* <ModalDeleteButton
                label=" Cancel Appointment"
                onClick={onClose}
              /> */}
              <ModalSubmitButton type="submit" label="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  ) : null;
};

export default FilterModal;
