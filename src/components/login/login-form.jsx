import React, { useState, useCallback } from "react";
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
  smallLoginStyle,
} from "../../styles";
import app from "../../base";
import { withRouter } from "react-router";

const LoginForm = ({ history }) => {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState();

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      app
        .auth()
        .signInWithEmailAndPassword(e.value.username, e.value.password)

        .then(() => {
          history.push("/members");
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
        });
    },
    [history]
  );

  return (
    <>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <Box
              round="xsmall"
              align="center"
              justify="center"
              style={smallLoginStyle}
            >
              <Box style={loginStyle}>{error}</Box>
              <Box width="xlarge" pad="large">
                <Form
                  align="center"
                  value={value}
                  validate="change"
                  onChange={(nextValue) => setValue(nextValue)}
                  onSubmit={handleLogin}
                >
                  <FormField name="username" label="email" required>
                    <TextInput
                      style={inputStyle}
                      type="username"
                      name="username"
                    />
                  </FormField>
                  <FormField
                    name="password"
                    label="Password"
                    type="password"
                    required
                  >
                    <TextInput
                      style={inputStyle}
                      type="password"
                      name="password"
                    />
                  </FormField>
                  <Button size="large" type="submit" label="LOGIN" primary />
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
                  onSubmit={handleLogin}
                >
                  <FormField name="username" label="email" required>
                    <TextInput
                      style={inputStyle}
                      type="username"
                      name="username"
                    />
                  </FormField>
                  <FormField
                    name="password"
                    label="Password"
                    type="password"
                    required
                  >
                    <TextInput
                      style={inputStyle}
                      type="password"
                      name="password"
                    />
                  </FormField>
                  <Button size="large" type="submit" label="LOGIN" primary />
                </Form>
              </Box>
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </>
  );
};

export default withRouter(LoginForm);
