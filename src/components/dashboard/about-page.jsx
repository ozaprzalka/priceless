import React from "react";
import { Box, Text } from "grommet";
import { aboutStyle } from "../../styles";

export const AboutPage = () => (
  <Box>
    <div className="dashboard" style={aboutStyle}>
      <Text>
      Do you like saving money? Well, who doesn’t? Maybe you are a professional discount hunter? With us, your hunts will always be easier! Register on our website to receive a notification each time price of your dreamed product drops. Follow your favorite stores, sales and campaigns we prepare for you.
Sounds cool? It is! All you have to do is follow few simple steps:
        <ul style={{ margin: "30px" }}>
          <li style={{ margin: "30px" }}>
            1. Register on our site (register zrob pogrubione takie I podlinkowane)
          </li>
          <li style={{ margin: "30px" }}>
            2. Copy link to your desired product
          </li>
          <li style={{ margin: "30px" }}>3. Save your link in our search bar</li>
          <li style={{ margin: "30px" }}>
            4. Get a notification from us when price drops.
          </li>
          <li style={{ margin: "30px" }}>
            5. Be happy with your new goods and saved money!
          </li>
        </ul>
      </Text>
    </div>
  </Box>
);
