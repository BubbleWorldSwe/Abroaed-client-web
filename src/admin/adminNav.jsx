import { useNavigate } from "react-router-dom";
import { IMAGES } from "../constants/images";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { adminLogout } from "../redux/actions/authActions";
import LogoutModal from "../commons/modal/logoutModal";

const AdminNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { admin } = useSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(adminLogout(null));
    navigate("/admin/signin");
  };

  const handleProfileClick = () => {
    navigate("/admin/profile");
    setIsMenuOpen(false);
  };

  const handleChangePasswordClick = () => {
    navigate("/admin/change-password");
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

        <div className="relative flex items-center space-x-5" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
          >
            <img
              className="w-10 h-10 object-cover rounded-full border-2 border-gray-300"
              src={IMAGES.user}
              alt="Rounded avatar"
            />
            <p className="text-black font-semibold">
              {`Welcome, ${admin?.firstName}`}
            </p>
          </button>

          {isMenuOpen && (
            <div className="absolute top-0 right-0 mt-14 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <button
                //  onClick={handleProfileClick}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                My Profile
              </button>
              <button
                // onClick={handleChangePasswordClick}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Change Password
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
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

export default AdminNav;
