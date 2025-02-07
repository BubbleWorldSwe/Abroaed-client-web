import play_circle from "../../../../assets/play_circle.png"

const IvyLeaguesBlogSection = () => {
    return (
        <section className=" dark:bg-gray-900 relative z-20 px-10 mx-auto">
            <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-8 lg:px-6">
                <div className=" max-w-screen-sm text-start mb-4 lg:mb-16 ">
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Blog Updates
                    </p>
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        The Latest
                    </h2>
                </div>
                <div className="grid  gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="max-w-full h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative h-[330px]">
                            <a href="#">
                                <img className="object-cover h-full rounded-t-lg"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png"
                                    alt="" />
                            </a>


                            <div className="absolute bottom-3 left-2 z-0 text-white bg-slate-800 bg-opacity-40  flex justify-center  gap-2 p-2" >
                                <img
                                    className="rounded-lg max-w-full "
                                    src={play_circle}
                                    alt="Counselling session"
                                />
                                <p className="opacity-95 ">Watch History</p>
                            </div>
                        </div>
                        <div className="flex p-2 items-center space-x-4">
                            <img
                                className="w-14 h-14 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                alt="Jese Leos avatar"
                            />
                            <div className="font-medium dark:text-white">
                                <div className='text-lg font-body'>Jese Leos</div>
                                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                    Aug 15, 2021 · 16 min read
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-full h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative h-[330px]">
                            <a href="#">
                                <img className="object-cover h-full rounded-t-lg"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png"
                                    alt="" />
                            </a>


                            <div className="absolute bottom-3 left-2 z-0 text-white bg-slate-800 bg-opacity-40  flex justify-center  gap-2 p-2" >
                                <img
                                    className="rounded-lg max-w-full "
                                    src={play_circle}
                                    alt="Counselling session"
                                />
                                <p className="opacity-95 ">Watch History</p>
                            </div>
                        </div>
                        <div className="flex p-2 items-center space-x-4">
                            <img
                                className="w-14 h-14 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                alt="Jese Leos avatar"
                            />
                            <div className="font-medium dark:text-white">
                                <div className='text-lg font-body'>Jese Leos</div>
                                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                    Aug 15, 2021 · 16 min read
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-full h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative h-[330px]">
                            <a href="#">
                                <img className="object-cover h-full rounded-t-lg"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png"
                                    alt="" />
                            </a>
                            <div className="absolute bottom-3 left-2 z-0 text-white bg-slate-800 bg-opacity-40  flex justify-center  gap-2 p-2" >
                                <img
                                    className="rounded-lg max-w-full "
                                    src={play_circle}
                                    alt="Counselling session"
                                />
                                <p className="opacity-95 ">Watch History</p>
                            </div>
                        </div>
                        <div className="flex p-2 items-center space-x-4">
                            <img
                                className="w-14 h-14 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                alt="Jese Leos avatar"
                            />
                            <div className="font-medium dark:text-white">
                                <div className='text-lg font-body'>Jese Leos</div>
                                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                    Aug 15, 2021 · 16 min read
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default IvyLeaguesBlogSection