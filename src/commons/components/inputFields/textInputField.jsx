import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

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
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === "password";

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={isPasswordType && showPassword ? "text" : type}
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
        {isPasswordType && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-600"
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}
