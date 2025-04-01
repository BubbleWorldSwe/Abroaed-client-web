import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAllTransactions,
  getTransactions,
  setAddTransaction,
  setDeleteTransaction,
  setUpdateTransaction,
} from "../../api/transactionApi"; // API functions

import {
  ADD_TRANSACTION_REQUEST,
  addTransactionFailure,
  addTransactionSuccess,
  DELETE_TRANSACTION_REQUEST,
  deleteTransactionFailure,
  deleteTransactionSuccess,
  EDIT_TRANSACTION_REQUEST,
  editTransactionFailure,
  editTransactionSuccess,
  FETCH_ALL_TRANSACTIONS_REQUEST,
  FETCH_TRANSACTIONS_REQUEST,
  fetchAllTransactionsFailure,
  fetchAllTransactionsSuccess,
  fetchTransactionsFailure,
  fetchTransactionsSuccess,
} from "../actions/transactionActions";

import { toast } from "react-toastify";

// Fetch paginated transactions
function* fetchTransactions(action) {
  try {
    const data = yield call(getTransactions, action.payload);
    yield put(fetchTransactionsSuccess(data.data));
  } catch (error) {
    yield put(fetchTransactionsFailure(error.message));
    toast.error(error.message);
  }
}

// Fetch all transactions
function* fetchAllTransactions() {
  try {
    const data = yield call(getAllTransactions);
    yield put(fetchAllTransactionsSuccess(data.data));
  } catch (error) {
    yield put(fetchAllTransactionsFailure(error.message));
    console.log(error.message);
  }
}

// Add a new transaction
function* addNewTransaction(action) {
  try {
    const response = yield call(setAddTransaction, action.payload);

    if (response.status === 200) {
      yield put(addTransactionSuccess(response.data.data));
      toast.success(response.message);
    } else {
      yield put(addTransactionFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(addTransactionFailure(error.message));
    toast.error(error.message);
  }
}

// Delete a transaction
function* deleteTransaction(action) {
  try {
    const response = yield call(setDeleteTransaction, action.payload);

    if (response.status === 200) {
      yield put(deleteTransactionSuccess(action.payload));
      toast.success(response.message);
    } else {
      yield put(deleteTransactionFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(deleteTransactionFailure(error.message));
    toast.error(error.message);
  }
}

// Edit a transaction
function* handleEditTransaction(action) {
  try {
    const { id, transactionData } = action.payload;
    const response = yield call(setUpdateTransaction, id, transactionData);

    if (response.status === 200) {
      yield put(editTransactionSuccess(response.data));
      toast.success(response.message);
    } else {
      yield put(editTransactionFailure(response.message));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(editTransactionFailure(error.message));
    toast.error(error.message);
  }
}

// Root saga for transactions
export default function* transactionSaga() {
  yield takeLatest(FETCH_TRANSACTIONS_REQUEST, fetchTransactions);
  yield takeLatest(FETCH_ALL_TRANSACTIONS_REQUEST, fetchAllTransactions);
  yield takeLatest(ADD_TRANSACTION_REQUEST, addNewTransaction);
  yield takeLatest(DELETE_TRANSACTION_REQUEST, deleteTransaction);
  yield takeLatest(EDIT_TRANSACTION_REQUEST, handleEditTransaction);
}
