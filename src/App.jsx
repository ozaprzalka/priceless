import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { MembersComponent } from "./components/members/members-component";
import { LoginComponent } from "./components/login/login-component";
import { RegisterComponent } from "./components/register/register-component";
import { HeaderComponent } from "./components/header/header-component";
import { AboutComponent } from "./components/dashboard/about-component";
import { AccountComponent } from "./components/account/account-component";

import { bodyStyle } from "./styles";
import { Reset } from "styled-reset";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <>
      <Reset />
      <AuthProvider>
        <div className="App" style={bodyStyle}>
          <header className="App-header">
            <HeaderComponent></HeaderComponent>
          </header>
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
              <PrivateRoute path="/members">
                <MembersComponent />
              </PrivateRoute>
              <PrivateRoute path="/account">
                <AccountComponent />
              </PrivateRoute>
            </Switch>
          </HashRouter>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
