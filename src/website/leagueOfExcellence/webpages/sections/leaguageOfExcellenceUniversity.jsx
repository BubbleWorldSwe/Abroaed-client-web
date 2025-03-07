import UniversityCardDetails from "../../components/universityCardDetails"
import { universities } from "../../data"

const LeaguageOfExcellenceUniversity = () => {
    return (
        <section className="">
            <div className=" px-14  flex flex-col gap-6 mx-auto max-w-screen-2xl ">
                {/* Content */}
                <div className="relative z-10">
                    <h2 className="mb-2 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                        Top Universities
                    </h2>
                    <div className=" border-t border-gray-300"></div>
                </div>
            </div>
            <div className="flex gap-10  py-10 overflow-x-auto snap-x scroll-smooth scrollbar-hide">
                {universities.map((item, index) => (
                    <div key={index} className="min-w-[25%] snap-start">
                        <UniversityCardDetails item={item} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default LeaguageOfExcellenceUniversity