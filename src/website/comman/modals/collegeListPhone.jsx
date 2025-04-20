/* eslint-disable react/prop-types */

import { X } from "lucide-react";
import UniversityCard from "../components/universityCard";

const CollegeListPhone = ({
    selectedDestModalPhone,
    setSelectedDestModalPhone,
    setIsOpenExploreCollegePhone,
    selectedDestination,
    filteredColleges,
    handleStateClick,
    isLoading,
    states,
    selectedState
}) => {
    if (!selectedDestModalPhone) return null;


    return (
        <div className="fixed inset-0 z-50 bg-white text-gray-primary  shadow-xl">
            {/* Header */}
            <div className="flex justify-between items-center  p-4 border-b shadow-lg">
                <h2 className="text-lg font-semibold"> {`${selectedDestination?.countryId?.name} ( ${filteredColleges?.length} )`}</h2>
                <button onClick={() => {
                    setSelectedDestModalPhone(false)
                    setIsOpenExploreCollegePhone(true)
                }}>
                    <X size={24} />
                </button>
            </div>
            <div className="px-2 mx-auto mt-6 ">
                <h3 className="mb-4 text-lg font-bold text-gray-700 dark:text-white">
                    States
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {states?.map((state) => (
                        <button
                            key={state?._id}
                            onClick={() => handleStateClick(state)}
                            className={`px-4 py-2 border rounded-full hover:bg-gray-primary hover:text-white font-semibold ${selectedState?._id === state?._id
                                ? "bg-gray-800 text-white"
                                : "bg-[#f5f5f5] text-gray-700"
                                }`}
                        >
                            {state?.name}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 py-2  max-h-[40rem] md:h-full    w-full overflow-y-auto">
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : filteredColleges?.length > 0 ? (
                        filteredColleges?.map((college) => (
                            <UniversityCard item={college} key={college?._id} />
                        ))
                    ) : (
                        <p>No colleges available for the selected state.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CollegeListPhone