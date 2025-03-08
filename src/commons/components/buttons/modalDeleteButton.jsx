export function ModalDeleteButton({ label, onClick, type }) {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className="px-4 py-2 bg-red-600 text-white rounded ml-7"
    >
      {label}
    </button>
  );
}
