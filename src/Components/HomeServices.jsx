import {  useState } from 'react';
import cover from '../assets/cover.jpg'
import HomeServiceModal from './Modals/HomeServiceModal';



const HomeServicesCards = () => {
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
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6 relative z-10">
                    <div className="py-8">
                        <h1 className="mb-4 text-5xl tracking-tight font-extrabold">
                            What we bring to the table (Services).
                        </h1>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="flex space-x-5" style={{ minWidth: 'max-content' }}>
                            {Array(6)
                                .fill(0)
                                .map((_, index) => (
                                    <div key={index} className="w-full h-[35rem] relative">
                                        {/* Adjust w-72 to control image width */}
                                        <img
                                            className="w-96 h-full object-cover rounded-lg"
                                            src={cover}
                                            alt={`Profile cover ${index + 1}`}
                                        />
                                        <div className="absolute top-2 left-10">
                                            <p className="text-gray-100 lg:mb-2 sm:text-xl">Explore</p>
                                            <h1 className="mb-4 text-3xl font-bold text-white">
                                                This is our service
                                            </h1>
                                        </div>
                                        <div className="absolute bottom-2 right-2">
                                            <button
                                                type="button"
                                                onClick={() => setModalOpen(true)}
                                                className="inline-flex items-center justify-center w-10 h-10 font-medium bg-black opacity-20 rounded-full hover:opacity-60 group focus:outline-none dark:focus:ring-blue-800"
                                            >
                                                <svg
                                                    className="w-4 h-4 text-white"
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
                                            </button>
                                            {/* <ModalDetails modalOpen={modalOpen} onClose={() => setModalOpen(false)} /> */}
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


export default HomeServicesCards;