/* eslint-disable react/prop-types */
export function ModalCloseButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded transition"
    >
      {label}
    </button>
  );
}
