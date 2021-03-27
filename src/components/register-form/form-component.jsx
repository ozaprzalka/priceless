import React from 'react';
import { formStyle } from '../../styles'
import {
  Box,
  Button,
  Grommet,
  Form,
  FormField,
  Text,
  TextInput,
} from 'grommet';
import { grommet } from 'grommet/themes';

export const RegisterForm = () => {
  const [value, setValue] = React.useState({ name: '', email: '' });
  const message =
    value.name && value.email && value.name[0] !== value.email[0]
      ? 'Please try again'
      : undefined;
  return (
    <Grommet theme={grommet} style={formStyle}>
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onSubmit={({ value: nextValue }) => console.log(nextValue)}
          >
            <FormField label="Name" name="name" required>
              <TextInput name="name" type="name" />
            </FormField>

            <FormField label="Email" name="email" required>
              <TextInput name="email" type="email" />
            </FormField>

            <FormField label="Password" name="password" required>
              <TextInput name="password" type="password" />
            </FormField>

            <FormField label="Confirm Password" name="password" required>
              <TextInput name="password" type="password" />
            </FormField>

            {message && (
              <Box pad={{ horizontal: 'small' }}>
                <Text color="status-error">{message}</Text>
              </Box>
            )}

            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
              <Button type="submit" label="submit" primary />
            </Box>
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
};
