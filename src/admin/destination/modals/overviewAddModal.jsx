import { useEffect, useState } from "react";

import { SelectField } from "../../../commons/components/inputFields/selectField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import SearchDropdownField from "../../../commons/components/inputFields/searchDropdownFields";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountriesRequest } from "../../../redux/actions/countryActions";

const OverviewAddModal = ({ closeModal, currencyList }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const { countries, loading } = useSelector((state) => state.countries);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData, image);
    closeModal();
  };

  const handleInputChange = (e, fieldName) => {
    console.log(e);
    setFormData({ ...formData, [fieldName]: e?.target?.value || e });
  };

  const fetchCountries = (q) => {
    dispatch(fetchCountriesRequest(q));
  };

  console.log(currencyList);

  useEffect(() => {
    console.log("Countries Updated " + countries.length);
  }, [countries]);

  return (
    <form onSubmit={handleSubmit}>
      <TextareaInputField
        label="Why Study in USA?"
        name="description"
        type="text"
        value={formData?.description}
        onChange={(e) => handleInputChange(e, "description")}
        placeholder="Enter description"
        required
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
        <SearchDropdownField
          label="Capital"
          options={countries.map((data) => ({
            label: `${data.emoji} ${data.name}`,
            //  label: data.name,
            value: data._id,
          }))}
          value={formData.capital}
          onSelect={(data) => {
            console.log(data);

            handleInputChange(data.value, "capital");
          }}
          onSearch={fetchCountries}
        />

        <TextInputField
          label="Language"
          name="language"
          type="text"
          value={formData.language}
          onChange={(e) => handleInputChange(e, "language")}
          placeholder="Enter Capital"
          required
        />

        <TextInputField
          label="Total Population"
          name="totalPopulation"
          type="text"
          value={formData.totalPopulation}
          onChange={(e) => handleInputChange(e, "totalPopulation")}
          placeholder="Enter Total Population"
          required
        />

        <SelectField
          label="Currency"
          name="currency"
          value={formData.currency}
          onChange={(e) => handleInputChange(e, "currency")}
          options={currencyList.map((data) => ({
            label: data.name,
            value: data._id,
          }))}
          required
        />

        <TextInputField
          label="Currency"
          name="currency"
          type="text"
          value={formData.currency}
          onChange={(e) => handleInputChange(e, "currency")}
          placeholder="Enter Currency"
          required
        />

        <TextInputField
          label="Dailing Code"
          name="dialcode"
          type="text"
          value={formData.dialcode}
          onChange={(e) => handleInputChange(e, "dialcode")}
          placeholder="Enter Dailing Code"
          required
        />
      </div>
      <div className="text-end">
        <button
          type="button"
          className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded   transition"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default OverviewAddModal;
