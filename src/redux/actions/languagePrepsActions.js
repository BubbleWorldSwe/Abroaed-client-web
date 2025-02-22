export const FETCH_LANGUAGEPREPS_REQUEST = "FETCH_LANGUAGEPREPS_REQUEST";
export const FETCH_LANGUAGEPREPS_SUCCESS = "FETCH_LANGUAGEPREPS_SUCCESS";
export const FETCH_LANGUAGEPREPS_FAILURE = "FETCH_LANGUAGEPREPS_FAILURE";

export const FETCH_ALL_LANGUAGEPREPS_REQUEST =
  "FETCH_ALL_LANGUAGEPREPS_REQUEST";
export const FETCH_ALL_LANGUAGEPREPS_SUCCESS =
  "FETCH_ALL_LANGUAGEPREPS_SUCCESS";
export const FETCH_ALL_LANGUAGEPREPS_FAILURE =
  "FETCH_ALL_LANGUAGEPREPS_FAILURE";

export const ADD_LANGUAGEPREP_REQUEST = "ADD_LANGUAGEPREP_REQUEST";
export const ADD_LANGUAGEPREP_SUCCESS = "ADD_LANGUAGEPREP_SUCCESS";
export const ADD_LANGUAGEPREP_FAILURE = "ADD_LANGUAGEPREP_FAILURE";

export const DELETE_LANGUAGEPREP_REQUEST = "DELETE_LANGUAGEPREP_REQUEST";
export const DELETE_LANGUAGEPREP_SUCCESS = "DELETE_LANGUAGEPREP_SUCCESS";
export const DELETE_LANGUAGEPREP_FAILURE = "DELETE_LANGUAGEPREP_FAILURE";

export const EDIT_LANGUAGEPREP_REQUEST = "EDIT_LANGUAGEPREP_REQUEST";
export const EDIT_LANGUAGEPREP_SUCCESS = "EDIT_LANGUAGEPREP_SUCCESS";
export const EDIT_LANGUAGEPREP_FAILURE = "EDIT_LANGUAGEPREP_FAILURE";

export const SET_SELECTED_LANGUAGEPREP = "SET_SELECTED_LANGUAGEPREP";

export const fetchLanguagePrepsRequest = (page) => ({
  type: FETCH_LANGUAGEPREPS_REQUEST,
  payload: page,
});

export const fetchLanguagePrepsSuccess = (data) => ({
  type: FETCH_LANGUAGEPREPS_SUCCESS,
  payload: data,
});

export const fetchLanguagePrepsFailure = (error) => ({
  type: FETCH_LANGUAGEPREPS_FAILURE,
  payload: error,
});

export const fetchAllLanguagePrepsRequest = () => ({
  type: FETCH_ALL_LANGUAGEPREPS_REQUEST,
});

export const fetchAllLanguagePrepsSuccess = (data) => ({
  type: FETCH_ALL_LANGUAGEPREPS_SUCCESS,
  payload: data,
});

export const fetchAllLanguagePrepsFailure = (error) => ({
  type: FETCH_ALL_LANGUAGEPREPS_FAILURE,
  payload: error,
});

export const addLanguagePrepRequest = (languagePrepData) => ({
  type: ADD_LANGUAGEPREP_REQUEST,
  payload: languagePrepData,
});

export const addLanguagePrepSuccess = (languagePrep) => ({
  type: ADD_LANGUAGEPREP_SUCCESS,
  payload: languagePrep,
});

export const addLanguagePrepFailure = (error) => ({
  type: ADD_LANGUAGEPREP_FAILURE,
  payload: error,
});

export const deleteLanguagePrepRequest = (languagePrepId) => ({
  type: DELETE_LANGUAGEPREP_REQUEST,
  payload: languagePrepId,
});

export const deleteLanguagePrepSuccess = (languagePrepId) => ({
  type: DELETE_LANGUAGEPREP_SUCCESS,
  payload: languagePrepId,
});

export const deleteLanguagePrepFailure = (error) => ({
  type: DELETE_LANGUAGEPREP_FAILURE,
  payload: error,
});

export const editLanguagePrepRequest = (id, languagePrepData) => ({
  type: EDIT_LANGUAGEPREP_REQUEST,
  payload: { id, languagePrepData },
});

export const editLanguagePrepSuccess = (editedLanguagePrep) => ({
  type: EDIT_LANGUAGEPREP_SUCCESS,
  payload: editedLanguagePrep,
});

export const editLanguagePrepFailure = (error) => ({
  type: EDIT_LANGUAGEPREP_FAILURE,
  payload: error,
});

export const setSelectedLanguagePrep = (languagePrep) => ({
  type: SET_SELECTED_LANGUAGEPREP,
  payload: languagePrep,
});
