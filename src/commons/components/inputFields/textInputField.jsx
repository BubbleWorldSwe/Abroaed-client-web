/* eslint-disable react/prop-types */
export function TextInputField({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  className,
}) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        className="mt-1 block w-full text-black rounded-md bg-[#F4F4F5] border-none focus:ring-indigo-500 sm:text-sm"
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        multiple
      />
    </div>
  );
}
