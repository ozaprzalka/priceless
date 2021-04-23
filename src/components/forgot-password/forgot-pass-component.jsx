import React, { useContext } from "react";
import ForgotPassForm from "./forgot-pass-form";
import { Redirect } from "react-router";
import { AuthContext } from "../../Auth";

export const ForgotPassComponent = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      {currentUser === null ? (
        <Redirect to="/forgot" />
      ) : (
        <Redirect to="/members" />
      )}
      <div>
        <ForgotPassForm></ForgotPassForm>
      </div>
    </>
  );
};
