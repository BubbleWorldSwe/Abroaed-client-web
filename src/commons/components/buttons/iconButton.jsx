import { Download } from "lucide-react";

/* eslint-disable react/prop-types */
export function IconButton({ label, onClick, icon }) {
  return (
    <div className="flex gap-2 font-rethink">
      <button
        onClick={onClick}
        type="button"
        className="w-full gap-2 whitespace-nowrap  md:w-auto flex items-center justify-center py-2 px-4 text-sm font-semibold  text-gray-700 focus:outline-none bg-[#EDBD05] rounded-lg border border-gray-200 hover:bg-yellow-300   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        {icon}
        {label}
      </button>
    </div>
  );
}
