import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { LoginComponent } from "./components/login/login-component";
import { RegisterComponent } from "./components/register/register-component";
import { HeaderComponent } from "./components/header/header-component";
import { AboutComponent } from "./components/dashboard/about-component";
import ChangePassForm  from "./components/change-password/change-pass-page";
import AccountPage from "./components/account/account-page";
import NotFound from "./components/notFound/not-found"
import MembersDashboard from "./components/members/members-dashboard";

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
    return pastDelay ? <h3>Loading...</h3> : null;
  }
}

// const MembersDashboard = Loadable({
//   loader: () => import("./components/members/members-dashboard"),
//   loading: Loading,
// });

const bgr = `linear-gradient(90deg, hsla(251, 100%, 48%, 1) 0%, hsla(266, 100%, 48%, 1) 0.1%, hsla(274, 100%, 47%, 1) 0.2%, hsla(280, 100%, 47%, 1) 0.3%, hsla(286, 100%, 45%, 1) 0.4%, hsla(291, 100%, 43%, 1) 0.5%, hsla(300, 100%, 41%, 1) 8.6%, hsla(310, 100%, 43%, 1) 7.7%, hsla(317, 100%, 45%, 1) 5.8%, hsla(326, 100%, 47%, 1) 0.9%)`

function App() {
  return (
    <>
      <Reset />
      <AuthProvider>
        <Box fill style={bodyStyle} background='linear-gradient(90deg, rgba(45,0,247,1) 12%, rgba(177,0,232,1) 59%, rgba(242,0,137,1) 100%)'>
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
              <PrivateRoute component={ChangePassForm} path="/change-pass" exact />
              <Route path="*" component={NotFound} />
            </Switch>
          </HashRouter>
        </Box>
      </AuthProvider>
    </>
  );
}

export default App;
