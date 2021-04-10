import React, { useContext } from "react";
// import LoginForm from "./login-form";
import { Redirect } from "react-router";
import { AuthContext } from "../../Auth";
import Loadable from 'react-loadable';
// import Loading from './../../App'

function Loading({ error, pastDelay }) {
  if (error) {
    return 'Oh nooess!';
  } else {
    return pastDelay ? <h3>Loading...</h3> : <h2>NOT LOADING</h2>;
  }
}

const LoginPage = Loadable({
  loader: () => import("./login-form"),
  loading: Loading,
  delay: 2
});


export const LoginComponent = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      {currentUser === null ? (
        <Redirect to="/login" />
      ) : (
        <Redirect to="/members" />
      )}
      <div className="dashboard">
        <LoginPage></LoginPage>
      </div>
    </>
  );
};
