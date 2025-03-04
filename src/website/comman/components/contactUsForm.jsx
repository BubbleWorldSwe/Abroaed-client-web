import { BorderTextInputField } from "../../../commons/components/inputFields/borderTextInputField";

const ContactUsForm = () => {
  return (
    <section className="relative isolate overflow-hidden z-10 px-10 mx-auto">
      <div className="py-2 px-4 mx-auto max-w-screen-2xl  dark:bg-gray-800 antialiased relative ">
        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-12">
          {/* Left Section - 60% Width */}
          <div className="lg:w-3/5 px-4 py-4 flex flex-col justify-center">
            <h1 className="text-[45px] font-black max-w-xl text-black leading-tight tracking-wide">
              Book your counseling session today!
            </h1>
            <p className="mt-3 md:mt-6 text-lg leading-6 text-gray-500 tracking-wide font-medium">
              Our specialised home counseling session is available at your convenience. Don’t waste a minute—take a stride towards your future by contacting our study abroad expert today.
            </p>
          </div>

          {/* Right Section - 40% Width */}
          <div className="lg:w-2/5 px-4 py-4 md:pt-5 max-w-md">
            <form className="max-w-sm mx-auto">
              <BorderTextInputField label={"First Name*"} placeholder="Enter" />
              <BorderTextInputField label={"Last Name*"} placeholder="Enter" />
              <BorderTextInputField label={"Email ID*"} placeholder="Enter" />
              <BorderTextInputField
                label={"Contact Number**"}
                placeholder="Enter"
              />

              <div className="flex items-start mt-8 mb-5">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
                <label className="ml-2 text-sm font-light text-gray-500 dark:text-gray-400">
                  I agree to Abroaed{" "}
                  <span className="font-bold">Terms of Service</span> and{" "}
                  <span className="font-bold">Privacy Policy</span>.
                </label>
              </div>
              <div className="flex items-start mt-4 mb-8">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
                <label className="ml-2 text-sm font-light text-gray-500 dark:text-gray-400">
                  Please contact me by phone, email, or SMS to assist with my
                  enquiry. I would like to receive updates and offers from
                  Abroaed.
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none focus:ring-yellow-400"
                  style={{
                    backgroundColor: "#FDDA24",
                    color: "#000",
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
  );
};

export default ContactUsForm;
