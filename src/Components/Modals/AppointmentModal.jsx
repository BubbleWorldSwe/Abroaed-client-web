import { useState } from "react";
import { useDispatch } from "react-redux";
import { scheduleAppointment } from "../../slices/leadSlice";
import ConfirmModal from "./ConfirmModal";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
const AppointmentModal = ({ leadId, onClose }) => {
  const dispatch = useDispatch();
  const [confirmModalOpen, setConfirmModalOpen] = useState(false)
  const [dateTime, setDateTime] = useState(new Date());

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
    // onClose();
    setConfirmModalOpen(true)

    console.log("Scheduling appointment:", { id: leadId, appointmentData });
    dispatch(scheduleAppointment({ id: leadId, appointmentData }));
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
        <div className="bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-max relative">
          <button
            className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-xl font-semibold mb-4">Schedule Appointment</h2>
          <h5 className="text-sm font-semibold mb-1">
            Student Name
          </h5>
          <div className="mbss-4">
            <input
              placeholder="Garvit Singh"
              className="w-1/2 px-3 py-1 border border-[#D4D4D8] rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>

          <div className="space-y-4 mt-4">
            <div className=" mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div>
                <label className="text-sm font-semibold mb-1">Appointment Type</label>
                <select
                  name="type"
                  value={appointmentData.type}
                  onChange={handleChange}
                  className="w-full bg-gray-200 px-3 py-1 border-none border rounded-lg"
                >
                  <option value="Virtual">Virtual</option>
                  <option value="Home Appointment">Home Appointment</option>
                  <option value="In-Person">In-Person</option>
                </select>
              </div>


              <div>
                <label className="text-sm font-semibold mb-1">Preferred Slot</label>
                <Flatpickr
                  value={dateTime}
                  onChange={(date) => setDateTime(date[0])}
                  options={{
                    enableTime: true,
                    dateFormat: "Y-m-d H:i",
                  }}
                  className="w-full border-none bg-gray-200 rounded-lg p-1 px-3"
                />
              </div>


            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Reset
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
      <ConfirmModal
        isOpen={confirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        text="Appointment Scheduled"

      />
    </>
  );
};

export default AppointmentModal;
