import { IvyLeaguesImmigrationCard } from "../../components/ivyLeaguesImmigrationCard"

const IvyLeaguesImmigrationDetailSection = () => {
    return (
        <div className="relative px-10 mx-auto">
            <div className=" px-4 py-10 flex flex-col gap-6 mx-auto max-w-screen-2xl  mt-5">
                {/* Content */}
                <div className="relative z-10">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                        Immigration Details
                    </h2>
                    <div className="my-4 border-t border-gray-300"></div>
                    <div className="flex gap-5 py-10 overflow-x-auto flex-nowrap">
                        {Array(6).fill().map((_, index) => (
                            <IvyLeaguesImmigrationCard key={index} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default IvyLeaguesImmigrationDetailSection