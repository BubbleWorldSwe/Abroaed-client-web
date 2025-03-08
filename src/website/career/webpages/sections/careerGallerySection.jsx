import dark from '../../../../assets/dark.png'

function CareerGallerySection() {
    return (
        <div className='my-8'>
            <h1 className='w-full text-center justify-center font-bold text-[24px] py-8 '>
                Sint in ullamco deserunt veniam eiusmod dolor sint ex ullamco ullamco anim cillum.
            </h1>
            <div className="overflow-x-auto">
                <div className="flex space-x-5" style={{ minWidth: 'max-content' }}>
                    {Array(6)
                        .fill(0)
                        .map((_, index) => (
                            <div key={index} className="w-full lg:w-96 md:w-80 sm:w-100 h-72 relative rounded-lg overflow-hidden">
                                {/* Background Image with Overlay */}
                                <div className="relative w-full h-full">
                                    <img
                                        className="w-full h-full object-cover rounded-lg"
                                        src={dark}
                                        alt={`Service ${index + 1}`}
                                    />
                                    <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
                                </div>

                                {/* Text Content */}
                                <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                                    <div>
                                        <p className="text-gray-200 lg:mb-2 sm:text-xl">Explore</p>
                                        <h1 className="mb-4 text-3xl font-bold text-white">
                                            This is our service
                                        </h1>
                                    </div>


                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default CareerGallerySection