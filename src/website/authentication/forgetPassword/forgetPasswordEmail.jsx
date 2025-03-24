import { useState } from "react"
import ForgetPasswordPage from "./components/forgetPasswordPage"
import { useNavigate } from "react-router-dom";

const ForgetPasswordEmail = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    const handleSendEmail = () => {
        navigate('/sendOtp')
    }
    const BodyContent = () => (
        <>
            <div>
                <p className="text-[#52525B] text-base mb-2 font-semibold">
                    Please enter your email to reset the password
                </p>
                <form className="space-y-8 py-1" onSubmit={handleSendEmail}>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block mb-1 text-sm font-medium text-[#3B454F] dark:text-white">
                            Email*
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            // value={email}
                            // onChange={handleChange}
                            className="bg-[#F4F6F7] text-base border-none  text-[#3B454F] rounded-[4px]  focus:ring-primary-600 focus:border-primary-600 block w-full p-2 px-3"
                            placeholder="Enter Email"
                            required
                        />

                    </div>
                    <button
                        type="submit"
                        className="w-full text-gray-primary text-base bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg font-semibold px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"

                    >
                        Send Email
                    </button>
                </form>
            </div>
        </>
    )


    return (
        <>
            <ForgetPasswordPage
                bodyContent={<BodyContent />}
                header="Forgot Password"
            />
        </>
    )
}

export default ForgetPasswordEmail