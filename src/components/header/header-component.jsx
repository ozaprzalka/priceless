import React, { useContext, useCallback } from "react";
import {
  Grommet,
  Header,
  Anchor,
  Box,
  ResponsiveContext,
  Menu,
  Avatar,
} from "grommet";
import { Power, UserManager, Shop } from "grommet-icons";
import { Menu as MenuIcon } from "grommet-icons";
import { headerStyle, smallHeaderStyle, customFocus } from "../../styles";
import { AuthContext } from "../../Auth";
import app from "./../../base";
import { Redirect } from "react-router";
import unicorn from "./avatar7.png";
import smallUnicorn from "./avatar6.png";

export const HeaderComponent = () => {
  const { currentUser } = useContext(AuthContext);

  const handleLogout = useCallback(async (e) => {
    e.preventDefault();
    try {
      app.auth().signOut();
    } catch (err) {
      console.log(err);
    }
    return <Redirect to="/login" />;
  }, []);

  const handleLogin = () => {
    <Redirect to="/login" />;
  };

  return (
    <Grommet theme={customFocus}>
      <ResponsiveContext.Consumer style={smallHeaderStyle}>
        {(size) =>
          size === "small" ? (
            <>
              <Header
                background="#A593E0"
                pad="medium"
                height="xsmall"
                style={headerStyle}
              >
                <Anchor
                  alignSelf="end"
                  href={currentUser === null ? "/#" : "/#/members"}
                  label="Save with us!"
                  width="40%"
                />
                <Avatar
                  src={smallUnicorn}
                  style={{
                    width: "210px",
                    height: "75px",
                    borderRadius: "20px",
                    padding: "0 15px",
                    marginRight: "13px",
                    marginLeft: "5px",
                  }}
                ></Avatar>
                <Box justify="end" align="center">
                  <Menu
                    a11yTitle="Menu"
                    dropProps={{ align: { top: "bottom", right: "right" } }}
                    dropBackground={{ color: "#A593E0", opacity: "strong" }}
                    icon={<MenuIcon color="#601cff" />}
                    margin={{ vertical: "large", horizontal: "xsmall" }}
                    items={[
                      {
                        label: (
                          <Box
                            pad="medium"
                            justify="center"
                            style={smallHeaderStyle}
                            onClick={currentUser ? handleLogout : handleLogin}
                          >
                            {currentUser === null ? "Login" : "Logout"}
                          </Box>
                        ),
                        href: currentUser === null ? "/#/login" : "/#/logout",
                        icon: <Power color="#601cff" />,
                        gap: "medium",
                      },
                      {
                        label: (
                          <Box pad="small" style={smallHeaderStyle}>
                            {currentUser === null ? "Register" : "Account"}
                          </Box>
                        ),
                        href:
                          currentUser === null ? "/#/register" : "/#/account",
                        icon: <UserManager color="#601cff" />,
                        gap: "medium",
                      },
                      {
                        label:
                          currentUser === null ? (
                            <Box pad="small" style={smallHeaderStyle}>
                              Partners
                            </Box>
                          ) : null,
                        href: currentUser === null ? "/#/partners" : null,
                        icon:
                          currentUser === null ? (
                            <Shop color="#601cff" />
                          ) : null,
                        gap: currentUser === null ? "medium" : null,
                      },
                    ]}
                  />
                </Box>
              </Header>
            </>
          ) : (
            <>
              <Header
                background="#A593E0"
                pad={{ horizontal: "17%", vertical: "xsmall" }}
                height="small"
                style={headerStyle}
              >
                <Anchor
                  alignSelf="end"
                  href={currentUser === null ? "/#" : "/#/members"}
                  label="Save with us!"
                  margin={{ vertical: "xsmall" }}
                />

                <Avatar
                  src={unicorn}
                  style={{
                    width: "320px",
                    height: "150px",
                    borderRadius: "20px",
                    padding: "0 150px",
                    marginRight: "150px",
                  }}
                ></Avatar>

                <Box
                  justify="end"
                  alignSelf="end"
                  direction="row"
                  gap="medium"
                  color="#362C63"
                >
                  <Anchor
                    href={currentUser === null ? "/#/partners" : null}
                    label={currentUser === null ? "Partners" : null}
                    margin={{ horizontal: "10%", vertical: "xsmall" }}
                  />
                  <Anchor
                    href={currentUser === null ? "/#/login" : "/#/logout"}
                    label={currentUser === null ? "Login" : "Logout"}
                    onClick={currentUser ? handleLogout : handleLogin}
                    margin={{ horizontal: "10%", vertical: "xsmall" }}
                  />
                  <Anchor
                    href={currentUser === null ? "/#/register" : "/#/account"}
                    label={currentUser === null ? "Register" : "Account"}
                    margin={{ horizontal: "10%", vertical: "xsmall" }}
                  />
                </Box>
              </Header>
            </>
          )
        }
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};
