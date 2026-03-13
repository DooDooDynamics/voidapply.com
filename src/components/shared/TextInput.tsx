import { useState } from "react";

type TextInputProps = {
  label: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
  className?: string;
};

export function TextInput({
  label,
  required = false,
  placeholder = "",
  type = "text",
  className = "",
}: TextInputProps) {
  const [value, setValue] = useState("");

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
      />
    </div>
  );
}
