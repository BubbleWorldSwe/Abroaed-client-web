import { useState } from "react";
import studentColImg from "../../assets/studentColImg.png"
import studentcolFrame from "../../assets/studentcolFrame.png"
import squareacademiccapbold from "../../assets/squareacademiccapbold.png"
import fluent_person from "../../assets/fluent_person.png"
import Book from "../../assets/Book.png"

const StudentPreferenceCard = () => {
    return (
        <div
            className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
            <div className="relative">
                <img
                    className="rounded-t-lg max-w-xl h-40 object-cover"
                    src={studentColImg}
                    alt={'pic'}
                />
                <div
                    className="absolute w-24 h-24  -bottom-16  left-5"
                >
                    <img src={studentcolFrame} alt="add_img_pic" />
                </div>
            </div>
            <div className="p-5 mt-5">
                <div className="flex justify-between">
                    <h5 className=" text-xl whitespace-nowrap font-semibold tracking-tight text-gray-900 dark:text-white">
                        University of Glassgow
                    </h5>
                </div>
                <p className="text-gray-500 mb-2">United Kingdom</p>
                <div className="mb-2  flex flex-col justify-between text-center ">
                    <div className="flex gap-2 ">

                        <img
                            className="rounded-t-lg  object-contain"
                            src={squareacademiccapbold}
                            alt={'academic-img'}
                        />

                        <p className="font-medium  text-gray-500 dark:text-gray-400 py-1">
                            World Ranking: 95
                        </p>
                    </div>
                    <div className="flex gap-2 ">
                        <img
                            className="rounded-t-lg  object-contain"
                            src={fluent_person}
                            alt={'fluent_person'}
                        />

                        <p className="font-medium  text-gray-500 dark:text-gray-400 py-1">
                            Total Students: 6500                        </p>
                    </div>
                    <div className="flex gap-2 ">
                        <img
                            className="rounded-t-lg  object-contain"
                            src={Book}
                            alt={'Book'}
                        />
                        <p className="font-medium  text-gray-500 dark:text-gray-400 py-1">
                            Courses Available: 40                        </p>
                    </div>
                </div>
                <div >
                    <button type="button" data-modal-target="default-modal" data-modal-toggle="default-modal" className="py-2.5 w-full px-5 me-2 mb-2 text font-medium text-gray-700 focus:outline-none bg-white rounded-lg border border-gray-700 hover:bg-gray-100 hover:text-green-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View Detials</button>
                </div>
            </div>
        </div>
    )
}


function StudentSavedPreference() {
    const [activeTab, setActiveTab] = useState(0); // State to keep track of the active tab
    const tabs = ['Colleges', 'Course', 'Accommodations'];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="max-w-5.5xl  my-8 p-6 bg-white rounded-lg shadow-lg">
            {/* Header with title and pencil icon button */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Saved Preferences</h2>
                {/* <img src={pencil} alt="pencil-pic" /> */}
            </div>
            <div>
                <div className="mb-4 dark:border-gray-700">
                    <ul className="flex w-full -mb-px text-sm font-medium text-center" role="tablist">
                        {tabs.map((tab, index) => (
                            <li key={index} className="w-full" role="presentation">
                                <button
                                    className={`inline-block p-4 w-full text-lg font-semibold rounded-t-lg ${activeTab === index ? 'text-black  border-b-4 border-blue-500' : 'text-gray-500 dark:text-gray-400 font-semibold hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
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
                        <StudentPreferenceCard key={index} />
                    ))}
                </div>

            </div>

        </div>

    );
}

export default StudentSavedPreference