import { call, put, takeLatest } from "redux-saga/effects";
import {
  getSearchStudents,
  getStudents,
  setUpdateStudent,
} from "../../api/studentsApi"; // API functions
import {
  EDIT_STUDENT_LEADS_REQUEST,
  EDIT_STUDENT_REQUEST,
  editStudentFailure,
  editStudentLeadFailure,
  editStudentLeadSuccess,
  editStudentSuccess,
  FETCH_STUDENTS_REQUEST,
  fetchStudentsFailure,
  fetchStudentsSuccess,
  SEARCH_STUDENTS_REQUEST,
  searchStudentsFailure,
  searchStudentsSuccess,
} from "../actions/studentsActions";
import { toast } from "react-toastify";
import { getLeadDetailsById, setUpdateLead } from "../../api/leadsApi";
import { editLeadsStudentFailure } from "../actions/leadsActions";

// Fetch students with pagination
function* fetchStudents(action) {
  try {
    const data = yield call(getStudents, action.payload);

    console.log(data);

    if (data.status === 200) {
      yield put(fetchStudentsSuccess(data.data));
    } else {
      yield put(fetchStudentsFailure(data.message));
      // toast.error(data.message);
    }
  } catch (error) {
    yield put(fetchStudentsFailure(error.message));
    toast.error(error.message);
  }
}

// search students
function* searchStudents(action) {
  try {
    const data = yield call(getSearchStudents, action.payload);

    if (data.status === 200) {
      yield put(searchStudentsSuccess(data.data));
    } else {
      yield put(searchStudentsFailure(data.message));
    }
  } catch (error) {
    yield put(searchStudentsFailure(error.message));
    toast.error(error.message);
  }
}

// Edit a student
function* handleEditStudentLead(action) {
  try {
    const { id, studentData } = action.payload;
    console.log(id, studentData);
    const response = yield call(setUpdateLead, id, studentData);

    console.log(response);

    if (response.status === 200) {
      yield put(editStudentLeadSuccess(response.data));
      toast.success("Student updated successfully!");
    } else {
      yield put(editStudentLeadFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(editLeadsStudentFailure(error.message));
    toast.error(error.message);
  }
}

function* handleEditStudent(action) {
  try {
    const { userId, studentData, leadId } = action.payload;

    // First API call to update the student
    const response = yield call(setUpdateStudent, userId, studentData);
    console.log("handleEditStudent in Saga", response);

    if (response.status === 200) {
      // Second API call to get updated student details from lead
      const leadDetailsResponse = yield call(getLeadDetailsById, leadId);

      if (leadDetailsResponse.status === 200) {
        yield put(editStudentSuccess(leadDetailsResponse.data));
        toast.success("Student updated successfully!");
      } else {
        yield put(editStudentFailure(leadDetailsResponse.message));
        toast.error(leadDetailsResponse.message);
      }
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
  yield takeLatest(SEARCH_STUDENTS_REQUEST, searchStudents);
  yield takeLatest(EDIT_STUDENT_LEADS_REQUEST, handleEditStudentLead);
  yield takeLatest(EDIT_STUDENT_REQUEST, handleEditStudent);
}
