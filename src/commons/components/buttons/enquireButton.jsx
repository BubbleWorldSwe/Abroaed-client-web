/* eslint-disable react/prop-types */
export function EnquireButton({ type, href, onClick }) {
  return (
    <a href={href} className="w-full">
      <button
        type={type}
        onClick={onClick}
        className={`py-2 w-full px-5 text-gray-primary hover:bg-gray-primary hover:text-white border-gray-primary text-base font-semibold rounded-[4px] border-2   focus:ring-4 focus:ring-gray-100 `}
      >
        Enquire Now
      </button>
    </a>
  );
}
