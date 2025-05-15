import { useEffect, useState } from "react";
import filter_list from "../../../assets/filter_list.png";
import DestinationTable from "../tables/destinationTable";
import { useDispatch, useSelector } from "react-redux";
import {
  addDestinationRequest,
  deleteDestinationRequest,
  editDestinationRequest,
  fetchDestinationsRequest,
} from "../../../redux/actions/destinationActions";
import AddDestinationModal from "../modals/addDestinationModal";
import { AddButton } from "../../../commons/components/buttons/addButton";
import ActivityLoader from "../../../commons/components/loader/activityLoader";

function Destinations() {
  const dispatch = useDispatch();
  const { isWriteAccess } = useSelector((state) => state.auth);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");

  const { loading, destinations, totalPages, total } = useSelector(
    (state) => state.destinations
  );

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const onAddDestination = (countryId, capital) => {
    console.log(countryId, capital);

    dispatch(addDestinationRequest({ countryId, capital }));
    setCurrentPage(1);
    dispatch(fetchDestinationsRequest(1));
    setIsAddModalOpen(false);
  };

  const handleDelete = (id) => {
    console.log("handleDelete " + id);
    dispatch(deleteDestinationRequest(id));
    setCurrentPage(1);
    dispatch(fetchDestinationsRequest(1));
  };

  async function onUpdate(data, id) {
    try {
      console.log(data, id);
      dispatch(editDestinationRequest(id, data));
    } catch (error) {
      console.log(error);
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const pageExists = destinations.some(
        (item) => item.index === currentPage + 1
      );

      if (!pageExists) {
        dispatch(fetchDestinationsRequest(currentPage + 1));
      }

      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const pageExists = destinations.some(
        (item) => item.index === currentPage - 1
      );

      if (!pageExists) {
        dispatch(fetchDestinationsRequest(currentPage - 1));
      }

      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (destinations?.length === 0) {
      dispatch(fetchDestinationsRequest(currentPage));
    }
  }, [dispatch, destinations, currentPage]);

  return (
    <>
      <AddDestinationModal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        onAddDestination={onAddDestination}
      />
      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
        <section className="py-3 sm:py-5 flex-grow">
          <div className="flex py-2 flex-col h-screen mx-auto max-w-screen-2xl bg-white dark:bg-gray-800 relative sm:rounded-lg">
            <div className="mx-4">
              <div className="flex justify-between py-3">
                <div className="w-full flex space-y-3 md:space-y-0">
                  {/*   <form className="w-full md:max-w-sm flex-1 md:mr-4">
                    <label
                      htmlFor="default-search"
                      className="text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-2 pl-10 text-sm text-gray-900 border-2 border-gray-500 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Search Teams"
                        required
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </div>
                  </form>
                  <div className="flex items-center space-x-4">
                    <img src={filter_list} alt="filterIcon" />
                  </div> */}
                </div>

                {isWriteAccess && (
                  <AddButton
                    onClick={() => setIsAddModalOpen(true)}
                    label={"New Destination"}
                  />
                )}
              </div>
            </div>
            <div className="flex-grow mt-1 overflow-auto bg-white dark:bg-gray-800 px-5">
              <DestinationTable
                currentPage={currentPage}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handleDelete={handleDelete}
                onUpdate={onUpdate}
              />
            </div>
          </div>
        </section>
      </div>
      <ActivityLoader loading={loading} />
    </>
  );
}

export default Destinations;
