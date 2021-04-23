import React, { useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../../Auth";
import NewsDashboard from "./news-dashboard";

export const NewsComponent = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      {currentUser === null ? (
        <Redirect to="/login" />
      ) : (
        <Redirect to="/news" />
      )}
      <NewsDashboard></NewsDashboard>
    </>
  );
};
