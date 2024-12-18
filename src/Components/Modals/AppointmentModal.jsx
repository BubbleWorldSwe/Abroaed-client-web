import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { scheduleAppointment } from "../../slices/leadSlice";

const AppointmentModal = ({ leadId, onClose }) => {
  const dispatch = useDispatch();

  const [appointmentData, setAppointmentData] = useState({
    date: "",
    timeSlot: "",
    type: "Virtual",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Scheduling appointment:", { id: leadId, appointmentData });
    dispatch(scheduleAppointment({ id: leadId, appointmentData }));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Schedule Appointment</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={appointmentData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700">Time Slot</label>
            <input
              type="time"
              name="timeSlot"
              value={appointmentData.timeSlot}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700">Appointment Type</label>
            <select
              name="type"
              value={appointmentData.type}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="Virtual">Virtual</option>
              <option value="Home Appointment">Home Appointment</option>
              <option value="In-Person">In-Person</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
