import { useEffect, useState } from "react";
import { accommodationData } from "../data";
import AccommodationTable from "../tables/accommodationTable";
import AddAccommodationModal from "../modals/addAccommodationModal";
import ConfirmModal from "../../../commons/modal/confirmModal";
import {
  addAccommodationRequest,
  deleteAccommodationRequest,
  editAccommodationRequest,
  fetchAccommodationsRequest,
} from "../../../redux/actions/accommodationActions";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountriesRequest } from "../../../redux/actions/countryActions";
import { getAllDestinations } from "../../../api/destinationApi";
import { getStatesByCountryId } from "../../../api/countriesApi";
import { AddButton } from "../../../commons/components/buttons/addButton";
import ActivityLoader from "../../../commons/components/loader/activityLoader";

const Accommodations = () => {
  const { isWriteAccess } = useSelector((state) => state.auth);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State to manage Add modal open/close
  const [isDone, setIsDone] = useState(false);
  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };
  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [destinationsList, setDestinationsList] = useState([]);
  const [statesList, setStatesList] = useState([]);

  const { accommodations, totalPages, loading } = useSelector(
    (state) => state.accommodations
  );

  const handleAddAccommodation = (data) => {
    //  setIsAddModalOpen(false);
    console.log("handleAddAccommodation");
    // console.log(data);

    dispatch(addAccommodationRequest(data));
    setCurrentPage(1);
    // dispatch(fetchAccommodationsRequest(1));
    handleCloseAddModal();
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const pageExists = accommodations.some(
        (item) => item.index === currentPage + 1
      );

      if (!pageExists) {
        dispatch(fetchAccommodationsRequest(currentPage + 1));
      }

      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const pageExists = accommodations.some(
        (item) => item.index === currentPage - 1
      );

      if (!pageExists) {
        dispatch(fetchAccommodationsRequest(currentPage - 1));
      }

      setCurrentPage((prev) => prev - 1);
    }
  };

  const fetchCountries = (q) => {
    dispatch(fetchCountriesRequest(q));
  };

  const handleDelete = (id) => {
    console.log("handleDelete " + id);
    dispatch(deleteAccommodationRequest(id));
    setCurrentPage(1);
    dispatch(fetchAccommodationsRequest(1));
  };

  async function fetchData() {
    try {
      const list = await getAllDestinations();

      if (list.status === 200) {
        setDestinationsList(list.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchStatesList(countryId) {
    try {
      setStatesList([]);
      const statesList = await getStatesByCountryId(countryId);

      if (statesList.status === 200) {
        setStatesList(statesList.data.result.states);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function onUpdate(data, id) {
    try {
      console.log(data, id);
      dispatch(editAccommodationRequest(id, data));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (accommodations?.length === 0) {
      console.log("fetchAccommodationsRequest");
      dispatch(fetchAccommodationsRequest(currentPage));
    }
    fetchData();
  }, [dispatch, accommodations, currentPage]);

  return (
    <>
      <AddAccommodationModal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        setIsDone={setIsDone}
        onAddAccommodation={handleAddAccommodation}
        fetchCountries={fetchCountries}
        destinationsList={destinationsList}
        getStatesList={fetchStatesList}
        statesList={statesList}
      />
      <ConfirmModal
        isOpen={isDone}
        onClose={() => setIsDone(false)}
        text="Accommodation Added!"
      />
      <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col ">
        <section className=" py-3 sm:py-5 flex-grow">
          <div className="flex py-2 flex-col h-screen mx-auto max-w-screen-2xl bg-white dark:bg-gray-800 relative  sm:rounded-lg">
            <div className=" dark:border-gray-700 mx-4">
              <div className="flex justify-between  py-3">
                <div className="w-full  flex  space-y-3 md:space-y-0  ">
                  {/*  <form className="w-full md:max-w-sm flex-1 md:mr-4">
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
                        className="block w-full p-2 pl-10 text-sm text-gray-900 border-2 border-gray-500 rounded-lg  focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Search Teams"
                        required=""
                      />
                    </div>
                  </form>
                  <div className="flex items-center space-x-4">
                    <img src={filter_list} alt="filterIcon" />
                  </div> */}
                </div>

                {isWriteAccess && (
                  <AddButton
                    onClick={handleOpenAddModal}
                    label={"New Accommodation"}
                  />
                )}
              </div>
            </div>
            <div className="flex-grow mt-1 overflow-auto bg-white dark:bg-gray-800 px-5">
              <AccommodationTable
                accommodationData={accommodationData}
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
};

export default Accommodations;
