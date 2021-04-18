import React, { useContext } from "react";
import ChangePassForm from "./change-pass-page";
import { AuthContext } from "../../Auth";
import { Redirect } from "react-router";

export const ChangePassComponent = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      {currentUser === null ? (
        <Redirect to="/login" />
      ) : (
        <Redirect to="/change-pass" />
      )}
      <ChangePassForm></ChangePassForm>
    </>
  );
};
