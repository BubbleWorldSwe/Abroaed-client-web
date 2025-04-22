/* eslint-disable react/prop-types */
import { Edit, EllipsisVertical, Eye, Pencil, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TableFooter } from "../../../commons/components/table/tableFooter";
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";
import { setSelectedAccommodation } from "../../../redux/actions/accommodationActions";

const AccommodationTable = ({
  currentPage,
  handleNextPage,
  handlePrevPage,
  handleDelete,
  onUpdate,
}) => {
  const [dropdownDirection, setDropdownDirection] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const { accommodations, totalPages } = useSelector(
    (state) => state.accommodations
  );
  const { isWriteAccess } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownVisible(null);
    }
  };

  const handleSubmit = (status, id) => {
    try {
      onUpdate({ status: status }, id);
      setDropdownVisible(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewDetails = (accommodation) => {
    try {
      dispatch(setSelectedAccommodation(accommodation));

      navigate(
        `/admin/accommodation/${encodeURIComponent(accommodation._id)}`,
        {
          state: accommodation,
        }
      );
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

  const handleDropdownToggle = (e, index) => {
    e.stopPropagation();
    setDropdownVisible(dropdownVisible === index ? null : index);
    setDropdownDirection("down");
  };

  return (
    <>
      <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <CheckboxField
                onClick={(e) => e.stopPropagation()}
                id={`checkbox-accommodation-all`}
                htmlFor={`checkbox-accommodation-all`}
              />
            </th>
            <th scope="col" className="px-4 py-3 min-w-[14rem]">
              Name
            </th>
            <th scope="col" className="px-4 py-3 min-w-[10rem]">
              Location
            </th>
            <th scope="col" className="px-4 py-3 min-w-[10rem]">
              Price
            </th>
            <th scope="col" className="px-4 py-3 min-w-[14rem]">
              Availability
            </th>
            <th scope="col" className="px-4 py-3 min-w-[14rem]">
              Status
            </th>
            <th scope="col" className="px-4 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {accommodations?.map(
            (item) =>
              item?.index === currentPage &&
              item?.data.map((accommodation, index) => (
                <tr
                  key={index}
                  className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="px-4 py-3 w-4">
                    <CheckboxField
                      onClick={(e) => e.stopPropagation()}
                      id={`checkbox-accommodation-${index}`}
                      htmlFor={`checkbox-accommodation-${index}`}
                    />
                  </td>

                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {accommodation.accomodationName}
                  </th>
                  <td className="px-4 py-3">{`${accommodation?.stateId?.name}, ${accommodation?.destinationId?.countryId?.name}`}</td>
                  {/* <td className="px-4 py-3">{`${accommodation?.city}, ${accommodation?.stateId?.name}, ${accommodation.countryId?.name}`}</td> */}
                  <td className="px-4 py-3">
                    {`${accommodation.price} (in ${
                      accommodation?.destinationId?.countryId?.currency ||
                      accommodation.currency
                    })`}
                  </td>
                  <td className="px-4 py-3">{accommodation.availablity}</td>
                  <td className="px-4 py-3 line-clamp-3 overflow-scroll">
                    {accommodation?.status === "draft" ? "Draft" : "Published"}
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
                          dropdownDirection === "up"
                            ? "bottom-full mb-2"
                            : "mt-2"
                        }`}
                      >
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                          <li>
                            <button
                              type="button"
                              onClick={() => handleViewDetails(accommodation)}
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
                                      accommodation?.status === "draft"
                                        ? "publish"
                                        : "draft",
                                      accommodation._id
                                    )
                                  }
                                  className="flex items-center gap-2 py-2 px-4 dark:hover:bg-gray-600"
                                >
                                  <Edit className="w-4 h-4" />
                                  <span>
                                    {accommodation?.status === "draft"
                                      ? "Publish Page"
                                      : "Withdraw Page"}
                                  </span>
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setDeleteId(accommodation._id);
                                    setIsModalOpen(!isModalOpen);
                                    //setDropdownVisible(null);
                                  }}
                                  className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  <Trash2 className="w-4 h-4" />
                                  <span>Delete</span>
                                </button>
                              </li>
                            </>
                          )}
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
          tableData={accommodations}
          colSpan={7}
        />
      </table>

      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading="Delete!"
        onDelete={() => {
          handleDelete(deleteId);
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default AccommodationTable;
