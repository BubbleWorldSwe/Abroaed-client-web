
const ForgetPasswordSuccessfull = () => {


    return (
        <div>
            <section className="flex font-rethink h-[100vh]">
                <div className="w-[70%]  bg-[#323238]  hidden sm:block">

                </div>
                <div className="w-full md:w-[30%] bg-white px-5 mx-auto">
                    <div className="flex justify-center items-center">
                        <div className="w-full py-24 md:w-4/5">
                            <div>
                                <h1 className="text-xl mb-2
                                 md:text-[32px] font-bold leading-tight tracking-tight text-gray-primary  dark:text-white">
                                    Password successfully reset!
                                </h1>
                                <p className="text-[#52525B] mb-10 text-base  font-semibold">
                                    Congratulations! Your password has been reset. Click continue to login using your new password.
                                </p>
                                <button
                                    type="submit"
                                    className="w-full text-gray-primary text-base bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg font-semibold px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    <a href="/login">
                                        Login
                                    </a>
                                </button>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ForgetPasswordSuccessfull