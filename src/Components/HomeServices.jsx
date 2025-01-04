import { useState } from 'react';
import cover from '../assets/cover.jpg'
import  dark from '../assets/dark.png'


const ModalDetails = ({ modalOpen, onClose }) => (
    <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden={true}
        className={`${modalOpen ? "flex" : "hidden"
            } fixed inset-0 z-50  flex justify-center items-center bg-gray-800 bg-opacity-50 `}
    >

        <div className="relative p-2 w-full max-w-xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* Modal header */}
                <div className="flex items-center justify-between py-2 md:p-5  rounded-t dark:border-gray-600">
                    <h6 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Service Name
                    </h6>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-400 bg-transparent  hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* Modal body */}
                <div className="py-2 md:p-5 space-y-4 ">
                    <h6 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Lorem Ipsum Dolor Sit Amet
                    </h6>

                    <div className='bg-slate-300 p-2'>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                        <div className='px-2 mx-auto'>
                            <img
                                className="w-full h-48 object-cover rounded-lg"
                                src={dark}
                                alt={`Profile cover `}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
);




const HomeServicesCards = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
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
                                            <ModalDetails modalOpen={modalOpen} onClose={() => setModalOpen(false)} />
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