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
  maxLength,
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
        className="mt-1 block w-full text-black rounded-md bg-[#F4F4F5] border-none focus:ring-primary-600 focus:border-primary-600 sm:text-sm disabled:text-gray-400"
        placeholder={placeholder}
        // defaultValue={value}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        maxLength={maxLength}
      />
    </div>
  );
}
