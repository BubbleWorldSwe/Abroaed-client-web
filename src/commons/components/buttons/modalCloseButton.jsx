/* eslint-disable react/prop-types */
export function ModalCloseButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      // className="px-4 py-2 bg-red-600 text-white rounded ml-5"
      className="border-2 border-gray-500 text-gray-700 px-4 py-2 ml-7 rounded transition"
    >
      {label}
    </button>
  );
}
