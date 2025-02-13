import { useState } from "react";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { Trash2Icon } from "lucide-react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import trash from "../../../assets/delete.png";

const WorkOpportunitiesModal = ({ closeModal, onUpdate }) => {
  const details = useSelector(
    (state) => state.destinations.selectedDestination
  );
  const [formData, setFormData] = useState({
    partTimeStudents: details?.workOpportunities?.partTimeStudents,
    postDegreeOpportunity: details?.workOpportunities?.postDegreeOpportunity,
    additionalInformation: details?.workOpportunities?.additionalInformation,
  });
  const [professions, setProfessions] = useState(
    details?.workOpportunities?.professions || [
      {
        professionName: "",
        salary: "",
      },
    ]
  );

  console.log(professions);

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
    setProfessions([...professions, { professionName: "", salary: "" }]);
  };

  const removeProfession = (index) => {
    setProfessions(professions.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /*  if (!formData.partTimeStudents.trim()) {
      toast.error("Part-time options for students is required.");
      return;
    }
    if (!formData.postDegreeOpportunity.trim()) {
      toast.error("Post-degree popular work opportunities are required.");
      return;
    }
    if (!formData.additionalInformation.trim()) {
      toast.error("Additional Information is required.");
      return;
    }
 */
    professions.forEach((profession, index) => {
      if (!profession?.professionName.trim()) {
        toast.error(`Profession Name (Entry ${index + 1}) is required.`);
        return;
      }
      if (!profession?.salary) {
        toast.error(`Salary (Entry ${index + 1}) is required.`);
        return;
      }
    });

    const professionWithoutId = professions?.map(({ _id, ...rest }) => rest);

    const fullFormData = { ...formData, professions: professionWithoutId };

    console.log("Form submitted with data:", fullFormData);

    onUpdate({ workOpportunities: fullFormData });

    // closeModal();
  };

  console.log(formData);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <TextareaInputField
            label="Part-time options for Students"
            name="partTimeStudents"
            type="text"
            value={formData?.partTimeStudents || ""}
            onChange={(e) => handleInputChange(e, "partTimeStudents")}
            required
            placeholder="Enter"
          />
        </div>
        <div className="mt-5 mb-5">
          <TextareaInputField
            label="Part-degree popular work opportunities"
            name="postDegreeOpportunity"
            type="text"
            value={formData?.postDegreeOpportunity || ""}
            onChange={(e) => handleInputChange(e, "postDegreeOpportunity")}
            required
            placeholder="Enter"
          />
        </div>

        <p className="font-semibold mb-5">Professions</p>
        <div className="grid gap-4">
          {professions.map((profession, index) => (
            <div key={index} className="flex gap-4 items-end">
              <TextInputField
                label="Profession Name"
                name={`profession-${index}`}
                type="text"
                value={profession.professionName}
                onChange={(e) =>
                  handleProfessionChange(
                    index,
                    "professionName",
                    e.target.value
                  )
                }
                required
                placeholder="Enter"
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
                placeholder="Enter"
              />
              {index !== 0 && (
                <button
                  type="button"
                  className="text-red-500 mb-2"
                  onClick={() => removeProfession(index)}
                >
                  <img src={trash} alt="delete Icon" className="w-5 h-5" />
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="col-span-full text-start mb-5">
          <button
            type="button"
            className="mt-7 font-bold text-blue-500 px-4 py-1 mr-2 rounded transition flex items-center gap-2"
            onClick={addProfession}
          >
            + Add Profession
          </button>
        </div>

        <TextareaInputField
          label="Additional Information"
          name="additionalInformation"
          type="text"
          value={formData?.additionalInformation || ""}
          onChange={(e) => handleInputChange(e, "additionalInformation")}
          required
          placeholder="Enter"
        />

        <div className="text-end mt-10">
          <ModalCloseButton label={"Cancel"} onClick={closeModal} />
          <ModalSubmitButton label={"Save"} onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default WorkOpportunitiesModal;
