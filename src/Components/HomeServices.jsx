import cover from '../assets/cover.jpg'

const HomeServicesCards = () => {
    return (
        <div>
            <section className=" dark:bg-gray-900 relative ">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 relative z-10" >
                    <div className="py-8">
                        <h1 className="mb-4 text-5xl tracking-tight font-extrabold">
                            What we bring to the table (Services).
                        </h1>
                    </div>

                    <div className="overflow-x-auto">
                        <div className="flex space-x-5" style={{ minWidth: 'max-content' }}>
                            {Array(6).fill(0).map((_, index) => (
                                <div key={index} className="w-full h-[35rem] relative">
                                    {/* Adjust w-72 to control image width */}
                                    <img
                                        className="w-96 h-full object-cover rounded-lg"
                                        src={cover}
                                        alt={`Profile cover ${index + 1}`}
                                    />
                                    <div className="absolute top-2 left-10">
                                        <p className="text-gray-100 lg:mb-2 sm:text-xl">Explore</p>
                                        <h1 className="mb-4 text-3xl  font-bold text-white">
                                            This is our service
                                        </h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>




                </div>

                </section>
        </div>
    )
}

export default HomeServicesCards;