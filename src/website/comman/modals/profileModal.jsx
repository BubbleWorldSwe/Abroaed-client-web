/* eslint-disable react/prop-types */
import { CircleUser, LayoutDashboard, LogOut } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/actions/authActions";

const ProfileModal = ({ handleMouseEnter, handleMouseLeave, logout }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="absolute right-0 top-full  py-5  z-50"
      onMouseEnter={() => handleMouseEnter("login")}
      onMouseLeave={() => setTimeout(handleMouseLeave, 200)}
    >
      <ul className="space-2 grid grid-cols-1 w-[15vw]  shadow-lg  rounded-b-lg mt-2 bg-white">
        {/* {menuItems?.map((data, index) => ( */}
        <li
          className="flex hover:opacity-100  items-center justify-between border-b border-gray-200  text-sm text-gray-600 font-semibold hover:text-gray-900   px-3 py-2 hover:bg-gray-100 rounded-lg transition-all"
          // onMouseEnter={() => setHoveredIndex('index')}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="">
            <a
              style={{ backgroundColor: "olive" }}
              href={"/student/profile"}
              className=" gap-2 px-4 py-2  w-full flex  items-center "
            >
              <CircleUser />
              <span>View Profile</span>
            </a>
          </div>
        </li>
        <li
          className="flex hover:opacity-100  items-center justify-between border-b border-gray-200  text-sm text-gray-600 font-semibold hover:text-gray-900   px-3 py-2 hover:bg-gray-100 rounded-lg transition-all"
          // onMouseEnter={() => setHoveredIndex('index')}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="">
            <a
              href={"/student"}
              //  style={{ backgroundColor: "palevioletred" }}
              className=" gap-2 px-4 py-2  w-full flex  items-center "
            >
              <LayoutDashboard />
              <span>View Dashboard</span>
            </a>
          </div>
        </li>
        <li
          className="flex hover:opacity-100  items-center justify-between border-b border-gray-200  text-sm text-gray-600 font-semibold hover:text-gray-900   px-3 py-2 hover:bg-gray-100 rounded-lg transition-all"
          // onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="">
            <a
              onClick={logout}
              // href={}
              className=" gap-2 px-4 py-2  w-full flex  items-center "
            >
              <LogOut />
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
