import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { LoginComponent } from "./components/login/login-component";
import { RegisterComponent } from "./components/register/register-component";
import { HeaderComponent } from "./components/header/header-component";
import { AboutComponent } from "./components/dashboard/about-component";
import { ForgotPassComponent } from "./components/forgot-password/forgot-pass-component";
import { PartnersComponent } from "./components/carousel/carousel-component";
import ChangePassForm from "./components/change-password/change-pass-page";
import AccountPage from "./components/account/account-page";
import NotFound from "./components/notFound/not-found";
import MembersDashboard from "./components/members/members-dashboard";

import { bodyStyle } from "./styles";
import { Reset } from "styled-reset";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import { Box, Image } from "grommet";
// import ErrorPage from "./components/notFound/error.jpeg";
// import Loadable from "react-loadable";

// function Loading({ error, pastDelay }) {
//   if (error) {
//     return "Oh nooess!";
//   } else {
//     return pastDelay ? <h3>Loading...</h3> : null;
//   }
// }

function App() {

  return (
    <>
      <Reset />
      <AuthProvider>
        <Box
          fill
          style={bodyStyle}
          background="linear-gradient(90deg, rgba(45,0,247,1) 12%, rgba(177,0,232,1) 59%, rgba(242,0,137,1) 100%)"
        >
          <HeaderComponent></HeaderComponent>
          <HashRouter>
            <Switch>
              <Route exact path="/">
                <AboutComponent />
              </Route>
              <Route path="/partners">
                <PartnersComponent />
              </Route>
              <Route path="/register">
                <RegisterComponent />
              </Route>
              <Route path="/login">
                <LoginComponent />
              </Route>
              <Route path="/forgot">
                <ForgotPassComponent />
              </Route>
              <PrivateRoute
                component={MembersDashboard}
                path="/members"
                exact
              />
              <PrivateRoute component={AccountPage} path="/account" exact />
              <PrivateRoute
                component={ChangePassForm}
                path="/change-pass"
                exact
              />
              <Route path="*" component={NotFound} />
            </Switch>
          </HashRouter>
        </Box>
      </AuthProvider>
    </>
  );
}

export default App;
