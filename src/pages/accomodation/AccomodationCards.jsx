
import AccomadationModal from "./AccomadationModal";
import { accommodations } from "../../lib/data";



function AccommodationGrid() {
  return (
    <div className="flex gap-4 px-6 py-8 bg-white">
      {/* Search Bar Section */}
      <div className="w-1/4  p-6 ">
        <h3 className="text-lg font-bold mb-4 text-gray-900">Search</h3>
        <input
          type="text"
          placeholder="Search by location"
          className="w-full p-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Cards Grid Section */}
      <div className="w-3/4">
        <h5 className=" text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Showing Results for USA</h5>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-800"></hr>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
          {accommodations.map((item, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={item.imgUrl}
                  alt={item.name}
                />
              </a>
              <div className="p-5">
                <div className="flex justify-between">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                  <div>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
                    </svg>

                  </div>
                </div>
                <div className="mb-2  flex text-center ">
                  <span className="mr-2">
                    <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                  </span>
                  <p className="font-bold  text-gray-500 dark:text-gray-400 py-1">

                    {item.location}
                  </p>
                </div>
                <div className="mb-2  flex text-center">
                  <span className="mr-2">
                    <svg className="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                  </span>
                  <p className="mb-2 font-bold   text-gray-500 dark:text-white">
                    {item.price}
                  </p>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
                <div >
                  <button type="button" data-modal-target="default-modal" data-modal-toggle="default-modal" className="py-2.5 w-full px-5 me-2 mb-2 text font-medium text-gray-700 focus:outline-none bg-white rounded-lg border border-gray-700 hover:bg-gray-100 hover:text-green-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Enquire Now</button>
                </div>
               <AccomadationModal  />
                
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default AccommodationGrid;