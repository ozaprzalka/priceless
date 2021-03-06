import React, { useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../../Auth";
import MembersDashboard from "./members-dashboard";

export const MembersComponent = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      {currentUser === null ? (
        <Redirect to="/login" />
      ) : (
        <Redirect to="/members" />
      )}
      <MembersDashboard></MembersDashboard>
    </>
  );
};
