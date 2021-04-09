import React, { useEffect, useState, useContext } from "react";
import app from "./base.js";

export const AuthContext = React.createContext(
  // currentUser: null,
  // setCurrentUser: () => {}
);

// const stateSwitch =  () => {
// const {currentUser, setCurrentUser} = useContext(AuthContext)
// }

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // let { currentUser } = useContext(AuthContext);
  // const [pending, setPending] = useState(true);
  useEffect(() => {
    console.log('auth provider')
    if (currentUser) {
      return
    }
    console.log('auth provider 2')

    app.auth().onAuthStateChanged((user) => {
        if (user) {
            setCurrentUser(user)
            // setPending(false)
            console.log('pending')
            console.log('from auth', user.uid)
        } else {
            setCurrentUser(null)
        }
    });
  }, [currentUser]);

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
