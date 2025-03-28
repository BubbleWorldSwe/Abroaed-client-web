import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { studentSignUpRequest } from "../../redux/actions/authActions";
import { toast } from "react-toastify";
import AbroaedInfo from "./components/abroaedInfo";
import { BorderTextInputField } from "../../commons/components/inputFields/borderTextInputField";

function StudentSignUp() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  // Function to handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, mobile } = formData;

    const nameRegex = /^[A-Za-z]+$/; // Only alphabets allowed

    if (!firstName || !nameRegex.test(firstName)) {
      toast.error("Please enter a valid First Name (Only letters allowed).");
      return;
    }

    if (!lastName || !nameRegex.test(lastName)) {
      toast.error("Please enter a valid Last Name (Only letters allowed).");
      return;
    }

    if (!email) {
      toast.error("Please enter a valid Email ID.");
      return;
    }

    if (!mobile || mobile.length < 10) {
      toast.error("Phone Number must be at least 10 characters long.");
      return;
    }

    if (!document.getElementById("terms").checked) {
      toast.error("You must accept the Terms and Conditions to proceed.");
      return;
    }

    // Dispatch form data
    dispatch(studentSignUpRequest(formData));
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid lg:h-screen lg:grid-cols-2">
          <div className="flex justify-center items-center py-6 px-4 lg:py-0 sm:px-0">
            <form
              className="space-y-4 max-w-md md:space-y-6 xl:max-w-xl"
              onSubmit={handleSubmit}
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Create an Account
              </h2>

              <div className="flex gap-x-4">
                <div className="w-1/2">
                  <BorderTextInputField
                    label="First Name"
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <BorderTextInputField
                    label="Last Name"
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <div>
                <BorderTextInputField
                  label="Your Email"
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <BorderTextInputField
                  label="Phone Number"
                  name="mobile"
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  required
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
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      By signing up, you agree to our{" "}
                      <a
                        className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                        href="#"
                      >
                        Terms of Use
                      </a>{" "}
                      and{" "}
                      <a
                        className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
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
                      name="newsletter"
                      type="checkbox"
                      className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="newsletter"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      Email me about product updates and resources.
                    </label>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-700"
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <div className="spinner-border animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
                  </div>
                ) : (
                  "Sign Up"
                )}
              </button>

              <div className="text-center mt-4">
                <a
                  href="/signin"
                  className="text-sm text-yellow-500 hover:underline"
                >
                  Already have an account? Sign In
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

export default StudentSignUp;
