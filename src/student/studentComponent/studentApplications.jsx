import { useState } from "react";
import { myApplicationtabs, tabColors } from "../data"
import ApplicationCardDetails from "../components/applicationCardDetails";

const StudentApplications = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <div className="w-full bg-[#fff] font-rethink min-h-[90vh] px-5 py-10  scroll-smooth">
            <h2 className="text-2xl font-semibold mb-5">Applications</h2>
            <div className="grid mb-8 grid-cols-1 lg:grid-cols-3 gap-3">
                <div className="flex flex-col shadow-lg rounded-lg p-3 px-5">
                    <label className="font-bold text-4xl text-[#EDBD05]">10</label>
                    <span className="text-xl font-semibold">Applied</span>
                </div>
                <div className="flex flex-col shadow-lg rounded-lg p-3 px-5">
                    <label className="font-bold text-4xl text-[#EDBD05]">1</label>
                    <span className="text-xl font-semibold">In-Progress</span>
                </div>
                <div className="flex flex-col shadow-lg rounded-lg p-3 px-5">
                    <label className="font-bold text-4xl text-[#EDBD05]">2</label>
                    <span className="text-xl font-semibold">Offer Received</span>
                </div>

            </div>
            {/* university details */}
            <div className="p-6 rounded-xl shadow-md">
                <div
                    className="flex  gap-4 overflow-auto max-h-screen lg:max-w-[79vw] "
                >
                    {myApplicationtabs.map((tab, index) => {
                        return (
                            <>
                                <div className="flex flex-col gap-4" key={index}>
                                    <div className="" role="">
                                        <button
                                            className={`inline-block py-4 w-full text-sm text-start font-semibold border-b-2 border-[#D4D4D8] rounded-t-lg ${activeTab === index ? 'text-black  border-b-4 border-blue-500' : 'text-gray-500 dark:text-gray-400 font-semibold hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                                            onClick={() => handleTabClick(index)}
                                            role="tab"
                                            aria-controls={`styled-${tab?.tabName.toLowerCase().replace(' ', '-')}`}
                                            aria-selected={activeTab === index}
                                        >
                                            <span className={`px-2 py-1 rounded-full ${tabColors[tab.tabName] || "bg-gray-300"} text-${tab.tabName === 'Rejected' ? 'white' : "gray-primary"}`}>
                                                {tab.tabName}
                                            </span>
                                        </button>
                                    </div>
                                    <div className="flex flex-col gap-5 ">
                                        {
                                            tab.cardDetails.map((card, idx) => <ApplicationCardDetails key={idx} />)
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
    )
}

export default StudentApplications