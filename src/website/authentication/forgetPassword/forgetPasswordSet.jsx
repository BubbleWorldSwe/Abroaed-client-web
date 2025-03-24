import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import ForgetPasswordPage from "./components/forgetPasswordPage";
import { useNavigate } from "react-router-dom";

const ForgetPasswordSet = () => {
    const navigate = useNavigate();
    const [showCreatePassword, setShowCreatePassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = () => {
        navigate('/setPasswordSuccessfull')
    }

    const BodyContent = () => (
        <>
            <div>
                <p className="text-[#52525B]  text-base mb-5 font-semibold">
                    Set up your new password here
                </p>
                <form onSubmit={handleSubmit} className="space-y-4" >
                    <div>
                        <label htmlFor="createPassword" className="block mb-1 text-sm font-medium text-[#3B454F] dark:text-white">
                            Create Password*
                        </label>
                        <div className="relative">
                            <input
                                type={showCreatePassword ? "text" : "password"}
                                name="createPassword"
                                id="createPassword"
                                // value={createPassword}
                                // onChange={handleCreatePassword}
                                placeholder="Enter Create Password"
                                className="bg-[#F4F6F7] text-base border-none text-[#3B454F] rounded-[4px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2 px-3"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowCreatePassword(!showCreatePassword)}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-300"
                            >
                                {showCreatePassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-[#3B454F] dark:text-white">
                            Confirm Password*
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                id="confirmPassword"
                                // value={confirmPassword}
                                // onChange={handleConfirmPassword}
                                placeholder="Enter Confirm Password"
                                className="bg-[#F4F6F7] text-base border-none text-[#3B454F] rounded-[4px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2 px-3"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-300"
                            >
                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full text-gray-primary text-base bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg font-semibold px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Confirm
                    </button>
                </form>
            </div>
        </>
    )

    return (
        <ForgetPasswordPage
            bodyContent={<BodyContent />}
            header="Set a new password"
        />
    )
}

export default ForgetPasswordSet