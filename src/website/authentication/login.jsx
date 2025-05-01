import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="flex font-rethink h-[100vh]">
      <div className="w-[70%]  bg-[#323238]  hidden sm:block"></div>
      <div className="w-full md:w-[30%] bg-white px-5 mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-full py-24 md:w-4/5">
            <h1 className="text-xl mb-1 md:text-[32px] font-bold leading-tight tracking-tight text-gray-primary  dark:text-white">
              Login to continue
            </h1>
            <p className="text-[#52525B] mb-5 text-base  font-semibold">
              Please login to continue.
            </p>
            <form className="space-y-4 ">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-[#3B454F] dark:text-white"
                >
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-[#F4F6F7] text-base border-none  text-[#3B454F] rounded-[4px]  focus:ring-primary-600 focus:border-primary-600 block w-full p-2 px-3"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium text-[#3B454F] dark:text-white"
                >
                  Password*
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    className="bg-[#F4F6F7] text-base border-none  text-[#3B454F] rounded-[4px]  focus:ring-primary-600 focus:border-primary-600 block w-full p-2 px-3"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-300"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <div>
                <a
                  href="/forgetPassword"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-gray-primary text-base bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg font-semibold px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Log in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="/batchSignup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Create Now
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
