import { CircleUser, LayoutDashboard, LogOut } from "lucide-react";

const ProfileModal = ({ handleMouseEnter, handleMouseLeave, logout }) => {
  return (
    <div
      className="absolute right-0 top-full  py-[5px]  z-50"
      onMouseEnter={() => handleMouseEnter("login")}
      onMouseLeave={() => setTimeout(handleMouseLeave, 200)}
    >
      <ul className="space-2 grid grid-cols-1 w-[15vw]  shadow-lg  rounded-b-lg mt-2 bg-white">
        <li className="flex hover:opacity-100  items-center justify-between border-b border-gray-200  text-sm text-gray-600 font-semibold hover:text-gray-900   px-3 py-2 hover:bg-gray-100 rounded-lg transition-all">
          <div className="">
            <a
              href={"/student/profile"}
              className="flex text-sm font-semibold text-gray-700 py-1 gap-2 px-2"
            >
              <CircleUser size={20} />
              <span>View Profile</span>
            </a>
          </div>
        </li>
        <li className="flex hover:opacity-100  items-center justify-between border-b border-gray-200  text-sm text-gray-600 font-semibold hover:text-gray-900   px-3 py-2 hover:bg-gray-100 rounded-lg transition-all">
          <div className="">
            <a
              href={"/student/home"}
              className="flex text-sm font-semibold text-gray-700 py-1 gap-2 px-2"
            >
              <LayoutDashboard size={20} />
              <span>View Dashboard</span>
            </a>
          </div>
        </li>
        <li className="flex hover:opacity-100  items-center justify-between border-b border-gray-200  text-sm text-gray-600 font-semibold hover:text-gray-900   px-3 py-2 hover:bg-gray-100 rounded-lg transition-all">
          <div className="">
            <a
              onClick={logout}
              className="flex text-sm font-semibold text-gray-700 py-1 gap-2 px-2"
            >
              <LogOut size={20} />
              <span>Sign Out</span>
            </a>
          </div>
        </li>

        {/* ))} */}
      </ul>
    </div>
  );
};

export default ProfileModal;
