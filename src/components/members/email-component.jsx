import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Auth";
import { database } from "../../base";
import {
  cardStyle,
  inputStyle,
  buttonStyle,
  formStyle,
  smallLMemStyle,
  smallCardStyle,
  largeButtonStyle,
} from "../../styles";

import { Box, CheckBox, ResponsiveContext, Heading } from "grommet";

import firebase from "firebase/app";

export const EmailListComponent = () => {
  const { currentUser } = useContext(AuthContext);
  const [checked, setChecked] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const [userDetails, setUserDetails] = useState("");
  const document = database.collection("users").doc(currentUser.uid);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const setusr = document.get().then((snapshot) => {
      setUserDetails(snapshot.data());
      document
        .update({
          gdpr: checked,
        })
        .then(function () {
          console.log("new name ", userDetails.gdpr);
        })
        .catch(function (err) {
          console.log(err);
        });
    });
    console.log("checked");
    return setusr;
  }, [checked]); //eslint-disable-line

  return (
    <>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <Box>
              {/* <Box
                pad="small"
                background="brand"
                justify="center"
                width="30vw"
                style={{ transform: `translateY(${offset * 0.5}px)` }}
              > */}
              <Heading
                level="4"
                margin={{
                  vertical: "xsmall",
                }}
              >
                Subscribe to our newsletter
              </Heading>
              <Heading
                level="5"
                margin={{
                  vertical: "xsmall",
                }}
              >
                Never miss a chance for great deal
              </Heading>
              <CheckBox
                label="Yes please!"
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
              />
              {/* </Box> */}
            </Box>
          ) : (
            <Box>
              <Box
                pad="large"
                background="brand"
                justify="center"
                width="30vw"
                style={{ transform: `translateY(${offsetY * 2.57}px)` }}
              >
                <Heading
                  level="3"
                  margin={{
                    vertical: "xsmall",
                  }}
                >
                  Subscribe to our newsletter
                </Heading>
                <Heading
                  level="4"
                  margin={{
                    vertical: "xsmall",
                  }}
                >
                  Never miss a chance for great deal
                </Heading>
                <CheckBox
                  label="Yes please!"
                  checked={checked}
                  onChange={(event) => setChecked(event.target.checked)}
                />
              </Box>
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </>
  );
};
