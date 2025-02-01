import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { countriesReducer } from "./reducers/countryReducer";
import { destnationReducer } from "./reducers/destinationReducer";
import { leadsReducer } from "./reducers/leadReducer";
import { rolesReducer } from "./reducers/rolesReducer";
import { authReducer } from "./reducers/authReducer";
import { teamReducer } from "./reducers/teamReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    team: teamReducer,
    roles: rolesReducer,
    leads: leadsReducer,
    destinations: destnationReducer,
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
