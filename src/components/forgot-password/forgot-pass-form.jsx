import React, { useState } from "react";
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
  inputStyle,
  smallLoginStyle,
  smallErrorStyle
} from "../../styles";
import app from "../../base";
import { withRouter } from "react-router";

const ForgotPassForm = ({ history }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState();

  const resetPassword = () => {
    app
      .auth()
      .sendPasswordResetEmail(value)
      .then(function () {
        history.push("/login");
      })
      .catch(function (error) {
        setError(error.message);
        history.push("/login");
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
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
              style={smallLoginStyle}
            >
              {/* <Box style={smallErrorStyle} justify="center" pad={{horizontal: "large"}}>{error}</Box> */}
              <Box width="xlarge" pad="large">
                <Form align="center" validate="change" onSubmit={resetPassword}>
                  <FormField
                    onChange={handleChange}
                    value={value}
                    name="email"
                    label="We will send you a password change email if there is an account with provided address in our database"
                    required
                  >
                    <TextInput
                      placeholder="Where should we send it?"
                      style={inputStyle}
                      type="email"
                      name="email"
                    />
                  </FormField>
                  <Button size="large" type="submit" label="RESET" primary />
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
              {/* <Box style={loginStyle}>{error}</Box> */}
              <Box width="xlarge">
                <Form align="center" validate="change" onSubmit={resetPassword}>
                  <FormField
                    onChange={handleChange}
                    value={value}
                    name="email"
                    label="We will send you a password change email if there is an account with provided address in our database"
                    required
                  >
                    <TextInput
                      placeholder="Where should we send it?"
                      style={inputStyle}
                      type="email"
                      name="email"
                    />
                  </FormField>
                  <Button size="large" type="submit" label="RESET" primary />
                </Form>
              </Box>
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </>
  );
};

export default withRouter(ForgotPassForm);
