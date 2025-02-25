export function EnquireButton({ type, href, onClick }) {
  return (
    <a href={href} className="w-full">
      <button
        type={type}
        onClick={onClick}
        className="py-2 w-full px-5 text-gray-700 bg-white rounded-[4px] border-[1.5px] border-gray-700 hover:bg-gray-100 hover:text-green-900 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Enquire Now
      </button>
    </a>
  );
}
