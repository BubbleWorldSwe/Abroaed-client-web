/* eslint-disable react/prop-types */
import { ChevronRight, X } from "lucide-react";
import Flag from "react-world-flags";
import CollegeListPhone from "./collegeListPhone";

const ExploreCollegeModalPhone = ({
    isOpenExploreCollegePhone,
    setIsOpenExploreCollegePhone,
    allDestinations,
    handleDestinationClick,
    selectedDestination,
    selectedDestModalPhone,
    setSelectedDestModalPhone
}) => {
    if (!isOpenExploreCollegePhone) return null;

    return (
        <>
            <CollegeListPhone
                selectedDestModalPhone={selectedDestModalPhone}


            />

            <div className="fixed inset-0 z-50 bg-white text-gray-primary shadow-xl">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b shadow-lg">
                    <h2 className="text-lg font-semibold">Destinations</h2>
                    <button onClick={() => setIsOpenExploreCollegePhone(false)}>
                        <X size={24} />
                    </button>
                </div>

                {/* Destination list */}
                <div className="overflow-y-auto">
                    <ul className="flex flex-col gap-[2px] h-[49rem]">
                        {allDestinations?.map((destination) => (
                            <li key={destination._id}>
                                <button
                                    onClick={() => {
                                        setSelectedDestModalPhone(true);
                                        handleDestinationClick(destination);
                                    }}
                                    className={`flex justify-between whitespace-nowrap p-3 w-full text-left rounded-lg ${selectedDestination?._id === destination._id
                                        ? "bg-gray-100 dark:bg-gray-600"
                                        : "hover:bg-gray-50 dark:hover:bg-gray-700"
                                        }`}
                                >
                                    <span className="font-semibold text-base flex items-center">
                                        <Flag
                                            width={20}
                                            code={destination?.countryId?.code}
                                            style={{ marginRight: "10px" }}
                                        />
                                        {destination?.countryId?.name}
                                    </span>
                                    <ChevronRight />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ExploreCollegeModalPhone;