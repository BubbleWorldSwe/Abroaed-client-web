import pencil from "../../assets/pencil.png"

const ImmigrationDetailsAdmin = () => {
  return (
    <div className="   bg-white  py-0  dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center  gap-3 ">
        <h2 className="mb-2 font-semibold ">Why Study in USA | Visa Type</h2>
        <img src={pencil} alt="edit Icon " className="w-4 h-4 mb-2" />
      </div>
      {/* About Section */}
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.         {/* {description || "No details available"} */}
      </p>
      <h2 className="mb-2 mt-3 font-semibold ">Why Study in USA | Visa Type</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.         {/* {description || "No details available"} */}
      </p>
    </div>
  )
}

export default ImmigrationDetailsAdmin