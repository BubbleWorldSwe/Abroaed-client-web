export function ModalSubmitButton({ label, onClick, type }) {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className="px-4 py-2 bg-blue-600 text-white rounded ml-7"
    >
      {label}
    </button>
  );
}
