/* eslint-disable react/prop-types */
import vectorRightFlat from "../../../assets/vectorRightFlat.png"
import { motion } from "framer-motion";

const CollegeFunFactCard = ({ icon, title, desc }) => {
    return (
        <>
            <div
                className="flex w-full  hover:scale-[1.01] transition-all ease-in-out delay-100 bg-gray-primary  relative z-10 items-center space-x-4 overflow-hidden rounded-lg p-4 dark:border-gray-700 py-8 dark:bg-gray-800"
            >
                <div
                    className="absolute inset-0   pointer-events-none"
                    style={{
                        left: "auto", // Ensure it starts from the right edge
                        right: 0, // Anchor the gradient to the right
                        width: "100%", // Adjust the width of the gradient area
                        height: "100%", // Full height to cover the parent div
                    }}
                ></div>
                <div className="text-yellow-500 text-4xl">{icon}</div>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="overflow-hidden"
                >
                    <div className="flex flex-col gap-4 text-white text-left">
                        <p className="text-[24px] md:text-[32px] font-bold text-[#FFFFFF]">{title}</p>
                        <p className="text-[16px] md:text-[22px] font-semibold text-[#F4F4F5] ">
                            {desc}
                        </p>
                    </div>
                </motion.div>
                <div className="absolute right-0">
                    <img src={vectorRightFlat} />
                </div>
            </div>
        </>
    )
}
export default CollegeFunFactCard