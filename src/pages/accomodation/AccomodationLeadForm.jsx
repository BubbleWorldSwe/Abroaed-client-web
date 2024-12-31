import React from "react";

function AccomodationLeadForm() {
  return (
    <div>
      <section className="bg-white relative isolate overflow-hidden">
        <div className="px-4 py-4 md:py-8">
          <div className="flex justify-between lg:gap-6">
            <div className="w-3/4 px-4 py-4">
              <h1 className="md:text-4xl text-xl font-Poppins text-black font-bold leading-6 tracking-wide">
                Do culpa excepteur et consequat ex est dolor do eiusmod commodo proident amet.
              </h1>
              <p className="font-Poppins mt-3 md:mt-6 text-sm leading-6 tracking-wide text-black font-medium">
                Aliquip nisi laboris cupidatat veniam duis laboris fugiat eiusmod ut commodo occaecat tempor excepteur.
              </p>
            </div>

            <div className="w-1/4 ">


              <form className="">
                <div className="mb-5">
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                  <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                  <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" required />
                </div>
                <div className="flex items-start mb-5">
                  <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-yellow-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                  </div>
                  <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>

                <fieldset>

                  <div className="flex items-center mb-4">
                    <input checked id="checkbox-1" type="checkbox" value="" className="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the <a href="#" className="text-yellow-600 hover:underline dark:text-yellow-500">terms and conditions</a>.</label>
                  </div>

                
                </fieldset>

                <button type="submit" className="text-white mt-3 bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Submit</button>

              </form>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AccomodationLeadForm;
