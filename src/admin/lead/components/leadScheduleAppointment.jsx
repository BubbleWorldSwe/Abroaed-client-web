import { useState } from "react";

const LeadScheduleAppointment = () => {
    const [appointmentData, setAppointmentData] = useState({
        date: "",
        timeSlot: "",
        type: "Virtual",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppointmentData((prev) => ({ ...prev, [name]: value }));
    };
    return (
        <div className="w-full mx-auto my-2 p-6 bg-white rounded-lg shadow-lg">
            <div className="space-y-4 mt-4">
                <h2 className="text-2xl font-bold">Schedule Appointment (Already Scheduled)</h2>
                <div className=" mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <div>
                        <label className="text-sm font-semibold mb-1">
                            Appointment Type
                        </label>
                        <select
                            name="type"
                            value={appointmentData.type}
                            onChange={handleChange}
                            className="w-full bg-[#F4F4F5] text-[#3F3F46] px-3 py-1 border-none border rounded-lg"
                        >
                            <option value="Virtual">Virtual</option>
                            <option value="Home Appointment">Home Appointment</option>
                            <option value="In-Person">In-Person</option>
                        </select>
                    </div>
                    <div className="">
                        <label className="text-sm font-semibold mb-1">
                            Preferred Slot
                        </label>
                        <div >
                            <input
                                type="date"
                                placeholder="DD/MM/YYYY"
                                className="w-full px-3 py-1 border-none bg-[#F4F4F5] border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeadScheduleAppointment