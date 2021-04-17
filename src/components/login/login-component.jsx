import React, { useContext } from "react";
import LoginForm from "./login-form";
import { Redirect } from "react-router";
import { AuthContext } from "../../Auth";

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
        <LoginForm></LoginForm>
      </div>
    </>
  );
};
