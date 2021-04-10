import React, { useContext, useCallback } from "react";
import {
  Grommet,
  Header,
  Anchor,
  Box,
  ResponsiveContext,
  Menu,
  Avatar,
  Image,
} from "grommet";
import { Menu as MenuIcon } from "grommet-icons";
import { headerStyle, smallHeaderStyle, customFocus } from "../../styles";
import { AuthContext } from "../../Auth";
import app from "./../../base";
import { Redirect } from "react-router";
import unicorn from "./avatar4.jpg";

export const HeaderComponent = ({ history }) => {
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
    <Redirect to="/login" />;
  };

  return (
    <Grommet theme={customFocus} color= "#362C63">

      <Header
        background="light-4"
        pad="medium"
        height="small"
        style={headerStyle}
        color= "#362C63"
      >
        <Anchor
          href={currentUser === null ? "/#" : "/#/members"}
          label="You will never miss any sale with us!"
        />
        <ResponsiveContext.Consumer style={smallHeaderStyle}>
          {(size) =>
            size === "small" ? (
              <Box justify="end" >
                <Menu
                  a11yTitle="Navigation Menu"
                  dropProps={{ align: { top: "bottom", right: "right" } }}
                  icon={<MenuIcon color="#362C63" />}
                  items={[
                    {
                      label: (
                        <Box pad="small" style={smallHeaderStyle}>
                          {currentUser === null ? "Login" : "Logout"}
                        </Box>
                      ),
                      href: currentUser === null ? "/#/login" : "/#/logout",
                    },
                    {
                      label: (
                        <Box pad="small" style={smallHeaderStyle}>
                          {currentUser === null ? "Register" : "Account"}
                        </Box>
                      ),
                      href: currentUser === null ? "/#/register" : "/#/account",
                    },
                  ]}
                />
              </Box>
            ) : (
              <>
                      <Avatar 
                  src={unicorn}
                  style={{
                    width: "400px",
                    height: "190px",
                    borderRadius: "20px",
                    padding: "0 150px",
                    marginRight: "170px",
                  }}
                ></Avatar>

                <Box justify="end" direction="row" gap="medium" color= "#362C63">
                  <Anchor
                    href={currentUser === null ? "/#/login" : "/#/logout"}
                    label={currentUser === null ? "Login" : "Logout"}
                    onClick={currentUser ? handleLogout : handleLogin}
                  />
                  <Anchor
                    href={currentUser === null ? "/#/register" : "/#/account"}
                    label={currentUser === null ? "Register" : "Account"}
                  />
                </Box>
              </>
            )
          }
        </ResponsiveContext.Consumer>
      </Header>
    </Grommet>
  );
};
