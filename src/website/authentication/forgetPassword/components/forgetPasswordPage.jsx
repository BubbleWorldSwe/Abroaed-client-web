/* eslint-disable react/prop-types */
import { ChevronLeft } from "lucide-react"; // Import icons from Lucide
const ForgetPasswordPage = ({
    bodyContent,
    header
}) => {

    return (
        <div>
            <section className="flex font-rethink h-[100vh]">
                <div className="w-[70%]  bg-[#323238]  hidden sm:block">

                </div>
                <div className="w-full md:w-[30%] bg-white px-5 mx-auto">
                    <div className="flex justify-center items-center">
                        <div className="w-full py-24 md:w-4/5">
                            <div className="py-4">
                                <button
                                    onClick={() => {
                                        window.history.back();
                                    }}
                                >
                                    <ChevronLeft />
                                </button>
                            </div>
                            <h1 className="text-xl mb-5 md:text-[32px] font-bold leading-tight tracking-tight text-gray-primary  dark:text-white">
                                {header}
                            </h1>
                            <div>
                                {bodyContent}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ForgetPasswordPage