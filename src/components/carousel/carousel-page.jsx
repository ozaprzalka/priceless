import React, { useState, useEffect } from "react";
import {
  Grommet,
  Box,
  Text,
  Heading,
  Carousel,
  ResponsiveContext,
} from "grommet";
import { boxStyle, smallAccountStyle, customFocus } from "../../styles";

import { Gift, Shop } from "grommet-icons";

export const PartnersPage = () => {
  return (
    <>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <Grommet theme={customFocus}>
            <Box style={boxStyle}>
              <Box>
                <Heading
                  level="2"
                  textAlign="center"
                  margin={{ vertical: "medium", horizontal: "large" }}
                >
                  <Gift color="white" /> Our partners prepared many discount
                  codes for every user {""}
                </Heading>
                <Heading
                  level="3"
                  textAlign="center"
                  margin={{ vertical: "small", horizontal: "large" }}
                >
                  For sure you can find something for yourself {""}
                  <Shop color="white" />
                </Heading>
                <Heading
                  level="4"
                  textAlign="center"
                  margin={{ vertical: "small", horizontal: "large" }}
                >
                  Main partners: {""}
                </Heading>
              </Box>
              <Box height="70vh" align="center" pad="xlarge">
                  <Carousel fill initialChild={1} play={2800}>
                    <Box fill pad="xlarge" background="accent-1"></Box>
                    <Box fill pad="xlarge" background="accent-2"></Box>
                    <Box fill pad="xlarge" background="accent-3"></Box>
                  </Carousel>
                </Box>
            </Box>
            </Grommet>
          ) : (
            <Grommet theme={customFocus}>
              <Box
                fill
                align="center"
                justify="start"
                style={boxStyle}
                pad="xsmall"
              >
                <Box >
                  <Heading
                    level="2"
                    textAlign="center"
                    margin={{ vertical: "medium" }}
                    fill
                  >
                    <Gift size="large" color="white" /> Our partners prepared
                    many discount codes for every user {""}
                  </Heading>
                  <Heading
                    level="2"
                    textAlign="center"
                    margin={{ vertical: "small" }}
                    fill
                  >
                    For sure you can find something for yourself {""}
                    <Shop color="white" />
                  </Heading>
                  <Heading
                    level="1"
                    textAlign="center"
                    margin={{ vertical: "small", horizontal: "large", bottom: "medium"}}
                  >
                    Main partners: {""}
                  </Heading>
                </Box>
                <Box height="large" width="xlarge" align="center" border={{ color: "brand", size: "medium" }} style={{ boxShadow: "2px 2px 17px 10px magenta"}}>
                  <Carousel fill initialChild={1} play={2800}>
                    <Box fill pad="xlarge" background="accent-1"></Box>
                    <Box fill pad="xlarge" background="accent-2"></Box>
                    <Box fill pad="xlarge" background="accent-3"></Box>
                  </Carousel>
                </Box>
              </Box>
            </Grommet>
          )
        }
      </ResponsiveContext.Consumer>
    </>
  );
};
