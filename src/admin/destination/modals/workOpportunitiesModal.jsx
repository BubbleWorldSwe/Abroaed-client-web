import { useState } from "react";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { PlusSquare } from "lucide-react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import trash from "../../../assets/delete.png";
import { CurrencyInputField } from "../../../commons/components/inputFields/currencyInputField";

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

    onUpdate({ workOpportunities: fullFormData });

    // closeModal();
  };

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
            placeholder="Enter"
            required
          />
        </div>
        <div className="mt-5 mb-5">
          <TextareaInputField
            label="Part-degree popular work opportunities"
            name="postDegreeOpportunity"
            type="text"
            value={formData?.postDegreeOpportunity || ""}
            onChange={(e) => handleInputChange(e, "postDegreeOpportunity")}
            placeholder="Enter"
            required
          />
        </div>

        <p className="font-semibold mb-5">Professions</p>
        <div className="grid gap-4">
          {professions.map((profession, index) => (
            <div key={index} className="flex gap-4 items-end">
              <TextInputField
                label="Profession Name*"
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
                placeholder="Enter"
                required
              />
              <CurrencyInputField
                label="Average Salary*"
                name={`salary-${index}`}
                type="number"
                value={profession.salary}
                onChange={(e) =>
                  handleProfessionChange(index, "salary", e.target.value)
                }
                placeholder="Enter"
                currency={details?.countryId?.currency}
                required
              />
              {professions?.length > 1 ? (
                <button
                  type="button"
                  className="text-red-500 mb-2"
                  onClick={() => removeProfession(index)}
                >
                  <img src={trash} alt="delete Icon" className="w-5 h-5" />
                </button>
              ) : (
                <button
                  disabled
                  className="mb-2"
                  type="button"
                  onClick={addProfession}
                >
                  <div className="bg-white rounded">
                    <PlusSquare className="h-5 w-5 text-white" />
                  </div>
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
          placeholder="Enter"
        />

        <div className="text-end mt-10">
          <ModalCloseButton label={"Cancel"} onClick={closeModal} />
          <ModalSubmitButton label={"Save"} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default WorkOpportunitiesModal;
