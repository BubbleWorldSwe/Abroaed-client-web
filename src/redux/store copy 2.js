import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { countriesReducer } from "./reducers/countryReducer";
import { destnationReducer } from "./reducers/destinationReducer";
import { leadsReducer } from "./reducers/leadReducer";
import { rolesReducer } from "./reducers/rolesReducer";
import { authReducer } from "./reducers/authReducer";
import { teamReducer } from "./reducers/teamReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { testPrepsReducer } from "./reducers/testPrepsReducer";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "auth",
    "team",
    "roles",
    "leads",
    "destinations",
    "countries",
    // "testPreps",
  ],
};

const rootReducer = {
  auth: persistReducer(persistConfig, authReducer),
  team: persistReducer(persistConfig, teamReducer),
  roles: persistReducer(persistConfig, rolesReducer),
  leads: persistReducer(persistConfig, leadsReducer),
  destinations: persistReducer(persistConfig, destnationReducer),
  countries: persistReducer(persistConfig, countriesReducer),
  testPreps: persistReducer(persistConfig, testPrepsReducer),
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      sagaMiddleware
    ),
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
