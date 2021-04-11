import React from "react";
import { Box, Text, List, Paragraph } from "grommet";
import { aboutStyle, boxStyle } from "../../styles";

const list = [
  "Register on our site",
  "Copy link to your desired product",
  "Save your link in our search bar",
  "Get a notification from us when price drops",
  "Be happy with your new goods and saved money!",
];

export const AboutPage = () => (
  <Box fill align="center" justify="center" style={boxStyle} pad="small">
    <Box
      width="large"
      // padding="200px"
      border={{ color: "brand", size: "medium" }}
      style={{ boxShadow: "2px 2px 17px 10px magenta", minHeight: "400px" }}

    >
      <Box pad="small">
      <Text>
        Do you like saving money? Well, who doesn’t? Maybe you are a
        professional discount hunter? With us, your hunts will always be easier!
        Register on our website to receive a notification each time price of
        your dreamed product drops. Follow your favorite stores, sales and
        campaigns we prepare for you. Sounds cool? It is! All you have to do is
        follow few simple steps:
        <Paragraph>1. Register on our site</Paragraph>
        <Paragraph> 2. Copy link to your desired product</Paragraph>
        <Paragraph>3. Save your link in our search bar</Paragraph>
        <Paragraph> 4. Get a notification from us when price drops.</Paragraph>
        <Paragraph width="xlarge"> 5. Be happy with your new goods and saved money!</Paragraph>
      </Text>
      </Box>

    </Box>
  </Box>
);
