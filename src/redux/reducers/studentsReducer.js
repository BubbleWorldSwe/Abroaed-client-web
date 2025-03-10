import {
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  ADD_STUDENT_REQUEST,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAILURE,
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAILURE,
  EDIT_STUDENT_REQUEST,
  EDIT_STUDENT_SUCCESS,
  EDIT_STUDENT_FAILURE,
  SET_SELECTED_STUDENT,
  EDIT_STUDENT_LEADS_SUCCESS,
  EDIT_STUDENT_LEADS_REQUEST,
  EDIT_STUDENT_LEADS_FAILURE,
} from "../actions/studentsActions";

const initialState = {
  loading: false,
  students: [],
  allStudents: [],
  error: null,
  totalPages: null,

  page: 1,
  limit: null,
  total: null,

  selectedStudent: {},
};

export const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS_REQUEST:

    case ADD_STUDENT_REQUEST:
    case DELETE_STUDENT_REQUEST:
    case EDIT_STUDENT_REQUEST:
    case EDIT_STUDENT_LEADS_REQUEST:
      return { ...state, loading: true };

    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        students:
          action.payload.page === 1
            ? [{ index: action.payload.page, data: action.payload.result }]
            : [
                ...state.students,
                { index: action.payload.page, data: action.payload.result },
              ],
        totalPages: action.payload.totalPages,
        page: action.payload.page,
      };

    case EDIT_STUDENT_SUCCESS:
    case EDIT_STUDENT_LEADS_SUCCESS:
      return {
        ...state,
        loading: false,
        students: state.students.map((student) => ({
          ...student,
          data: student.data.map((item) =>
            item._id === action.payload._id
              ? { ...item, ...action.payload }
              : item
          ),
        })),
        selectedStudent: action.payload,
      };

    case DELETE_STUDENT_SUCCESS:
    case ADD_STUDENT_SUCCESS:
      return initialState;

    case FETCH_STUDENTS_FAILURE:
    case ADD_STUDENT_FAILURE:
    case DELETE_STUDENT_FAILURE:
    case EDIT_STUDENT_FAILURE:
    case EDIT_STUDENT_LEADS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SET_SELECTED_STUDENT:
      return { ...state, selectedStudent: action.payload };

    default:
      return state;
  }
};
