import React, { useContext } from "react";
import RegisterForm from "./form-component";
import { AuthContext } from "../../Auth";
import { Redirect } from "react-router";

export const RegisterComponent = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      {currentUser === null ? (
        <Redirect to="/register" />
      ) : (
        <Redirect to="/members" />
      )}
      <RegisterForm></RegisterForm>
    </>
  );
};
