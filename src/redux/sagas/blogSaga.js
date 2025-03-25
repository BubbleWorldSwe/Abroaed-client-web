import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAllBlogs,
  getBlogs,
  setAddBlog,
  setDeleteBlog,
  setUpdateBlog,
} from "../../api/blogsApi"; // API functions
import {
  FETCH_BLOGS_REQUEST,
  fetchBlogsSuccess,
  fetchBlogsFailure,
  ADD_BLOG_REQUEST,
  addBlogSuccess,
  addBlogFailure,
  DELETE_BLOG_REQUEST,
  deleteBlogSuccess,
  deleteBlogFailure,
  EDIT_BLOG_REQUEST,
  editBlogSuccess,
  editBlogFailure,
  FETCH_ALL_BLOGS_SUCCESS,
  fetchAllBlogsSuccess,
  fetchAllBlogsFailure,
  FETCH_ALL_BLOGS_REQUEST,
} from "../actions/blogActions";
import { toast } from "react-toastify";

// Fetch blogs
function* fetchBlogs(action) {
  try {
    const data = yield call(getBlogs, action.payload);
    yield put(fetchBlogsSuccess(data.data));
  } catch (error) {
    yield put(fetchBlogsFailure(error.message));
    toast.error(error.message);
  }
}

// Fetch  all blogs
function* fetchAllBlogs() {
  try {
    const data = yield call(getAllBlogs);
    yield put(fetchAllBlogsSuccess(data.data));
  } catch (error) {
    yield put(fetchAllBlogsFailure(error.message));
    //  toast.error(error.message);
    console.log(error.message);
  }
}

// Add a new blog
function* addNewBlog(action) {
  try {
    console.log(action);
    console.log("addNewBlog");
    const response = yield call(setAddBlog, action.payload);

    console.log(response);

    if (response.status === 200) {
      yield put(addBlogSuccess(response.data.data));
      toast.success(response.message || "Blog Added Sucessfully");
    } else {
      yield put(addBlogFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    console.log(error);
    yield put(addBlogFailure(error.message));
    toast.error(error.message);
  }
}

// Delete a blog
function* deleteBlogSaga(action) {
  try {
    console.log(action);
    const response = yield call(setDeleteBlog, action.payload);

    if (response.status === 200) {
      yield put(deleteBlogSuccess(action.payload));
      toast.success(response.message);
    } else {
      yield put(deleteBlogFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(deleteBlogFailure(error.message));
    toast.error(error.message);
  }
}

// Edit a blog
function* handleEditBlog(action) {
  try {
    const { id, blogData } = action.payload;
    const response = yield call(setUpdateBlog, id, blogData);

    if (response.status === 200) {
      yield put(editBlogSuccess(response.data));
      toast.success(response.message || "Blog Edit Sucessfully");
    } else {
      yield put(editBlogFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(editBlogFailure(error.message));
    toast.error(error.message);
  }
}

// Root saga for blogs
export default function* blogsSaga() {
  yield takeLatest(FETCH_BLOGS_REQUEST, fetchBlogs);
  yield takeLatest(FETCH_ALL_BLOGS_REQUEST, fetchAllBlogs);
  yield takeLatest(ADD_BLOG_REQUEST, addNewBlog);
  yield takeLatest(DELETE_BLOG_REQUEST, deleteBlogSaga);
  yield takeLatest(EDIT_BLOG_REQUEST, handleEditBlog);
}
