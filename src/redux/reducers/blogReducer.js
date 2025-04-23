import {
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_FAILURE,
  ADD_BLOG_REQUEST,
  ADD_BLOG_SUCCESS,
  ADD_BLOG_FAILURE,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  DELETE_BLOG_FAILURE,
  EDIT_BLOG_REQUEST,
  EDIT_BLOG_SUCCESS,
  EDIT_BLOG_FAILURE,
  SET_SELECTED_BLOG,
  FETCH_ALL_BLOGS_SUCCESS,
  FETCH_ALL_BLOGS_REQUEST,
  FETCH_ALL_BLOGS_FAILURE,
} from "../actions/blogActions";

const initialState = {
  loading: false,
  blogs: [],
  allBlogs: [],
  error: null,
  totalPages: null,
  page: 1,
  limit: null,
  total: null,
  selectedBlog: {},
};

export const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOGS_REQUEST:
    case FETCH_ALL_BLOGS_REQUEST:
      return { ...state, loading: true };

    case FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs:
          action.payload.page === 1
            ? [{ index: action.payload.page, data: action.payload.result }]
            : [
                ...state.blogs,
                { index: action.payload.page, data: action.payload.result },
              ],
        totalPages: action.payload.totalPages,
        page: action.payload.page,
      };

    case FETCH_ALL_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        allBlogs: action.payload.result,
      };

    case FETCH_BLOGS_FAILURE:
    case FETCH_ALL_BLOGS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ADD_BLOG_REQUEST:
      return { ...state, loading: true };

    case ADD_BLOG_SUCCESS:
      return initialState;

    case ADD_BLOG_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case DELETE_BLOG_REQUEST:
      return { ...state, loading: true };

    case DELETE_BLOG_SUCCESS:
      return initialState;

    case DELETE_BLOG_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case EDIT_BLOG_REQUEST:
      return { ...state, loading: true };

    case EDIT_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        /*   blogs: state.blogs.map((blog) => ({
          ...blog,
          data: blog.data.map((item) =>
            item._id === action.payload._id
              ? { ...item, ...action.payload }
              : item
          ),
        })), */
        selectedBlog: action.payload,

        blogs: [],
        allBlogs: [],
        error: null,
        totalPages: null,
        page: 1,
        limit: null,
        total: null,
      };

    case EDIT_BLOG_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SET_SELECTED_BLOG:
      return { ...state, selectedBlog: action.payload };

    default:
      return state;
  }
};
