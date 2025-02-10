/* eslint-disable react/prop-types */
import { EllipsisVertical, Eye, Pencil } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatDate, formatDateTime } from "../../../utils/helper";
import { TableFooter } from "../../../commons/components/table/tableFooter";

const LanguagePrepTable = ({
  currentPage,
  handleNextPage,
  handlePrevPage,
  handleDelete,
}) => {
  const { loading, languagePreps, totalPages, total } = useSelector(
    (state) => state.languagePreps
  );

  const [dropdownDirection, setDropdownDirection] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownVisible(null);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (e, index) => {
    e.stopPropagation();
    setDropdownVisible(dropdownVisible === index ? null : index);
    setDropdownDirection("down");
  };

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-500  bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="p-4"></th>
          <th scope="col" className="px-4 py-3 min-w-[14rem]">
            Product Name
          </th>
          <th scope="col" className="px-4 py-3 min-w-[10rem]">
            Language
          </th>
          <th scope="col" className="px-4 py-3 min-w-[10rem]">
            Created By
          </th>
          <th scope="col" className="px-4 py-3 min-w-[14rem]">
            Last Updated
          </th>

          <th scope="col" className="px-4 py-3">
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>

      <tbody>
        {languagePreps?.map(
          (item) =>
            item?.index === currentPage &&
            item?.data.map((language, index) => (
              <tr
                key={index}
                className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className="px-4 py-3 w-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-college-${index}`}
                      type="checkbox"
                      onClick={(e) => e.stopPropagation()}
                      className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`checkbox-college-${index}`}
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>

                <th
                  scope="row"
                  className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {language.productName}
                </th>

                <td className="px-4 py-3">{language.language}</td>
                <td className="px-4 py-3"> {formatDate(language.createdAt)}</td>
                <td className="px-4 py-3">
                  <a
                    href={language.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {formatDateTime(language.createdAt)}
                  </a>
                </td>
                <td className="px-4 py-3">
                  <button
                    className="focus:outline-none"
                    onClick={(e) => handleDropdownToggle(e, index)}
                  >
                    <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </button>
                  {dropdownVisible === index && (
                    <div
                      ref={dropdownRef}
                      className={`absolute right-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-[9999] ${
                        dropdownDirection === "up" ? "bottom-full mb-2" : "mt-2"
                      }`}
                    >
                      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                          <button
                            type="button"
                            onClick={() =>
                              navigate(
                                `/admin/langPrep/${encodeURIComponent(
                                  language.name
                                )}`
                              )
                            }
                            className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <Eye className="w-4 h-4" />
                            <span>View Details</span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={""}
                            className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <Pencil className="w-4 h-4" />
                            <span>Edit</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))
        )}
      </tbody>
      <TableFooter
        totalPages={totalPages}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        tableData={languagePreps}
      />
    </table>
  );
};

export default LanguagePrepTable;
