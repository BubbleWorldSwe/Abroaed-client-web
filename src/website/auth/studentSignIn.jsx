import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { studentLoginRequest } from "../../redux/actions/authActions";
import { toast } from "react-toastify";

import { BorderTextInputField } from "../../commons/components/inputFields/borderTextInputField";
import { FaHome } from "react-icons/fa";
import AbroaedInfo from "../../commons/components/abroaedInfo";

function StudentSignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, studentToken, studentId } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      if (!formData.get("email")?.trim() || !formData.get("password")) {
        toast.error("Please enter Email ID and Password.");
        return;
      }

      dispatch(studentLoginRequest({ email, password }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (studentToken && studentId) {
      navigate("/");
    }
  }, [studentToken, navigate]);

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid lg:h-screen grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center items-center  py-6 ">
            <form
              className="space-y-4  md:space-y-6  md:w-[36rem]"
              // action="#"
              onSubmit={handleSubmit}
            >
              <a href="/">
                <FaHome fontSize={30} />
              </a>
              <h2 className="text-xl  font-bold   text-gray-900 dark:text-white">
                Please Sign In to Continue
              </h2>

              <div className="flex items-center">
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

                <a
                  href="/forgot-password"
                  className="block text-right text-sm font-medium text-yellow-500 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full text-white bg-primary-600 hover:bg-gray-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium   rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-700"
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
              {/*   <div className="text-center mt-4">
                <a
                  href="/otp-login"
                  className="text-sm text-yellow-500 hover:underline"
                >
                  Login Via OTP
                </a>
              </div> */}
            </form>
          </div>
          <AbroaedInfo />
        </div>
      </section>
    </div>
  );
}

export default StudentSignIn;
