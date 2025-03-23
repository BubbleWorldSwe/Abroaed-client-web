import { COLORS } from "../../../../constants/colors"

const BlogPageHeaderText = () => {
    return (
        <div className="relative z-10">
            <section className="dark:bg-gray-900 relative px-12 py-5 mx-auto">
                <div
                    className="absolute top-0 left-0 right-0 p-28 z-0"
                    style={{
                        background: `linear-gradient(to bottom, rgba(253,250,80,0.4), rgba(253,224,71,0.2), rgba(255,255,255,0.1))`,
                    }}
                ></div>
                <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 ">
                    {/* <div className="flex   text-[#52525B] font-semibold text-base px-10 mx-auto">
                        {Array(6).fill().map((_, index) => (
                            <div key={index} className="flex gap-2 items-center">
                                <span >Blog </span>
                                <ChevronRight size={15} />
                                <span>Category</span>
                            </div>
                        ))}
                    </div> */}
                    <div className="w-full flex flex-col gap-1 items-center  justify-center   ">
                        <h2 className={`text-[57px] font-extrabold text-[${COLORS.GRAY_PRIMARY}]`}>
                            Blog Post Title
                        </h2>
                        {/* <h5 className="text-[28px] mb-2 font-extrabold text-[#52525B]">
                            Blog Post Sub-Title
                        </h5> */}
                        <div className="flex gap-2">
                            <p className="text-[#52525B] font-semibold text-base">
                                Published on Dec 7, 2024
                            </p>
                            <p className="text-[#52525B] font-semibold text-base">
                                Time To Read: 6 mins
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogPageHeaderText