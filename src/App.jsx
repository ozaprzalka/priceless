import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { MembersComponent } from "./components/members/members-component";
import { LoginComponent } from "./components/login/login-component";
import { RegisterComponent } from "./components/register/register-component";
import { HeaderComponent } from "./components/header/header-component";
import { AboutComponent } from "./components/dashboard/about-component";

import { bodyStyle } from "./styles";
import { Reset } from "styled-reset";

function App() {
  return (
    <>
      <Reset />
      <div className="App" style={bodyStyle}>
        <header className="App-header">
          <HeaderComponent></HeaderComponent>
        </header>
        <HashRouter>
        <Route exact path="/" component={AboutComponent} />
          <Route path="/register" component={RegisterComponent} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/members" component={MembersComponent} />
        </HashRouter>
      </div>
    </>
  );
}

export default App;
