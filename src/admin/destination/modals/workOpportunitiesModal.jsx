import { useState } from "react";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";

const WorkOpportunitiesModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({});
  const [professions, setProfessions] = useState([{ name: "", salary: "" }]);

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleProfessionChange = (index, field, value) => {
    const updatedProfessions = professions.map((prof, i) =>
      i === index ? { ...prof, [field]: value } : prof
    );
    setProfessions(updatedProfessions);
  };

  const addProfession = () => {
    setProfessions([...professions, { name: "", salary: "" }]);
  };

  const removeProfession = (index) => {
    setProfessions(professions.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData, professions);
    closeModal();
  };

  console.log(professions);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <TextareaInputField
            label="Part-time options for Students"
            name="description"
            type="text"
            value={formData?.description || ""}
            onChange={(e) => handleInputChange(e, "description")}
            required
          />
        </div>
        <div className="mt-5 mb-5">
          <TextareaInputField
            label="Part-degree popular work opportunities"
            name="opportunities"
            type="text"
            value={formData?.opportunities || ""}
            onChange={(e) => handleInputChange(e, "opportunities")}
            required
          />
        </div>

        <p className="font-semibold mb-5">Professions</p>
        <div className="grid gap-4">
          {professions.map((profession, index) => (
            <div key={index} className="flex gap-4 items-center">
              <TextInputField
                label="Profession Name"
                name={`profession-${index}`}
                type="text"
                value={profession.name}
                onChange={(e) =>
                  handleProfessionChange(index, "name", e.target.value)
                }
                required
              />
              <TextInputField
                label="Average Salary"
                name={`salary-${index}`}
                type="text"
                value={profession.salary}
                onChange={(e) =>
                  handleProfessionChange(index, "salary", e.target.value)
                }
                required
              />
              {index === 0 ? (
                <button
                  type="button"
                  className="text-red-500"
                  onClick={addProfession}
                >
                  Add
                </button>
              ) : (
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => removeProfession(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="col-span-full text-end mb-5">
          <button
            type="button"
            className="mt-4 text-blue-500 px-4 py-1 mr-2 rounded transition flex items-center gap-2"
            onClick={addProfession}
          >
            + Add Profession
          </button>
        </div>

        <TextareaInputField
          label="Additional Information"
          name="additionalInfo"
          type="text"
          value={formData?.additionalInfo || ""}
          onChange={(e) => handleInputChange(e, "additionalInfo")}
          required
        />

        <div className="text-end">
          <ModalCloseButton label={"Cancel"} onClick={closeModal} />
          <ModalSubmitButton label={"Save"} />
        </div>
      </form>
    </div>
  );
};

export default WorkOpportunitiesModal;
