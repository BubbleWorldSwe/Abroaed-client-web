import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import "swiper/swiper-bundle.css"; // Swiper CSS
import "react-quill/dist/quill.snow.css";

import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  adminGetProfileRequest,
  studentGetProfileRequest,
} from "./redux/actions/authActions";
import { getSavedPreferences } from "./api/savedPreferencesApi";
import { fetchSavedPreferencesRequest } from "./redux/actions/savedPreferencesActions";

const App = () => {
  const dispatch = useDispatch();

  const {
    adminToken,
    studentToken,
    isLoggedInAdmin,
    isLoggedInStudent,
    studentId,
    adminId,
  } = useSelector((state) => state.auth);

  console.log(studentToken, " - ", studentId);

  const { savedPreferences } = useSelector((state) => state.savedPreferences);

  console.log(savedPreferences);

  async function fetchData() {
    try {
      if (isLoggedInStudent) {
        if (studentToken && studentId) {
          dispatch(fetchSavedPreferencesRequest(studentId));
        }
      }

      if (isLoggedInAdmin) {
        if (adminToken && adminId) {
          // dispatch(adminGetProfileRequest(adminToken));
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [dispatch, adminToken, studentToken]);

  return (
    <>
      <ToastContainer
        autoClose={3000}
        draggable
        pauseOnHover
        position="top-right"
      />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
