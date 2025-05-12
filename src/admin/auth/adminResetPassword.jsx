import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  adminUpdatePasswordRequest,
  setAdminToken,
} from "../../redux/actions/authActions";
import { toast } from "react-toastify";
import { BorderTextInputField } from "../../commons/components/inputFields/borderTextInputField";
import AbroaedInfo from "../../commons/components/abroaedInfo";
import { useLocation } from "react-router-dom";

function AdminResetPassword() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { password, confirmPassword } = formData;

    if (!password || !confirmPassword) {
      toast.error("Both password fields are required.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match. Please re-enter.");
      return;
    }

    // Proceed with password reset logic
    dispatch(adminUpdatePasswordRequest({ password, confirmPassword }));
  };
  console.log(token);

  useEffect(() => {
    if (token) {
      dispatch(setAdminToken(token));
    } else {
      toast.error("Token is missing or invalid.");
    }
  }, [dispatch, token]);

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
              <h2 className="text-xl font-bold   text-gray-900 dark:text-white">
                Create Password
              </h2>

              <div className="flex items-center">
                <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>

                <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
              </div>

              <div>
                <BorderTextInputField
                  label={"Password"}
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="******"
                  required=""
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <BorderTextInputField
                  label={"Confirm Password"}
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="******"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <div />
              <button
                type="submit"
                disabled={loading}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium   rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-700"
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <div className="spinner-border animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>

              <div className="text-center mt-4">
                <a
                  href="/signin"
                  className="text-sm text-yellow-500 hover:underline"
                >
                  Already have an account ? Sign In
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

export default AdminResetPassword;
