import { Link } from "react-scroll"


export const blogRoutes = [
    { sectionName: "Home", link: "home" },
    { sectionName: "Category", link: "category" },
    { sectionName: "Category", link: "category" },
    { sectionName: "Category", link: "category" },
    { sectionName: "Category", link: "category" },
    { sectionName: "Category", link: "category" },


]

const BlogRountingSection = () => {
    return (
        <section className="bg-white fixed top-28 w-full    z-20 p-2 shadow-xl">
            <div className="flex justify-center items-center max-w-screen-xl mx-auto dark:bg-gray-800 sm:rounded-xl py-2 space-y-3 md:flex-row md:space-y-0 md:space-x-5 ">
                {blogRoutes.map((path, index) => (
                    <Link
                        key={index}
                        to={path.link}
                        smooth={true}
                        duration={500}
                        offset={-120}
                        className="relative cursor-pointer font-semibold text-sm text-[#52525B] transition-colors hover:text-gray-500"
                    >
                        {path.sectionName}
                    </Link>
                ))}
            </div>
        </section>
    );
};


export default BlogRountingSection