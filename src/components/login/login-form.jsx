import React, { useState, useCallback } from "react";
import { Box, Button, Form, FormField, TextInput } from "grommet";
import { formStyle, loginStyle } from "../../styles";
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
      <Box align="center" justify="center" pad="xlarge" style={formStyle}>
        <Box style={loginStyle}>{error}</Box>
        <Box width="large">
          <Form
            align="center"
            value={value}
            validate="change"
            onChange={(nextValue) => setValue(nextValue)}
            onSubmit={handleLogin}
          >
            <FormField name="username" label="email" required>
              <TextInput type="username" name="username" />
            </FormField>
            <FormField
              name="password"
              label="Password"
              type="password"
              required
            >
              <TextInput type="password" name="password" />
            </FormField>
            <Button size="large" type="submit" label="LOGIN" primary />
          </Form>
        </Box>
      </Box>
    </>
  );
};

export default withRouter(LoginForm);
