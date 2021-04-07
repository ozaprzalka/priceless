import React, { useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../../Auth";
import AccountPage from "./account-page";

export const AccountComponent = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      {/* {currentUser === null ? (
        <Redirect to="/login" />
      ) : (
        <Redirect to="/account" />
      )} */}
      <AccountPage></AccountPage>
    </>
  );
};
