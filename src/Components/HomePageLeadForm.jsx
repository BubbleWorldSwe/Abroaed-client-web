import React from "react";
import { TermsAndConditions } from "./AnimatedTabs";

function HomePageLeadForm() {
  return (
    <div>
      <section className="bg-white relative isolate overflow-hidden">
        <div className="mx-auto md:max-w-6xl max-w-xl px-4 py-4 md:py-8">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 lg:gap-12">
            <div className="px-4 py-4 flex flex-col items-start justify-center">
              <h1 className="md:text-4xl text-xl font-Poppins text-black font-bold leading-6 tracking-wide">
                We’re just a call away
              </h1>
              <p className="font-Poppins mt-3 md:mt-6 text-sm leading-6 tracking-wide text-black font-medium">
                Share your contact details to speed up your accommodation hunt.
              </p>
            </div>

            <div className="px-4 py-4 md:pt-5 max-w-md  ">
             

<form className="max-w-sm mx-auto">
  <div className="mb-5">
    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name*</label>
    <input type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email*</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number*</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="flex items-start mt-4 mb-5">
      <input
        type="checkbox"
        className="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        required
      />
     <label className="ml-2 text-sm font-light text-gray-500 dark:text-gray-400">
  I agree to Abroaed <span className="font-bold">Terms of Service</span> and <span className="font-bold">Privacy Policy</span>.
</label>


    </div>
  <div >
  <button
  type="submit"
  className="w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none focus:ring-yellow-400"
  style={{
    backgroundColor: '#FDDA24',
    color: '#000', // Adjust text color for better contrast
  }}
>
  Get Help
</button>

</div>

</form>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePageLeadForm;
