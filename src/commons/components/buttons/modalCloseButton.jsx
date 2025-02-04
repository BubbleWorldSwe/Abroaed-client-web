export function ModalCloseButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2 bg-gray-300 rounded"
    >
      {label}
    </button>
  );
}
