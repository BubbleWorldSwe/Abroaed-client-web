/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLoginRequest } from "../../redux/actions/authActions";

import { toast } from "react-toastify";
import { BorderTextInputField } from "../../commons/components/inputFields/borderTextInputField";
import { FaHome } from "react-icons/fa";
import AbroaedInfo from "../../commons/components/abroaedInfo";

function SigninPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, adminToken, role } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      if (!formData.get("email")?.trim() || !formData.get("password")) {
        toast.error("Please enter Email ID and Password.");
        return;
      }

      dispatch(adminLoginRequest({ email: email?.toLowerCase(), password }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (adminToken && role !== "Student") {
      if (role === "Content Manager") {
        navigate("/admin/testPrep");
      } else {
        navigate("/admin/dashboard");
      }
    }
  }, [adminToken, navigate]);

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid lg:h-screen lg:grid-cols-2">
          <div className="flex justify-center items-center py-6 px-4 lg:py-0 sm:px-0">
            <form
              className="space-y-4  md:space-y-6  md:w-[36rem]"
              // action="#"
              onSubmit={handleSubmit}
            >
              <a href="/">
                <FaHome fontSize={30} />
              </a>
              <h2 className="text-xl font-bold   text-gray-900 dark:text-white">
                Admin & Team Login
              </h2>

              <div className="flex items-center">
                <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>

                <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
              </div>

              <div>
                <BorderTextInputField
                  type="email"
                  label="Your email"
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
                  type="password"
                  label=" Your password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <a
                  href="/admin/forgotPassword"
                  className="text-sm text-right font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full text-white bg-primary-600 hover:bg-gray-primary  font-medium   rounded-lg text-sm px-5 py-2.5 text-center "
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <div className="spinner-border animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>
          </div>
          <AbroaedInfo />
        </div>
      </section>
    </div>
  );
}

export default SigninPage;
