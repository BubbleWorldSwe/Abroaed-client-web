import { ChevronRight } from "lucide-react"
import { COLORS } from "../../../../constants/colors"

const BlogCategoryHeaderText = () => {
    return (
        <div className="relative z-10">
            <section className="dark:bg-gray-900 relative px-12 py-5 mx-auto">
                <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 py-8">
                    <div className="flex gap-1 justify-center items-center text-[#52525B] font-semibold text-base px-10 ">
                        <span >Blog </span>
                        <ChevronRight size={15} />
                        <span>Category</span>
                    </div>
                    <div className="w-full flex flex-col gap-1 items-center justify-center   ">
                        <h2 className={`text-[57px] font-extrabold text-[${COLORS.GRAY_PRIMARY}`}>
                            Category Name
                        </h2>
                        <p className="text-[#52525B] font-semibold text-[22px]">
                            Lorem Ipsum
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogCategoryHeaderText