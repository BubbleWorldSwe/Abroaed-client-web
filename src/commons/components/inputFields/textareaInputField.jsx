/* eslint-disable react/prop-types */
export function TextareaInputField({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
  disabled,
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700">{label}</label>
      <textarea
        type={type}
        name={name}
        className="mt-1 block w-full text-gray-500 rounded-md bg-[#F4F4F5] border-none focus:ring-indigo-500 sm:text-sm"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        multiple
        rows={3}
      />
    </div>
  );
}
