import vectorRightRing from "../../../../assets/vectorRightRing.png"
import PrimaryBodyText from "../../../styleComponents/primaryBodyText"
import SectionMainHeader from "../../../styleComponents/sectionMainHeader"
import { steps } from "../../data"


const AccommodationHowItWorkSection = () => {

    return (
        <div className="relative z-10">
            <section className="dark:bg-gray-900">
                <div className="">
                    <div className="">
                        <SectionMainHeader
                            className="mb-5"
                        >
                            How It Works?
                        </SectionMainHeader>
                        <PrimaryBodyText
                            className={'mt-4'}
                        >
                            Finding accommodation abroad is a highly challenging task; however, when you are taking the services from ABROAED, finding accommodation becomes not only simple but also stress-free. We, at ABROAED Consultancy, provide a very structured three-step approach that assures every student gets a suitable and comfortable place to live in. From discussing your preferences to making all the needful arrangements for you, we are here for you at every stage. With ABROAED, you can completely focus on your studies while we take care of your house hunt.
                        </PrimaryBodyText>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {steps.map((step) => (
                            <div
                                key={step.step}
                                className="flex relative hover:scale-[1.01] transition-all ease-in-out delay-100 flex-col gap-1 h-full w-200 p-6 bg-gray-primary border border-gray-200 rounded-lg shadow"
                            >
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 rounded-lg pointer-events-none"
                                    style={{
                                        left: "auto",
                                        right: 0,
                                        width: "70%",
                                        height: "100%",
                                    }}
                                ></div>
                                <div>
                                    {/* <span className="block text-[57px] font-extrabold text-[#FFFFFF] ">
                                            {step.step}
                                        </span> */}
                                </div>
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
    )
}

export default AccommodationHowItWorkSection