import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Auth";
import { database } from "../../base";
import {
  largeEmailButtonStyle,
  emailInputStyle,
  emailButtonStyle,
} from "../../styles";

import {
  Box,
  ResponsiveContext,
  Heading,
  Form,
  FormField,
  TextInput,
  Button,
} from "grommet";
import Rotate from "react-reveal/Rotate";

export const EmailListComponent = () => {
  const { currentUser } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState("");
  const [agreement, setAgreement] = useState("");

  const [checked, setChecked] = useState("");
  const document = database.collection("users").doc(currentUser.uid);

  useEffect(() => {
    const setusr = document.onSnapshot((snapshot) => {
      setUserDetails(snapshot.data());
      setChecked(userDetails.gdpr);
    });
    return () => setusr;
  }, [checked]); //eslint-disable-line

  const handleChange = (e) => {
    e.preventDefault();
    setAgreement(e.target.value);
  };

  const saveGdpr = () => {
    const email = agreement;
    document.update({
      gdpr: email,
    });
  };

  return (
    <>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small"
            ? !userDetails.gdpr && (
                <Rotate top left delay={500}>
                  <Box
                    pad={{ top: "medium", bottom: "small" }}
                    background="brand"
                    justify="center"
                    width="100vw"
                    style={{ margingLeft: "50vw" }}
                  >
                    <Heading
                      textAlign="center"
                      level="4"
                      margin={{
                        vertical: "xsmall",
                        horizontal: "small",
                      }}
                    >
                      Subscribe to our newsletter
                    </Heading>
                    <Heading
                      textAlign="center"
                      level="5"
                      margin={{
                        vertical: "xsmall",
                      }}
                    >
                      Never miss a chance for great deal
                    </Heading>
                    <Box pad="small">
                      <Form onSubmit={saveGdpr}>
                        <FormField
                          style={emailInputStyle}
                          value={agreement}
                          onChange={handleChange}
                        >
                          <TextInput placeholder="give us your email"></TextInput>
                        </FormField>
                        <Box direction="row" justify="center">
                          <Button
                            type="submit"
                            align="end"
                            secondary
                            style={emailButtonStyle}
                            pad="large"
                            label="signup"
                            color="magenta"
                          ></Button>
                        </Box>
                      </Form>
                    </Box>
                  </Box>
                </Rotate>
              )
            : !userDetails.gdpr && (
                <>
                  <Rotate top left delay={500}>
                    <Box
                      pad="medium"
                      background="brand"
                      justify="center"
                      width="30vw"
                      style={{ marginTop: "18px", marginLeft: "70px" }}
                    >
                      <Heading
                        textAlign="center"
                        level="3"
                        margin={{
                          vertical: "xsmall",
                        }}
                      >
                        Subscribe to our newsletter
                      </Heading>
                      <Heading
                        textAlign="center"
                        level="4"
                        margin={{
                          vertical: "xsmall",
                        }}
                      >
                        Never miss a chance for great deal
                      </Heading>
                      <Box pad="small">
                        <Form onSubmit={saveGdpr}>
                          <FormField
                            style={emailInputStyle}
                            value={agreement}
                            onChange={handleChange}
                          >
                            <TextInput
                              type="email"
                              placeholder="give us your email"
                            ></TextInput>
                          </FormField>
                          <Box direction="row" justify="center">
                            <Button
                              type="submit"
                              align="end"
                              secondary
                              style={largeEmailButtonStyle}
                              label="signup"
                              color="magenta"
                            ></Button>
                          </Box>
                        </Form>
                      </Box>
                    </Box>
                  </Rotate>
                </>
              )
        }
      </ResponsiveContext.Consumer>
    </>
  );
};
