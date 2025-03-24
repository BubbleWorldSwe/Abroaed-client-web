/* eslint-disable react/no-unescaped-entities */

import vector from ".././../../../assets/kpiVector.png"
function CareerJobSection() {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900 relative py-16  px-14 mx-auto">
                <div className="py-7 px-1 mx-auto max-w-screen-2xl   relative z-10">
                    <h1 className={`mb-6 text-[45px] font-extrabold  text-gray-primary  dark:text-white`}>
                        We'd Love to work with someone like you!
                    </h1>
                    <h2 className=" text-[32px] font-bold  text-[#52525B]   dark:text-white">
                        Category Name
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {Array(6).fill().map((_, index) => (
                        <div key={index} className="w-full h-[12rem] relative bg-black rounded-lg overflow-hidden flex flex-col justify-center items-center p-6">
                            <img
                                className="absolute right-0 top-0 h-full object-contain z-0"
                                src={vector}
                                alt="Decorative vector"
                            />
                            <div>
                                <h5 className="text-[32px] font-bold bg-clip-text text-transparent z-10 flex justify-center items-center w-full text-center"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(91.57deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%)",
                                    }}>
                                    Job Title
                                </h5>
                                <p className="font-normal text- text-sm dark:text-gray-400">

                                </p>
                                <p className="text-white">Location, India</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default CareerJobSection