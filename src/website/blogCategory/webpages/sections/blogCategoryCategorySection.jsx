import { ChevronDown } from "lucide-react"
import BlogCategoryArticleCard from "../../comoponents/blogCategoryArticleCard"

const BlogCategoryCategorySection = () => {
    return (
        <div className="relative z-10">
            <section className="dark:bg-gray-900 relative px-16 py-5 pb-16 mx-auto">
                <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 ">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 ">
                        {Array(3).fill().map((_, index) => (
                            <BlogCategoryArticleCard key={index} />
                        ))
                        }
                    </div>
                    <div className="flex mt-10 justify-center items-center">
                        <button className="bg-yellow-300 px-3 py-2 hover:bg-gray-100 text-gray-900 font-semibold flex gap-2 items-center    rounded-lg shadow">
                            <span>
                                Show more

                            </span>
                            <span>
                                <ChevronDown width={18} />
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogCategoryCategorySection