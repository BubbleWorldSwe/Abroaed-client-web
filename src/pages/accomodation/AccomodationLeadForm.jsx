import React from "react";

function AccomodationLeadForm() {
  return (
    <div>
      <section className="bg-yellow-200 relative isolate overflow-hidden">
        <div className="mx-auto md:max-w-6xl max-w-xl px-4 py-4 md:py-8">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 lg:gap-12">
            <div className="px-4 py-4">
              <h1 className="md:text-4xl text-xl font-Poppins text-black font-bold leading-6 tracking-wide">
                We’re just a call away
              </h1>
              <p className="font-Poppins mt-3 md:mt-6 text-sm leading-6 tracking-wide text-black font-medium">
                Share your contact details to speed up your accommodation hunt.
              </p>
            </div>

            <div className="px-4 py-4 md:pt-5 max-w-md bg-yellow-400 rounded-lg shadow-md">
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    className="rounded-xl px-3 py-2.5 placeholder:font-Poppins placeholder:text-xs leading-6 tracking-wide font-Poppins text-black text-xs focus:outline-none focus:ring-0 w-full focus:shadow-custom-white focus:shadow-gray-600 shadow-md transition-all duration-500 ease-in-out"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
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
                  className="capitalize hover:shadow-custom-white hover:shadow-gray-500 shadow-sm transition-all duration-300 ease-in-out font-medium lg:w-1/2 inline-flex gap-2 justify-center items-center active:translate-y-[6px] w-full bg-[#002CBF] rounded-xl px-2 py-3 text-white text-sm font-Poppins leading-6 tracking-wide"
                >
                  Submit
                  <svg
                    className="size-4"
                    viewBox="0 0 43 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.25516 14.5952C1.76076 20.3576 17.1664 25.532 17.1664 25.532C17.1664 25.532 22.3409 40.9376 28.1033 37.4432C34.2185 33.7136 41.5433 10.7984 36.7049 5.99359C31.8665 1.18879 8.98477 8.47997 5.25516 14.5952Z"
                      stroke="white"
                      strokeWidth="3.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.8758 15.8216L17.1654 25.532"
                      stroke="white"
                      strokeWidth="3.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AccomodationLeadForm;
