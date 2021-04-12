import React, { useEffect, useState, useContext } from "react";
import app from "./base.js";

export const AuthContext = React.createContext(
);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    console.log('auth provider')
    if (currentUser) {
      return
    }
    console.log('auth provider 2')
    const listen = app.auth()
    .onAuthStateChanged(
      (user) => {
        setCurrentUser(user);
        console.log('from auth', user ? user.uid : null)
        setPending(false);
      });
    return listen;
  }, []);

  if (pending) {
    return (
      <div>Loading, please wait..</div>
    )
  }
  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
