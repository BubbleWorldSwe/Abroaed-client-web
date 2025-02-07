import {
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
  Eye,
  Trash2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate, formatDateTime } from "../../../utils/helper";
import { setSelectedCountry } from "../../../redux/actions/destinationActions";
import { useDispatch } from "react-redux";

const DestinationTable = ({
  destinations,
  currentPage,
  totalPages,
  handleNextPage,
  handlePrevPage,
  handleDelete,
}) => {
  const [dropdownDirection, setDropdownDirection] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    // Close dropdown if the click is outside of the dropdown area
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownVisible(null);
    }
  };

  const getDataLength = () => {
    const pageData = destinations?.find((item) => item.index === currentPage);
    return pageData?.data?.length || 0;
  };

  const handleViewDetails = (destination) => {
    dispatch(setSelectedCountry(destination)); // Set selected country in Redux store
    navigate(`/admin/destinations/${encodeURIComponent(destination._id)}`, {
      state: destination,
    });
  };

  const handleDropdownToggle = (e, index) => {
    e.stopPropagation(); // Prevent the click from propagating
    setDropdownVisible(dropdownVisible === index ? null : index);
    // Optionally, you can adjust dropdown direction based on your layout
    setDropdownDirection("down");
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log("destinations updated:", destinations);
  }, [destinations, currentPage, totalPages]);

  return (
    <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="p-4"></th>
          <th scope="col" className="px-4 py-3 min-w-[14rem]">
            Country Name
          </th>
          <th scope="col" className="px-4 py-3 min-w-[10rem]">
            Author
          </th>
          <th scope="col" className="px-4 py-3 min-w-[10rem]">
            Status
          </th>
          <th scope="col" className="px-4 py-3 min-w-[14rem]">
            Created At
          </th>

          <th scope="col" className="px-4 py-3">
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>

      <tbody>
        {destinations.map(
          (item) =>
            item.index === currentPage &&
            item.data.map((destination, index) => (
              <tr
                key={index}
                className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className="px-4 py-3 w-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-destination-${index}`}
                      type="checkbox"
                      onClick={(e) => e.stopPropagation()}
                      className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`checkbox-destination-${index}`}
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
                  {destination?.countryId?.name}
                </th>

                <td className="px-4 py-3">{destination?.author}</td>
                <td className="px-4 py-3">{destination?.status}</td>
                <td className="px-4 py-3">
                  {formatDateTime(destination.createdAt)}
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
                            onClick={() => handleViewDetails(destination)}
                            className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <Eye className="w-4 h-4" />
                            <span>View Details</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleDelete(destination._id)}
                            className="flex items-center gap-2 py-2 px-4 dark:hover:bg-gray-600"
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
      <tfoot>
        <tr className="bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <td className="px-4 py-3" colSpan="7">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">
                Showing {getDataLength()} results
              </span>
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-full ${
                    currentPage === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </button>

                <span className="text-gray-600 dark:text-gray-300">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-full ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default DestinationTable;
