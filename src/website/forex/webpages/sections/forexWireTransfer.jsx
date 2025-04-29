import PrimaryBodyText from "../../../styleComponents/primaryBodyText"
import SectionMainHeader from "../../../styleComponents/sectionMainHeader"
import check_circle from "../../../../assets/check_circle.png";
import { purposes } from "../../data";

const ForexWireTransfer = () => {
    return (
        <section className=" dark:bg-gray-900 relative ">
            <div className="gap-8 items-center">
                <div className=" dark:text-gray-400">
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

                </div>
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
            </div>
        </section>
    )
}

export default ForexWireTransfer