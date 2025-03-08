export function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required,
  disabled,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        name={name}
        className="mt-1 block w-full px-3 py-2 bg-[#F4F4F5] rounded-md focus:ring-[#F4F4F5] sm:text-sm border-none"
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      >
        <option value="" className="text-gray-400">
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
