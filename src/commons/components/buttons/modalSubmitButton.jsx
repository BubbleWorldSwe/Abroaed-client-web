export function ModalSubmitButton({
  label,
  onClick,
  type = "button",
  className,
}) {
  const defaultClass = "px-4 py-2 bg-blue-600 text-white rounded ml-7";

  return (
    <button onClick={onClick} type={type} className={className || defaultClass}>
      {label}
    </button>
  );
}
