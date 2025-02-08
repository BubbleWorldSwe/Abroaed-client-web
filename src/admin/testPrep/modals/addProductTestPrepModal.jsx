/* eslint-disable react/prop-types */
import { useState } from "react";


const AddProductTestPrepModal = ({ isOpen, onClose, setIsDone }) => {
    const [formData, setFormData] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsDone(true);
        onClose();
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            {isOpen && (<div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="bg-white max-w-md py-8  px-10 font-rethink dark:bg-gray-900 rounded-lg shadow-lg w-full  relative">
                    <button
                        className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                    <h2 className="text-xl font-bold ">Add Product</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 mx-auto py-5 rounded-lg">
                        <div>
                            <label className="block text-sm mb-1 whitespace-nowrap  font-semibold">
                                Product Name
                            </label>
                            <input
                                type="text"
                                name="productName"
                                value={formData.productName}
                                onChange={handleChange}
                                className="w-full bg-[#F4F4F5] px-3 py-1 rounded-md border-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1 whitespace-nowrap  font-semibold">
                                Exam
                            </label>
                            <select
                                name="exam"
                                value={formData.exam}
                                onChange={handleChange}
                                className="w-full bg-[#F4F4F5] px-3 py-1 rounded-md border-none"
                            >
                                <option value="">Select Exam</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Data Structures">Data Structures</option>
                                <option value="AI Certification">AI Certification</option>
                                <option value="Ethical Hacking">Ethical Hacking</option>
                                <option value="AWS Certification">AWS Certification</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm mb-1 whitespace-nowrap  font-semibold">
                                Language
                            </label>
                            <select
                                name="language"
                                value={formData.language}
                                onChange={handleChange}
                                className="w-full bg-[#F4F4F5] px-3 py-1 rounded-md border-none"
                            >
                                <option value="">Select Language</option>
                                <option value="English">English</option>
                                <option value="Python">Python</option>
                                <option value="French">French</option>
                                <option value="Spanish">Spanish</option>
                            </select>
                        </div>
                        <div className="flex gap-3 justify-end">
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
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>)}
        </>
    )
}

export default AddProductTestPrepModal;