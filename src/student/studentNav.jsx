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
