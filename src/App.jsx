import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { LoginComponent } from "./components/login/login-component";
import { RegisterComponent } from "./components/register/register-component";
import { HeaderComponent } from "./components/header/header-component";
import { AboutComponent } from "./components/dashboard/about-component";
import AccountPage from "./components/account/account-page";
import NotFound from "./components/notFound/not-found"
// import MembersDashboard from "./components/members/members-dashboard";

import { bodyStyle } from "./styles";
import { Reset } from "styled-reset";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import { Box, Text } from "grommet";
import Loadable from 'react-loadable';

function Loading({ error, pastDelay }) {
  if (error) {
    return 'Oh nooess!';
  } else {
    return pastDelay ? <h3>Loading...</h3> : <h2>NOT LOADING</h2>;
  }
}

const MembersDashboard = Loadable({
  loader: () => import("./components/members/members-dashboard"),
  loading: Loading,
  delay: 2
});

function App() {
  return (
    <>
      <Reset />
      <AuthProvider>
        <Box fill style={bodyStyle}>
          <HeaderComponent></HeaderComponent>
          <HashRouter>
            <Switch>
              <Route exact path="/">
                <AboutComponent />
              </Route>
              <Route path="/register">
                <RegisterComponent />
              </Route>
              <Route path="/login">
                <LoginComponent />
              </Route>
              <PrivateRoute
                component={MembersDashboard}
                path="/members"
                exact
              />
              <PrivateRoute component={AccountPage} path="/account" exact />
              <Route path="*" component={NotFound} />
            </Switch>
          </HashRouter>
        </Box>
      </AuthProvider>
    </>
  );
}

export default App;
