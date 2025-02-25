/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";


const UpdateLeadStatus = ({ leadId, leadName, team = {}, onClose }) => {

    const [selectedTeam, setSelectedTeam] = useState({
        counsellor: "",
        backendManager: "",
        mentor: "",
    });

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-max relative">
                <button
                    className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h2 className="text-xl font-semibold mb-4">Update Lead Status</h2>
                {/* <h5 className="text-sm font-semibold mb-1">
                    Student Name
                </h5> */}
                {/* <div className="mb-4">
                    <input
                        placeholder="Garvit Singh"
                        className="w-1/2 px-3 py-2 border-none text-[#3F3F46] bg-[#F4F4F5] rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div> */}
                <h5 className="text-sm font-semibold mb-2 ">
                    Update To
                </h5>
                <div className="flex justify-between w-1/3 mb-4">
                    <spna className='text-sm    rounded-md px-3 py-1  bg-[#FDF6B2] text-[#723B13]'>Nurture</spna>
                    <spna className='text-sm    rounded-md px-3 py-1  bg-[#DEF7EC] text-[#03543F]'>Converted</spna>
                    <spna className='text-sm    rounded-md px-3 py-1  bg-[#FDE8E8] text-[#9B1C1C]'>Lost</spna>
                </div>
                <div className="grid mt-3 grid-cols-1 gap-4 lg:grid-cols-3">
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-1">Counsellor</label>
                        <select
                            name="counsellor"
                            value={selectedTeam.counsellor}
                            // onChange={handleChange}
                            className="w-full px-3 py-2 border-none bg-[#F4F4F5] text-[#3F3F46] rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        >
                            <option value="">Select Counsellor</option>
                            {/* {getMembersByRole("Counsellor").map((member) => (
                                <option key={member.id} value={member.id}>
                                    {member.name}
                                </option>
                            ))} */}
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-1">Backend Manager</label>
                        <select
                            name="backendManager"
                            value={selectedTeam.backendManager}
                            // onChange={handleChange}
                            className="w-full px-3 py-2 border-none text-[#3F3F46] bg-[#F4F4F5] rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        >
                            <option value="">Select Backend Manager</option>
                            {[].map((member) => (
                                <option key={member.id} value={member.id}>
                                    {member.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-700 font-semibold mb-1">Billable Amount (INR)</label>
                        <input type="text" name="amount" id="amount"
                            className="w-full px-3 py-2 border-none text-[#3F3F46] bg-[#F4F4F5] rounded-lg focus:outline-none focus:ring focus:border-blue-500"

                        />
                    </div>
                    <div className="p-1"></div>

                </div>


                <div className="flex justify-end space-x-2 mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                    >
                        Reset
                    </button>
                    <button
                        // onClick={handleSave}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpdateLeadStatus