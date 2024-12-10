import React from "react";

function TestPrepForm() {
  return (
    <div className="p-8">
      <section className="mx-auto max-w-7xl gap-x-4 gap-y-8 rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-8 ">
        <div className="mx-auto md:max-w-6xl max-w-xl ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 lg:gap-12">
            <div className="px-4 py-4 flex flex-col h-full items-start justify-center">
              <h1 className="md:text-4xl text-xl font-Poppins text-black font-bold leading-6 tracking-wide">
                Still Have Queries?
                <br /> Need Help?
              </h1>
              <p className="font-Poppins mt-3 md:mt-6 text-sm leading-6 tracking-wide text-black font-medium">
                Share your contact details to speed up your accommodation hunt.
              </p>
            </div>

            <div className="px-4 py-4 md:pt-5 max-w-md">
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    id="Name"
                    name="Name"
                    placeholder="Name"
                    className="rounded-xl px-3 py-2.5 placeholder:font-Poppins placeholder:text-xs leading-6 tracking-wide font-Poppins text-black text-xs focus:outline-none focus:ring-0 w-full focus:shadow-custom-white focus:shadow-gray-600 shadow-md transition-all duration-500 ease-in-out"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="rounded-xl px-3 py-2.5 placeholder:font-Poppins placeholder:text-xs leading-6 tracking-wide font-Poppins text-black text-xs focus:outline-none focus:ring-0 w-full focus:shadow-custom-white focus:shadow-gray-600 shadow-md transition-all duration-500 ease-in-out"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email ID"
                    className="rounded-xl px-3 py-2.5 placeholder:font-Poppins placeholder:text-xs leading-6 tracking-wide font-Poppins text-black text-xs focus:outline-none focus:ring-0 w-full focus:shadow-custom-white focus:shadow-gray-600 shadow-md transition-all duration-500 ease-in-out"
                  />
                </div>
                <button
                  type="submit"
                  className="capitalize text-black font-inter hover:shadow-custom-white hover:shadow-gray-500 shadow-sm transition-all duration-300 ease-in-out font-medium lg:w-1/2 inline-flex gap-2 justify-center items-center active:translate-y-[6px] w-full bg-primary-500 rounded-xl px-2 py-3  text-sm font-Poppins leading-6 tracking-wide"
                >
                  Schedule a call
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestPrepForm;
