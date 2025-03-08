
const LeaguageOfExcellenceServicesOverviews = () => {
    const countriesName = ["United States of America", "United Kingdom", "Canada", "France", "Italy", "Germany", "Czech Republic", "Ireland", "Netherlands", "Australia"]

    return (
        <div className="relative z-10">
            <section className="dark:bg-gray-900 relative px-12 mx-auto">
                <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 lg:py-20">
                    <p className="font-normal mb-4 text-gray-500 text-sm  dark:text-gray-400">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui. Nam arcu libero, blandit vel ipsum sagittis, lacinia tincidunt quam. Donec volutpat sodales tincidunt. Praesent pharetra nisi placerat diam fringilla, ac fermentum erat commodo. Quisque semper arcu sit amet auctor consequat. Mauris diam urna, dignissim sed metus eu, congue porttitor nisi. Nulla facilisi.
                    </p>
                    <div className="pt-20">
                        <h2 className="mb-8 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                            Services Offered Overview
                        </h2>
                        <p className="font-normal mb-4 text-gray-500 text-sm  dark:text-gray-400">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui. Nam arcu libero, blandit vel ipsum sagittis, lacinia tincidunt quam. Donec volutpat sodales tincidunt. Praesent pharetra nisi placerat diam fringilla, ac fermentum erat commodo. Quisque semper arcu sit amet auctor consequat. Mauris diam urna, dignissim sed metus eu, congue porttitor nisi. Nulla facilisi.
                        </p>
                        <div className="py-10 px-10 font-medium flex gap-2 text-center justify-between">
                            {
                                countriesName.map((name, index) => (
                                    <button
                                        key={index}
                                        className="hover:bg-[#27272A] hover:text-white bg-white text-[#27272A] px-4 py-1 rounded-full"
                                    >
                                        {name}
                                    </button>
                                ))
                            }
                        </div>
                        <p className="font-normal  text-gray-500 text-sm  dark:text-gray-400">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui. Nam arcu libero, blandit vel ipsum sagittis, lacinia tincidunt quam. Donec volutpat sodales tincidunt. Praesent pharetra nisi placerat diam fringilla, ac fermentum erat commodo. Quisque semper arcu sit amet auctor consequat. Mauris diam urna, dignissim sed metus eu, congue porttitor nisi. Nulla facilisi.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LeaguageOfExcellenceServicesOverviews