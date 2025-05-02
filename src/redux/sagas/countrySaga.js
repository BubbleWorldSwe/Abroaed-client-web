import { takeLatest, call, put } from "redux-saga/effects";

import {
  FETCH_COUNTRIES_REQUEST,
  fetchCountriesSuccess,
  fetchCountriesFailure,
  FETCH_ALL_COUNTRIES_REQUEST,
} from "../actions/countryActions";
import { getAllCountries, getCountries } from "../../api/countriesApi";

function* fetchCountries(action) {
  try {
    const response = yield call(getCountries, action.payload);

    if (response.status === 200) {
      yield put(fetchCountriesSuccess(response.data));
    } else {
      yield put(fetchCountriesFailure(response.message));
    }
  } catch (error) {
    yield put(fetchCountriesFailure(error.message));
  }
}

function* fetchAllCountries() {
  try {
    const response = yield call(getAllCountries);
    yield put(fetchCountriesSuccess(response.data)); // Assuming API response contains country data
  } catch (error) {
    yield put(fetchCountriesFailure(error.message));
  }
}

export default function* countriesSaga() {
  yield takeLatest(FETCH_COUNTRIES_REQUEST, fetchCountries);
  yield takeLatest(FETCH_ALL_COUNTRIES_REQUEST, fetchAllCountries);
}
