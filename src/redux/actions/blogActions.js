export const FETCH_BLOGS_REQUEST = "FETCH_BLOGS_REQUEST";
export const FETCH_BLOGS_SUCCESS = "FETCH_BLOGS_SUCCESS";
export const FETCH_BLOGS_FAILURE = "FETCH_BLOGS_FAILURE";

export const ADD_BLOG_REQUEST = "ADD_BLOG_REQUEST";
export const ADD_BLOG_SUCCESS = "ADD_BLOG_SUCCESS";
export const ADD_BLOG_FAILURE = "ADD_BLOG_FAILURE";

export const DELETE_BLOG_REQUEST = "DELETE_BLOG_REQUEST";
export const DELETE_BLOG_SUCCESS = "DELETE_BLOG_SUCCESS";
export const DELETE_BLOG_FAILURE = "DELETE_BLOG_FAILURE";

export const EDIT_BLOG_REQUEST = "EDIT_BLOG_REQUEST";
export const EDIT_BLOG_SUCCESS = "EDIT_BLOG_SUCCESS";
export const EDIT_BLOG_FAILURE = "EDIT_BLOG_FAILURE";

export const FETCH_ALL_BLOGS_REQUEST = "FETCH_ALL_BLOGS_REQUEST";
export const FETCH_ALL_BLOGS_SUCCESS = "FETCH_ALL_BLOGS_SUCCESS";
export const FETCH_ALL_BLOGS_FAILURE = "FETCH_ALL_BLOGS_FAILURE";

export const UPLOAD_BLOG_IMAGE_REQUEST = "UPLOAD_BLOG_IMAGE_REQUEST";
export const UPLOAD_BLOG_IMAGE_SUCCESS = "UPLOAD_BLOG_IMAGE_SUCCESS";
export const UPLOAD_BLOG_IMAGE_FAILURE = "UPLOAD_BLOG_IMAGE_FAILURE";

export const SET_SELECTED_BLOG = "SET_SELECTED_BLOG";

export const fetchBlogsRequest = (page) => ({
  type: FETCH_BLOGS_REQUEST,
  payload: page,
});

export const fetchBlogsSuccess = (data) => ({
  type: FETCH_BLOGS_SUCCESS,
  payload: data,
});

export const fetchBlogsFailure = (error) => ({
  type: FETCH_BLOGS_FAILURE,
  payload: error,
});

export const fetchAllBlogsRequest = () => ({
  type: FETCH_ALL_BLOGS_REQUEST,
});

export const fetchAllBlogsSuccess = (blogs) => {
  return {
    type: FETCH_ALL_BLOGS_SUCCESS,
    payload: blogs,
  };
};

export const fetchAllBlogsFailure = (error) => ({
  type: FETCH_ALL_BLOGS_FAILURE,
  payload: error,
});

export const addBlogRequest = (blogData, imageData) => {
  return {
    type: ADD_BLOG_REQUEST,
    payload: { blogData, imageData },
  };
};

export const addBlogSuccess = (blog) => ({
  type: ADD_BLOG_SUCCESS,
  payload: blog,
});

export const addBlogFailure = (error) => ({
  type: ADD_BLOG_FAILURE,
  payload: error,
});

export const deleteBlogRequest = (blogId) => ({
  type: DELETE_BLOG_REQUEST,
  payload: blogId,
});

export const deleteBlogSuccess = (blogId) => ({
  type: DELETE_BLOG_SUCCESS,
  payload: blogId,
});

export const deleteBlogFailure = (error) => ({
  type: DELETE_BLOG_FAILURE,
  payload: error,
});

export const editBlogRequest = (id, blogData) => ({
  type: EDIT_BLOG_REQUEST,
  payload: { id, blogData },
});

export const editBlogSuccess = (editedBlog) => ({
  type: EDIT_BLOG_SUCCESS,
  payload: editedBlog,
});

export const editBlogFailure = (error) => ({
  type: EDIT_BLOG_FAILURE,
  payload: error,
});

export const setSelectedBlog = (blog) => ({
  type: SET_SELECTED_BLOG,
  payload: blog,
});

export const uploadBlogImageRequest = (id, imageData) => ({
  type: UPLOAD_BLOG_IMAGE_REQUEST,
  payload: { id, imageData },
});

export const uploadBlogImageSuccess = (data) => ({
  type: UPLOAD_BLOG_IMAGE_SUCCESS,
  payload: data,
});

export const uploadBlogImageFailure = (error) => ({
  type: UPLOAD_BLOG_IMAGE_FAILURE,
  payload: error,
});
