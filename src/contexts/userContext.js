import { createContext, useState } from "react";
import * as requestManager from "../utils/apiUtils";
import { useEffect } from "react";
import { toast } from "react-toastify";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [currentFactory, setCurrentFactory] = useState(null);
  const [currentFactoryUser, setCurrentFactoryUser] = useState(null);
  


  const setAuthData = ({ user, factory }) => {
    if (user) {
      setCurrentUser(user);
    }
    let _user = user ?? currentUser;
    let currentFactory = factory;
    if (!currentFactory) {
      let fidFromLocalStorage = localStorage.getItem("fid");
      if (fidFromLocalStorage) {
        currentFactory = _user.factories.find(
          ({ fid }) => fid._id == fidFromLocalStorage
        )?.fid;
      }
      if (!currentFactory) {
        currentFactory = user.factories?.[0]?.fid;
      }
    }

    setCurrentFactory(currentFactory);
    if (currentFactory) {
      setCurrentFactoryUser(
        _user.factories.find(({ fid }) => fid._id == currentFactory._id)
      );
      localStorage.setItem("fid", currentFactory._id);
    }
    localStorage.setItem("loggedIn", true);
  };

  const logout = () => {
    localStorage.removeItem("loggedIn");
    setCurrentUser(null);
    setCurrentFactory(null);
    setCurrentFactoryUser(null);
  };

  const checkLogin = async () => {
    try {
      if (localStorage.getItem("loggedIn")) {
        let { data } = await requestManager.apiPost("auth/me");
        setAuthData({ user: data });
      } else {
        setCurrentUser(null);
        setCurrentFactory(null);
        setCurrentFactoryUser(null);
      }
    } catch (err) {
      if (err?.status == 401 || err?.status == 403) {
        if (err.status == 403) {
          toast.error(err.message);
        }
        logout();
      }
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);

  const contextValue = {
    currentUser,
    setAuthData,
    logout,
    currentFactory,
    currentFactoryUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
