import React, { useState } from "react";
import {
  formStyle,
  inputStyle,
  smallFormStyle,
  loginStyle,
} from "../../styles";
import {
  Box,
  Button,
  Form,
  FormField,
  TextInput,
  ResponsiveContext,
} from "grommet";
import { withRouter } from "react-router";
import app from "../../base";
import { database } from "../../base";

const RegisterForm = ({ history }) => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [valid, setValid] = useState(false);
  const [error, setError] = useState();

  const handleSignup = async (e) => {
    e.preventDefault();
    app
      .auth()
      .createUserWithEmailAndPassword(e.value.email, e.value.password)
      .then(() => {
        history.push("/members");
        let loggedIn = app.auth().currentUser;
        console.log("then", loggedIn.uid);
        let user = {
          name: e.value.name,
          email: e.value.email,
          password: e.value.password,
          uid: loggedIn.uid,
          created: loggedIn.metadata.lastSignInTime,
        };
        database.collection("users").doc(user.uid).set(user);
      })
      .then(function () {
        console.log("name?", e.value.name);
        return app.auth().currentUser.updateProfile({
          displayName: e.value.name,
        });
      })
      .catch((error) => {
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
              pad="large"
            >
              <Box style={loginStyle}>{error}</Box>
              <Box width="large">
                <Form
                  style={{ marginTop: "10px" }}
                  align="center"
                  validate="change"
                  onSubmit={handleSignup}
                  onValidate={(validationResults) => {
                    setValid(validationResults.valid);
                  }}
                  value={value}
                  onChange={(nextValue) => {
                    setValue(nextValue);
                  }}
                >
                  <FormField
                    label="Username"
                    name="name"
                    required
                    validate={[{ regexp: /[a-zA-Z][a-zA-Z0-9-_]{2,16}$/ }]}
                  >
                    <TextInput style={inputStyle} name="name" type="name" />
                  </FormField>
                  <FormField
                    label="Email"
                    name="email"
                    required
                    validate={[
                      { regexp: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ },
                    ]}
                  >
                    <TextInput style={inputStyle} name="email" type="email" />
                  </FormField>
                  <FormField
                    label="Password"
                    name="password"
                    required
                    validate={[
                      {
                        regexp: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/,
                      },
                    ]}
                  >
                    <TextInput
                      style={inputStyle}
                      name="password"
                      type="password"
                    />
                  </FormField>
                  <FormField
                    label="Confirm Password"
                    name="confirmPassword"
                    info="Password must be at least 6 characters, contain a letter, number and special character"
                    required
                    validate={[
                      (confirmPassword) => {
                        if (confirmPassword !== value.password)
                          return "Password mismatch";
                        return undefined;
                      },
                    ]}
                  >
                    <TextInput
                      style={inputStyle}
                      name="confirmPassword"
                      type="password"
                    />
                  </FormField>
                  <Box
                    direction="row"
                    justify="between"
                    margin={{ top: "medium" }}
                  >
                    <Button
                      type="submit"
                      label="SUBMIT"
                      disabled={!valid}
                      primary
                    />
                  </Box>
                </Form>
              </Box>
            </Box>
          ) : (
            <Box
              round="xsmall"
              align="center"
              justify="center"
              style={formStyle}
              pad="xlarge"
            >
              <Box style={loginStyle}>{error}</Box>
              <Box width="large">
                <Form
                  style={{ marginTop: "20px" }}
                  align="center"
                  validate="change"
                  onSubmit={handleSignup}
                  onValidate={(validationResults) => {
                    setValid(validationResults.valid);
                  }}
                  value={value}
                  onChange={(nextValue) => {
                    setValue(nextValue);
                  }}
                >
                  <FormField
                    label="Username"
                    name="name"
                    required
                    validate={[{ regexp: /[a-zA-Z][a-zA-Z0-9-_]{2,16}$/ }]}
                  >
                    <TextInput style={inputStyle} name="name" type="name" />
                  </FormField>
                  <FormField
                    label="Email"
                    name="email"
                    required
                    validate={[
                      { regexp: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ },
                    ]}
                  >
                    <TextInput style={inputStyle} name="email" type="email" />
                  </FormField>
                  <FormField
                    label="Password"
                    name="password"
                    required
                    validate={[
                      {
                        regexp: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/,
                      },
                    ]}
                  >
                    <TextInput
                      style={inputStyle}
                      name="password"
                      type="password"
                    />
                  </FormField>
                  <FormField
                    label="Confirm Password"
                    name="confirmPassword"
                    info="Password must be at least 6 characters, contain a letter, number and special character"
                    required
                    validate={[
                      (confirmPassword) => {
                        if (confirmPassword !== value.password)
                          return "Password mismatch";
                        return undefined;
                      },
                    ]}
                  >
                    <TextInput
                      style={inputStyle}
                      name="confirmPassword"
                      type="password"
                    />
                  </FormField>
                  <Box
                    direction="row"
                    justify="between"
                    margin={{ top: "medium" }}
                  >
                    <Button
                      type="submit"
                      label="SUBMIT"
                      disabled={!valid}
                      primary
                    />
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

export default withRouter(RegisterForm);
