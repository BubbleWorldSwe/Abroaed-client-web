import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BorderTextInputField } from "../../commons/components/inputFields/borderTextInputField";
import { setResendOtp } from "../../api/authApi";
import AbroaedInfo from "../../commons/components/abroaedInfo";

function AdminForgotPassword() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();

    const { email } = formData;

    if (!email) {
      toast.error("Please enter a valid Email ID.");
      return;
    }

    try {
      setIsLoading(true);
      const data = await setResendOtp({ email: email.toLowerCase() });

      if (data?.data?.success) {
        toast.success("OTP sent successfully!");

        navigate("/admin/otpVerification", {
          state: { email: email.toLowerCase() },
        });
      } else {
        toast.error(data?.data?.message || "Failed to send OTP");
      }
    } catch (error) {
      toast.error("An error occurred while sending OTP");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid lg:h-screen lg:grid-cols-2">
          <div className="flex justify-center items-center py-6 px-4 lg:py-0 sm:px-0">
            <form
              className="space-y-4 md:space-y-6 md:w-[36rem]"
              onSubmit={handleSendOtp}
            >
              <div className="mb-5">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Forgot Password
                </h2>

                <p className="text-[#52525B] text-base font-medium mt-2 mb-10">
                  Please enter your email to reset the password
                </p>
              </div>

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

              <button
                type="submit"
                disabled={isLoading}
                className="w-full text-white bg-primary-600 hover:bg-gray-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-700"
              >
                {isLoading ? (
                  <div className="flex justify-center items-center">
                    <div className="spinner-border animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
                  </div>
                ) : (
                  "Send Email"
                )}
              </button>

              <div className="text-center">
                <a
                  href="/admin/signin"
                  className="text-sm text-yellow-500 hover:underline"
                >
                  Remember Password? Sign In
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

export default AdminForgotPassword;
