export const FETCH_TRANSACTIONS_REQUEST = "FETCH_TRANSACTIONS_REQUEST";
export const FETCH_TRANSACTIONS_SUCCESS = "FETCH_TRANSACTIONS_SUCCESS";
export const FETCH_TRANSACTIONS_FAILURE = "FETCH_TRANSACTIONS_FAILURE";

export const FETCH_ALL_TRANSACTIONS_REQUEST = "FETCH_ALL_TRANSACTIONS_REQUEST";
export const FETCH_ALL_TRANSACTIONS_SUCCESS = "FETCH_ALL_TRANSACTIONS_SUCCESS";
export const FETCH_ALL_TRANSACTIONS_FAILURE = "FETCH_ALL_TRANSACTIONS_FAILURE";

export const ADD_TRANSACTION_REQUEST = "ADD_TRANSACTION_REQUEST";
export const ADD_TRANSACTION_SUCCESS = "ADD_TRANSACTION_SUCCESS";
export const ADD_TRANSACTION_FAILURE = "ADD_TRANSACTION_FAILURE";

export const DELETE_TRANSACTION_REQUEST = "DELETE_TRANSACTION_REQUEST";
export const DELETE_TRANSACTION_SUCCESS = "DELETE_TRANSACTION_SUCCESS";
export const DELETE_TRANSACTION_FAILURE = "DELETE_TRANSACTION_FAILURE";

export const EDIT_TRANSACTION_REQUEST = "EDIT_TRANSACTION_REQUEST";
export const EDIT_TRANSACTION_SUCCESS = "EDIT_TRANSACTION_SUCCESS";
export const EDIT_TRANSACTION_FAILURE = "EDIT_TRANSACTION_FAILURE";

export const SET_SELECTED_TRANSACTION = "SET_SELECTED_TRANSACTION";

// Fetch paginated transactions
export const fetchTransactionsRequest = (page) => ({
  type: FETCH_TRANSACTIONS_REQUEST,
  payload: page,
});

export const fetchTransactionsSuccess = (data) => ({
  type: FETCH_TRANSACTIONS_SUCCESS,
  payload: data,
});

export const fetchTransactionsFailure = (error) => ({
  type: FETCH_TRANSACTIONS_FAILURE,
  payload: error,
});

// Fetch all transactions
export const fetchAllTransactionsRequest = () => ({
  type: FETCH_ALL_TRANSACTIONS_REQUEST,
});

export const fetchAllTransactionsSuccess = (data) => ({
  type: FETCH_ALL_TRANSACTIONS_SUCCESS,
  payload: data,
});

export const fetchAllTransactionsFailure = (error) => ({
  type: FETCH_ALL_TRANSACTIONS_FAILURE,
  payload: error,
});

// Add transaction
export const addTransactionRequest = (transactionData) => ({
  type: ADD_TRANSACTION_REQUEST,
  payload: transactionData,
});

export const addTransactionSuccess = (transaction) => ({
  type: ADD_TRANSACTION_SUCCESS,
  payload: transaction,
});

export const addTransactionFailure = (error) => ({
  type: ADD_TRANSACTION_FAILURE,
  payload: error,
});

// Delete transaction
export const deleteTransactionRequest = (transactionId) => ({
  type: DELETE_TRANSACTION_REQUEST,
  payload: transactionId,
});

export const deleteTransactionSuccess = (transactionId) => ({
  type: DELETE_TRANSACTION_SUCCESS,
  payload: transactionId,
});

export const deleteTransactionFailure = (error) => ({
  type: DELETE_TRANSACTION_FAILURE,
  payload: error,
});

// Edit transaction
export const editTransactionRequest = (id, transactionData) => ({
  type: EDIT_TRANSACTION_REQUEST,
  payload: { id, transactionData },
});

export const editTransactionSuccess = (editedTransaction) => ({
  type: EDIT_TRANSACTION_SUCCESS,
  payload: editedTransaction,
});

export const editTransactionFailure = (error) => ({
  type: EDIT_TRANSACTION_FAILURE,
  payload: error,
});

// Set selected transaction
export const setSelectedTransaction = (transaction) => ({
  type: SET_SELECTED_TRANSACTION,
  payload: transaction,
});
