import { MotionComponent } from "../../../comman/components/motionComponent";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader"
import { advantages } from "../../data"
import { motion } from "framer-motion";




const FrexAdvantangeSection = () => {
    return (
        <div className="relative">
            <section className=" dark:bg-gray-900 relative ">
                <div className="">
                    <div className="flex flex-col gap-2 md:gap-6  text-gray-500 sm:text-lg dark:text-gray-400">
                        <MotionComponent>
                            <SectionMainHeader
                                className="mb-6"
                            >
                                The ABROAED Advantages
                            </SectionMainHeader>
                        </MotionComponent>
                    </div>
                    <section className=" dark:bg-gray-900   ">
                        <div className=" w-full mt-5 ">
                            <div className=" dark:bg-gray-800 relative   overflow-hidden">
                                <div className="overflow-x-auto">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <table className="w-full   text-left  border-t-2 border-gray-400  dark:text-gray-400">
                                            <thead className={`text-[22px]  text-gray-primary font-semibold  border-b-2 border-gray-400 `}>
                                                <tr>
                                                    <th scope="col" className="px-4 py-3 ">
                                                        Particulars
                                                    </th>
                                                    <th scope="col" className="px-4 py-3">
                                                        Description
                                                    </th>
                                                    <th scope="col" className="px-4 py-3">
                                                        <span className="sr-only">Actions</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {advantages.map((item, index) => (
                                                    <tr
                                                        key={index}
                                                        className="border-b-2 border-gray-400  dark:border-gray-700"
                                                    >
                                                        <th
                                                            scope="row"
                                                            className={`px-4 py-3 font-semibold text-[18px] text-gray-primary  dark:text-white`}                           >
                                                            <p>
                                                                {item.title}
                                                            </p>
                                                        </th>
                                                        <td className={`px-4 py-3 text-base font-normal text-gray-primary `}>{item.advantage}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </motion.div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default FrexAdvantangeSection