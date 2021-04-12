import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Auth";
import { boxStyle, accountStyle, inputStyle, buttonStyle } from "../../styles";
import { Checkbox, CheckboxSelected } from "grommet-icons";
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
} from "grommet";

const AccountPage = () => {
  const { currentUser } = useContext(AuthContext);
  const [pass, setpass] = useState("");
  const [username, setusername] = useState("");
  const history = useHistory();
  const document = database.collection("users").doc(currentUser.uid);
  let usr = document.get("name");
  const [userDetails, setUserDetails] = useState("");

  const getUsername = () => {
    document.onSnapshot((doc) => {
      let data = doc.data();
      // Object.keys(data).forEach(name => {
      //   console.log(name, data[name])
      // })
      if (data["name"]) {
        console.log(data["name"]);
        return data["name"];
      }
    });
  };

  const getName = () => {
    document.get().then((snapshot) => {
      setUserDetails(snapshot.data());
    });
  };

  useEffect(() => {
    const setusr = document.get().then((snapshot) => {
      setUserDetails(snapshot.data());
      console.log('1 render')
    });
    console.log('2 render')
    return setusr;
  }, []);

  const handleChangeUsername = (e) => {
    e.preventDefault();
    setusername(e.target.value);
  };

  const changePassword = () => {
    let newPass = pass;
    currentUser
      .updatePassword(newPass)
      .then(function () {
        console.log("pass updated");
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const changeUsername = () => {
    const newName = username;
    // const document = database.collection("users").doc(currentUser.uid)
    currentUser
      .updateProfile({
        displayName: newName,
      })
      .then(function () {
        console.log("new name ", currentUser.displayName);
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
          <Text>{console.log(currentUser)}</Text>
          <Text>{console.log(userDetails)}</Text>
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
            <Box width="medium" direction="row">
              <Button type="submit" align="center" primary style={buttonStyle}>
                submit
              </Button>
            </Box>
          </Form>
        </Box>
      </Box>
    </>
  );
};

export default AccountPage;
