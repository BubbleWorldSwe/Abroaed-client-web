
const AbroaedPlusHowItWork = () => {
    return (
        <div className="relative px-10 mx-auto">
            <div className=" px-4 py-10 flex flex-col gap-6 mx-auto max-w-screen-2xl  mt-5">
                {/* Content */}
                <div className="relative z-10">
                    <div className='py-8'>
                        <h2 className="mb-6 text-4xl  font-extrabold text-gray-900 dark:text-white">
                            How It Works?
                        </h2>
                        <p className="text-[#27272A] text-sm ">
                            Studying in the UK offers a variety of experiences. The cultural and traditional values of the UK attract several international students every year. The popular areas of employment in UK are as follows:
                        </p>
                    </div>
                    <div className='py-5'>
                        <h3 className="mb-2  text-2xl  font-bold text-gray-900 dark:text-white">
                            lorem ipsum dolor sit
                        </h3>
                        <p className="text-[#27272A] text-sm ">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui. Nam arcu libero, blandit vel ipsum sagittis, lacinia tincidunt quam. Donec volutpat sodales tincidunt. Praesent pharetra nisi placerat diam fringilla, ac fermentum erat commodo. Quisque semper arcu sit amet auctor consequat. Mauris diam urna, dignissim sed metus eu, congue porttitor nisi. Nulla facilisi.
                        </p>
                    </div>
                    <div className='py-5'>
                        <h3 className="mb-2  text-2xl  font-bold text-gray-900 dark:text-white">
                            lorem ipsum dolor sit
                        </h3>
                        <p className="text-[#27272A] text-sm ">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui. Nam arcu libero, blandit vel ipsum sagittis, lacinia tincidunt quam. Donec volutpat sodales tincidunt. Praesent pharetra nisi placerat diam fringilla, ac fermentum erat commodo. Quisque semper arcu sit amet auctor consequat. Mauris diam urna, dignissim sed metus eu, congue porttitor nisi. Nulla facilisi.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-5 mt-5">
                        {Array(12).fill().map((_, index) => (
                            <div
                                key={index}
                                className="w-full  bg-white flex-shrink-0 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
                            >
                                <div className="p-5">
                                    <div className="flex justify-between">
                                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                            Lorem Ipsum
                                        </h5>
                                    </div>
                                    <p className="mb-3 font-semibold text-[#52525B] dark:text-gray-400">
                                        lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AbroaedPlusHowItWork;