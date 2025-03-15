import BlogPageLeftContaint from "../../comoponents/blogPageLeftContaint"
import BlogPageMiddleContaint from "../../comoponents/blogPageMiddleContaint"
import BlogPageRightContaint from "../../comoponents/blogPageRightContaint"

const BlogPageContaintSection = () => {
    return (
        <div className="relative z-10">
            <section className="dark:bg-gray-900 relative px-12 py-5 mx-auto">
                <div className=" mx-auto max-w-screen-2xl flex  ">
                    <div className="w-[20%] py-5 px-10 ">
                        <BlogPageLeftContaint />
                    </div>
                    <div className="w-[50%] py-5  ">
                        <BlogPageMiddleContaint />
                    </div>
                    <div className="w-[30%] py-5 px-10 ">
                        <BlogPageRightContaint />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogPageContaintSection 