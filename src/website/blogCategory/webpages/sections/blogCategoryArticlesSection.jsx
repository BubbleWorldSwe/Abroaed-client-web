import BlogCategoryArticleCard from "../../comoponents/blogCategoryArticleCard"

const BlogCategoryArticlesSection = () => {
    return (
        <div className="">
            <section className="dark:bg-gray-900 relative px-12 py-5 mx-auto">
                <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 py-14">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 ">
                        {
                            Array(3).fill().map((_, index) => (
                                <BlogCategoryArticleCard key={index} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogCategoryArticlesSection