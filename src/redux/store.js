import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authReducer from "./reducers/authReducer";
import rootSaga from "./sagas/rootSaga";
import teamReducer from "./reducers/teamReducer";
import { rolesReducer } from "./reducers/rolesReducer";
import { leadsReducer } from "./reducers/leadReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    team: teamReducer,
    roles: rolesReducer,
    leads: leadsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
