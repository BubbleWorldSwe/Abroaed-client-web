import HomeCounsellingCourseCard from "../../components/homeCounsellingCourseCard"
import { courses } from "../../data"

const HomeCounsellingCourseOffer = () => {
    return (
        <div className="relative">
            {/* Blob Background */}
            <section className="px-10 mx-auto">
                <div className=" px-4  flex flex-col gap-6 mx-auto max-w-screen-2xl ">
                    {/* Content */}
                    <div className="relative z-10 mt-10">
                        <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                            Course Offerings
                        </h2>
                        <div className="my-4 border-t border-gray-300"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
                            {courses.map((course, index) => (
                                <HomeCounsellingCourseCard course={course} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeCounsellingCourseOffer