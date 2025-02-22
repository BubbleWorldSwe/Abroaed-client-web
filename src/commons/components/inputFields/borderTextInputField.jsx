export function BorderTextInputField({
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
    <div className="my-5">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
