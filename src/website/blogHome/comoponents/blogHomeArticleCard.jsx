import { useNavigate } from "react-router-dom"
import { COLORS } from "../../../constants/colors";

const BlogHomeArticleCard = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/blog/1`)
    }

    return (
        <div className=" mx-auto w-full bg-white rounded-xl shadow-md dark:bg-gray-900 dark:border-gray-700">
            <a href="#">
                <img
                    className=" rounded-t-xl hover:opacity-80"
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
                <h3 className={`mb-1 text-[22px] font-semibold leading-tight  text-[${COLORS.GRAY_PRIMARY}] `}>
                    Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet
                </h3>
                <p className="mb-3 text-base text-[#71717A]  font-normal">
                    One line hook/ brief of the article.
                </p>
                <div className=" mt-2">
                    <button className="px-3 py-2 bg-[#fdda24] text-gray-700 font-semibold hover:bg-yellow-300 rounded-lg "
                        onClick={handleNavigate}
                    >Read More</button>
                </div>
            </div>
        </div>)
}

export default BlogHomeArticleCard