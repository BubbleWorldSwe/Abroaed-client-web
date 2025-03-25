import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Import icons from Lucide

const BatchSignupPage = () => {
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div>
      <section className="px-10 font-rethink  mx-auto">
        <div className=" px-4 py-6 flex flex-col gap-6 mx-auto max-w-screen-2xl mt-5">
          {/* Content */}
          <div className="relative z-10">
            <h2 className={`mb-5 text-3xl md:text-[57px]  font-extrabold text-gray-primary dark:text-white`}>
              Batch Name
            </h2>
            <div className="flex items-center gap-5 text-base text-[#52525B]">
              <div>
                <strong>Duration:</strong> 8 weeks
              </div>
              <div>
                <strong>Seats:</strong> 20
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-10 justify-between  py-5">
              <div className="flex flex-col gap-5 ">
                <h5 className={`text-xl md:text-[32px] text-gray-primary font-bold leading-tight `}>
                  Features you’ll love
                </h5>
                <ul className="list-disc text-lg md:text-[24px] font-normal text-gray-primary space-y-2 px-5 ">
                  <li>lorem ipsum dolor sit amet</li>
                  <li>lorem ipsum dolor sit amet</li>
                  <li>lorem ipsum dolor sit amet</li>
                  <li>lorem ipsum dolor sit amet</li>
                  <li>lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-[30rem]">
                  <h1 className="text-xl mb-5 md:text-[32px] font-bold leading-tight tracking-tight text-gray-primary  dark:text-white">
                    Create account to continue
                  </h1>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-1 text-sm font-medium text-[#3B454F] dark:text-white">
                        Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-[#F4F6F7] text-base border-none text-[#3B454F] rounded-[4px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2 px-3"
                        placeholder="Enter Name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-1 text-sm font-medium text-[#3B454F] dark:text-white">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-[#F4F6F7] text-base border-none text-[#3B454F] rounded-[4px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2 px-3"
                        placeholder="Enter Email"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block mb-1 text-sm font-medium text-[#3B454F] dark:text-white">
                        Phone*
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="bg-[#F4F6F7] text-base border-none text-[#3B454F] rounded-[4px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2 px-3"
                        placeholder="Enter Phone"
                        required
                      />
                    </div>

                    {/* Create Password Field */}
                    <div>
                      <label htmlFor="createPassword" className="block mb-1 text-sm font-medium text-[#3B454F] dark:text-white">
                        Create Password*
                      </label>
                      <div className="relative">
                        <input
                          type={showCreatePassword ? "text" : "password"}
                          name="createPassword"
                          id="createPassword"
                          placeholder="Enter Create Password"
                          className="bg-[#F4F6F7] text-base border-none text-[#3B454F] rounded-[4px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2 px-3"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowCreatePassword(!showCreatePassword)}
                          className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-300"
                        >
                          {showCreatePassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                      <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-[#3B454F] dark:text-white">
                        Confirm Password*
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          id="confirmPassword"
                          placeholder="Enter Confirm Password"
                          className="bg-[#F4F6F7] text-base border-none text-[#3B454F] rounded-[4px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2 px-3"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-300"
                        >
                          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full text-gray-primary text-base bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg font-semibold px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Sign up & Proceed
                    </button>

                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      By continuing you agree with, <span className="font-semibold">Terms of Service</span> and <span className="font-semibold">Privacy Policy</span>.
                      Already have an account? <a href="/batchLogin" className="font-semibold text-primary-600 hover:underline">Login Now</a>
                    </p>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BatchSignupPage