import image from "../../assets/dark.png";


const AccomadationModal = () => {
  return (
    <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50">
      <div class="relative w-full max-w-6xl p-4">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div class="flex items-center justify-between p-4 md:p-5 dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Enquire Now
            </h3>
            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div class="flex gap-2 px-4 pb-6">
            <div class="w-2/5  px-1">
              <div
              >
                {/* <a href="#"> */}
                <img
                  className="rounded-t-lg w-full  object-cover"
                  src={image}
                //   alt={item.name}
                />
                {/* </a> */}
                <div className="px-2 py-1">
                  <div className="flex justify-between">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {/* {item.name} */}
                      Luxury Apartment
                    </h5>
                  </div>
                  <div className="mb-2  flex text-center ">
                    <span className="mr-2">
                      <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>

                    </span>
                    <p className="font-bold  text-gray-500 dark:text-gray-400 py-1">
                      New Delhi
                      {/* {item.location} */}
                    </p>
                  </div>
                  <div className="mb-2  flex text-center">
                    <span className="mr-2">
                      <svg className="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                      </svg>
                    </span>
                    <p className="mb-2 font-bold   text-gray-500 dark:text-white">
                      $150/night
                      {/* {item.Phone} */}
                    </p>
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere.{/* {item.description} */}
                  </p>

                </div>
              </div>
            </div>
            <div className="w-3/5  px-4">
              <form action="#">
                <div class="grid gap-4 mb-4 sm:grid-cols-3">
                  <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name*</label>
                    <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Name" required="" />
                  </div>
                  <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email*</label>
                    <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Email" required="" />
                  </div>
                  <div>
                    <label for="Phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone*</label>
                    <input type="tel" name="Phone" id="Phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="+91 9993425332" required="" />
                  </div>

                </div>
                <div class="sm:col-span-2">
                  <label for="description" class="block  mb-2 font-normal text-gray-900 dark:text-white">Message (optional)</label>
                  <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here"></textarea>
                </div>
                <div>
                  <div className="flex items-start mt-4 mb-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 mt-0.5 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      required
                    />
                    <label className="ml-2 text-sm font-light text-gray-500 dark:text-gray-400">
                      I agree to Abroaed Terms and privacy policy. Please contact me by phone,
                      email, or SMS to assist with my enquiry. I would like to receive updates
                      and offers from Abroaed.
                    </label>

                  </div>
                  <button type="submit" class="text-white inline-flex items-center bg-primary-500 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    {/* <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg> */}
                    Submit
                  </button>

                </div>
              </form>

            </div>
          </div>
 </div>
      </div>
    </div>
  )
}

export default AccomadationModal