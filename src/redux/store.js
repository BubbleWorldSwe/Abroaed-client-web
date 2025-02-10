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
import { languagePrepsReducer } from "./reducers/languagePrepsReducer";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "auth",
    "selectedDestination",
    "selectedTestPrep",
    "selectedLanguagePrep",
  ],
};

const rootReducer = {
  auth: persistReducer(persistConfig, authReducer),
  team: teamReducer,
  roles: rolesReducer,
  leads: leadsReducer,
  destinations: persistReducer(persistConfig, destnationReducer),
  countries: countriesReducer,
  testPreps: persistReducer(persistConfig, testPrepsReducer),
  languagePreps: persistReducer(persistConfig, languagePrepsReducer),
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
