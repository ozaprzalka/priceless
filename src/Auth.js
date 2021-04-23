import React, { useEffect, useState, useContext } from "react";
import app from "./base.js";
import { Loading } from "./components/loader/loading-page";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    if (currentUser) {
      return;
    }
    const listen = app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
    return listen;
  }, []); // eslint-disable-line

  if (pending) {
    return <Loading></Loading>;
  }
  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
