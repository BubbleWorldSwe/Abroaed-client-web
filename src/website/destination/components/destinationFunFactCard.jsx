/* eslint-disable react/prop-types */

import vectorRightFlat from "../../../assets/vectorRightFlat.png"

const DestinationFunFactCard = ({ icon, title, desc }) => {
  return (
    <>
      <div
        className="flex md:w-[427px] sm:min-w-max bg-black relative z-10 items-center space-x-4 overflow-hidden rounded-lg p-4 dark:border-gray-700 py-8 dark:bg-gray-800"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50  pointer-events-none"
          style={{
            left: "auto", // Ensure it starts from the right edge
            right: 0, // Anchor the gradient to the right
            width: "70%", // Adjust the width of the gradient area
            height: "100%", // Full height to cover the parent div
          }}
        ></div>
        <div className="text-yellow-500 text-4xl">{icon}</div>
        <div className="flex flex-col gap-4 text-white text-left">
          <p className="text-2xl font-semibold">{title}</p>
          <p className="text-lg font-normal dark:text-gray-400">
            {desc}
          </p>
        </div>
        <div className="absolute right-0">
          <img src={vectorRightFlat} />
        </div>
      </div>
    </>
  )
}

export default DestinationFunFactCard;