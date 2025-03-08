import { call, put, takeLatest } from "redux-saga/effects";
import { getStudents, setUpdateStudent } from "../../api/studentsApi"; // API functions
import {
  EDIT_STUDENT_REQUEST,
  editStudentFailure,
  editStudentSuccess,
  FETCH_STUDENTS_REQUEST,
  fetchStudentsFailure,
  fetchStudentsSuccess,
} from "../actions/studentsActions";
import { toast } from "react-toastify";

// Fetch students with pagination
function* fetchStudents(action) {
  try {
    const data = yield call(getStudents, action.payload);
    yield put(fetchStudentsSuccess(data.data));
  } catch (error) {
    yield put(fetchStudentsFailure(error.message));
    toast.error(error.message);
  }
}

// Edit a student
function* handleEditStudent(action) {
  try {
    const { id, studentData } = action.payload;
    const response = yield call(setUpdateStudent, id, studentData);

    if (response.status === 200) {
      yield put(editStudentSuccess(response.data));
      toast.success("Student updated successfully!");
    } else {
      yield put(editStudentFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(editStudentFailure(error.message));
    toast.error(error.message);
  }
}

// Root saga for students
export default function* studentsSaga() {
  yield takeLatest(FETCH_STUDENTS_REQUEST, fetchStudents);
  yield takeLatest(EDIT_STUDENT_REQUEST, handleEditStudent);
}
