import React, {useContext, useCallback} from "react";
import { Grommet, Header, Anchor, Box, ResponsiveContext, Menu, Avatar, Image } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";
import { headerStyle, customFocus } from "../../styles";
import { AuthContext } from "../../Auth";
import app from "./../../base";
import { Redirect } from "react-router";
import unicorn from './avatar.png'


export const HeaderComponent = ({ history}) => {
  const { currentUser } = useContext(AuthContext);

  const handleLogout = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        app.auth().signOut();
        console.log("out");
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
      return <Redirect to="/login" />;
    },
    [history]
  );

  const handleLogin = () => {
    <Redirect to="/login" />
  }

  return (
  
    <Grommet theme={customFocus}>
      <Header
        background="light-4"
        pad="medium"
        height="xsmall"
        style={headerStyle}
      >
                <Avatar src={unicorn} style={{width: '200px', height: '150px'}}></Avatar>

        <Anchor href={currentUser === null ? '/#' : '/#/members'} label="You will never miss any sale with us!" />
        <Avatar src={unicorn} style={{width: '200px', height: '150px'}}></Avatar>
        <ResponsiveContext.Consumer>
          {(size) =>
            size === "small" ? (
              <Box justify="end">
                <Menu
                  a11yTitle="Navigation Menu"
                  dropProps={{ align: { top: "bottom", right: "right" } }}
                  icon={<MenuIcon color="brand" />}
                  items={[
                    {
                      label: <Box pad="small">{currentUser === null ? 'Login' : 'Logout'}</Box>,
                      href: currentUser === null ? '/#/login' : '/#/logout',
                    },
                    {
                      label: <Box pad="small">{currentUser === null ? 'Register' : 'Account'}</Box>,
                      href: currentUser === null ? '/#/register' : '/#/account',
                    },
                  ]}
                />
              </Box>
            ) : (
              <Box justify="end" direction="row" gap="medium">
                <Anchor href={currentUser === null ? '/#/login' : '/#/logout'} label={currentUser === null ? 'Login' : 'Logout'} onClick={currentUser ? handleLogout : handleLogin}/>
                <Anchor href={currentUser === null ? '/#/register' : '/#/account'} label={currentUser === null ? 'Register' : 'Account'} />
              </Box>
            )
          }
        </ResponsiveContext.Consumer>
      </Header>
    </Grommet>
  );

}
