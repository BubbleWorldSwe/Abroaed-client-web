import { useRef, useState } from "react";
import ForgetPasswordPage from "./components/forgetPasswordPage";
import { useNavigate } from "react-router-dom";

const ForgetPasswordOtp = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {


    };

    const handleKeyDown = () => {

    };

    // Handle form submission
    const handleSubmit = (e) => {
        navigate('/setPassword')
    };

    // Handle resend OTP
    const handleResend = () => {
        alert('Resend OTP clicked');
        // Add your resend OTP logic here (e.g., API call)
    };
    const BodyContent = () => (
        <>
            <div >
                <p className="text-[#52525B]  text-base mb-5 font-semibold">
                    We have sent an OTP to your email. Please enter the 6 digit code below to verify.
                </p>
                <form onSubmit={handleSubmit} >
                    <div className="flex justify-between gap-2 mb-5">
                        {otp.map((digit, index) => (
                            <div key={index} className="relative">
                                <input
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    className={`w-12 h-12 text-center text-lg border rounded-md outline-none focus:border-black border-gray-500`}
                                />

                            </div>
                        ))}
                    </div>
                    <div className="mb-5 text-sm">
                        <span>
                            Didn&apos;t receive?{' '}
                            <a
                                href="#"
                                onClick={handleResend}
                                className=" ml-1 text-[#A36805] hover:underline"
                            >
                                Resend
                            </a>
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="w-full text-gray-primary text-base bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg font-semibold px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        onClick={handleResend}
                    >
                        Verify
                    </button>
                </form>
            </div>
        </>
    )

    return (
        <ForgetPasswordPage
            bodyContent={<BodyContent />}
            header="Enter OTP"
        />
    )
}

export default ForgetPasswordOtp