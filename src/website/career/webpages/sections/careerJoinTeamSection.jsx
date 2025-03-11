import { benefits } from "../../data"


function CareerJoinTeam() {
    return (
        <div>
            <div className="mt-2 py-8 flex flex-col gap-2 mx-auto max-w-screen-2xl px-14  bg-white dark:bg-gray-900">
                <header className="mb-4 flex flex-col gap-3 lg:mb-6 not-format">
                    <h1 className=" text-[45px] font-extrabold leading-tight text-gray-900  lg:text-4xl dark:text-white">
                        Why you should join our awesome team
                    </h1>
                    <h2 className=" text-[24px] font-bold text-[#52525B]   dark:text-white">
                        We want to feel like home when you are working at Abroaed & for that we have curated a great set of benefits for you.                    </h2>
                </header>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3  gap-6 ">
                    {
                        benefits.map((benefit, index) =>
                            <div
                                key={index}
                                className=" max-w-sm flex flex-col gap-1 flex-grow-0 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                            >
                                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"></img>
                                <h5 className="mt-2 text-[#52525B] text-[28px] font-bold   dark:text-white">
                                    {benefit.heading}

                                </h5>
                                <p className="font-semibold  text-sm mt-6 text-[#52525B] dark:text-gray-400">
                                    {benefit.text}
                                </p>
                                <p>Location, India</p>
                            </div>

                        )
                    }



                </div>
            </div>
        </div>
    )
}

export default CareerJoinTeam