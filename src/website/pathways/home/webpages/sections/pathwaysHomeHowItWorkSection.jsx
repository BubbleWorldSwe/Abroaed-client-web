import vectorRightRing from "../../../../../assets/vectorRightRing.png"
import { COLORS } from "../../../../../constants/colors";
import { steps } from "../../data";

const PathwaysHomeHowItWorkSection = () => {
    return (
        <div className="relative mx-auto px-11">
            <div className="mx-auto w-full px-2 max-w-screen-2xl relative z-10">
                <section className="dark:bg-gray-900">
                    <div className="py-8 ">
                        <div className="">
                            <h2 className={`mb-5 text-[45px]  font-extrabold text-[${COLORS.GRAY_PRIMARY}] dark:text-white`}>
                                How It Works?
                            </h2>
                            <p className={`text-[18px] text-[${COLORS.GRAY_PRIMARY}] font-normal`}>
                                Pathways programs offer students a seamless route to studying abroad by providing the academic, language, and cultural support needed for success. These programs help you build a strong foundation in core subjects, improve language proficiency, and gain cultural understanding to thrive in a foreign academic environment. With guaranteed progression to a degree program at a partner university, pathways programs not only prepare you academically but also guide you through personal and professional development, ensuring a smooth transition to university life abroad.                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 py-5">
                            {steps.map((step) => (
                                <div
                                    key={step.step}
                                    className="flex relative flex-col gap-1 h-full w-200 p-6 bg-black border border-gray-200 rounded-lg shadow"
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50  pointer-events-none"
                                        style={{
                                            left: "auto",
                                            right: 0,
                                            width: "70%",
                                            height: "100%",
                                        }}
                                    ></div>
                                    <div>
                                        <span className="block text-[57px] font-extrabold text-[#FFFFFF] ">
                                            {step.step}
                                        </span>
                                    </div>
                                    <h5 className="mb-2 text-[32px] font-bold tracking-tight text-[#FFFFFF]">
                                        {step.heading}
                                    </h5>
                                    <p className="font-normal text-white text-base dark:text-gray-400">
                                        {step.description}
                                    </p>
                                    <div className="absolute top-0 right-0">
                                        <img src={vectorRightRing} alt="vector" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </section>
            </div>

        </div>
    )
}

export default PathwaysHomeHowItWorkSection