import { useEffect, useState } from "react";

const SearchDropdownField = ({ label, options, onSelect, onSearch, value }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (value) {
      setQuery(value.label); // Set input value when prefilled
    }
  }, [value]);

  const handleSelect = (data) => {
    setQuery(data.label);
    onSelect(data);
    setIsDropdownOpen(false);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type="text"
          value={query}
          onFocus={() => setIsDropdownOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch(e.target.value);
          }}
          placeholder="Search"
          className="mt-1 block w-full rounded-md bg-[#F4F4F5] border-none focus:ring-indigo-500 sm:text-sm"
        />
        <button
          type="button"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="absolute inset-y-0 right-2 flex items-center text-gray-400 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      {isDropdownOpen && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 shadow-lg">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No options found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDropdownField;
