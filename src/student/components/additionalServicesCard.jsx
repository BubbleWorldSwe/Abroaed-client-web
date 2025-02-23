/* eslint-disable react/prop-types */

const AdditionalServicesCard = ({ service = {} }) => {
    return (
        <div
            className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
            <div className="p-5 flex items-center justify-between">
                <div className="">
                    <p className="text-base text-center font-semibold text-gray-900 dark:text-white">
                        {service?.serviceName}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default AdditionalServicesCard