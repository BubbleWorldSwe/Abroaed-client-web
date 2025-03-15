import BlogCategoryArticleCard from "../../comoponents/blogCategoryArticleCard"

const BlogCategoryCategorySection = () => {
    return (
        <div className="relative z-10">
            <section className="dark:bg-gray-900 relative px-16 py-5 pb-16 mx-auto">
                <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 ">
                    <div className="w-full  justify-between items-center py-12 flex ">
                        <h2 className="  text-[45px] font-extrabold  text-[#27272A] dark:text-white">
                            Category Name
                        </h2>
                        <button className="bg-yellow-300 px-5 py-2 hover:bg-gray-100 text-gray-900 font-semibold    rounded shadow">
                            view all
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 ">
                        {Array(18).fill().map((_, index) => (
                            <BlogCategoryArticleCard key={index} />
                        ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogCategoryCategorySection