import { call, put, takeLatest } from "redux-saga/effects";
import { getBlogs, addBlog, deleteBlog, updateBlog } from "../../api/blogsApi"; // API functions
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

// Add a new blog
function* addNewBlog(action) {
  try {
    const response = yield call(addBlog, action.payload);

    if (response.status === 200) {
      yield put(addBlogSuccess(response.data.data));
      toast.success(response.message);
    } else {
      yield put(addBlogFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(addBlogFailure(error.message));
    toast.error(error.message);
  }
}

// Delete a blog
function* deleteBlogSaga(action) {
  try {
    const response = yield call(deleteBlog, action.payload);

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
    const response = yield call(updateBlog, id, blogData);

    if (response.status === 200) {
      yield put(editBlogSuccess(response.data));
      toast.success(response.message);
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
  yield takeLatest(ADD_BLOG_REQUEST, addNewBlog);
  yield takeLatest(DELETE_BLOG_REQUEST, deleteBlogSaga);
  yield takeLatest(EDIT_BLOG_REQUEST, handleEditBlog);
}
