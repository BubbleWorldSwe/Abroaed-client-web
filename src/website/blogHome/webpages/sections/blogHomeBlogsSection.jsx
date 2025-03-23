import { COLORS } from "../../../../constants/colors"
import BlogHomeArticleCard from "../../comoponents/blogHomeArticleCard"

const BlogHomeBlogsSection = () => {
    return (
        <div className="relative z-10">
            <section className="dark:bg-gray-900 relative px-12 py-5 pb-16 mx-auto">
                <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 ">
                    <div className="w-full  flex justify-center gap-5 items-center py-5">
                        <button
                            className={`hover:bg-[${COLORS.GRAY_PRIMARY}] hover:border-none hover:text-white bg-white text-[${COLORS.GRAY_PRIMARY}] px-5 border-2 border-gray-600 py-2 rounded-lg`}
                        >All Posts</button>
                        <button
                            className={`hover:bg-[${COLORS.GRAY_PRIMARY}] hover:border-none hover:text-white bg-white text-[${COLORS.GRAY_PRIMARY}] px-5 border-2 border-gray-600 py-2 rounded-lg`}
                        >Blog</button>
                        <button
                            className={`hover:bg-[${COLORS.GRAY_PRIMARY}] hover:border-none hover:text-white bg-white text-[${COLORS.GRAY_PRIMARY}] px-5 border-2 border-gray-600 py-2 rounded-lg`}
                        >Business</button>
                        <button
                            className={`hover:bg-[${COLORS.GRAY_PRIMARY}] hover:border-none hover:text-white bg-white text-[${COLORS.GRAY_PRIMARY}] px-5 border-2 border-gray-600 py-2 rounded-lg`}
                        >SEO</button>
                    </div>
                    <div className="grid mb-5 grid-cols-1 pt-5 gap-8 sm:grid-cols-2 xl:grid-cols-3 ">
                        {Array(3).fill().map((_, index) => (
                            <BlogHomeArticleCard key={index} />
                        ))
                        }
                    </div>
                    <div className="flex  justify-center items-center mt-5">
                        <button className="px-3 py-2 bg-gray-600 text-white hover:bg-gray-300 rounded-lg ">Load More</button>
                    </div>
                </div>
            </section>
        </div>)
}

export default BlogHomeBlogsSection