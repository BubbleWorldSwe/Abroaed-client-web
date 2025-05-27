import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { setResendOtp, setVerifyOtp } from "../../api/authApi";
import { setStudentToken } from "../../redux/actions/authActions";
import { toast } from "react-toastify";
import OtpInput from "../../commons/components/inputFields/otpInput";
import AbroaedInfo from "../../commons/components/abroaedInfo";

function StudentOtpVerification() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user, studentToken } = useSelector((state) => state.auth);
  const location = useLocation();

  // Prefer location.state.email, fallback to user?.email
  const [email] = useState(location.state?.email || user?.email || "");

  const [resendTimer, setResendTimer] = useState(0);
  const [resendCount, setResendCount] = useState(0);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (!email) {
      toast.error("Email not found. Redirecting to sign in...");
      navigate("/signin");
    }
  }, [email, navigate]);

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is missing. Please sign in again.");
      return;
    }

    if (otp.length < 6) {
      toast.error("Please enter the 6-digit OTP.");
      return;
    }

    try {
      const data = await setVerifyOtp({ email: email?.toLowerCase(), otp });

      if (data?.data?.success) {
        dispatch(setStudentToken(data?.data?.token));
        toast.success("OTP verified successfully!");
        navigate("/update-password");
      } else {
        toast.error(data?.message || "Invalid OTP.");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      toast.error("Something went wrong.");
    }
  };

  const handleResendOtp = async () => {
    if (!email) {
      toast.error("Email not available. Please sign in again.");
      return;
    }

    if (resendCount >= 3) {
      toast.error("You have reached the maximum resend attempts.");
      return;
    }

    try {
      const data = await setResendOtp({ email });

      if (data?.data?.success) {
        toast.success("OTP resent!");
        setResendCount((prev) => prev + 1);
        setResendTimer(60);
      } else {
        toast.error(data?.message || "Failed to resend OTP.");
      }
    } catch (error) {
      console.error("Resend error:", error);
      toast.error("Could not resend OTP.");
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
              <div>
                <h1 className="text-xl md:text-[32px] font-bold leading-tight tracking-tight text-gray-primary dark:text-white">
                  Enter OTP
                </h1>
                <p className="text-[#52525B] text-base font-medium mt-2 mb-10">
                  We have sent an OTP to your email <strong>{email}</strong>.
                  Please enter the 6-digit code below to verify.
                </p>
              </div>

              <OtpInput length={6} onChange={handleOtpChange} />

              <div style={{ marginTop: 30 }} />
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

          <AbroaedInfo />
        </div>
      </section>
    </div>
  );
}

export default StudentOtpVerification;
