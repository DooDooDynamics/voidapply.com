import { useState } from "react";

type FileUploadProps = {
  label: string;
  required?: boolean;
  accept?: string;
  className?: string;
};

export function FileUpload({
  label,
  required = false,
  accept = ".pdf,.doc,.docx",
  className = "",
}: FileUploadProps) {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="flex items-center gap-3">
        <label className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          Choose File
          <input
            type="file"
            accept={accept}
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0];
              setFileName(file?.name ?? null);
            }}
          />
        </label>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {fileName ?? "No file chosen"}
        </span>
      </div>
    </div>
  );
}
