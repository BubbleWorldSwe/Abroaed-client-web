/* eslint-disable react/prop-types */

const AddAccommodationModal = ({ isOpen, onClose, setIsDone }) => {
    const handleSubmit = () => {
        onClose();
        setIsDone(true);
    }
    return (
        <>
            {isOpen && (
                <div className="fixed  font-rethink inset-0 bg-black bg-opacity-50 z-30 flex justify-center items-center">
                    <div className="bg-white relative px-3 py-4 rounded-lg shadow-lg w-full max-w-xl">
                        <button
                            className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-bold px-4">Add Accommodation</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 p-4">
                            <div>
                                <label
                                    className="block text-sm  whitespace-nowrap mt-2 mb-2 font-semibold"
                                >
                                    Accommodation Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-[#F4F4F5] px-3 py-1 rounded-md border-none"
                                    placeholder="Enter name" />
                            </div>
                            <div>
                                <label
                                    className="block text-sm  whitespace-nowrap mt-2 mb-2 font-semibold"
                                >Location
                                </label>
                                <select
                                    className="w-full text-sm font-medium bg-[#F4F4F5] px-3 py-1 rounded-md border-none"
                                >
                                    <option value="">Select location</option>
                                    <option value="newyork">New York</option>
                                    <option value="paris">Paris</option>
                                    <option value="tokyo">Tokyo</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    className="block text-sm  whitespace-nowrap mt-2 mb-2 font-semibold"
                                >Price</label>
                                <input type="number"
                                    className="w-full bg-[#F4F4F5] px-3 py-1 rounded-md border-none"
                                    placeholder="Enter price" />
                            </div>
                            <div>
                                <label
                                    className="block text-sm  whitespace-nowrap mt-2 mb-2 font-semibold"
                                >Availability</label>
                                <input type="text"
                                    className="w-full bg-[#F4F4F5] px-3 py-1 rounded-md border-none"
                                    placeholder="Enter room availability" />
                            </div>
                            <div className="lg:col-span-2">
                                <label
                                    className="block text-sm  whitespace-nowrap mt-2 mb-2 font-semibold"
                                >Description</label>
                                <textarea
                                    className="w-full bg-[#F4F4F5] px-3 py-1 rounded-md border-none"
                                    rows="4" placeholder="Enter description"></textarea>
                            </div>
                        </div>
                        <div className="flex gap-3 justify-end mt-4">
                            <button
                                type="button"
                                className="bg-gray-300  text-gray-700 px-3 py-2 rounded-md"
                            // onClick={handleReset}
                            >
                                Reset
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-3 py-2 rounded-md"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AddAccommodationModal