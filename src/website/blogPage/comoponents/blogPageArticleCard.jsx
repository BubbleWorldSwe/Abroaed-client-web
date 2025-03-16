
const BlogPageArticleCard = () => {
    return (
        <div className=" mx-auto w-full bg-white rounded-xl shadow-md dark:bg-gray-900 dark:border-gray-700">
            <a href="#">
                <img
                    className=" rounded-t-xl"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
                    alt="office laptop working"
                />
            </a>
            <div className="p-4">
                <div className="flex items-center mb-1 space-x-2">
                    <div className="text-base font-normal text-[#52525B] dark:text-gray-400">
                        Date • Time To Read
                    </div>
                </div>
                <h3 className="mb-1 text-[22px] font-semibold leading-tight  text-[#27272A] ">
                    Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet
                </h3>
                <p className="mb-3 text-base text-[#71717A]  font-normal">
                    One line hook/ brief of the article.
                </p>
            </div>
        </div>
    )
}

export default BlogPageArticleCard