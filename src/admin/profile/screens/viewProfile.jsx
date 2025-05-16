import { useEffect, useState } from "react";
import pencil from "../../../assets/pencil.png";
import { useDispatch, useSelector } from "react-redux";
import UpdateProfileModal from "../modals/updateProfileModal";
import { getRoles } from "../../../api/api";
import ChangePasswordModal from "../modals/changePasswordModal";
import {
  adminGetProfileRequest,
  adminLogout,
  adminUpdateProfileRequest,
} from "../../../redux/actions/authActions";
import ActivityLoader from "../../../commons/components/loader/activityLoader";
import { IMAGES } from "../../../constants/images";
import { LogOut } from "lucide-react";
import LogoutModal from "../../../commons/modal/logoutModal";

const AdminProfile = () => {
  const dispatch = useDispatch();
  const { admin, adminId, loading } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const handleOpenEditModal = () => setIsEditModalOpen(true);
  const handleCloseEditModal = () => setIsEditModalOpen(false);

  const handleOpenPasswordModal = () => setIsPasswordModalOpen(true);
  const handleClosePasswordModal = () => setIsPasswordModalOpen(false);
  const [roles, setRoles] = useState([]);

  const onUpdateProfile = (data) => {
    dispatch(adminUpdateProfileRequest(data));
    handleClosePasswordModal();
    handleCloseEditModal();
  };

  async function fetchData() {
    try {
      fetchAdminProfile();
      const list = await getRoles();

      if (list.status === 200) {
        setRoles(list.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchAdminProfile() {
    try {
      dispatch(adminGetProfileRequest(adminId));
    } catch (error) {
      console.log(error);
    }
  }

  const handleSignOut = () => {
    dispatch(adminLogout(null));
    navigate("/admin/signin");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* Edit Profile Modal */}

      <UpdateProfileModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        onUpdate={onUpdateProfile}
        roles={roles}
        data={{
          firstName: admin?.firstName || "",
          lastName: admin?.lastName || "",
          email: admin?.email || "",
          mobile: admin?.mobile || "",
          address: admin?.address || "",
          role: admin?.role || "",
          permission: admin?.permission || "",
        }}
      />

      {/* Change Password Modal */}
      <ChangePasswordModal
        isOpen={isPasswordModalOpen}
        onClose={handleClosePasswordModal}
        onUpdate={onUpdateProfile}
      />

      <div className="w-full bg-[#fff] font-rethink min-h-[90vh] px-5 py-10 scroll-smooth">
        <div className="flex mb-8 justify-between">
          <div className="flex items-center gap-4">
            <img
              className="w-16 object-cover h-16 rounded-full bg-slate-300 border-2 ml-3"
              src={IMAGES.user}
            />
            <div>
              <div className="text-sm bg-[#F3F4F6] px-2 max-w-min">Admin</div>
              <div className="text-[#111928] text-3xl font-bold">
                {`${admin?.firstName} ${admin?.lastName}`}
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white p-5 rounded-lg shadow-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-primary">
              Personal Information
            </h2>
            <button onClick={handleOpenEditModal}>
              <img src={pencil} alt="Edit" className="w-6 h-6" />
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="font-semibold text-[#111928]">Full Name</label>
              <span className="text-[#6B7280]">{`${admin?.firstName} ${admin?.lastName}`}</span>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-[#111928]">
                Phone Number
              </label>
              <span className="text-[#6B7280]">{admin?.mobile}</span>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-[#111928]">Email</label>
              <span className="text-[#6B7280]">{admin?.email}</span>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-[#111928]">Location</label>
              <span className="text-[#6B7280]">{admin?.address || "--"}</span>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-[#111928]">Role</label>
              <span className="text-[#6B7280]">{admin?.roleId?.roleName}</span>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-[#111928]">Permission</label>
              <span className="text-[#6B7280]">
                {admin?.isWriteAccess ? "Read & Write" : "Read Only"}
              </span>
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-primary">Security</h2>
            <button onClick={handleOpenPasswordModal}>
              <img src={pencil} alt="Change Password" className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-[#111928]">Password</label>
            <span className="text-[#6B7280]">********</span>
          </div>
        </div>

        <div className="w-full flex justify-center mt-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>
      {/* Logout Button */}
      <LogoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading="Logout!"
        onLogout={handleSignOut}
      />

      <ActivityLoader loading={loading} />
    </>
  );
};

export default AdminProfile;
