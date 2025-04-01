/* eslint-disable react/prop-types */
export function BorderTextInputField({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  sx,
}) {
  return (
    <div className="my-2 ">
      <label
        style={sx}
        // className={`block text-sm font-medium text-gray-primary mb-1`}
        className={`block text-md font-medium text-gray-primary mb-1`}
      >
        {label}*
      </label>
      <input
        type={type}
        name={name}
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        //defaultValue={value}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        multiple
      />
    </div>
  );
}
