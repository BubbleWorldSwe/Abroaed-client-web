import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AbroaedInfo from "./components/abroaedInfo";
import OtpInput from "./components/otpInput";
import { setResendOtp, setVerifyOtp } from "../../api/authApi";
import { setStudentToken } from "../../redux/actions/authActions";
import { toast } from "react-toastify";

function StudentOtpVerification() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user, studentToken } = useSelector((state) => state.auth);

  console.log(studentToken);

  const [resendTimer, setResendTimer] = useState(0);
  const [resendCount, setResendCount] = useState(0);
  const [otp, setOtp] = useState("");

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (otp.length < 6) {
        toast.error("Please enter the 6-digit OTP.");
        return;
      }

      // Dispatch OTP verification action here
      console.log("Verifying OTP:", otp);

      const data = await setVerifyOtp({
        email: user?.email,
        otp: otp,
      });

      console.log(data);

      if (data?.status === 201) {
        navigate("/update-password");
        dispatch(setStudentToken(data?.data?.token));
        /*  window.location.href =
          "/update-password?token=" + encodeURIComponent(data?.token); */
      }
    } catch (error) {
      console.log("Error verifying OTP:", error);
    }
  };

  const handleResendOtp = async () => {
    try {
      if (resendCount >= 3) {
        toast.error("You have reached the maximum resend attempts.");
        return;
      }

      const data = await setResendOtp({
        email: user?.email,
      });

      if (data?.status === 201) {
        toast.success("OTP resent!");

        setResendCount((prev) => prev + 1);
        setResendTimer(60);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setTimeout(() => setResendTimer((t) => t - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

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
                OTP Verification
              </h2>

              <p className="text-gray-500">
                We’ve sent a 6-digit verification code to your email. Please
                enter it below.
              </p>

              <OtpInput length={6} onChange={handleOtpChange} />

              <button
                type="submit"
                disabled={loading}
                className="w-full text-white bg-primary-600 hover:bg-gray-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-700"
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <div className="spinner-border animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
                  </div>
                ) : (
                  "Verify"
                )}
              </button>

              {/* Resend OTP Section */}
              <div className="text-center mt-4">
                {resendTimer > 0 ? (
                  <p className="text-sm text-gray-500">
                    Resend OTP in{" "}
                    <span className="text-yellow-500">{resendTimer}s</span>
                  </p>
                ) : resendCount < 3 ? (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    className="text-sm text-yellow-500 hover:underline"
                  >
                    Resend OTP?
                  </button>
                ) : (
                  <p className="text-xs text-red-500">
                    Maximum resend attempts reached.
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Right Side Info Section */}
          <AbroaedInfo />
        </div>
      </section>
    </div>
  );
}

export default StudentOtpVerification;
