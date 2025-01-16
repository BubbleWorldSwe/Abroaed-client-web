import { accommodations } from "../../lib/data";
import locationIcon from "../../assets/locationIcon.png"

const StudentAccommodations = () => {
  return (
    <div className="relative z-10 px-10 mx-auto">
    <section className=" dark:bg-gray-900 relative">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols lg:py-16 lg:px-6">
            <div className="font  text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className=" text-4xl  font-extrabold text-gray-900 dark:text-white">
                Popular Student Accommodations
                </h2>
               <div className="my-5 border-t border-gray-300"></div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
               {accommodations.slice(0,4).map((item, index) => (
            <div
              key={index}
              className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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
                  <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                  <div>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
                    </svg>

                  </div>
                </div>
               <div className="mb-2  flex justify-between text-center ">
                                 <div className="flex gap-2 justify-between">
                                 <img
                                 className="rounded-t-lg  object-contain"
                                 src={locationIcon}
                                 alt={item.name}
                               />
               
                                 <p className="font-bold  text-gray-500 dark:text-gray-400 py-1">
               {item.location}
                                 </p>
                                 </div>
                                 
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
                              </div>
            </div>
          ))}


                <div>


                </div>



            </div>

        <div className="text-center ">
        <button
                  type="submit"
                  className="py-3 px-10 text-md font-900 mt-4 text-center text-black rounded-lg bg-yellow-200 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
                >
                  View All
                </button>
        </div>
        </div>
    </section>
</div>
  )
}

export default StudentAccommodations;