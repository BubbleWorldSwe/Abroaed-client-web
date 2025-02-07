import IvyLeaguesUniversityCard from "../../components/ivyLeaguesUniversityCard"
import { universities } from "../../data"

const IvyLeaguesUniversitySection = () => {
    return (
        <div className="relative">
            {/* Blob Background */}
            <section className="px-10 mx-auto">
                <div className=" px-4  flex flex-col gap-6 mx-auto max-w-screen-2xl mt-5">
                    {/* Content */}
                    <div className="relative z-10">
                        <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                            Top Ivy League Univerisities
                        </h2>
                        <div className="my-4 border-t border-gray-400"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5">
                            {universities.map((item, index) => (
                                <IvyLeaguesUniversityCard item={item} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default IvyLeaguesUniversitySection