/* eslint-disable react/prop-types */
import { EllipsisVertical, Eye, Pencil, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";
import { TableFooter } from "../../../commons/components/table/tableFooter";
import { setSelectedTestPrep } from "../../../redux/actions/testPrepsActions";

const TestPrepTable = ({
  currentPage,
  handleNextPage,
  handlePrevPage,
  handleDelete,
}) => {
  const { testPreps, totalPages } = useSelector((state) => state.testPreps);
  const dispatch = useDispatch();
  const [dropdownDirection, setDropdownDirection] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownVisible(null);
    }
  };

  const handleViewDetails = (testPrep) => {
    dispatch(setSelectedTestPrep(testPrep));
    navigate(`/admin/testPrep/${encodeURIComponent(testPrep._id)}`, {
      state: testPrep,
    });
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
          <th scope="col" className="px-4 py-3 ">
            <CheckboxField
              onClick={(e) => e.stopPropagation()}
              id={`checkbox-college-all`}
              htmlFor={`checkbox-college-all`}
            />
          </th>
          <th scope="col" className="px-4 py-1 min-w-[14rem]">
            Product Name
          </th>
          <th scope="col" className="px-4 py-1 min-w-[10rem]">
            Exam
          </th>
          <th scope="col" className="px-4 py-1 min-w-[10rem]">
            Language
          </th>
          <th scope="col" className="px-4 py-3">
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>

      <tbody>
        {testPreps.map(
          (item) =>
            item?.index === currentPage &&
            item?.data.map((test, index) => (
              <tr
                key={index}
                className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className="px-4 py-3 w-4">
                  <CheckboxField
                    onClick={(e) => e.stopPropagation()}
                    id={`checkbox-college-${index}`}
                    htmlFor={`checkbox-college-${index}`}
                  />
                </td>

                <th
                  scope="row"
                  className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {test.productName}
                </th>

                <td className="px-4 py-3">{test.exam}</td>
                <td className="px-4 py-3">{test.language}</td>

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
                            onClick={() => handleViewDetails(test)}
                            className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <Eye className="w-4 h-4" />
                            <span>View Details</span>
                          </button>
                        </li>

                        <li>
                          <button
                            type="button"
                            onClick={() => {
                              handleDelete(test._id);
                              setDropdownVisible(null);
                            }}
                            className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span>Delete</span>
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
        tableData={testPreps}
      />
    </table>
  );
};

export default TestPrepTable;
