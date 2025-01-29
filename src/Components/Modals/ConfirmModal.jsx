import { Toaster } from "react-hot-toast"


const ConfirmModal = ({
    isOpen,
    onClose,
    text
}) => {


    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white py-8  px-10 font-rethink dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-max relative">
                        <button
                            className="absolute w-10 h-10 top-1 right-1 text-gray-600 hover:text-gray-900 text-2xl"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl  font-semibold mb-4 dark:text-white">
                            {text}
                        </h2>
                        <div>
                            <div className="flex justify-end mt-4">

                                <button
                                    type="submit"
                                    className="bg-blue-600 w-full text-white px-4 py-2 rounded-md"
                                    onClick={onClose}
                                >
                                    Done
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Toaster position="top-center" reverseOrder={false} />
        </>
    )
}

export default ConfirmModal