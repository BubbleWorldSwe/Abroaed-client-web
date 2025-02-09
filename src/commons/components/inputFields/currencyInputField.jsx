export function CurrencyInputField({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  currency,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-1 flex w-full rounded-md bg-[#F4F4F5] border-none">
        <input
          type={type}
          name={name}
          className="block w-full rounded-l-md bg-[#F4F4F5] border-none focus:ring-indigo-500 sm:text-sm px-3 py-2"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
        />
        <span className="flex items-center px-10 text-gray-800 bg-gray-200 rounded-r-md text-sm w-auto max-w-20 whitespace-nowrap justify-center">
          {currency}
        </span>
      </div>
    </div>
  );
}
