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
      <div className="mt-1 flex w-full rounded-md bg-[#F4F4F5]">
        <input
          type={type}
          name={name}
          className="block w-full rounded-l-md bg-[#F4F4F5] border-transparent focus:ring-primary-600 focus:border-primary-600 sm:text-sm px-3 py-2"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
        />
        {currency && (
          <span className="flex items-center px-3 text-gray-800 bg-gray-200 rounded-r-md text-sm w-auto max-w-20 whitespace-nowrap justify-center">
            {currency}
          </span>
        )}
      </div>
    </div>
  );
}
