import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { studentLogout } from "../redux/actions/authActions";
import LogoutModal from "../commons/modal/logoutModal";
import { useState } from "react";

const NavStudent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignOut = () => {
    dispatch(studentLogout(null));
    // localStorage.removeItem("token", token);
    navigate("/home");
  };
  return (
    <>
      <nav className="bg-white w-full border-b border-gray-300 px-10 py-3 flex items-center justify-between drop-shadow-md">
        <h3 className="text-lg font-semibold sm:text-3xl md:text-4xl lg:text-lg">
          <a
            href="/home"
            className="font-cinzel tracking-[0.15em] text-2xl font-extrabold leading-[40px] text-black"
          >
            ABROA<span style={{ color: "#fbba18" }}>ED</span>
          </a>
        </h3>
        <div className="flex items-center space-x-5">
          <div className="flex-1 mx-4 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 border border-gray-300 rounded-lg pl-9 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="absolute left-3 top-3 h-4 w-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m0 0a8.5 8.5 0 1 0-1.5 1.5L21 21z"
                />
              </svg>
            </div>
          </div>
          {/* <button className="text-gray-500 hover:text-gray-700">
                    <Bell />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                    <Settings />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                    <Bookmark />
                </button> */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-gray-500 hover:text-gray-700"
          >
            <img
              className="w-10 object-cover h-10 rounded-full border-2 border-gray-300"
              src="https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small_2x/user-icon-member-login-isolated-vector.jpg"
              alt="Rounded avatar"
            />
          </button>
        </div>
      </nav>
      <LogoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading="Logout!"
        onLogout={handleSignOut}
      />
    </>
  );
};

export default NavStudent;
