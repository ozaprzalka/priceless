import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { useHistory } from "react-router";

import { Box, Layer, Heading, Button } from "grommet";

import { Gift, Announce } from "grommet-icons";

const RegisterPopup = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(undefined);

  const history = useHistory();

  const width = window.innerWidth;

  useEffect(() => {
    const checkBottom = (window.onscroll = function () {
      if (
        window.innerHeight + Math.ceil(window.pageYOffset) >=
        document.body.offsetHeight
      ) {
        setOpen(true);
        console.log("bottom");
      }
    });
    return checkBottom;
  }, []);

  return (
    <>
      {open && width > 770 && (
        <Layer position="top" onClickOutside={onClose} onEsc={onClose}>
          <Box
            pad="medium"
            gap="small"
            width="medium"
            background="#A593E0"
            border={{ color: "#601cff", size: "small" }}
          >
            <Heading level={2} color="#601cff" fill>
              <Announce color="#601cff" /> <Gift color="#601cff" /> Register now
              and get one year of free subscription for start!
            </Heading>

            <Box
              as="footer"
              gap="small"
              direction="row"
              align="center"
              justify="center"
              pad={{ top: "medium", bottom: "small" }}
            >
              <Button
                label="Register now"
                onClick={() => history.push("/register")}
                primary
                margin={{ right: "large" }}
              />

              <Button
                label="Close"
                onClick={onClose}
                primary
                margin={{ right: "small" }}
              />
            </Box>
          </Box>
        </Layer>
      )}
    </>
  );
};

export default withRouter(RegisterPopup);
