import vectorRightRing from "../../../../../assets/vectorRightRing.png"
import PrimaryBodyText from "../../../../styleComponents/primaryBodyText";
import SectionMainHeader from "../../../../styleComponents/sectionMainHeader";
import { steps } from "../../data";

const PathwaysHomeHowItWorkSection = () => {
    return (
        <div className="relative ">
            <div className="w-full relative z-10">
                <section>
                    <div className="pt-10">
                        <div >
                            <SectionMainHeader className={`mb-2 md:mb-6`}>
                                How It Works?
                            </SectionMainHeader>
                            <PrimaryBodyText>
                                Pathways programs offer students a seamless route to studying abroad by providing the academic, language, and cultural support needed for success. These programs help you build a strong foundation in core subjects, improve language proficiency, and gain cultural understanding to thrive in a foreign academic environment. With guaranteed progression to a degree program at a partner university, pathways programs not only prepare you academically but also guide you through personal and professional development, ensuring a smooth transition to university life abroad.
                            </PrimaryBodyText>
                        </div>
                        <div className="mt-4 md:mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 ">
                            {steps.map((step) => (
                                <div
                                    key={step.step}
                                    className="flex hover:scale-[1.01] transition-all ease-in-out delay-100 relative flex-col gap-1 h-full w-200 p-6 bg-gray-primary border border-gray-200 rounded-lg shadow"
                                >
                                    <div
                                        className="absolute rounded-lg inset-0 bg-gradient-to-r from-transparent to-black/50  pointer-events-none"
                                        style={{
                                            left: "auto",
                                            right: 0,
                                            width: "70%",
                                            height: "100%",
                                        }}
                                    ></div>
                                    {/* <div>
                                        <span className="block text-[57px] font-extrabold text-[#FFFFFF] ">
                                            {step.step}
                                        </span>
                                    </div> */}
                                    <h5 className="mb-2 text-[24px] md:text-[32px] font-bold tracking-tight text-[#FFFFFF]">
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