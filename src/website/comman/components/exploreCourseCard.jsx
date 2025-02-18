/* eslint-disable react/prop-types */

const ExploreCourseCard = ({ uni = {} }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md border">
            {/* University Logo, Name, and Course */}
            <div className="flex items-center space-x-4">
                <img
                    src={uni.logo}
                    alt={uni.name}
                    className="w-12 h-12 object-contain"
                />
                <div>
                    <h2 className="text-lg font-semibold">{uni.name}</h2>
                    <p className="text-gray-600">{uni.course}</p>
                </div>
            </div>

            {/* Additional Details */}
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                    <p className="text-gray-500 text-sm">Country</p>
                    <p className="font-medium">{uni.country}</p>
                </div>
                <div>
                    <p className="text-gray-500 text-sm">Online</p>
                    <p className="font-medium">{uni.online}</p>
                </div>
                <div>
                    <p className="text-gray-500 text-sm">On Campus</p>
                    <p className="font-medium">{uni.onCampus}</p>
                </div>
            </div>
        </div>
    )
}

export default ExploreCourseCard;