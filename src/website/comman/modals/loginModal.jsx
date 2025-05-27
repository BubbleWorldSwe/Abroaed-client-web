/* eslint-disable react/prop-types */
// import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { studentLoginRequest } from "../../../redux/actions/authActions";
import { toast } from "react-toastify";
// import { BorderTextInputField } from "../../../commons/components/inputFields/borderTextInputField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { studentToken } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      if (!formData.get("email")?.trim() || !formData.get("password")) {
        toast.error("Please enter Email ID and Password.");
        return;
      }

      dispatch(studentLoginRequest({ email: email?.toLowerCase(), password }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (studentToken) {
      onClose();
    }
  }, [studentToken, onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed mx-auto px-6 inset-0 flex items-center  justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white  overflow-y-auto  font-rethink dark:bg-gray-900 rounded-lg shadow-lg  min-w-max z-50 relative">
            <button
              className="absolute w-12 h-12 top-2 right-2 text-gray-600 hover:text-gray-900 text-4xl"
              onClick={onClose}
            >
              &times;
            </button>
            <section className="px-10 font-rethink py-10  mx-auto">
              <div className="relative z-10">
                <div className="flex justify-center items-center">
                  <div className="w-full md:w-[25rem]">
                    <h1 className="text-xl mb-5 md:text-[32px] font-bold leading-tight tracking-tight text-gray-primary  dark:text-white">
                      Login to continue
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4 ">
                      <TextInputField
                        label={"Email"}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="name@company.com"
                        required=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      <TextInputField
                        label={"Password"}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        required=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />

                      <div>
                        <a
                          href="/forgetPassword"
                          className="text-sm  text-gray-primary font-semibold hover:underline dark:text-primary-500"
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
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                        Don’t have an account yet?{" "}
                        <a
                          href="/signup"
                          className=" text-gray-primary font-semibold hover:underline dark:text-primary-500"
                        >
                          Sign up
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
