/* eslint-disable react/prop-types */
import {
  Edit,
  EllipsisVertical,
  Eye,
  Trash2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDateTime } from "../../../utils/helper";
import { setSelectedDestination } from "../../../redux/actions/destinationActions";
import { useDispatch, useSelector } from "react-redux";
import { TableFooter } from "../../../commons/components/table/tableFooter";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";
import { TableNoData } from "../../../commons/components/table/tableNoData";
import { toast } from "react-toastify";
import { adminTable3dotsClass } from "../../../utils/className";

const DestinationTable = ({
  currentPage,
  handleNextPage,
  handlePrevPage,
  handleDelete,
  onUpdate,
}) => {
  const { destinations, totalPages } = useSelector(
    (state) => state.destinations
  );
  const { isWriteAccess, role } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

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

  const handleViewDetails = (destination) => {
    dispatch(setSelectedDestination(destination)); // Set selected country in Redux store
    navigate(`/admin/destinations/${encodeURIComponent(destination._id)}`, {
      state: destination,
    });
  };

  const handleDropdownToggle = (e, index) => {
    e.stopPropagation(); // Prevent the click from propagating
    setDropdownVisible(dropdownVisible === index ? null : index);
    // Optionally, you can adjust dropdown direction based on your layout
  };

  const handleSubmit = (status, id, destination) => {
    try {
      if (
        status === "complete" &&
        (!destination?.imageUrl ||
          !destination?.description ||
          !destination?.language ||
          !destination?.dialcode ||
          !destination?.intrStudents)
      ) {
        toast.error("Add image and overview details to publish page");
        return;
      }

      onUpdate({ status: status }, id);
      setDropdownVisible(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3 min-w-[14rem]">
              Country Name
            </th>

            <th scope="col" className="px-4 py-3 min-w-[10rem]">
              Status
            </th>
            <th scope="col" className="px-4 py-3 min-w-[10rem]">
              Author
            </th>
            <th scope="col" className="px-4 py-3 min-w-[14rem]">
              Created At
            </th>

            <th scope="col" className="px-4 py-3"></th>
          </tr>
        </thead>

        <tbody>
          {destinations.length > 0 ? (
            destinations.map(
              (item) =>
                item.index === currentPage &&
                item.data.map((destination, index) => (
                  <tr
                    key={index}
                    className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <th
                      onClick={() => handleViewDetails(destination)}
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {destination?.countryId?.name}
                    </th>

                    <td className="px-4 py-3">
                      {destination?.status === "draft" ? "Draft" : "Published"}
                    </td>
                    <td className="px-4 py-3">
                      {destination?.createdBy
                        ? `${destination?.createdBy?.firstName} ${destination?.createdBy?.lastName}`
                        : `Admin`}
                    </td>

                    <td className="px-4 py-3">
                      {formatDateTime(destination.createdAt)}
                    </td>

                    <td className="px-4 py-3 relative">
                      <div className="relative inline-block">

                        <button
                          className="focus:outline-none"
                          onClick={(e) => handleDropdownToggle(e, index)}
                        >
                          <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        </button>
                        {dropdownVisible === index && (
                          <div
                            ref={dropdownRef}
                            className={adminTable3dotsClass}
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
                              {isWriteAccess && (
                                <>
                                  <li>
                                    <button
                                      onClick={() =>
                                        handleSubmit(
                                          destination?.status === "draft"
                                            ? "complete"
                                            : "draft",
                                          destination._id,
                                          destination
                                        )
                                      }
                                      className="flex items-center gap-2 py-2 px-4 dark:hover:bg-gray-600"
                                    >
                                      <Edit className="w-4 h-4" />
                                      <span>
                                        {destination?.status === "draft"
                                          ? "Publish Page"
                                          : "Withdraw Page"}
                                      </span>
                                    </button>
                                  </li>
                                  {role === "Admin" && (
                                    <li>
                                      <button
                                        onClick={() => {
                                          setDeleteId(destination);
                                          setIsModalOpen(!isModalOpen);
                                        }}
                                        // onClick={() => handleDelete(destination._id)}
                                        className="flex items-center gap-2 py-2 px-4 dark:hover:bg-gray-600"
                                      >
                                        <Trash2 className="w-4 h-4" />
                                        <span>Delete</span>
                                      </button>
                                    </li>
                                  )}
                                </>
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
            )
          ) : (
            <TableNoData colSpan={6} />
          )}
        </tbody>
        <TableFooter
          totalPages={totalPages}
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          tableData={destinations}
          colSpan={6}
        />
      </table>

      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading={`Delete : ${deleteId?.countryId?.name}`}
        onDelete={() => {
          handleDelete(deleteId?._id);
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default DestinationTable;
