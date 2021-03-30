import React, { useState, useCallback, useContext } from "react";

import { Box, Button, Form, FormField, TextInput } from "grommet";
import { formStyle, loginStyle } from "../../styles";
import app from "../../base";
import { AuthContext } from "./../../Auth";
import { withRouter, Redirect } from "react-router";

const LoginForm = ({ history }) => {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState();

//   const getData = () => {
//     function getUserData(uid) {
//         app.database().ref('users/' + uid).once("value", snap => {
//             console.log(snap.val())
//         })
//     }
//   }

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
    //   try {
        app
          .auth()
          .signInWithEmailAndPassword(e.value.username, e.value.password)
          
          .then(() => {
              history.push("/members");
            //   console.log(user.uid)
            }) 
        .catch ((err) => {
        console.log(err);
        setError(err.message);
      })

    //   const usersRef = app.database.ref('users');
    //   const newUserRef = usersRef.push();
    //   newUserRef.set({
    //     username: e.value.username,
    //     password: e.value.password
    //   }) 
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/members" />;
  }

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
            <FormField name="username" label="Username" required>
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
