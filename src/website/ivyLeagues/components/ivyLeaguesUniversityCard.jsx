/* eslint-disable react/prop-types */
import locationIcon from "../../../assets/locationIcon.png"

const IvyLeaguesUniversityCard = ({ item }) => {
    return (
        <div
            className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
            <a href="#">
                <img
                    className="rounded-t-lg w-full h-48 object-cover"
                    src={item.imgUrl}
                    alt={item.name}
                />
            </a>
            <div className="p-5">
                <div className="flex justify-between">
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {/* {item.name} */}
                        University Name
                    </h5>
                    <div>
                        <svg className="w-8 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
                        </svg>

                    </div>
                </div>
                <div className="mb-2  flex justify-between text-center ">
                    <div className="flex gap-2 justify-between">
                        <img
                            className="rounded-t-lg  object-contain"
                            src={locationIcon}
                            alt={item.name}
                        />

                        <p className="font-bold  text-gray-500 dark:text-gray-400 py-1">

                            {/* {item.location} */}
                            New York, USA
                        </p>
                    </div>
                    <div className="font-bold text-gray-500">
                        Private
                    </div>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.description}
                </p>
                <div >
                    <button type="button" data-modal-target="default-modal" data-modal-toggle="default-modal" className="py-2.5 w-full px-5 me-2 mb-2 text font-medium text-gray-700 focus:outline-none bg-white rounded-lg border border-gray-700 hover:bg-gray-100 hover:text-green-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Enquire Now</button>
                </div>
            </div>
        </div>
    )
}
export default IvyLeaguesUniversityCard;