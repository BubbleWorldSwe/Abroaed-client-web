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
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <textarea
        type={type}
        name={name}
        className="mt-1 block w-full text-black rounded-md bg-[#F4F4F5] border-none focus:ring-primary-600 focus:border-primary-600  sm:text-sm"
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
