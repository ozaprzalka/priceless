import React, { useContext } from "react";
import { AuthContext } from "../../Auth";
import { Redirect } from "react-router";
import { AboutPage } from "./about-page";

export const AboutComponent = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      {currentUser === null ? <Redirect to="/" /> : <Redirect to="/members" />}
      <AboutPage></AboutPage>
    </>
  );
};
