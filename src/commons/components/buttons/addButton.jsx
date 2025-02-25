/* eslint-disable react/prop-types */
export function AddButton({ label, onClick }) {
  return (
    <div className="flex gap-2 font-rethink">
      <button
        onClick={onClick}
        type="button"
        className="w-full whitespace-nowrap  md:w-auto flex items-center justify-center py-2 px-4 text-sm font-semibold  text-gray-700 focus:outline-none bg-[#EDBD05] rounded-lg border border-gray-200 hover:bg-yellow-300   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        <svg
          className="w-6 h-6 p-1 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14m-7 7V5"
          />
        </svg>
        {label}
      </button>
    </div>
  );
}
