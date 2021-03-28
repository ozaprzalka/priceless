import React, { useState } from "react";
import { formStyle } from "../../styles";
import {
  Box,
  Button,
  Form,
  FormField,
  TextInput,
} from "grommet";

export const RegisterForm = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [valid, setValid] = useState(false);

  return (
    // <Grommet >
      <Box fill align="center" justify="center" style={formStyle}>
        <Box width="medium">
          <Form
            validate="change"
            // onSubmit={({ value }) => console.log("Submit", value)}
            onValidate={(validationResults) => {
              console.log("validationResults = ", validationResults);
              setValid(validationResults.valid);
            }}
            value={value}
            onChange={(nextValue) => setValue(nextValue)}
            // onSubmit={({ value: nextValue }) => {
            //   console.log('value', value, 'nextValue', nextValue);
            //   setValue({ nextValue });
            // }}
            onSubmit={event =>
              console.log('Submit', event.value)
            }
            // onSubmit={({ value: nextValue }) => console.log(nextValue)}
          >
            <FormField
              label="Username"
              name="name"
              required
              validate={[
                { regexp: /[a-zA-Z][a-zA-Z0-9-_]{2,16}$/ },
              ]}
            >
              <TextInput name="name" type="name" />
            </FormField>

            <FormField
              label="Email"
              name="email"
              required
              validate={[
                { regexp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ },
              ]}
            >
              <TextInput name="email" type="email" />
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
              <TextInput name="password" type="password" />
            </FormField>

            <FormField
              label="Confirm Password"
              name="confirmPassword"
              required
              validate={[
                (confirmPassword) => {
                  if (confirmPassword !== value.password)
                    return "Password mismatch";
                  return undefined;
                },
              ]}
            >
              <TextInput name="confirmPassword" type="password" />
            </FormField>

            <Box direction="row" justify="between" margin={{ top: "medium" }}>
              <Button type="submit" label="SUBMIT" disabled={!valid} primary />
            </Box>
          </Form>
        </Box>
      </Box>
    // </Grommet>
  );
};
