import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { auth } from "../../utils/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import OtpInput from "../../commons/components/inputFields/otpInput";
import AbroaedInfo from "../../commons/components/abroaedInfo";

function StudentOtpLogin() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState(""); // e.g., +91XXXXXXXXXX
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  const [resendCount, setResendCount] = useState(0);
  const [confirmationResult, setConfirmationResult] = useState(null);

  // Setup invisible reCAPTCHA
  const setupRecaptcha = () => {
    const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {
            sendOtp();
          },
        },
        auth
      );
    }
  };

  const sendOtp = async () => {
    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid phone number with country code.");
      return;
    }

    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: () => {
          console.log("callback");
          //  sendOtp();
        },
      });

      const result = await signInWithPhoneNumber(
        auth,
        `+91${phone}`,
        recaptcha
      );

      console.log(result);
      setConfirmationResult(result);
      //  toast.success("OTP sent to your phone!");
      //  setResendCount((prev) => prev + 1);
      //  setResendTimer(60);
    } catch (err) {
      console.error("OTP send error:", err);
      toast.error("Failed to send OTP.");
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    if (!otp || otp.length !== 6) {
      toast.error("Enter the 6-digit OTP.");
      return;
    }

    try {
      const result = await confirmationResult.confirm(otp);
      const user = result.user;
      toast.success("OTP verified successfully!");
      console.log("Logged in user:", user);
      navigate("/dashboard"); // or your target page
    } catch (err) {
      console.error("OTP verification error:", err);
      toast.error("Invalid or expired OTP.");
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
    <section className="bg-white dark:bg-gray-900">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <div className="flex justify-center items-center py-6 px-4 lg:py-0 sm:px-0">
          <form
            onSubmit={verifyOtp}
            className="space-y-4 max-w-md md:space-y-6 xl:max-w-xl"
          >
            <div>
              <h1 className="text-xl md:text-[32px] font-bold text-gray-primary dark:text-white">
                Mobile OTP Login
              </h1>
              <p className="text-[#52525B] text-base font-medium mt-2 mb-6">
                Enter your phone number to receive an OTP.
              </p>
            </div>

            {/* Phone Input */}
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91XXXXXXXXXX"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />

            <button
              type="button"
              onClick={sendOtp}
              disabled={resendTimer > 0 || resendCount >= 3}
              className="w-full bg-blue-600 text-white rounded px-5 py-2.5 mt-2"
            >
              {resendTimer > 0
                ? `Resend in ${resendTimer}s`
                : resendCount >= 3
                ? "Max attempts reached"
                : "Send OTP"}
            </button>

            {/* OTP Input */}
            {confirmationResult && (
              <>
                <OtpInput length={6} onChange={(value) => setOtp(value)} />
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white rounded px-5 py-2.5"
                >
                  Verify OTP
                </button>
              </>
            )}

            <div id="recaptcha-container"></div>
          </form>
        </div>

        <AbroaedInfo />
      </div>
    </section>
  );
}

export default StudentOtpLogin;
