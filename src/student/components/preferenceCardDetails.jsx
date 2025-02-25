import studentColImg from "../../assets/studentColImg.png"
import studentcolFrame from "../../assets/studentcolFrame.png"
import squareacademiccapbold from "../../assets/squareacademiccapbold.png"
import fluent_person from "../../assets/fluent_person.png"
import Book from "../../assets/Book.png"

const PreferenceCardDetails = () => {
    return (
        <div className="bg-white w-64 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-shrink-0">
            <div className="relative">
                <img
                    className="rounded-t-lg w-full h-40 object-cover"
                    src={studentColImg}
                    alt="University"
                />
                <div className="absolute w-20 h-20 -bottom-10 left-4">
                    <img src={studentcolFrame} alt="Frame" />
                </div>
            </div>
            <div className="p-5 mt-8">
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                    University of Glasgow
                </h5>
                <p className="text-gray-500 mb-3">United Kingdom</p>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <img className="w-5 h-5" src={squareacademiccapbold} alt="Academic" />
                        <p className="text-gray-500 dark:text-gray-400">World Ranking: 95</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-5 h-5" src={fluent_person} alt="Students" />
                        <p className="text-gray-500 dark:text-gray-400">Total Students: 6500</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-5 h-5" src={Book} alt="Courses" />
                        <p className="text-gray-500 dark:text-gray-400">Courses Available: 40</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default PreferenceCardDetails