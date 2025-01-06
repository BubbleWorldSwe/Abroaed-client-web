import  { useEffect } from "react";
import dark from "../../assets/dark.png";

function HomeServiceModal({ modalOpen, onClose }) {
    useEffect(() => {
        if (modalOpen) {
            // Disable scroll on body when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable scroll when modal is closed
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [modalOpen]);

    return (
        modalOpen && (
            <div className={`${modalOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
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

                                <div className="bg-slate-300 p-2">
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        With less than a month to go before the European Union enacts
                                        new consumer privacy laws for its citizens, companies around
                                        the world are updating their terms of service agreements to
                                        comply.
                                    </p>
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        The European Union’s General Data Protection Regulation
                                        (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                                        common set of data rights in the European Union. It requires
                                        organizations to notify users as soon as possible of high-risk
                                        data breaches that could personally affect them.
                                    </p>
                                    <div className="px-2 mx-auto">
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
            </div>
        )
    );
}

export default HomeServiceModal;