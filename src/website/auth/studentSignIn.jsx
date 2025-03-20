import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../redux/actions/authActions";

import { toast } from "react-toastify";
import AbroaedInfo from "./components/abroaedInfo";
import { BorderTextInputField } from "../../commons/components/inputFields/borderTextInputField";

function StudentSignIn() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, token } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      if (!formData.get("email")?.trim() || !formData.get("password")) {
        toast.error("Please enter Email ID and Password.");
        return;
      }

      if (!formData.get("terms")) {
        toast.error("You must accept the Terms and Conditions to proceed.");
        return;
      }

      dispatch(loginRequest({ email, password }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/admin/dashboard");
    }
  }, [token, navigate]);

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid lg:h-screen lg:grid-cols-2">
          <div className="flex justify-center items-center py-6 px-4 lg:py-0 sm:px-0">
            <form
              className="space-y-4 max-w-md md:space-y-6 xl:max-w-xl"
              // action="#"
              onSubmit={handleSubmit}
            >
              <h2 className="text-xl font-bold   text-gray-900 dark:text-white">
                Please Sign In to Continue
              </h2>

              <div className="flex items-center">
                <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>

                <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
              </div>

              <div>
                <BorderTextInputField
                  label={"Your email"}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <BorderTextInputField
                  label={"Your password"}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light   text-gray-500 dark:text-gray-300"
                    >
                      By signing up, you are creating a Flowbite account, and
                      you agree to Flowbite’s{" "}
                      <a
                        className="font-medium   text-primary-600 dark:text-primary-500 hover:underline"
                        href="#"
                      >
                        Terms of Use
                      </a>{" "}
                      and{" "}
                      <a
                        className="font-medium   text-primary-600 dark:text-primary-500 hover:underline"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                      .
                    </label>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="newsletter"
                      aria-describedby="newsletter"
                      type="checkbox"
                      className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="newsletter"
                      className="font-light   text-gray-500 dark:text-gray-300"
                    >
                      Email me about product updates and resources.
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                /* onClick={() => {
                  navigate("/admin/dashboard");
                }} */
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium   rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-700"
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <div className="spinner-border animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>

              <div className="text-center mt-4">
                <a
                  href="/signup"
                  className="text-sm text-yellow-500 hover:underline"
                >
                  New User? Sign Up
                </a>
              </div>
            </form>
          </div>
          <AbroaedInfo />
        </div>
      </section>
    </div>
  );
}

export default StudentSignIn;
