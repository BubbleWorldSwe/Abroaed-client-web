/* eslint-disable react/prop-types */

import { Download } from "lucide-react";
import { COLORS } from "../../../../../constants/colors";

const PathwaysProgramHeroSection = ({ header, text, img }) => {
    return (
        <div className="">
            <section
                className="relative h-[73vh] bg-cover bg-center "
                style={{
                    backgroundImage: `url(${img})`,
                    opacity: '1'
                }}
            >
                <div
                    className="absolute inset-0 bg-black opacity-30"
                    style={{ mixBlendMode: "multiply" }}
                ></div>
                {/* Text Content */}
                <div className="absolute bottom-6 py-6   flex flex-col  justify-start  mx-auto px-12">
                    <h1 className="text-[57px]  font-extrabold  text-[#F4F4F5] ">
                        {header}
                    </h1>
                    <p className="font-bold text-[#D4D4D8] text-[24px]">
                        {text}
                        <br />
                    </p>
                </div>
                {/* button */}
                <div className="absolute bottom-6  py-6 right-3  flex flex-col  justify-start  mx-auto px-12">
                    <button
                        onClick={() => { }}
                        type="button"
                        className={`w-full whitespace-nowrap  flex items-center gap-2  py-2 px-4 text-base font-semibold  text-[#432205] focus:outline-none bg-[${COLORS.YELLOW_PRIMARY}] rounded-lg border border-gray-200 hover:bg-yellow-300   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}
                    >
                        <Download className="w-4 h-4" />
                        Book Counselling Now
                    </button>
                </div>
            </section>
        </div>
    );
}

export default PathwaysProgramHeroSection