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

const App = () => {
  const dispatch = useDispatch();

  const { adminToken, studentToken, isLoggedInAdmin, isLoggedInStudent } =
    useSelector((state) => state.auth);

  async function fetchData() {
    try {
      if (isLoggedInStudent) {
        if (studentToken) {
          //   dispatch(studentGetProfileRequest(studentToken));
        }
      }

      if (isLoggedInAdmin) {
        if (adminToken) {
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
