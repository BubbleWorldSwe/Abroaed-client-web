import BlogCard from "../../../comman/components/blogCard";
import { articles } from "../../../comman/data";

const BlogPageRelatedArticle = () => {
    return (
        <section className=" dark:bg-gray-900 relative px-10 mx-auto">
            <div className=" px-3 mx-auto py-12  max-w-screen-2xl  dark:bg-gray-800 antialiased  relative">
                <div className="">
                    <p className={`text-[45px] text-center font-extrabold text-gray-primary dark:text-white`}>
                        Related Articles
                    </p>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto max-w-screen-2xl">
                    {articles.map((article, idx) => (
                        <BlogCard article={article} key={idx} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogPageRelatedArticle;