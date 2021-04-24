import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Auth";
import { withRouter } from "react-router-dom";

import {
  boxStyle,
  accountStyle,
  inputStyle,
  buttonStyle,
  smallAccountStyle,
  largeButtonStyle,
} from "../../styles";
import { database } from "../../base";
import { useHistory } from "react-router";

import {
  Box,
  Text,
  Heading,
  Form,
  FormField,
  TextInput,
  Button,
  ResponsiveContext,
} from "grommet";

const AccountPage = () => {
  const { currentUser } = useContext(AuthContext);
  const [username, setusername] = useState("");
  const history = useHistory();
  const document = database.collection("users").doc(currentUser.uid);
  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    const setusr = document.get().then((snapshot) => {
      setUserDetails(snapshot.data());
    });
    return setusr;
  }, []); //eslint-disable-line

  const handleChangeUsername = (e) => {
    e.preventDefault();
    setusername(e.target.value);
  };

  const changeUsername = () => {
    const newName = username;
    currentUser
      .updateProfile({
        displayName: newName,
      })
      .then(function () {
        document
          .update({
            name: newName,
          })
          .then(function () {
            history.go(0);
          })
          .catch(function (err) {
            console.log(err);
          });
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  if (!currentUser) {
    return (
      <Box fill>
        <Text>Something went wrong. Please reload page.</Text>
      </Box>
    );
  }

  return (
    <>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <Box fill align="center" justify="center" style={boxStyle}>
              <Box
                border={{ color: "brand", size: size }}
                pad={size}
                gap={size}
                round="xsmall"
                style={smallAccountStyle}
              >
                <Heading level="1" size="small" margin="0 0 10px 10px">
                  Your account info
                </Heading>
                <Text>email: {currentUser.email}</Text>
                <Text> username: {userDetails.name}</Text>
                <Text>created: {currentUser.metadata.lastSignInTime}</Text>
              </Box>
              <Box
                border={{ color: "brand", size: size }}
                pad={size}
                gap={size}
                round="xsmall"
                style={smallAccountStyle}
              >
                <Heading level="2" size={size} margin="0 0 10px 10px">
                  Change your username
                </Heading>
                <Form onSubmit={changeUsername}>
                  <FormField
                    width="100%"
                    style={inputStyle}
                    value={username}
                    onChange={handleChangeUsername}
                  >
                    <TextInput placeholder="type a new username here"></TextInput>
                  </FormField>
                  <Box direction="row" justify="center">
                    <Button
                      type="submit"
                      align="center"
                      primary
                      style={buttonStyle}
                    >
                      submit
                    </Button>
                  </Box>
                </Form>
              </Box>
              <Box
                border={{ color: "brand", size: size }}
                pad={size}
                gap={size}
                round="xsmall"
                style={smallAccountStyle}
                align="center"
                justify="center"
              >
                <Heading level="3" size={size} margin="0 0 10px 0">
                  Change your password
                </Heading>
                <Form onSubmit={() => history.push("/change-pass")}>
                  <Box direction="row" justify="center">
                    <Button type="submit" primary style={buttonStyle}>
                      change
                    </Button>
                  </Box>
                </Form>
              </Box>
            </Box>
          ) : (
            <Box fill align="center" justify="center" style={boxStyle}>
              <Box
                border={{ color: "brand", size: "medium" }}
                pad="xlarge"
                gap="medium"
                round="xsmall"
                style={accountStyle}
              >
                <Heading level="1" size="37px" margin="0 0 30px 0">
                  Your account info
                </Heading>
                <Text>email: {currentUser.email}</Text>
                <Text> username: {userDetails.name}</Text>
                <Text>created: {currentUser.metadata.lastSignInTime}</Text>
              </Box>
              <Box
                border={{ color: "brand", size: "medium" }}
                pad="xlarge"
                gap="medium"
                round="xsmall"
                style={accountStyle}
              >
                <Heading level="2" size="30px" margin="0 0 15px 0">
                  Change your username
                </Heading>
                <Form onSubmit={changeUsername}>
                  <FormField
                    width="medium"
                    style={inputStyle}
                    value={username}
                    onChange={handleChangeUsername}
                  >
                    <TextInput placeholder="type your new username here"></TextInput>
                  </FormField>
                  <Box width="medium" direction="row" justify="center">
                    <Button
                      type="submit"
                      align="center"
                      primary
                      style={largeButtonStyle}
                    >
                      submit
                    </Button>
                  </Box>
                </Form>
              </Box>
              <Box
                border={{ color: "brand", size: "medium" }}
                pad="xlarge"
                gap="medium"
                round="xsmall"
                style={accountStyle}
              >
                <Heading level="3" size="30px" margin="0 0 15px 0">
                  Change your password
                </Heading>
                <Form onSubmit={() => history.push("/change-pass")}>
                  <Box width="medium" direction="row" justify="center">
                    <Button
                      type="submit"
                      align="center"
                      primary
                      style={largeButtonStyle}
                    >
                      submit
                    </Button>
                  </Box>
                </Form>
              </Box>
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </>
  );
};

export default withRouter(AccountPage);
