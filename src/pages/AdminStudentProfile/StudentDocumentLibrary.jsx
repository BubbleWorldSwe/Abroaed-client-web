import { useState } from "react";
import pencil from "../../assets/pencil.png"
import { Download, Upload } from "lucide-react";
import StudentUploadDocument from "../../Components/Modals/StudentUploadDocument";

const DocumentCard = () => {
    return (
        <>
            <div

                className="p-4 flex flex-col justify-between flex-shrink-0 w-96 h-72 bg-gradient-to-b from-[#00000033] to-[#363A3D] rounded-lg"
            >
                <div className="flex justify-between items-start">
                    <div className="text-sm font-medium p-1 px-2 text-black bg-[White] rounded-full">Government Doc</div>
                </div>
                <div>
                    <div className="text-white text-sm">
                        Aadhar Card
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <div className="text-white">Garvit_Aadhar Card.pdf</div>
                        <button className="text-white">
                            <Download />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}



const StudentDocumentLibrary = () => {
    const [activeTab, setActiveTab] = useState(0); // State to keep track of the active tab
    const tabs = ['Government Docs', 'Academic Docs', 'Finance Docs', 'Others'];
    const [openModal, setOpenModal] = useState(false);
    // Function to handle tab clicks
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const handleOpenUploadModal = () => {
        setOpenModal(true)
    }


    return (
        <>
            <StudentUploadDocument isOpen={openModal} onClose={() => setOpenModal(false)} />


            <div className="max-w-5.5xl  my-8 p-6 bg-white rounded-lg shadow-lg">
                {/* Header with title and pencil icon button */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Document Library</h2>
                    <img src={pencil} alt="pencil-pic" />
                </div>
                <div>
                    <div className="mb-4 dark:border-gray-700">
                        <ul className="flex w-full -mb-px text-sm font-medium text-center" role="tablist">
                            {tabs.map((tab, index) => (
                                <li key={index} className="w-full" role="presentation">
                                    <button
                                        className={`inline-block p-4 w-full text-lg font-semibold rounded-t-lg ${activeTab === index ? 'text-black  border-b-4 border-blue-500' : 'text-gray-500 dark:text-gray-400 font-semibold hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                                            }`}
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

                    {/* Card Container with Horizontal Scroll */}
                    <div className="flex gap-5 overflow-x-auto pb-6">
                        {Array(6).fill().map((tab, index) => (
                            <DocumentCard key={index} />
                        ))}
                    </div>

                </div>
                <div className="black flex gap-5 px-2 cursor-pointer" onClick={handleOpenUploadModal}>
                    <button className="">
                        <Upload />
                    </button>
                    <p className="text-lg font-semibold">Upload Document </p>
                </div>
            </div>

        </>
    )
}

export default StudentDocumentLibrary