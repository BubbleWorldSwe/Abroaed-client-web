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
import {
  fetchStudentApplicationRequest,
  fetchStudentPrepsBatchesRequest,
  fetchStudentProfileRequest,
  fetchStudentSavedPreferencesRequest,
  fetchStudentTransactionsRequest,
} from "./redux/actions/studentProfileActions";
import { getStudentProfile } from "./api/studentsApi";

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

  const { leadId, studentProfile } = useSelector(
    (state) => state.studentProfile
  );

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

          dispatch(fetchStudentProfileRequest(studentId));
          dispatch(fetchStudentSavedPreferencesRequest(studentId));
          dispatch(fetchStudentPrepsBatchesRequest(studentId));
          dispatch(fetchStudentTransactionsRequest(studentId));
          //   dispatch(fetchStudentApplicationRequest(leadId));
          const profile = await getStudentProfile(studentId);
          console.log(profile);

          if (profile.status === 200) {
            console.log("Data Fetched");
            let lead_id = profile.data?.result[0]?._id;
            dispatch(fetchStudentApplicationRequest(lead_id));
          }
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

  console.log(studentId, " studentId");

  useEffect(() => {
    fetchData();
  }, [dispatch, adminToken, studentToken, leadId]);

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
