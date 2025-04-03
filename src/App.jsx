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

import { fetchSavedPreferencesRequest } from "./redux/actions/savedPreferencesActions";
import { fetchAllTestPrepsRequest } from "./redux/actions/testPrepsActions";
import { fetchAllLanguagePrepsRequest } from "./redux/actions/languagePrepsActions";
import { fetchAllDestinationsRequest } from "./redux/actions/destinationActions";
import { fetchAllBlogsRequest } from "./redux/actions/blogActions";

const App = () => {
  const dispatch = useDispatch();

  const {
    adminToken,
    studentToken,
    isLoggedInAdmin,
    isLoggedInStudent,
    studentId,
    adminId,
    student,
    admin,
  } = useSelector((state) => state.auth);

  async function fetchData() {
    try {
      dispatch(fetchAllTestPrepsRequest());
      dispatch(fetchAllLanguagePrepsRequest());
      dispatch(fetchAllDestinationsRequest());
      dispatch(fetchAllBlogsRequest());

      if (isLoggedInStudent) {
        if (studentToken && studentId) {
          dispatch(fetchSavedPreferencesRequest(studentId));
          dispatch(studentGetProfileRequest(studentId));
        }
      }

      if (isLoggedInAdmin) {
        if (adminToken && adminId) {
          dispatch(adminGetProfileRequest(adminId));
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
