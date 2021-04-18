import React, { useState, useContext } from "react";
import { AuthContext } from "../../Auth";
import { database } from "../../base";
import firebase from "firebase/app";

import {
  Box,
  Button,
  Form,
  FormField,
  TextInput,
  ResponsiveContext,
} from "grommet";
import {
  formStyle,
  loginStyle,
  inputStyle,
  smallFormStyle,
} from "../../styles";
import { withRouter } from "react-router";

const ChangePassForm = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
  const [error, setError] = useState();

  const document = database.collection("users").doc(currentUser.uid);

  const [value, setValue] = useState({
    currentPass: "",
    newPassword: "",
    ConfirmPassword: "",
  });

  const changePass = (e) => {
    let credential = e.value.currentPass;
    let credentials = firebase.auth.EmailAuthProvider.credential(
      currentUser.email,
      credential
    );
    currentUser
      .reauthenticateWithCredential(credentials)
      .then(function () {
        console.log("authenticated");
        let newPass = e.value.newPassword;
        currentUser
          .updatePassword(newPass)
          .then(function () {
            currentUser
              .updateProfile({
                password: newPass,
              })
              .then(function () {
                document.update({
                  password: newPass,
                });
                history.push("/account");
              })
              .catch(function (err) {
                setError(err.message);
              });
          })
          .catch(function (err) {
            setError(err.message);
          });
      })
      .catch(function (error) {
        setError(error.message);
      });
  };

  return (
    <>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <Box
              round="xsmall"
              align="center"
              justify="center"
              style={smallFormStyle}
              pad={{
                vertical: "large",
                horizontal: "xsmall",
              }}
            >
              <Box style={loginStyle}>{error}</Box>
              <Box
                width="xlarge"
                pad={{
                  vertical: "xlarge",
                  horizontal: "small",
                }}
              >
                <Form
                  align="center"
                  value={value}
                  validate="change"
                  onChange={(nextValue) => setValue(nextValue)}
                  onSubmit={changePass}
                >
                  <FormField
                    name="currentPass"
                    label="Current Password"
                    required
                  >
                    <TextInput
                      style={inputStyle}
                      type="password"
                      name="currentPass"
                    />
                  </FormField>
                  <FormField
                    name="newPassword"
                    label="New Password"
                    type="password"
                    required
                    validate={[
                      {
                        regexp: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/,
                      },
                    ]}
                  >
                    <TextInput
                      style={inputStyle}
                      type="password"
                      name="newPassword"
                    />
                  </FormField>
                  <FormField
                    name="confirmPassword"
                    label="Confirm New Password"
                    type="password"
                    required
                    validate={[
                      (confirmPassword) => {
                        if (confirmPassword !== value.newPassword)
                          return "Password mismatch";
                        return undefined;
                      },
                    ]}
                  >
                    <TextInput
                      style={inputStyle}
                      type="password"
                      name="ConfirmPassword"
                    />
                  </FormField>
                  <Button size="large" type="submit" label="CHANGE" primary />
                </Form>
              </Box>
            </Box>
          ) : (
            <Box
              round="xsmall"
              align="center"
              justify="center"
              pad="xlarge"
              style={formStyle}
            >
              <Box style={loginStyle}>{error}</Box>
              <Box width="xlarge">
                <Form
                  align="center"
                  value={value}
                  validate="change"
                  onChange={(nextValue) => setValue(nextValue)}
                  onSubmit={changePass}
                >
                  <FormField
                    name="currentPass"
                    label="Current Password"
                    required
                  >
                    <TextInput
                      style={inputStyle}
                      type="password"
                      name="currentPass"
                    />
                  </FormField>
                  <FormField
                    name="newPassword"
                    label="New Password"
                    type="password"
                    required
                    validate={[
                      {
                        regexp: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/,
                      },
                    ]}
                  >
                    <TextInput
                      style={inputStyle}
                      type="password"
                      name="newPassword"
                    />
                  </FormField>
                  <FormField
                    name="confirmPassword"
                    label="Confirm New Password"
                    type="password"
                    required
                    validate={[
                      (confirmPassword) => {
                        if (confirmPassword !== value.newPassword)
                          return "Password mismatch";
                        return undefined;
                      },
                    ]}
                  >
                    <TextInput
                      style={inputStyle}
                      type="password"
                      name="confirmPassword"
                    />
                  </FormField>
                  <Button size="large" type="submit" label="CHANGE" primary />
                </Form>
              </Box>
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </>
  );
};

export default withRouter(ChangePassForm);
