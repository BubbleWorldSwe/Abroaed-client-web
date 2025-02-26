/* eslint-disable react/prop-types */
export function SelectField({
  label,
  name,
  value,
  onChange,
  options = [],
  required,
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#27272A]">{label}</label>
      <select
        name={name}
        className="mt-1 block w-full px-3 py-2 text-gray-500 bg-[#F4F4F5] rounded-md focus:ring-[#F4F4F5] sm:text-sm border-none"
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="" >
          Select
        </option>
        {options?.map((data, i) => (
          <option key={i} value={data.value}>
            {data.label}
          </option>
        ))}
      </select>
    </div>
  );
}
