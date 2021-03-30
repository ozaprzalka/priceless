import React, { useEffect, useState } from "react";
import app from "./base.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [usrUid, setUid] = useState('');

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
    //   setUid(user.uid);
    //   console.log(usrUid);
      setPending(false)
      if (user) {
          setUid(user.uid)
          console.log(usrUid);
      }
    });
  }, []);

  if(pending){
    return <>Loading...</>
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