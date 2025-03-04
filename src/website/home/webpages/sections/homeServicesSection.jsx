import { useState } from 'react';
import HomeServiceModal from '../../../../Components/Modals/HomeServiceModal';
import homeService1 from "../../../../assets/homeService1.png"
import homeService2 from "../../../../assets/homeService2.png"
import homeService3 from "../../../../assets/homeService3.png"
import homeService4 from "../../../../assets/homeService4.png"
import homeService5 from "../../../../assets/homeService5.png"
import homeService6 from "../../../../assets/homeService6.png"

const serviceData = [
    {
        text1: "Home Counselling",
        text2: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        imgUrl: homeService1,
    },
    {
        text1: "Personalised Mentorship",
        text2: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        imgUrl: homeService2,
    },
    {
        text1: "Scholarship Assistance",
        text2: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        imgUrl: homeService3
    },
    {
        text1: "Visa & Accommodation",
        text2: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        imgUrl: homeService4
    },
    {
        text1: "Customised SOP & LORs",
        text2: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        imgUrl: homeService5
    },
    {
        text1: "Finance & FOREX",
        text2: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        imgUrl: homeService6
    },
];


const HomeServicesSection = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            {modalOpen && (
                <HomeServiceModal
                    modalOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                />
            )}
            <section className="dark:bg-gray-900 relative">
                <div className=" px-4 mx-auto max-w-screen-2xl  lg:px-6 relative z-10">
                    <div className="">
                        <h1 className="mb-10 text-5xl tracking-tight font-extrabold">
                            What we bring to the table (Services).
                        </h1>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="flex space-x-5" style={{ minWidth: 'max-content' }}>
                            {serviceData?.map((service, index) => (
                                <div key={index} className="w-full lg:w-96 md:w-80 sm:w-72 h-[30rem] relative rounded-lg overflow-hidden">
                                    {/* Background Image with Overlay */}
                                    <div className="relative w-full h-full">
                                        <img
                                            className="w-full h-full object-cover rounded-lg"
                                            src={service.imgUrl}
                                            alt={`Service ${index + 1}`}
                                        />
                                        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                                        <div>
                                            <h1 className="mb-1 text-2xl font-bold text-white">
                                                {service.text1}
                                            </h1>
                                            <p className="text-gray-200 lg:mb-2 text-lg">{service.text2}</p>
                                        </div>

                                        {/* Button */}
                                        {/* <button
                                            type="button"
                                            onClick={() => setModalOpen(true)}
                                            className="w-12 h-12 flex items-center justify-center font-medium bg-black bg-opacity-40 rounded-full hover:bg-opacity-60 focus:outline-none transition-all"
                                        >
                                            <svg
                                                className="w-5 h-5 text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 18 18"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 1v16M1 9h16"
                                                />
                                            </svg>
                                        </button> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default HomeServicesSection;