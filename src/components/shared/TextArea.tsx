import { useState } from "react";

type TextAreaProps = {
  label: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  className?: string;
};

export function TextArea({
  label,
  required = false,
  placeholder = "",
  rows = 4,
  className = "",
}: TextAreaProps) {
  const [value, setValue] = useState("");

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
      />
    </div>
  );
}
