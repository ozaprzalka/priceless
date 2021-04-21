import React, { useContext } from "react";
import { AuthContext } from "../../Auth";
import { Redirect } from "react-router";
import { PartnersPage } from "./carousel-page";

export const PartnersComponent = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      {currentUser === null ? <Redirect to="/partners" /> : <Redirect to="/members" />}
      <PartnersPage></PartnersPage>
    </>
  );
};