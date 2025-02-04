import { Plus } from "lucide-react";
import { useState } from "react";
import StudentApplicationCard from "./studentApplicationCard";

const StudentApplication = () => {
    const [activeTab, setActiveTab] = useState(0); // State to keep track of the active tab
    const tabs = ['To-Start', 'Verifying Documents', 'Application Filed', "Awaiting Response", "Rejected", "Offer Letter Received"];
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="max-w-5.5xl  my-8 p-6 bg-white rounded-lg shadow-lg">
            {/* Header with title and pencil icon button */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Applications</h2>
                <button className="flex text-sm  items-center gap-2 bg-[#D4D4D8] text-black px-3 py-1 rounded-lg hover:bg-gray-400 transition">
                    <Plus size={15} />
                    Start a New Application
                </button>
            </div>
            <div>
                <div className="mb-4 dark:border-gray-700">
                    <ul className="flex w-full -mb-px text-sm font-medium text-center" role="tablist">
                        {tabs.map((tab, index) => (
                            <li key={index} className="w-full" role="presentation">
                                <button
                                    className={`inline-block p-4 w-full text-sm font-semibold rounded-t-lg ${activeTab === index ? 'text-black  border-b-4 border-blue-500' : 'text-gray-500 dark:text-gray-400 font-semibold hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                                    onClick={() => handleTabClick(index)} // Update active tab
                                    role="tab"
                                    aria-controls={`styled-${tab.toLowerCase().replace(' ', '-')}`}
                                    aria-selected={activeTab === index}
                                >
                                    {tab}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-5 overflow-x-auto pb-6">
                    {Array(6).fill().map((tab, index) => (
                        <StudentApplicationCard key={index} />
                    ))}
                </div>

            </div>

        </div>

    );
}

export default StudentApplication