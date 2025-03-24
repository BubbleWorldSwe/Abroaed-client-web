/* eslint-disable react/prop-types */
import React from "react";


const ModalLayout = ({ openModal, onClose, component }) => {
  // if (!openModal) return null; // Do not render the modal if it's not open

  const enhancedComponent = component
    ? React.cloneElement(component, { onClose })
    : null;

  return openModal ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-[90%] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] relative">
        {/* <button
        className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
        onClick={onClose}
      >
        &times;
      </button> */}

        {/* <h2 className="text-2xl font-semibold text-black mb-4">Right</h2> */}
        <div className="mt-3">
          {enhancedComponent}      </div>
        <div className="w-full flex justify-center items-center h-full mt-3">
          <button
            type="button"
            onClick={onClose}
            className="max-w-max font-rethink font-medium text-[#FBBA18] rounded-lg text-lg px-5 py-2.5 text-center focus:ring-4 focus:outline-none focus:ring-yellow-400"
            style={{
              backgroundColor: `yellow-primary`,
              color: "#000",
            }}
          >
            Ok
          </button>
        </div>

      </div>
    </div>
  ) : null
}

export default ModalLayout