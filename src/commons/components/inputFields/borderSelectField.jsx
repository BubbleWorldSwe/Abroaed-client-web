/* eslint-disable react/prop-types */
export function BorderSelectField({
  label,
  name,
  value,
  onChange,
  options,
  required,
}) {
  return (
    <div className="my-2 ">
      <label className={`block text-lg font-medium text-gray-primary mb-1`}>
        {label}
      </label>
      <select
        name={name}
        className={`bg-gray-300 border border-gray-300 text-gray-primary text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="" className="text-gray-400">
          Select
        </option>
        {options.map((data, i) => (
          <option key={i} value={data.value}>
            {data.label}
          </option>
        ))}
      </select>
    </div>
  );
}
