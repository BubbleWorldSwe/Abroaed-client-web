import { ChevronRight } from "lucide-react"
import { useState } from "react";
import ExploreCourseCard from "../components/exploreCourseCard";
import { exploreCountries, exploreDomains, exploreUniversities } from "../data";

const ExploreCourseNavItemModal = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    return (
        <div
            className="absolute left-0 top-full mt-2 min-w-max h-[60vh] bg-white border border-gray-100 flex z-50 overflow-hidden"
        >
            {/* Left Sidebar: Domain List */}
            <div className="p-3 w-1/4 overflow-y-auto text-gray-900 bg-white lg:rounded-lg dark:dark:text-white lg:col-span-2 dark:bg-gray-800">
                <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                    Domain
                </h3>
                <ul>
                    {exploreDomains.map((domain, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                className="flex justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                            >
                                <div className="font-semibold text-base">{domain.domainName}</div>
                                <ChevronRight />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Right Section: Universities + Country Filters */}
            <div className="py-5 w-3/4 px-5 bg-gray-50 lg:rounded-lg lg:col-span-1 dark:bg-gray-700 overflow-y-auto">
                {/* Title */}
                <h3 className="mb-4 text-lg font-bold text-gray-700 dark:text-white">
                    MBA(20)
                </h3>
                <div className="flex mb-4 space-x-4">
                    {exploreCountries.map((country, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedCountry(country.countryName)}
                            className={`px-3 py-2 border-2 text-base font-semibold border-gray-600 rounded-full ${selectedCountry === country.countryName
                                ? "bg-red-700 text-white"
                                : "bg-white text-gray-500"
                                }`}
                        >
                            {country.countryName}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 max-h-[40vh] overflow-y-auto">
                    {exploreUniversities.map((uni) => (
                        <ExploreCourseCard key={uni.id} uni={uni} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default ExploreCourseNavItemModal