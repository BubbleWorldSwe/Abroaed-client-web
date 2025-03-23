/* eslint-disable react/prop-types */
import { ChevronDown, ChevronUp } from "lucide-react";

const DropdownMenu = ({
  title,
  items,
  urlPrefix,
  stateKey,
  toggleDropdown,
  isOpen,
}) => {
  return (
    <li className="relative">
      <button
        onClick={() => toggleDropdown(stateKey)}
        className="font-medium text-white flex items-center gap-1"
      >
        {title} {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-[70%] bg-white border shadow-md">
          <ul>
            {items?.map((data, i) => (
              <li key={i}>
                <a
                  href={`/${urlPrefix}/${data._id}`}
                  className="block px-4 py-2 hover:bg-gray-100"
                  target="_blank"
                >
                  {data?.productName ||
                    `${data?.countryId?.emoji} ${data?.countryId?.name}` ||
                    data?.menu}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default DropdownMenu;
