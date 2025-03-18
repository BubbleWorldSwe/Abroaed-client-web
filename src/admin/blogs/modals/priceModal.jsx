/* eslint-disable react/prop-types */
import { useState } from "react";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { CurrencyInputField } from "../../../commons/components/inputFields/currencyInputField";

const PriceModal = ({ closeModal, onUpdate }) => {
  const accommodationDetails = useSelector(
    (state) => state?.accommodations?.selectedAccommodation
  );

  const [formData, setFormData] = useState({
    price: accommodationDetails?.price,
    // currency: accommodationDetails.currency,
  });

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { price } = formData;

    if (!price) {
      toast.error("Please fill out all fields.");
      return;
    }
    onUpdate({
      price: price,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5">
          {/*  <TextInputField
            label="Currency"
            name="currency"
            type="text"
            value={formData?.currency || ""}
            onChange={(e) => handleInputChange(e, "currency")}
            disabled
          />

          <TextInputField
            label="Price"
            name="price"
            type="text"
            value={formData?.price || ""}
            onChange={(e) => handleInputChange(e, "price")}
            required
            placeholder="Enter"
          /> */}

          <CurrencyInputField
            label="Amount (Monthly)"
            name="price"
            type="text"
            value={formData?.price || ""}
            onChange={(e) => handleInputChange(e, "price")}
            required
            placeholder="Enter Amount (Monthly)"
            currency={`${accommodationDetails?.destinationId?.countryId?.currency}`}
          />
        </div>

        <div className="text-end mt-10">
          <ModalCloseButton label={"Cancel"} onClick={closeModal} />
          <ModalSubmitButton label={"Save"} onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default PriceModal;
