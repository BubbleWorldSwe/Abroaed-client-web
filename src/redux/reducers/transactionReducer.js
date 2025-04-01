import {
  FETCH_TRANSACTIONS_REQUEST,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_FAILURE,
  ADD_TRANSACTION_REQUEST,
  ADD_TRANSACTION_SUCCESS,
  ADD_TRANSACTION_FAILURE,
  DELETE_TRANSACTION_REQUEST,
  DELETE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_FAILURE,
  EDIT_TRANSACTION_REQUEST,
  EDIT_TRANSACTION_SUCCESS,
  EDIT_TRANSACTION_FAILURE,
  SET_SELECTED_TRANSACTION,
  FETCH_ALL_TRANSACTIONS_REQUEST,
  FETCH_ALL_TRANSACTIONS_FAILURE,
  FETCH_ALL_TRANSACTIONS_SUCCESS,
} from "../actions/transactionActions";

const initialState = {
  loading: false,
  transactions: [],
  allTransactions: [],
  error: null,
  totalPages: null,

  page: 1,
  limit: null,
  total: null,

  selectedTransaction: {},
};

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_REQUEST:
    case FETCH_ALL_TRANSACTIONS_REQUEST:
    case ADD_TRANSACTION_REQUEST:
    case DELETE_TRANSACTION_REQUEST:
    case EDIT_TRANSACTION_REQUEST:
      return { ...state, loading: true };

    case FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions:
          action.payload.page === 1
            ? [{ index: action.payload.page, data: action.payload.result }]
            : [
                ...state.transactions,
                { index: action.payload.page, data: action.payload.result },
              ],
        totalPages: action.payload.totalPages,
        page: action.payload.page,
      };

    case FETCH_ALL_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        allTransactions: action.payload.result,
      };

    case EDIT_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: state.transactions.map((transaction) => ({
          ...transaction,
          data: transaction.data.map((item) =>
            item._id === action.payload._id
              ? { ...item, ...action.payload }
              : item
          ),
        })),
        selectedTransaction: action.payload,
      };

    case DELETE_TRANSACTION_SUCCESS:
    case ADD_TRANSACTION_SUCCESS:
      return initialState;

    case FETCH_TRANSACTIONS_FAILURE:
    case FETCH_ALL_TRANSACTIONS_FAILURE:
    case ADD_TRANSACTION_FAILURE:
    case DELETE_TRANSACTION_FAILURE:
    case EDIT_TRANSACTION_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SET_SELECTED_TRANSACTION:
      return { ...state, selectedTransaction: action.payload };

    default:
      return state;
  }
};
