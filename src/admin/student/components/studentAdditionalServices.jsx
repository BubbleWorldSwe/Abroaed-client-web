import { useState } from "react";
import pencil from "../../../assets/pencil.png"
import StudentAdditionalServicesCard from "./studentAdditionalServicesCard";
import { additionalServiceDetails, additionalServiceTabColors } from "../data";

const StudentAdditionalServices = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <div className="max-w-5.5xl my-8 p-6 bg-white rounded-lg shadow-lg">
                {/* Header with title and pencil icon button */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Applications</h2>
                    <img src={pencil} alt='pencil-pic' className='w-6 h-6' />

                </div>
                <div>
                    <div
                        className="flex  gap-4 overflow-auto max-h-screen"
                    >
                        {additionalServiceDetails.map((tab, index) => {
                            return (
                                <>
                                    <div className="flex flex-col gap-4" key={index}>
                                        <div >
                                            <button
                                                className={`inline-block py-4 w-full text-sm text-start font-semibold border-b-2 border-[#D4D4D8] rounded-t-lg ${activeTab === index ? 'text-black  border-b-4 border-blue-500' : 'text-gray-500 dark:text-gray-400 font-semibold hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                                                onClick={() => handleTabClick(index)}
                                                role="tab"
                                                aria-controls={`styled-${tab?.tabName.toLowerCase().replace(' ', '-')}`}
                                                aria-selected={activeTab === index}
                                            >
                                                <span className={`px-3 py-1 rounded-full ${additionalServiceTabColors[tab.tabName] || "bg-gray-300"} `}>
                                                    {tab.tabName}
                                                </span>
                                            </button>
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            {
                                                tab.cardDetails.map((card, idx) => <StudentAdditionalServicesCard cardDetails={card} key={idx} />)
                                            }
                                        </div>
                                    </div>
                                </>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentAdditionalServices