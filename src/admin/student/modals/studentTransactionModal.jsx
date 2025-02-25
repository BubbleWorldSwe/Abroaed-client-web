/* eslint-disable react/prop-types */
import { Toaster } from "react-hot-toast"

const StudentTransactionModal = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50  ">
                    <div className="w-[25vw] mx-auto max-h-[70vh] overflow-y-auto bg-white p-6 shadow-md rounded-lg border border-gray-300 relative">
                        <button
                            className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                        <h2 className="text-lg font-semibold">New Transaction</h2>
                        <div className="grid grid-cols-1 gap-4 mt-4">
                            <div >
                                <label className="block text-sm font-semibold text-[#27272A] mb-1">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    placeholder="DD/MM/YYYY"
                                    className="w-full px-3 py-1 border-none bg-[#F4F4F5] border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div >
                                <label className="block text-sm font-semibold text-[#27272A] mb-1">
                                    Transaction Amount (INR)
                                </label>
                                <input
                                    type="number"
                                    placeholder="XXXXX"
                                    className="w-full px-3 py-1 border-none bg-[#F4F4F5] border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[#27272A] mb-1">
                                    Payment Mode                                </label>
                                <select
                                    className="w-full px-3 py-1 border-none bg-[#F4F4F5] text-[#3F3F46] rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option>Cash</option>
                                    <option>Cheque</option>
                                    <option>Net Banking</option>
                                    <option>UPI</option>
                                    <option>RTGS</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[#27272A] mb-1">
                                    Particulars
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="w-full px-3 py-1 border-none bg-[#F4F4F5] border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Lorem Ipsum"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row-reverse">
                            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                Submit
                            </button>
                        </div>
                    </div>
                    );
                </div>
            )}
            <Toaster position="top-center" reverseOrder={false} />
        </>
    )
}

export default StudentTransactionModal