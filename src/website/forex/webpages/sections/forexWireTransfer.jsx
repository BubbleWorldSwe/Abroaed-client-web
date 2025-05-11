import PrimaryBodyText from "../../../styleComponents/primaryBodyText"
import SectionMainHeader from "../../../styleComponents/sectionMainHeader"
import check_circle from "../../../../assets/check_circle.png";
import { purposes } from "../../data";
import { motion } from "framer-motion";
import { MotionComponent } from "../../../comman/components/motionComponent";

const ForexWireTransfer = () => {
    return (
        <section className=" dark:bg-gray-900 relative ">
            <div className="gap-8 items-center">
                <div className=" dark:text-gray-400">
                    <MotionComponent>
                        <SectionMainHeader
                            className="mb-2"
                        >
                            Wire Transfers
                        </SectionMainHeader>
                        <PrimaryBodyText
                            className={'font-semibold'}
                            style={{ fontSize: '18px' }}
                        >
                            The Abroad Team supports wire transfers for a wide range of purposes, including:

                        </PrimaryBodyText>
                    </MotionComponent>

                </div>
                <MotionComponent>
                    <div className="grid grid-cols-1 md:grid-cols-2  mt-4">
                        {/* Top Row: 3 Cards */}
                        {purposes.map((data, index) => (
                            <div key={index} className="flex items-center space-x-4 ">
                                <div className="flex space-x-8 justify-between">
                                    <img
                                        className=" object-contain"
                                        src={check_circle}
                                        alt={""}
                                    />
                                    <PrimaryBodyText
                                        className="py-1"
                                    >
                                        {data.title}
                                    </PrimaryBodyText>
                                </div>
                            </div>
                        ))}
                    </div>
                </MotionComponent>
            </div>


        </section >
    )
}

export default ForexWireTransfer