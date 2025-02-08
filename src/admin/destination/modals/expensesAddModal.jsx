import { useState, useEffect } from "react";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { CurrencyInputField } from "../components/currencyInputField";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ExpensesAddModal = ({ closeModal, onUpdate }) => {
  const details = useSelector(
    (state) => state.destinations.selectedDestination
  );
  const defaultFormData = [
    { id: 1, label: "Average Tuition Fees (per year)", value: "" },
    { id: 2, label: "Average Rent (per month)", value: "" },
    { id: 3, label: "Average Food Expenses (per month)", value: "" },
    { id: 4, label: "Average Transport Expenses (per month)", value: "" },
    { id: 5, label: "Misc. Expenses (per month)", value: "" },
  ];

  const [formData, setFormData] = useState(defaultFormData);

  const handleInputChange = (e, id) => {
    const updatedFormData = formData.map((field) =>
      field.id === id ? { ...field, value: e.target.value } : field
    );
    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = formData.every((field) => field.value.trim() !== "");

    if (!isFormValid) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    console.log("✅ Form submitted successfully:", formData);
    onUpdate({
      expenses: formData.map((data) => ({
        label: data.label,
        value: data.value,
      })),
    });
    closeModal();
  };

  useEffect(() => {
    if (details?.expenses) {
      const updatedFormData = defaultFormData.map((field) => {
        const existingExpense = details?.expenses?.find(
          (expense) => expense.label === field.label
        );
        return existingExpense
          ? { ...field, value: existingExpense.value }
          : field;
      });
      setFormData(updatedFormData);
    }
  }, [details]);

  return (
    <div>
      <form className="flex flex-col gap-4">
        {formData.map((field) => (
          <CurrencyInputField
            key={field.id}
            label={field.label}
            name={`field-${field.id}`}
            type="text"
            value={field.value}
            onChange={(e) => handleInputChange(e, field.id)}
            placeholder="Enter Amount"
            required
            currency={details?.countryId?.currency}
          />
        ))}

        <div className="col-span-full text-end mt-5">
          <ModalCloseButton label="Cancel" onClick={closeModal} />
          <ModalSubmitButton
            label="Save"
            onClick={handleSubmit}
            type="button"
          />
        </div>
      </form>
    </div>
  );
};

export default ExpensesAddModal;
