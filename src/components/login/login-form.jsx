import React, { useState } from "react";

import { Box, Button, Form, FormField, TextInput } from "grommet";
import { formStyle } from "../../styles";

export const LoginForm = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  return (
    <>
      <Box align="center" justify="center" pad="xlarge"  style={formStyle}>
          <Box width="large" >
          <Form align="center"
          value={value}
          validate="change"
          onChange={(nextValue) => setValue(nextValue)}
          onSubmit={event =>
            console.log('Submit', event.value)
          }
        >
          <FormField
            name="username"
            label="Username"
            required
          >
            <TextInput type="username" name="username"/>
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
