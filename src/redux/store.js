import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { countriesReducer } from "./reducers/countryReducer";
import { destnationReducer } from "./reducers/destinationReducer";
import { leadsReducer } from "./reducers/leadsReducer";
import { authReducer } from "./reducers/authReducer";
import { teamReducer } from "./reducers/teamReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { testPrepsReducer } from "./reducers/testPrepsReducer";
import { languagePrepsReducer } from "./reducers/languagePrepsReducer";
import { collegesReducer } from "./reducers/collegeReducer";
import { accommodationsReducer } from "./reducers/accommodationReducer";
import { studentsReducer } from "./reducers/studentsReducer";
import { blogsReducer } from "./reducers/blogReducer";
import { transactionReducer } from "./reducers/transactionReducer";
import { savedPreferencesReducer } from "./reducers/savedPreferencesReducer";
import studentProfileReducer from "./reducers/studentProfileReducer";

const sagaMiddleware = createSagaMiddleware();

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: [
    "role",
    "admin",
    "student",
    "adminToken",
    "studentToken",
    "isWriteAccess",
    "isLoggedInAdmin",
    "isLoggedInStudent",
    "adminId",
    "studentId",
  ],
  //  blacklist: ["token", "user", "role"],
};

const destinationPersistConfig = {
  key: "destinations",
  storage,
  whitelist: ["allDestinations"],
};

const testPrepsPersistConfig = {
  key: "testPreps",
  storage,
  whitelist: ["selectedTestPrep", "allTestPreps"],
};

const languagePrepsPersistConfig = {
  key: "languagePreps",
  storage,
  whitelist: ["selectedLanguagePrep", "allLanguagePreps"],
};

const collegesPersistConfig = {
  key: "colleges",
  storage,
  whitelist: ["selectedCollege"],
};

const accommodationsPersistConfig = {
  key: "accommodations",
  storage,
  whitelist: ["selectedAccommodation"],
};

const leadsPersistConfig = {
  key: "leads",
  storage,
  whitelist: ["selectedLead"],
};

const studentsPersistConfig = {
  key: "students",
  storage,
  whitelist: ["selectedStudent"],
};

const blogsPersistConfig = {
  key: "blogs",
  storage,
  whitelist: ["selectedBlog"],
};

const transactionsPersistConfig = {
  key: "transactions",
  storage,
  whitelist: ["selectedTransaction"],
};

const rootReducer = {
  auth: persistReducer(authPersistConfig, authReducer),
  teams: teamReducer,
  leads: persistReducer(leadsPersistConfig, leadsReducer),
  students: persistReducer(studentsPersistConfig, studentsReducer),
  destinations: persistReducer(destinationPersistConfig, destnationReducer),
  countries: countriesReducer,
  testPreps: persistReducer(testPrepsPersistConfig, testPrepsReducer),
  languagePreps: persistReducer(
    languagePrepsPersistConfig,
    languagePrepsReducer
  ),
  transactions: persistReducer(transactionsPersistConfig, transactionReducer),
  colleges: persistReducer(collegesPersistConfig, collegesReducer),

  accommodations: persistReducer(
    accommodationsPersistConfig,
    accommodationsReducer
  ),

  blogs: persistReducer(blogsPersistConfig, blogsReducer),
  savedPreferences: savedPreferencesReducer,
  studentProfile: studentProfileReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
